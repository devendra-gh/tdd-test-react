import handleChange from './subCategory';

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

  it('fetchCategories, correct new state is returned', async () => {
    const newState = handleChange('value', {}, mockUpdateStore);
    expect(newState).toStrictEqual({
      loading: true,
      activity: '',
    });
  });
});
