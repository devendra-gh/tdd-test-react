import { cleanup } from '@testing-library/react';
import {
  reset,
  formatTelephoneNumber,
  REQUIRE_SOP3,
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
    expect(props.actions.businessKey.update).toBeCalled();
    expect(props.actions.form.update).toBeCalled();
    expect(props.actions.instanceId.update).toBeCalled();
    expect(props.actions.stepsStatus.update).toBeCalled();
    expect(window.location.href).toBe('http://dummy.com');
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('common/formatTelephoneNumber', () => {
  beforeEach(() => {});
  afterEach(cleanup);

  it('should string empty', () => {
    const number = undefined;
    formatTelephoneNumber(number);
    expect(number).toBeUndefined();
  });

  it('should string empty', () => {
    const number = '0521111111';
    formatTelephoneNumber(number);
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
