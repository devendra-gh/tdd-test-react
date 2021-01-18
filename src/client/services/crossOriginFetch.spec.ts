import baseFetch from 'universal-fetch';
import fetch from './crossOriginFetch';

jest.mock('universal-fetch');

describe('fetch', () => {
  let mockBaseFetch: any;
  let defaultParams: any;

  beforeAll(() => {
    mockBaseFetch = baseFetch;

    defaultParams = {
      headers: {},
      method: 'GET',
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

    expect(baseFetch).toHaveBeenCalledWith(`/example`, defaultParams);
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

    expect(baseFetch).toHaveBeenCalledWith(`/example`, {
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
