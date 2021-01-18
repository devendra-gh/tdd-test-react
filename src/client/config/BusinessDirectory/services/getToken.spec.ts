import fetch from 'client/services/fetch';
import getToken from './getToken';

jest.mock('client/services/fetch');

describe('services/bpm', () => {
  let mockFetch: any;

  beforeAll(() => {
    mockFetch = fetch;
  });

  it('should call state with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          applicationStatus: 'test',
          applicationType: 'Licence',
        },
      });
    });

    await getToken();
  });

  it('should call state with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.reject(new Error('something bad happened'));
    });

    await getToken();
  });
});
