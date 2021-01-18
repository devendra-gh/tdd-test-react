import { ANALYTICS_INFO } from './constants';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('consumer-good-prices/constants', () => {
  it('should be object', () => {
    expect(ANALYTICS_INFO).toBeInstanceOf(Object);
  });
});
