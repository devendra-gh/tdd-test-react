import fetch from 'client/services/fetch';
import fetchApplicationStatus from './fetchApplicationStatus';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ApplicationStatusLanding/functions', () => {
  let mockFetch: any;
  beforeEach(() => {
    mockFetch = fetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should properly call fetchApplicationStatus with success response', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: 'tesSuccess',
      });
    });
    const response = await fetchApplicationStatus('');
    expect(response.success).toBe(true);
  });

  it('should properly call fetchApplicationStatus with fail response', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: false,
        data: 'testFail',
      });
    });
    await expect(fetchApplicationStatus('')).rejects.toThrow();
  });
});
