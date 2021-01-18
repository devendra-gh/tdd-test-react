import fetch from 'client/services/fetch';
import { cleanup } from '@testing-library/react';
import applicationFees from './applicationFees';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('payApplicationFees/services', () => {
  let mockFetch: any;
  beforeEach(() => {
    mockFetch = fetch;
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          businessKey: 'businessKey',
          id: 'id',
        },
      });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('should call with undefined', () => {
    const applicationNumber = undefined;
    const data = applicationFees(applicationNumber);
    expect(data).toBeInstanceOf(Object);
  });

  it('should call with applicationNumber', () => {
    const applicationNumber = '12345';
    const data = applicationFees(applicationNumber);
    expect(data).toBeInstanceOf(Object);
  });
});
