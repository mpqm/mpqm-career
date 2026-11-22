import { $, data, bindTexts, renderList } from './view.js';

bindTexts();
renderList('#focus-list', 'focus-template', data.focus, ($node, item) => {
  $node.find('span').text(item.number);
  $node.find('h3').text(item.title);
  $node.find('p').text(item.detail);
});
renderList('#project-list', 'project-template', data.projects, ($node, project) => {
  $node.find('.project-top span').text(project.number + ' / ' + project.category);
  $node.find('.project-top a').attr({
    href: './index.html?view=portfolio#' + encodeURIComponent(project.id),
    'aria-label': project.name + ' 상세 보기',
  });
  $node.find('h3').text(project.name);
  $node.find('.project-summary').text(project.summary);
  $node.find('.project-contribution').text(project.contribution);
  renderList($node.find('.tags'), 'project-tag-template', project.tags, ($tag, text) => $tag.text(text));
});
renderList('#earlier-list', 'earlier-template', data.earlier, ($node, item) => {
  $node.find('h3').text(item.name);
  $node.find('p').text(item.detail);
});
renderList('#skill-list', 'skill-template', data.skills, ($node, item) => {
  $node.find('h3').text(item.title);
  $node.find('p').text(item.items.join(' · '));
});
renderList('#education-list', 'education-template', data.education, ($node, item) => {
  $node.find('time').text(item.date);
  $node.find('h3').text(item.title);
  $node.find('p').text(item.detail);
});
renderList('#certificate-list', 'home-certificate-template', data.certificates, ($node, text) => $node.text(text));
renderList('#footer-links', 'link-template', data.links, ($node, item) => {
  $node.attr('href', item.url).find('.link-label').text(item.label);
});
