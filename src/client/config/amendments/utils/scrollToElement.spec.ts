import scrollToElement from './scrollToElement';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/ scrollToEleemnt', () => {
  it('should properly call scrollToEleemnt', () => {
    window.scrollTo = jest.fn();
    scrollToElement('input', 'name');
  });
});
