import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const site = fileURLToPath(new URL('../../', import.meta.url));
const types = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
]);

export async function startServer(port = 0) {
  const server = createServer(async (req, res) => {
    if (!['GET', 'HEAD'].includes(req.method)) {
      res.writeHead(405, { Allow: 'GET, HEAD' }).end();
      return;
    }
    try {
      const url = new URL(req.url, 'http://localhost');
      const path = url.pathname === '/' ? '/index.html' : decodeURIComponent(url.pathname);
      const target = resolve(site, '.' + path);
      const type = types.get(extname(target));
      const root = resolve(site);
      if (!target.startsWith(root + sep) || !type) {
        res.writeHead(404).end();
        return;
      }
      const data = await readFile(target);
      res.writeHead(200, { 'Content-Type': type, 'Content-Length': data.length });
      res.end(req.method === 'HEAD' ? undefined : data);
    } catch (error) {
      res.writeHead(error instanceof URIError ? 400 : 404).end();
    }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', resolve);
  });
  return server;
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const server = await startServer(8000);
  console.log(`http://127.0.0.1:${server.address().port}/`);
}
