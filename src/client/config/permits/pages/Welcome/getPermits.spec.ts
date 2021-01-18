import fetch from 'client/services/fetch';
import { get } from 'lodash';
import getPermits from './getPermits';

jest.mock('client/services/fetch');
jest.mock('lodash');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('getPermits', () => {
  let mockFetch: any;
  let mockLodash: any;

  beforeEach(() => {
    mockFetch = fetch;
    mockLodash = get;
  });

  it('success', async () => {
    const fakePayload = {
      success: true,
      data: {
        permitsByEmiratesId: [{ record: 1 }, { record: 2 }],
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });

    mockLodash.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });

    const data = await getPermits();
    expect(mockFetch).toBeCalledWith('/api/proxy/io/getPermits', 'GET', {});
    expect(data).toMatchObject([{ record: 1 }, { record: 2 }]);
  });
  it('failure', async () => {
    const fakePayload = {
      success: false,
      data: {},
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });

    mockLodash.mockImplementation(() => {
      return Promise.resolve({ data: {} });
    });

    const datatest = await getPermits();
    expect(mockFetch).toBeCalledWith('/api/proxy/io/getPermits', 'GET', {});
    expect(datatest).toMatchObject([]);
  });
});
