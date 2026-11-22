import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { access, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';
import { startServer } from './serve.mjs';

const downloadDir = fileURLToPath(new URL('../../download/', import.meta.url));
const browserCandidates = [
  process.env.PORTFOLIO_BROWSER,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].filter(Boolean);
const views = [
  { mode: 'resume', file: '이력서.pdf', selector: '.resume-sheet', ready: '#resume-projects > *' },
  { mode: 'slides', file: '포트폴리오.pdf', selector: '.slide', ready: '#contact-links > a' },
];

async function findBrowser() {
  for (const path of browserCandidates) {
    if (await access(path).then(() => true, () => false)) return path;
  }
  throw new Error('Install Chrome or Edge, or set PORTFOLIO_BROWSER to its executable path.');
}

async function findPage(browser, profile) {
  const portFile = join(profile, 'DevToolsActivePort');
  for (let attempt = 0; attempt < 100; attempt++) {
    if (browser.exitCode !== null) throw new Error('The browser closed before PDF export.');
    try {
      const port = (await readFile(portFile, 'utf8')).split(/\r?\n/)[0];
      const response = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(1000) });
      const pages = await response.json();
      const page = pages.find(target => target.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      // Chromium may still be starting.
    }
    await delay(100);
  }
  throw new Error('The browser did not open a local DevTools page.');
}

async function connect(url) {
  const socket = new WebSocket(url);
  await once(socket, 'open', { signal: AbortSignal.timeout(5000) });
  const pending = new Map();
  let nextId = 0;
  socket.addEventListener('message', ({ data }) => {
    const message = JSON.parse(data);
    const request = pending.get(message.id);
    if (!request) return;
    pending.delete(message.id);
    clearTimeout(request.timer);
    if (message.error) request.reject(new Error(message.error.message));
    else request.resolve(message.result);
  });
  return {
    close: () => socket.close(),
    call(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = ++nextId;
        const timer = setTimeout(() => {
          pending.delete(id);
          reject(new Error(`Browser command timed out: ${method}`));
        }, 30000);
        pending.set(id, { resolve, reject, timer });
        socket.send(JSON.stringify({ id, method, params }));
      });
    },
  };
}

async function render(page, base, { mode, selector, ready }) {
  const url = new URL('index.html', base);
  url.searchParams.set('view', mode);
  const navigation = await page.call('Page.navigate', { url: url.href });
  if (navigation.errorText) throw new Error(navigation.errorText);
  for (let attempt = 0; attempt < 70; attempt++) {
    const { result } = await page.call('Runtime.evaluate', {
      expression: `location.href === ${JSON.stringify(url.href)} &&
        document.readyState === 'complete' &&
        document.body.dataset.route === ${JSON.stringify(mode)} &&
        document.styleSheets.length > 0 &&
        document.querySelector(${JSON.stringify(selector)}) !== null &&
        document.querySelector(${JSON.stringify(ready)}) !== null &&
        getComputedStyle(document.querySelector(${JSON.stringify(selector)})).boxShadow !== 'none' &&
        Array.from(document.images).every(img => img.complete && img.naturalWidth > 0)`,
      returnByValue: true,
    });
    if (result.value) {
      await page.call('Runtime.evaluate', { expression: 'document.fonts.ready.then(() => true)', awaitPromise: true });
      const pdf = await page.call('Page.printToPDF', {
        printBackground: true,
        displayHeaderFooter: false,
        preferCSSPageSize: true,
      });
      return Buffer.from(pdf.data, 'base64');
    }
    await delay(200);
  }
  throw new Error(`The ${mode} view did not load its content, stylesheet, or images.`);
}

const executable = await findBrowser();
const temp = resolve(tmpdir());
const profile = await mkdtemp(join(temp, 'mpqm-pdf-'));
const browser = spawn(executable, [
  '--headless', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=0', '--remote-debugging-address=127.0.0.1',
  `--user-data-dir=${profile}`, 'about:blank',
], { stdio: 'ignore', windowsHide: true });
const stopped = once(browser, 'close');

let page;
let server;
try {
  server = await startServer();
  const base = `http://127.0.0.1:${server.address().port}/`;
  page = await connect(await findPage(browser, profile));
  const files = [];
  for (const view of views) {
    const pdf = await render(page, base, view);
    if (pdf.subarray(0, 5).toString('ascii') !== '%PDF-') throw new Error(`Invalid PDF: ${view.file}`);
    files.push({ name: view.file, pdf });
  }
  await mkdir(downloadDir, { recursive: true });
  for (const { name, pdf } of files) {
    await writeFile(join(downloadDir, name), pdf);
    console.log(`carrer/download/${name}`);
  }
} finally {
  page?.close();
  server?.close();
  browser.kill();
  await stopped;
  if (dirname(resolve(profile)) === temp && basename(profile).startsWith('mpqm-pdf-')) {
    await rm(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
}
