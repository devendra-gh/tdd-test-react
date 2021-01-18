import scrollToElement from './scrollToElement';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Client/config/utilis/scrollToElement', () => {
  it('should properly call scrollToElement', () => {
    window.scrollTo = jest.fn();
    expect(scrollToElement('test')).toBe(undefined);
    expect(scrollToElement('')).toBe(undefined);
  });
});
