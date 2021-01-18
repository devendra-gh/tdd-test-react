import fetch from 'client/services/fetch';
import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('AppointmentSummary/functions', () => {
  const props = {
    goldenService: {
      isLoading: false,
      paymentInProgress: false,
      form: {
        time: '',
        telephone: '',
        transactionType: '',
        city: '',
        name: '',
        email: '',
        licenceNo: '',
        date: '',
        address: '',
        termAndCondition: false,
      },
    },
    history: {
      push: jest.fn(),
    },
    actions: {
      goldenService: {
        update: jest.fn(),
      },
      stepsStatus: {
        update: jest.fn(),
      },
    },
  };
  let mockFetch: any;
  beforeEach(() => {
    mockFetch = fetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should properly call onSubmit with success response', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {},
      });
    });
    // with businessKey
    await functions.onSubmit({ ...props, businessKey: '3496873469' });
    // without businessKey
    await functions.onSubmit(props);
  });
});
