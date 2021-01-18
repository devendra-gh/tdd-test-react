import fetch from 'client/services/fetch';
import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/applicationSummary/PaymentWaiting', () => {
  let props: any;
  let mockFetch: any;
  beforeEach(() => {
    props = {
      amendmentCategories: { category: [{ test: 'test1' }, { test: 'test2' }] },
      history: {
        push: jest.fn(),
      },
      actions: {
        pageLoading: {
          update: jest.fn(),
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

  describe('onPageInit functions', () => {
    it('should properly call onPageInit', () => {
      props = {
        apTransactionNumber: 'submit-date',
        submitDate: '13-10-2019',
      };
      expect(functions.onPageInit(props)).toBeInstanceOf(Object);

      props = {
        apTransactionNumber: '',
        submitDate: '',
      };
      expect(functions.onPageInit(props)).toBeInstanceOf(Object);
    });
  });
});
