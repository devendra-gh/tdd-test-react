function getOffset(el: any) {
  let xx = 0;
  let yy = 0;
  // eslint-disable-next-line no-restricted-globals
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    xx += el.offsetLeft - el.scrollLeft;
    yy += el.offsetTop - el.scrollTop;
    // eslint-disable-next-line no-param-reassign
    el = el.offsetParent;
  }
  return { top: yy, left: xx };
}

function scrollToElement(anchorName: string, elementType: string) {
  const el =
    elementType === 'name'
      ? document.getElementsByName(anchorName)[0]
      : document.getElementById(anchorName);

  // window.scrollTo(0, Math.max(0, getOffset(el).top - 120));
  window.scrollTo({
    top: Math.max(0, getOffset(el).top - 80),
    behavior: 'smooth',
  });
}

export default scrollToElement;
