import config from './commonConfig';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config', () => {
  it('should export dedReturned', () => {
    expect(config).toBeInstanceOf(Object);
  });
});
