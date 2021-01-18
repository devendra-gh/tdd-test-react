import config from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Permit Config Index', () => {
  it('should export a config object', () => {
    expect(config).toBeInstanceOf(Object);
  });
});
