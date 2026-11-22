import { $, data, bindTexts, clone, cloneContents, renderList } from './view.js';

const number = index => String(index + 1).padStart(2, '0');
const fillLink = ($node, item) => $node.attr('href', item.url).text(item.label + ' ↗');
const labels = [['문제', 'WHY'], ['접근과 설계', 'HOW'], ['내가 구현한 범위', 'CONTRIBUTION'], ['결과와 근거', 'EVIDENCE']];

bindTexts();
renderList('#detail-focus', 'detail-focus-template', data.focus, ($node, item) => {
  $node.find('span').text(item.number);
  $node.find('strong').text(item.title);
  $node.find('p').text(item.detail);
});
renderList('#experience-list', 'experience-template', data.career.bullets, ($node, item, index) => {
  $node.find('span').text(number(index));
  $node.find('strong').text(item);
});
renderList('#work-index', 'work-index-template', data.caseStudies, ($node, project) => {
  $node.attr('href', '#' + encodeURIComponent(project.id));
  $node.find('span').text(project.number);
  $node.find('strong').text(project.name);
  $node.find('small').text(project.oneLine);
});
renderList('#case-list', 'case-template', data.caseStudies, ($node, project) => {
  $node.attr('id', project.id);
  $node.find('.case-count').text('CASE ' + project.number + ' ')
    .append(clone('case-type-template').text('/ ' + project.type));
  $node.find('.case-header h2').text(project.name);
  $node.find('.case-one-line').text(project.oneLine);
  $node.find('.case-period').text(project.period);
  $node.find('.case-role').text(project.roleLabel);

  const $visual = $node.find('.case-visual');
  if (project.visualType === 'system') {
    $visual.addClass('system-visual').append(cloneContents('case-system-template'));
  } else {
    $visual.addClass('diagram-visual').append(cloneContents('case-flow-template'));
    $visual.find('.workflow-caption').text('WORKFLOW / ' + project.name);
    renderList($visual.find('.diagram-flow'), 'diagram-step-template', project.diagram, ($step, text, index) => {
      $step.find('small').text(number(index));
      $step.find('strong').text(text);
    });
  }
  renderList($node.find('.case-narrative'), 'narrative-template',
    [project.problem, project.approach, project.role, project.outcome], ($section, text, index) => {
      $section.find('.case-label span').text(number(index));
      $section.find('h3').text(labels[index][0]);
      $section.find('small').text(labels[index][1]);
      $section.find('p').text(text);
    });
  const $deep = $node.find('.case-deep');
  if (project.deepDive?.length) {
    $deep.append(clone('case-deep-heading-template'));
    renderList($deep, 'deep-template', project.deepDive, ($section, item, index) => {
      $section.find('span').text(number(index));
      $section.find('h4').text(item.title);
      $section.find('dd').each((index, node) => $(node).text([item.problem, item.action, item.result][index]));
    });
  } else {
    $deep.remove();
  }
  $node.find('.case-stack').text(project.stack.join(' · '));
  $node.find('.case-evidence').text(project.evidence);
  const $links = $node.find('.case-links');
  if (project.links.length) renderList($links, 'detail-link-template', project.links, fillLink);
  else $links.remove();
});
renderList('#appendix-list', 'appendix-template', data.earlier, ($node, item, index) => {
  $node.find('span').text(number(index));
  $node.find('strong').text(item.name);
  $node.find('small').text(item.detail);
});
renderList('#detail-links', 'detail-link-template', data.links, fillLink);
