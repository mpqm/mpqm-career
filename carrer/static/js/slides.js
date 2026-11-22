import { $, data, bindTexts, clone, cloneContents, renderList } from './view.js';

bindTexts();
for (const target of ['#slide-links', '#contact-links']) {
  renderList(target, 'slide-link-template', data.links, ($node, item) => {
    $node.attr('href', item.url).text(item.label + ' ↗');
  });
}
renderList('#slide-focus', 'slide-focus-template', data.focus, ($node, item) => {
  $node.find('span').text(item.number);
  $node.find('strong').text(item.title);
  $node.find('p').text(item.detail);
});
$('#slide-career-meta').text(data.career.company + ' · ' + data.career.period);
renderList('#slide-career-bullets', 'slide-bullet-template', data.career.bullets, ($node, text) => $node.text(text));
renderList('#slide-skills', 'slide-skill-template', data.skills, ($node, item) => {
  $node.find('h3').text(item.title);
  $node.find('p').text(item.items.join(' · '));
});
const $educationEnd = $('#slide-background').children().last();
for (const item of data.education) {
  const $node = clone('slide-education-template');
  $node.find('time').text(item.date);
  $node.find('h3').text(item.title);
  $node.find('p').text(item.detail);
  $educationEnd.before($node);
}
renderList('#slide-certificates', 'slide-certificate-template', data.certificates, ($node, text) => $node.text(text));

let page = 5;
const $background = $('#background-slide');
function setPage($slide) {
  $slide.attr('aria-label', page + '번 슬라이드').find('.slide-number').text(String(page++).padStart(2, '0'));
}
for (const project of data.caseStudies) {
  const $intro = clone('project-intro-template');
  setPage($intro);
  $intro.find('.eyebrow').text('PROJECT ' + project.number + ' / ' + project.type);
  $intro.find('h2').text(project.name);
  $intro.find('.slide-summary').text(project.oneLine);
  const $system = $intro.find('.slide-system');
  if (project.visualType === 'system') {
    $system.append(cloneContents('slide-system-template'));
  } else {
    project.diagram.forEach((step, index) => {
      const $parts = cloneContents('slide-flow-step-template');
      $parts.filter('strong').text(step);
      $system.append(index === project.diagram.length - 1 ? $parts.filter('strong') : $parts);
    });
  }
  renderList($intro.find('.slide-tags'), 'slide-tag-template', project.stack, ($node, text) => $node.text(text));
  $background.before($intro);

  const $detail = clone('project-detail-template');
  setPage($detail);
  $detail.find('.eyebrow').text('PROJECT ' + project.number + ' / CASE STUDY');
  $detail.find('h2').text(project.name + ' · 구현 이야기');
  const narrative = [project.problem, project.approach, project.role, project.outcome];
  $detail.find('.slide-case-grid > div > p').each((index, node) => $(node).text(narrative[index]));
  $background.before($detail);

  if (project.deepDive?.length) {
    const $deep = clone('project-deep-template');
    setPage($deep);
    $deep.find('.eyebrow').text('PROJECT ' + project.number + ' / PROBLEM SOLVING');
    $deep.find('h2').text(project.name + ' · 문제 해결');
    renderList($deep.find('.slide-deep-grid'), 'deep-item-template', project.deepDive, ($node, item, index) => {
      $node.find('small').text(String(index + 1).padStart(2, '0'));
      $node.find('h3').text(item.title);
      $node.find('.deep-problem').text(item.problem);
      $node.find('strong').text(item.action);
      $node.find('.deep-result').text(item.result);
    });
    $background.before($deep);
  }
}
setPage($background);
setPage($('#contact-slide'));
$('#print-button').on('click', () => window.print());
