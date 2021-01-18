import config from './config';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/config', () => {
  it('should export the config as object', () => {
    expect(config).toBeInstanceOf(Object);
  });
});
