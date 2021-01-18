import fetch from 'client/services/fetch';
import { cleanup } from '@testing-library/react';
import checkApplicationStatus from './checkApplicationStatus';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('payApplicationFees/services/checkApplicationStatus', () => {
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
    const data = checkApplicationStatus(applicationNumber);
    expect(data).toBeInstanceOf(Object);
  });

  it('should call with applicationNumber', () => {
    const applicationNumber = '12345';
    const data = checkApplicationStatus(applicationNumber);
    expect(data).toBeInstanceOf(Object);
  });
});
