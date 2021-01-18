function getOffset(el: any) {
  let _x = 0;
  let _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

function scrollToElement(anchorName: string) {
  const el = document.getElementsByName(anchorName)[0];

  window.scrollTo(0, Math.max(0, getOffset(el).top - 120));
}

export default scrollToElement;
