import { getAnalyticsData } from './utils';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/analytics', () => {
  it('tra', () => {
    getAnalyticsData('tra');
  });
  it('sla', () => {
    getAnalyticsData('sla', {}, {});
  });
  it('sla', () => {
    getAnalyticsData('sla', {});
  });
});
