import { data, clone, cloneContents, renderList } from './view.js';

const number = index => String(index + 1).padStart(2, '0');
const fillLink = ($node, item) => $node.attr('href', item.url).text(item.label + ' ↗');
renderList('#detail-focus', 'detail-focus-template', data.focus);
renderList('#experience-list', 'experience-template', data.career.bullets, ($node, _, index) => {
  $node.find('span').text(number(index));
});
renderList('#work-index', 'work-index-template', data.caseStudies, ($node, project) => {
  $node.attr('href', '#' + encodeURIComponent(project.id));
});
renderList('#case-list', 'case-template', data.caseStudies, ($node, project) => {
  $node.attr('id', project.id);
  $node.find('.case-count').text('CASE ' + project.number + ' ')
    .append(clone('case-type-template').text('/ ' + project.type));

  const $visual = $node.find('.case-visual');
  if (project.visualType === 'system') {
    $visual.addClass('system-visual').append(cloneContents('case-system-template'));
  } else {
    $visual.addClass('diagram-visual').append(cloneContents('case-flow-template'));
    $visual.find('.workflow-caption').text('WORKFLOW / ' + project.name);
    renderList($visual.find('.diagram-flow'), 'diagram-step-template', project.diagram, ($step, _, index) => {
      $step.find('small').text(number(index));
    });
  }
  const $deep = $node.find('.case-deep');
  if (project.deepDive?.length) {
    $deep.append(clone('case-deep-heading-template'));
    renderList($deep, 'deep-template', project.deepDive, ($section, _, index) => {
      $section.find('span').text(number(index));
    });
  } else {
    $deep.remove();
  }
  $node.find('.case-stack').text(project.stack.join(' · '));
  const $links = $node.find('.case-links');
  if (project.links.length) renderList($links, 'detail-link-template', project.links, fillLink);
  else $links.remove();
});
renderList('#appendix-list', 'appendix-template', data.earlier, ($node, _, index) => {
  $node.find('span').text(number(index));
});
renderList('#detail-links', 'detail-link-template', data.links, fillLink);
