import {
  reset,
  REQUIRE_SOP3,
  getAnalyticsData,
  getDateFromTimeStamp,
} from './common';

jest.mock('client/utils/baseUrl', () => 'base-url');
jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('common/reset', () => {
  const props = {
    actions: {
      instanceId: {
        update: jest.fn(),
      },
      form: {
        update: jest.fn(),
      },
      businessKey: {
        update: jest.fn(),
      },
      stepsStatus: {
        update: jest.fn(),
      },
      reset: {
        update: jest.fn(),
      },
      helperData: {
        update: jest.fn(),
      },
      formData: {
        update: jest.fn(),
      },
      newActivityApiData: {
        update: jest.fn(),
      },
    },
  };

  beforeEach(() => {});

  it('should call all necessary functions', () => {
    global.window = Object.create(window);
    const url = 'http://dummy.com';
    Object.defineProperty(window, 'location', {
      value: {
        href: url,
      },
    });
    reset(props);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('common/REQUIRE_SOP3', () => {
  beforeEach(() => {});

  it('should call', () => {
    expect(REQUIRE_SOP3).toBeInstanceOf(Object);
  });

  it('should call', () => {
    const props = {
      user: {
        Type: 'SOP3',
      },
    };
    REQUIRE_SOP3.test(props);
  });
});

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
