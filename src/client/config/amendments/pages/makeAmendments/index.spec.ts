import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments', () => {
  it('should export amendments', () => {
    expect(index).toBeInstanceOf(Object);
  });
});
