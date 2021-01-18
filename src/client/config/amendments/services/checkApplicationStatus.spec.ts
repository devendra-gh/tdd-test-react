import fetch from 'client/services/fetch';
import checkApplicationStatus from './checkApplicationStatus';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

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

    await checkApplicationStatus('someVariable');
  });

  it('should call state with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.reject(new Error('something bad happened'));
    });

    await checkApplicationStatus('someVariable');
  });
});
