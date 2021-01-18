import index from './commonIndex';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/pages/index', () => {
  it('should export all pages', () => {
    expect(index).toBeInstanceOf(Object);
  });
});
