import fetch from 'client/services/fetch';
import functions from './functions';
import { Common } from '../../utils';

jest.mock('client/services/fetch');
jest.mock('../../utils');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('PaymentSummary/functions', () => {
  window.open = jest.fn();

  const props = {
    capId: true,
    tnNumber: true,
    instanceId: '',
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
      currentStep: {
        update: jest.fn(),
      },
      stepsStatus: {
        update: jest.fn(),
      },
      showLoader: {
        update: jest.fn(),
      },
      transactionNumber: {
        update: jest.fn(),
      },
    },
    form: {
      capId: 'Cap-Id',
      submittedDate: '28/10/1994',
      applicationStatus: 'approved',
      applicationCode: '1234',
      transactionNumber: '123456',
    },
    businessKey: '123456',
    history: {
      push: jest.fn(),
    },
  };
  let mockFetch: any;
  let commonReset: any;
  beforeEach(() => {
    mockFetch = fetch;
    commonReset = Common.reset;

    commonReset.mockImplementation(jest.fn());
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          businessKey: 'businessKey',
          id: 'id',
        },
      });
    });
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

  describe('onInit', () => {
    it('should properly call onInit function', () => {
      const result = functions.onInit(props);
      expect(result).toBeInstanceOf(Object);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onClick', () => {
    it('should call onClick without instance id', async () => {
      const licenceType = 'type';
      const result = await functions.onClick(props, licenceType);
      expect(result).toBeUndefined();
    });
    it('should call onClick with instance id', async () => {
      props.instanceId = '12345';
      const licenceType = 'type';
      const result = await functions.onClick(props, licenceType);
      expect(result).toBeUndefined();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onDownloadReceipt', () => {
    it('should properly call onDownloadReceipt function', () => {
      const result = functions.onDownloadReceipt(props);
      expect(result).toBeUndefined();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onFinish', () => {
    it('should properly call onFinish function', () => {
      const result = functions.onFinish(props);
      expect(result).toBeInstanceOf(Object);
    });
  });
});
