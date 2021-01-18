import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('login/index', () => {
  it('index should be an array', () => {
    expect(index).toBeInstanceOf(Array);
  });
});
