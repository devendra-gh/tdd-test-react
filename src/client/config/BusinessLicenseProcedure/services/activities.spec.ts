import fetch from 'client/services/fetch';
import fetchActivities from './activities';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('activities', () => {
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
        businessActivities: { businessActivities: [{ activityCode: '1' }] },
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    fetchActivities({
      category: undefined,
      subCategory: undefined,
      searchText: undefined,
    }).then(res => {
      expect(res).toStrictEqual([{ activityCode: '1' }]);
    });
  });

  it('apis success - should return correct value with Object', async () => {
    const response = {
      data: {
        businessActivities: { businessActivities: { activityCode: '1' } },
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    fetchActivities({
      category: undefined,
      subCategory: undefined,
      searchText: undefined,
    }).then(res => {
      expect(res).toStrictEqual([{ activityCode: '1' }]);
    });
  });

  it('apis success - should return correct value, when 0 activity', async () => {
    const response = {
      data: {
        count: 0,
        businessActivities: { businessActivities: [] },
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    fetchActivities({
      category: undefined,
      subCategory: undefined,
      searchText: undefined,
    }).then(res => {
      expect(res).toStrictEqual([]);
    });
  });

  it('apis success - should throw, when 0 activity, bad data', async () => {
    const response = {
      data: {
        businessActivities: { businessActivities: [] },
      },
    };
    const errorHandler = jest.fn();
    mockFetch.mockImplementation(() => {
      return Promise.resolve(response);
    });
    try {
      await fetchActivities({
        category: undefined,
        subCategory: undefined,
        searchText: undefined,
      });
    } catch (error) {
      errorHandler();
    }
    expect(errorHandler).toBeCalled();
  });

  it('apis fail - should throw', async () => {
    const response = {
      data: {
        businessActivities: { businessActivities: [] },
      },
    };
    const errorHandler = jest.fn();
    mockFetch.mockImplementation(() => {
      return Promise.reject(response);
    });
    try {
      await fetchActivities({
        category: undefined,
        subCategory: undefined,
        searchText: undefined,
      });
    } catch (error) {
      errorHandler();
    }
    expect(errorHandler).toBeCalled();
  });
});
