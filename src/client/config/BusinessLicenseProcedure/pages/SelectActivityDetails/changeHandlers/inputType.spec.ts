import handleChange from './inputType';

jest.mock('../helpers/useFetchCategories', () => ({
  useFetchCategories: jest.fn(),
}));
jest.mock('../helpers/useFetchActivities', () => ({
  useFetchActivities: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('handleChange', () => {
  let mockUpdateStore: any;

  beforeEach(() => {
    mockUpdateStore = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetchActivities, correct new state is returned when value is other', async () => {
    const newState = handleChange('value', {}, mockUpdateStore);
    expect(newState).toStrictEqual({
      activity: '',
    });
  });

  it('fetchActivities, correct new state is returned when value is CATEGORY and state has sufficient information', async () => {
    const state = {
      category: 'category',
      subCategory: 'subCategory',
    };
    const newState = handleChange('CATEGORY', state, mockUpdateStore);
    expect(newState).toStrictEqual({
      loading: true,
      category: 'category',
      subCategory: 'subCategory',
      activity: '',
    });
  });

  it('fetchActivities, correct new state is returned when value is NAME and state has sufficient information', async () => {
    const state = {
      searchText: 'searchText',
    };
    const newState = handleChange('NAME', state, mockUpdateStore);
    expect(newState).toStrictEqual({
      loading: true,
      searchText: 'searchText',
      activity: '',
    });
  });

  it('fetchActivities, correct new state is returned when value is NAME and state has sufficient information with showCategories', async () => {
    const state = {
      showCategories: false,
    };
    const newState = handleChange('CATEGORY', state, mockUpdateStore);
    expect(newState).toStrictEqual({
      loading: true,
      showCategories: false,
      activity: '',
    });
  });
});
