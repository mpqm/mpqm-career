import { $, data, bindTexts, clone, cloneContents, renderList } from './view.js';

for (const target of ['#slide-links', '#contact-links']) {
  renderList(target, 'slide-link-template', data.links, ($node, item) => {
    $node.attr('href', item.url).text(item.label + ' ↗');
  });
}
renderList('#slide-focus', 'slide-focus-template', data.focus);
$('#slide-career-meta').text(data.career.company + ' · ' + data.career.period);
renderList('#slide-career-bullets', 'slide-bullet-template', data.career.bullets);
renderList('#slide-skills', 'slide-skill-template', data.skills, ($node, item) => {
  $node.find('p').text(item.items.join(' · '));
});
const $educationEnd = $('#slide-certificates').parent();
for (const item of data.education) {
  const $node = clone('slide-education-template');
  bindTexts($node, item);
  $educationEnd.before($node);
}
renderList('#slide-certificates', 'slide-certificate-template', data.certificates);

const $background = $('#background-slide');
for (const project of data.caseStudies) {
  const $intro = clone('project-intro-template');
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
  renderList($intro.find('.slide-tags'), 'slide-tag-template', project.stack);
  $background.before($intro);

  const $detail = clone('project-detail-template');
  $detail.find('.eyebrow').text('PROJECT ' + project.number + ' / CASE STUDY');
  $detail.find('h2').text(project.name + ' · 구현 이야기');
  bindTexts($detail, project);
  $background.before($detail);

  if (project.deepDive?.length) {
    const $deep = clone('project-deep-template');
    $deep.find('.eyebrow').text('PROJECT ' + project.number + ' / PROBLEM SOLVING');
    $deep.find('h2').text(project.name + ' · 문제 해결');
    renderList($deep.find('.slide-deep-grid'), 'deep-item-template', project.deepDive, ($node, _, index) => {
      $node.find('small').text(String(index + 1).padStart(2, '0'));
    });
    $background.before($deep);
  }
}
$('#slides > .slide').each((index, slide) => {
  const page = index + 1;
  $(slide).attr('aria-label', page + '번 슬라이드')
    .find('.slide-head > span:last-child').text(String(page).padStart(2, '0'));
});
$('#print-button').on('click', () => window.print());
