import { useFetchCategories } from './useFetchCategories';
import fetchCategories from '../../../services/category';

jest.mock('../../../services/category');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('handleChange', () => {
  let mockFetchCategories: any;
  let mockUpdateStore: any;

  beforeEach(() => {
    mockFetchCategories = fetchCategories;
    mockUpdateStore = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('success - useFetchCategories, updateStore called with correct values', async () => {
    mockFetchCategories.mockImplementation(() => {
      return Promise.resolve([{}]);
    });
    await useFetchCategories('value', {}, mockUpdateStore);
    expect(mockUpdateStore).toBeCalled();
  });

  it('failure - useFetchCategories, updateStore called with correct values', async () => {
    mockFetchCategories.mockImplementation(() => {
      return Promise.reject(new Error());
    });
    await useFetchCategories('value', {}, mockUpdateStore);
    expect(mockUpdateStore).toBeCalled();
  });

  it('success - useFetchCategories, updateStore called with correct values, without nature id', async () => {
    mockFetchCategories.mockImplementation(() => {
      return Promise.resolve([{}]);
    });
    await useFetchCategories('', {}, mockUpdateStore);
    expect(mockUpdateStore).toBeCalled();
  });

  it('failure - useFetchCategories, updateStore called with correct values without nature id', async () => {
    mockFetchCategories.mockImplementation(() => {
      return Promise.reject(new Error());
    });
    await useFetchCategories('', {}, mockUpdateStore);
    expect(mockUpdateStore).toBeCalled();
  });
});
