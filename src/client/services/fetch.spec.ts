import baseFetch from 'universal-fetch';
import fetch from './fetch';
import baseUrl from '../utils/baseUrl';

jest.mock('universal-fetch');
jest.mock('../utils/baseUrl', () => {
  return 'https://example.com';
});

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
        'X-Requested-With': 'XMLHttpRequest',
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
