import { $, data, bindTexts, renderList } from './view.js';

bindTexts();
renderList('#resume-contact', 'resume-contact-template', data.links, ($node, item) => {
  $node.attr('href', item.url).text(item.text);
});
renderList('#resume-bullets', 'resume-bullet-template', data.career.bullets, ($node, text) => $node.text(text));
renderList('#resume-projects', 'resume-project-template', data.projects.slice(0, 4), ($node, item) => {
  $node.find('span').text(item.category);
  $node.find('h3').text(item.name);
  $node.find('p').text(item.summary);
  $node.find('small').text(item.contribution);
});
renderList('#resume-skills', 'resume-skill-template', data.skills, ($node, item) => {
  $node.find('strong').text(item.title);
  $node.find('span').text(item.items.join(' · '));
});
renderList('#resume-education', 'resume-education-template', data.education, ($node, item) => {
  $node.find('time').text(item.date);
  $node.find('strong').text(item.title);
  $node.find('span').text(item.detail);
});
renderList('#resume-certificates', 'resume-certificate-template', data.certificates, ($node, text) => $node.text(text));
$('#print-button').on('click', () => window.print());
