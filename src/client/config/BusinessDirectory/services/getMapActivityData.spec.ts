import fetch from 'client/services/crossOriginFetch';
import getMapActivityData from './getMapActivityData';

jest.mock('client/services/crossOriginFetch');

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

    await getMapActivityData({ activities: 'someVariable', token: 'token' });
  });

  it('should call state with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.reject(new Error('something bad happened'));
    });

    await getMapActivityData({ activities: 'someVariable', token: 'token' });
  });
});
