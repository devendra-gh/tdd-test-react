import { getAnalyticsData } from './common';

beforeEach(() => {});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('common/getAnalyticsData', () => {
  beforeEach(() => {});

  it('should call getAnalyticsData', () => {
    expect(getAnalyticsData).toBeInstanceOf(Function);
  });

  it('should call', () => {
    getAnalyticsData('ABC');
  });
});
