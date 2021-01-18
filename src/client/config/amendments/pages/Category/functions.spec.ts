import fetch from 'client/services/fetch';
import index from './index';
import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/Category', () => {
  let props: any;
  let mockFetch: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      amendmentCategories: { category: [true] },
      history: {
        push: jest.fn(),
      },
      actions: {
        pageLoading: {
          update: jest.fn(),
        },
        amendmentServerError: {
          update: jest.fn(),
          reset: jest.fn(),
        },
      },
    };

    mockFetch = fetch;
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          pageName: 'test',
        },
      });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onPageInit onPageInit', () => {
    it('should properly call onPageInit', () => {
      props = {
        ...props,
        amendmentCategories: {
          category: {
            a: true,
            b: true,
          },
        },
      };
      expect(index[0].onPageInit(props)).toBeInstanceOf(Object);

      props = {
        ...props,
        amendmentCategories: {
          category: {
            a: false,
            b: false,
          },
        },
      };
      expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('handleNext functions', () => {
    it('should be instance of function handleNext', () =>
      expect(functions.handleNext).toBeInstanceOf(Function));

    it('should properly function handleNext with success response', async () => {
      await functions.handleNext(props);
    });

    it('should properly function handleNext with fail response', async () => {
      props = {
        ...props,
        amendmentCategories: {
          category: [{ test: 'test1' }, { test: 'test2' }],
        },
      };

      await functions.handleNext(props);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('handleBack functions', () => {
    it('should be instance of function handleBack', () =>
      expect(functions.handleBack).toBeInstanceOf(Function));

    it('should properly function handleBack with success response', async () => {
      await functions.handleBack(props);
    });
  });
});
