import fetch from 'client/services/fetch';
import fetchNewActivityService from './fetchNewActivityService';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('FetchNewActivityService', () => {
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
    const formData = {
      arabicActivityName: 'test',
      englishActivityName: 'test',
      arabicActivityDescription: 'test',
      englishActivityDescription: 'test',
      name: 'Mahmoud Wisam Mo',
      email: 'persona.adoss1@gmail.com',
      mobileNumber: '971589004745',
    };
    const response = await fetchNewActivityService(formData);
    expect(response.success).toBe(true);
  });

  it('should properly call fetchApplicationStatus with fail response', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.reject();
    });
    const formData = {};
    await expect(fetchNewActivityService(formData));
  });
});
