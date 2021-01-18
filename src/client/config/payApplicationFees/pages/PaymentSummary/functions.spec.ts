import fetch from 'client/services/fetch';
import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('PaymentSummary/functions', () => {
  const props = {
    capId: true,
    tnNumber: true,
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
  };
  let mockFetch: any;
  beforeEach(() => {
    mockFetch = fetch;
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

  it('should properly call onInit function', () => {
    const result = functions.onInit(props);
    expect(result).toBeUndefined();
  });

  it('should properly call onClick with success response if businesskey is there', async () => {
    const result = await functions.onClick(props);
    expect(result).toBeUndefined();
  });

  it('should properly call onBack', async () => {
    const result = await functions.onBack(props);
    expect(result).toBeUndefined();
  });
});
