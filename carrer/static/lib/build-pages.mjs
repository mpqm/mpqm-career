import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root=fileURLToPath(new URL('../../',import.meta.url));
const templates=join(root,'templates');
const output=join(root,'portfolio-v2');
await mkdir(output,{recursive:true});
const fragment=async name=>readFile(join(templates,name+'.html'),'utf8');
const page=(title,description,body,scripts,{prefix='',bodyClass='',extraHead=''}={})=>`<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${description}">
  <title>${title}</title>
  <link rel="stylesheet" href="${prefix}static/css/style.css">
  ${extraHead}
</head>
<body${bodyClass?` class="${bodyClass}"`:''}>
${body}
  <script src="${prefix}static/js/content.js"></script>
  ${scripts.map(name=>`<script src="${prefix}static/js/${name}.js"></script>`).join('\n  ')}
</body>
</html>
`;
const home=await fragment('home');
const homeFor=(prefix)=>{
  let html=home.replaceAll('./static/image/',prefix+'static/image/');
  const route=prefix==='../'?'./':'./portfolio-v2/';
  html=html.replaceAll('./index.html?view=portfolio#',route+'portfolio.html#');
  html=html.replaceAll('./index.html?view=portfolio',route+'portfolio.html');
  html=html.replaceAll('./index.html?view=resume',route+'resume.html');
  html=html.replaceAll('./index.html?view=slides',route+'slides.html');
  return html;
};
await writeFile(join(root,'index.html'),page('박종성 · 풀스택 개발자','박종성 풀스택 개발자 이력서와 포트폴리오',homeFor('./'),['home']));
await writeFile(join(output,'index.html'),page('박종성 · 풀스택 개발자','박종성 풀스택 개발자 홈페이지',homeFor('../'),['home'],{prefix:'../'}));
const resume=(await fragment('resume')).replaceAll('./index.html','./index.html');
await writeFile(join(output,'resume.html'),page('박종성 · 이력서','박종성 풀스택 개발자 간단 이력서',resume,['resume'],{prefix:'../',bodyClass:'resume-mode'}));
let portfolio=await fragment('portfolio');
portfolio=portfolio.replaceAll('./static/image/','../static/image/')
  .replaceAll('./index.html?view=resume','./resume.html')
  .replaceAll('./index.html?view=slides','./slides.html')
  .replaceAll('./index.html','./index.html');
await writeFile(join(output,'portfolio.html'),page('박종성 · 상세 포트폴리오','박종성 풀스택 개발자 상세 포트폴리오',portfolio,['portfolio'],{prefix:'../',bodyClass:'detail-mode'}));
const slides=(await fragment('slides')).replaceAll('./static/image/','../static/image/');
await writeFile(join(output,'slides.html'),page('박종성 · 포트폴리오 슬라이드','박종성 풀스택 개발자 발표용 포트폴리오',slides,['slides'],{prefix:'../',bodyClass:'slides-mode'}));
const archive=await fragment('archive');
const archivePage=`<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>2024년 이력서 원본 · 박종성</title><script src="https://cdn.tailwindcss.com"></script></head><body>${archive}</body></html>`;
await writeFile(join(root,'archive.html'),archivePage);
console.log('Generated homepage, resume, portfolio, slides, and archive HTML.');

