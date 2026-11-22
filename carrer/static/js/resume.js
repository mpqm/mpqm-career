import { $, data, renderList } from './view.js';

renderList('#resume-contact', 'resume-contact-template', data.links, ($node, item) => {
  $node.attr('href', item.url);
});
renderList('#resume-bullets', 'resume-bullet-template', data.career.bullets);
renderList('#resume-projects', 'resume-project-template', data.projects.slice(0, 4));
renderList('#resume-skills', 'resume-skill-template', data.skills, ($node, item) => {
  $node.find('span').text(item.items.join(' · '));
});
renderList('#resume-education', 'resume-education-template', data.education);
renderList('#resume-certificates', 'resume-certificate-template', data.certificates);
$('#print-button').on('click', () => window.print());
