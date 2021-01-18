import baseFetch from 'universal-fetch';
import baseUrl from 'client/utils/baseUrl';
import fetch from './fetch';

jest.mock('universal-fetch');
jest.mock('client/utils/baseUrl', () => {
  return 'https://example.com';
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('fetch', () => {
  let mockBaseFetch: any;
  let defaultParams: any;

  beforeAll(() => {
    mockBaseFetch = baseFetch;

    defaultParams = {
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
      mode: 'same-origin',
    };
  });

  it('should call fetch with correct params', async () => {
    mockBaseFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await fetch('/example');

    expect(baseFetch).toHaveBeenCalledWith(`${baseUrl}/example`, defaultParams);
  });

  it('should call fetch with POST', async () => {
    defaultParams.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'csrf-token': undefined,
    };
    mockBaseFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    const data = {
      data: 'data',
    };

    await fetch('/example', 'POST', data);

    expect(baseFetch).toHaveBeenCalledWith(`${baseUrl}/example`, {
      ...defaultParams,
      method: 'POST',
      body: JSON.stringify(data),
    });
  });

  it('should call fetch with POST 2', async () => {
    defaultParams.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'csrf-token': undefined,
    };
    mockBaseFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    const data = {
      data: 'data',
    };

    await fetch('/example', 'POST', data, true);
  });

  it('should throw error when request fails', async () => {
    expect.assertions(1);

    mockBaseFetch.mockImplementation(() => {
      return Promise.reject(new Error('some error'));
    });

    try {
      await fetch('/example');
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
});
