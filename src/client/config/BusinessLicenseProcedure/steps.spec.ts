import { noRefCheck } from './steps';

jest.mock('./templates', () => {});
jest.mock('./state', () => 'fetchState');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('index', () => {
  it('should cover', () => {
    expect(noRefCheck()).toBe(undefined);
  });
});
