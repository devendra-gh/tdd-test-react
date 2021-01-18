import scrollToElement from './permitsScrollToElement';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/ permitsScrollToEleemnt', () => {
  it('should properly call scrollToEleemnt', () => {
    window.scrollTo = jest.fn();

    scrollToElement('input', 'name');
    scrollToElement('input', 'test');
  });
});
