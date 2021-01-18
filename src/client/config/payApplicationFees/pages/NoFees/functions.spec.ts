/* eslint-disable no-labels */
import fetch from 'client/services/fetch';
import { cleanup } from '@testing-library/react';
import { Common } from 'client/config/payApplicationFees/utils';
import functions from './functions';

jest.mock('client/services/fetch');
jest.mock('client/config/payApplicationFees/utils');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('NoFeesPage/functions', () => {
  const props = {
    businessKey: 'test',
    actions: {
      form: {
        reset: jest.fn(),
      },
    },
    history: {
      push: jest.fn(),
    },
  };

  let mockFetch: any;
  let commonReset: any;
  beforeEach(() => {
    mockFetch = fetch;
    commonReset = Common.reset;
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('should call onClick', async () => {
    commonReset.mockImplementation(jest.fn());

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          businessKey: 'businessKey',
          id: 'id',
        },
      });
    });
    expect(functions.onClick(props)).toBeInstanceOf(Object);
  });

  it('should call onTryAnother', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          businessKey: 'businessKey',
          id: 'id',
        },
      });
    });
    expect(functions.onTryAnother(props)).toBeInstanceOf(Object);
  });
});
