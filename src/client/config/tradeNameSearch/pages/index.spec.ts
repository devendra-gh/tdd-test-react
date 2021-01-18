import index from './index';

jest.mock('./Home', () => '');
jest.mock('./Search', () => '');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('TradeNameSearch/pages/index', () => {
  it('should export dedReturned', () => {
    expect(index).toBeInstanceOf(Object);
  });
});
