import fetch from 'client/services/fetch';
import fetchFees from './fees';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('category', () => {
  let mockFetch: any;

  beforeEach(() => {
    mockFetch = fetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('apis success - should return correct value', async () => {
    const response = {
      data: {
        fee: { fee: [{}] },
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    fetchFees({ location: '', legalForm: '', activityId: '' }).then(res => {
      expect(res).toStrictEqual([{}]);
    });
  });

  it('apis success - should return correct value with Object count == 0', async () => {
    const response = {
      data: {
        fee: [],
        count: 0,
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    fetchFees({ location: '', legalForm: '', activityId: '' }).then(res => {
      expect(res).toStrictEqual([]);
    });
  });

  it('apis success - should return correct value with Object count == 1', async () => {
    const response = {
      data: {
        fee: [],
        count: 1,
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    fetchFees({ location: '', legalForm: '', activityId: '' }).then(res => {
      expect(res).toStrictEqual([null]);
    });
  });

  it('apis success - data format wrong - should throw', async () => {
    const response = {
      data: {
        fee: { fee: [] },
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    const errorHandler = jest.fn();
    try {
      await fetchFees({ location: '', legalForm: '', activityId: '' });
    } catch (error) {
      errorHandler();
    }
    expect(errorHandler).toBeCalled();
  });

  it('apis fail - should throw', async () => {
    const response = {};
    mockFetch.mockImplementation(() => {
      return Promise.reject(response);
    });
    const errorHandler = jest.fn();
    try {
      await fetchFees({ location: '', legalForm: '', activityId: '' });
    } catch (error) {
      errorHandler();
    }
    expect(errorHandler).toBeCalled();
  });
});
