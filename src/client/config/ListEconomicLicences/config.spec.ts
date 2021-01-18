import config from './config';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('payApplicationFees/config', () => {
  it('should export config for the service', () => {
    expect(config).toBeInstanceOf(Object);
  });
});
