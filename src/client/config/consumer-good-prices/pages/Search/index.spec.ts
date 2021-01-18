import index from './index';

jest.mock('client/config/consumer-good-prices/config');
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('function', () => {
  it('should be an array', () => {
    expect(index.length).toBe(1);
  });
});
