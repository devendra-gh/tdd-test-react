import fetch from 'client/services/fetch';
import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('paymentSummary/functions', () => {
  window.open = jest.fn();

  const props = {
    paymentLink: '',
    locale: 'en',
    submitLicence: {
      data: {
        owner: {},
      },
    },
    actions: {
      form: {
        update: jest.fn(),
      },
      instanceId: {
        update: jest.fn(),
      },
      businessKey: {
        update: jest.fn(),
      },
    },
  };
  let mockFetch: any;
  beforeEach(() => {
    mockFetch = fetch;
    // mockBpm = bpm;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onClick', () => {
    it('should properly call onSubmit with success response', async () => {
      const MockApi = jest.fn(() => {
        return Promise.resolve({
          success: true,
          data: {
            businessKey: 'businessKey',
            id: 'id',
          },
        });
      });
      mockFetch.mockImplementation(MockApi);
      await functions.onClick(props);
      expect(MockApi).toHaveBeenCalled();
    });

    it('should properly call onSubmit with success response with paymentLink url', async () => {
      props.paymentLink = '/';
      const MockApi = jest.fn(() => {
        return Promise.resolve({
          success: true,
          data: {
            businessKey: 'businessKey',
            id: 'id',
          },
        });
      });
      mockFetch.mockImplementation(MockApi);
      await functions.onClick(props);
      expect(MockApi).toHaveBeenCalled();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('findPaymentSummaryTotal', () => {
    it('should properly call findPaymentSummaryTotal with fail response', async () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: false,
          data: {
            businessKey: 'businessKey',
            id: 'id',
          },
        });
      });
      const result = await functions.findPaymentSummaryTotal(props);
      expect(result).toBe(15);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('findPaymentSummary', () => {
    it('should properly call findPaymentSummary', async () => {
      const newProps = {
        ...props,
        instanceId: 1,
        businessKey: 2,
        locale: {
          locale: 'en',
        },
      };
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {
            businessKey: 'businessKey',
            id: 'id',
          },
        });
      });
      const result = await functions.findPaymentSummary(newProps);
      expect(result).toBeInstanceOf(Array);
    });

    it('should properly call findPaymentSummary with ar', async () => {
      const newProps = {
        ...props,
        instanceId: 1,
        businessKey: 2,
        locale: {
          locale: 'ar',
        },
      };
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {
            businessKey: 'businessKey',
            id: 'id',
          },
        });
      });
      const result = await functions.findPaymentSummary(newProps);
      expect(result).toBeInstanceOf(Array);
    });
  });
});
