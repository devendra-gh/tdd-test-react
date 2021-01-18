import common, { getAnalyticsData, getDateFromTimeStamp } from './common';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('payApplicationFees/common', () => {
  it('should initialized reset call', () => {
    expect(common.reset).toBeInstanceOf(Object);
  });

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

  beforeEach(() => {});
});

it('should call reset with redirectUrl = null', () => {
  const props = {
    actions: {
      form: {
        reset: jest.fn(),
      },
      instanceId: {
        reset: jest.fn(),
      },
      businessKey: {
        reset: jest.fn(),
      },
      stepsStatus: {
        reset: jest.fn(),
      },
      showLoader: {
        reset: jest.fn(),
      },
    },
  };
  const redirectUrl = undefined;

  expect(common.reset(props, redirectUrl)).toBe(undefined);
});

it('should call reset with redirectUrl value', () => {
  const props = {
    actions: {
      form: {
        reset: jest.fn(),
      },
      instanceId: {
        reset: jest.fn(),
      },
      businessKey: {
        reset: jest.fn(),
      },
      stepsStatus: {
        reset: jest.fn(),
      },
      showLoader: {
        reset: jest.fn(),
      },
    },
  };
  const redirectUrl = '/';

  expect(common.reset(props, redirectUrl)).toBe(undefined);
});
