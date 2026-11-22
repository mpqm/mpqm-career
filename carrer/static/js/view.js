export const $ = window.jQuery;
export const data = window.portfolioContent;

export function clone(templateId) {
  return $(document.getElementById(templateId).content.firstElementChild).clone();
}

export function cloneContents(templateId) {
  return $(document.getElementById(templateId).content).contents().clone();
}

export function renderList(target, template, items, fill) {
  const $target = $(target);
  items.forEach((item, index) => {
    const $node = clone(template);
    fill($node, item, index);
    $target.append($node);
  });
}

export function bindTexts(target = $('[data-text]')) {
  $(target).each((_, node) => {
    const $node = $(node);
    const value = $node.attr('data-text').split('.').reduce((value, key) => value?.[key], data);
    $node.text(value ?? '');
  });
}
