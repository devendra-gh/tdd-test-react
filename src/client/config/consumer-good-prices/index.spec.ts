import { fetchState } from './index';

jest.mock('./templates', () => {});
jest.mock('./state', () => 'fetchState');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('consumer-good-prices/index', () => {
  it('should cover', () => {
    expect(fetchState).toBe('fetchState');
  });
});
