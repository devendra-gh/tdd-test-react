import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Pages/index', () => {
  it('should export dedReturned', () => {
    expect(index).toBeInstanceOf(Object);
  });
});
