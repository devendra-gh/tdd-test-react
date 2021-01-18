import { getAnalyticsData, getDateFromTimeStamp } from './common';

beforeEach(() => {});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('investorProtection/utils/common', () => {
  beforeEach(() => {});

  it('should call getAnalyticsData', () => {
    expect(getAnalyticsData).toBeInstanceOf(Function);
  });

  it('should call', () => {
    getAnalyticsData('ABC');
  });

  it('should call function for timestamp', () => {
    const values = getDateFromTimeStamp('27/02/2019', 'Do MMM YYYY', [
      'DD MM YYYY',
    ]);
    expect(values).toEqual('27th Feb 2019');
  });
  it('should call function for timestamp', () => {
    const values = getDateFromTimeStamp('02/27/2019', 'Do MMM YYYY', [
      'DD MM YYYY',
    ]);
    expect(values).toEqual('27th Feb 2019');
  });
  it('should call function for timestamp', () => {
    getDateFromTimeStamp();
  });
});
