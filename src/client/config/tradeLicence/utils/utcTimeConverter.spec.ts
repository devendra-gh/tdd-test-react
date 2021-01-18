import { currentUtcDate, convertUtcDate } from './utcTimeConverter';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/currentUtcDate', () => {
  it('currentUtcDate', () => {
    expect(currentUtcDate()).toBeDefined();
  });

  it('convertUtcDate', () => {
    const date = 'Fri May 08 2020 18:05:20 GMT+0400 (Gulf Standard Time)';
    // @ts-ignore
    expect(convertUtcDate(date)).toBeDefined();
  });
});
