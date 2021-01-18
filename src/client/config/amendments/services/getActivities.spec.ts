import fetch from 'client/services/fetch';
import { IVariables } from '@tamm/app-composer';
import getActivities from './getActivities';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('services/bpm', () => {
  let mockFetch: any;
  const input: IVariables = ['someVariable'];
  beforeAll(() => {
    mockFetch = fetch;
  });

  it('should call state with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          applicationStatus: 'test',
        },
      });
    });

    await getActivities(input);
  });

  it('should call state with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.reject(new Error('something bad happened'));
    });

    await getActivities(input);
  });
});
