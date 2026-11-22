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
    bindTexts($node, item);
    fill?.($node, item, index);
    $target.append($node);
  });
}

export function bindTexts(scope = document, source = data) {
  $(scope).find('[data-text]').addBack('[data-text]').each((_, node) => {
    const $node = $(node);
    const field = $node.attr('data-text');
    const value = field === '.' ? source : field.split('.').reduce((value, key) => value?.[key], source);
    $node.text(value ?? '');
  });
}
