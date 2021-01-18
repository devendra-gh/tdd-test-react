import functions from './functions';
import { useFetchCategories } from './helpers/useFetchCategories';

jest.mock('./helpers/useFetchCategories');
jest.mock('../../config', () => {
  return {
    __esModule: true,
    initialState: { formSelectActivity: {} },
  };
});

jest.mock('./changeHandlers/index', () => {
  const f = (a: string, b: string, c: string) => b;
  return {
    __esModule: true,
    handleInputTypeChange: f,
    handleCategoryChange: f,
    handleSubCategoryChange: f,
    handleSearchTextChange: f,
    handlePageChange: f,
  };
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('functions', () => {
  const props = {
    formSelectActivity: {},
    history: {
      push: jest.fn(),
    },
    actions: {
      stepsStatus: {
        update: jest.fn(),
      },
      formSelectActivity: {
        update: jest.fn(),
      },
    },
  };
  let mockFetchCategories: any;

  beforeEach(() => {
    mockFetchCategories = useFetchCategories;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getInitialState, set state from config, call useFetchCategories', async () => {
    mockFetchCategories.mockImplementation(() => {
      return Promise.resolve([{}]);
    });

    await functions.getInitialState(props);
    expect(props.actions.formSelectActivity.update).toBeCalledWith({});
    expect(mockFetchCategories).toBeCalled();
  });

  it('onSubmit, should properly call history.push, stepsStatus.update onSubmit', async () => {
    functions.onSubmit(props);
    expect(props.history.push).toBeCalledWith(
      '/business-licence-procedure/licence-information',
    );
  });

  it('should call formSelectActivity.update with all type', async () => {
    props.formSelectActivity = {};
    const arr = ['category', 'subCategory', 'inputType', 'searchText', 'page'];
    arr.forEach(item => {
      const value: { [k: string]: any } = {};
      value[item] = `${item}Value`;
      functions.onChange(item, value[item], props);
      expect(props.actions.formSelectActivity.update).toBeCalledWith({
        ...value,
        activities: [],
        // activity: '',
        showError: false,
        loading: false,
        showTable: false,
      });
      jest.clearAllMocks();
    });
  });

  it('should call formSelectActivity.update with activity - no loading states added', async () => {
    props.formSelectActivity = {};
    const arr = ['activity'];
    arr.forEach(item => {
      const value: { [k: string]: any } = {};
      value[item] = `${item}Value`;
      functions.onChange(item, value[item], props);
      expect(props.actions.formSelectActivity.update).toBeCalledWith({
        ...value,
      });
      jest.clearAllMocks();
    });
  });
});
