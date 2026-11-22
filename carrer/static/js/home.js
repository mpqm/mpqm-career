import { data, renderList } from './view.js';

renderList('#focus-list', 'focus-template', data.focus);
renderList('#project-list', 'project-template', data.projects, ($node, project) => {
  $node.find('.project-top span').text(project.number + ' / ' + project.category);
  $node.find('.project-top a').attr({
    href: './index.html?view=portfolio#' + encodeURIComponent(project.id),
    'aria-label': project.name + ' 상세 보기',
  });
  renderList($node.find('.tags'), 'project-tag-template', project.tags);
});
renderList('#earlier-list', 'earlier-template', data.earlier);
renderList('#skill-list', 'skill-template', data.skills, ($node, item) => {
  $node.find('p').text(item.items.join(' · '));
});
renderList('#education-list', 'education-template', data.education);
renderList('#certificate-list', 'home-certificate-template', data.certificates);
renderList('#footer-links', 'link-template', data.links, ($node, item) => {
  $node.attr('href', item.url);
});
