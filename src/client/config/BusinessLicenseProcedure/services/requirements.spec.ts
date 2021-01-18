import fetch from 'client/services/fetch';
import fetchRequirements from './requirements';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('legalForm', () => {
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
        requirements: { requirement: [{}] },
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    fetchRequirements({
      location: '',
      legalForm: '',
      activityId: '',
    }).then(res => {
      expect(res).toStrictEqual([{}]);
    });
  });

  it('apis success - should return correct value count == 0', async () => {
    const response = {
      data: {
        requirements: [],
        count: 0,
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    fetchRequirements({
      location: '',
      legalForm: '',
      activityId: '',
    }).then(res => {
      expect(res).toStrictEqual([]);
    });
  });

  it('apis success - should return correct value count == 1', async () => {
    const response = {
      data: {
        requirements: [],
        count: 1,
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    fetchRequirements({
      location: '',
      legalForm: '',
      activityId: '',
    }).then(res => {
      expect(res).toStrictEqual([null]);
    });
  });

  it('apis success - insufficient data - should throw', async () => {
    const response = {
      data: {
        requirements: { requirement: [] },
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    const errorHandler = jest.fn();
    try {
      await fetchRequirements({
        location: '',
        legalForm: '',
        activityId: '',
      });
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
      await fetchRequirements({
        location: '',
        legalForm: '',
        activityId: '',
      });
    } catch (error) {
      errorHandler();
    }
    expect(errorHandler).toBeCalled();
  });
});
