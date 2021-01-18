import fetch from 'client/services/fetch';
import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Home/functions', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
    submitLicence: {
      data: {
        owner: {},
      },
    },
    actions: {
      form: {
        update: jest.fn(),
      },
      instanceId: {
        update: jest.fn(),
      },
      businessKey: {
        update: jest.fn(),
      },
    },
  };
  let mockFetch: any;
  beforeEach(() => {
    mockFetch = fetch;
    // mockBpm = bpm;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should properly call onSubmit with success response', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          businessKey: 'businessKey',
          id: 'id',
        },
      });
    });
    const result = await functions.onSubmit(props);
    expect(result).toBeUndefined();
  });
});
