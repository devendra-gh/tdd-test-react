import handleChange from './category';

jest.mock('../helpers/useFetchCategories', () => ({
  useFetchCategories: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('handleChange', () => {
  const mockUpdateStore = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetchCategories, correct new state is returned', async () => {
    const newState = handleChange('value', {}, mockUpdateStore);
    expect(newState).toStrictEqual({
      subCategories: [],
      subCategory: '',
      loading: true,
      activity: '',
    });
  });
});
