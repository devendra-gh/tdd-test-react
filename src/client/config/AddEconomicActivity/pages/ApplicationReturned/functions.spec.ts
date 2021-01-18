import fetch from 'client/services/fetch';
import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ApplicationReturned/functions', () => {
  const props = {
    submitLicence: {
      data: {
        owner: {},
      },
    },
    actions: {
      fileUploadData: {
        update: jest.fn(),
      },
    },
  };
  let mockFetch: any;
  beforeEach(() => {
    mockFetch = fetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should properly call onSubmit', async () => {
    const mockApi = jest.fn(() => {
      return Promise.resolve({});
    });
    mockFetch.mockImplementation(mockApi);
    await functions.onSubmit(props);
    expect(mockApi).toHaveBeenCalled();
  });

  it('should properly call onSubmit with', async () => {
    const mockApi = jest.fn(() => {
      return Promise.resolve({});
    });
    mockFetch.mockImplementation(mockApi);
    await functions.onSubmit(props);
    expect(mockApi).toHaveBeenCalled();
  });
});
