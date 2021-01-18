import { useFetchActivities } from './useFetchActivities';
import fetchActivities from '../../../services/activities';

jest.mock('../../../services/activities');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('handleChange', () => {
  let mockFetchActivities: any;
  let mockUpdateStore: any;

  beforeEach(() => {
    mockFetchActivities = fetchActivities;
    mockUpdateStore = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('success - useFetchActivities, updateStore called with correct values', async () => {
    const response = [
      {
        activityCode: 'activityCode',
      },
    ];
    mockFetchActivities.mockImplementation(() => {
      return Promise.resolve(response);
    });
    await useFetchActivities(
      {
        category: undefined,
        subCategory: undefined,
        searchText: undefined,
      },
      {},
      mockUpdateStore,
    );
    expect(mockUpdateStore).toBeCalled();
  });

  it('success - useFetchActivities, updateStore called with correct values when no activities', async () => {
    mockFetchActivities.mockImplementation(() => {
      return Promise.resolve([]);
    });
    await useFetchActivities(
      {
        category: undefined,
        subCategory: undefined,
        searchText: undefined,
      },
      {},
      mockUpdateStore,
    );
    expect(mockUpdateStore).toBeCalled();
  });

  it('success - useFetchActivities, updateStore called with correct values when no activities', async () => {
    mockFetchActivities.mockImplementation(() => {
      return Promise.resolve('');
    });
    await useFetchActivities(
      {
        category: undefined,
        subCategory: undefined,
        searchText: undefined,
      },
      {},
      mockUpdateStore,
    );
    expect(mockUpdateStore).toBeCalled();
  });

  it('failure - useFetchActivities, updateStore called with correct values', async () => {
    mockFetchActivities.mockImplementation(() => {
      return Promise.reject(new Error());
    });
    await useFetchActivities(
      {
        category: undefined,
        subCategory: undefined,
        searchText: undefined,
      },
      {},
      mockUpdateStore,
    );
    expect(mockUpdateStore).toBeCalled();
  });
});
