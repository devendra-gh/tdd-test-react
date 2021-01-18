import fetch from 'client/services/fetch';
import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('CheckApplication/functions', () => {
  const props = {
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
      buttonDisabled: {
        update: jest.fn(),
      },
      showError: {
        update: jest.fn(),
      },
      showSpinner: {
        update: jest.fn(),
      },
    },
    form: {
      capId: 'Cap-Id',
      submittedDate: '28/10/1994',
      applicationStatus: 'approved',
      applicationCode: '1234',
      transactionNumber: '123456',
      showTradeName: true,
    },
    businessKey: '123456',
    buttonDisabled: false,
    showLoader: false,
    showSpinner: false,
    history: {
      push: jest.fn(),
    },
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
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should properly call onSubmit with success response', async () => {
    const result = await functions.onSubmit('1234', props);
    expect(result).toBeUndefined();
  });

  it('should properly call onSubmit with fail response', async () => {
    props.form.showTradeName = false;
    const result = await functions.onSubmit('1234', props);
    expect(result).toBeUndefined();
  });

  it('should properly call onSubmit case 1', async () => {
    const newProps = { ...props, instanceId: 1, businessKey: 2 };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          result: {
            relatedRecoreds: [
              {
                NameAr: 'test',
                NameEn: 'tst',
              },
              {
                NameAr: 'test',
                NameEn: 'tst',
              },
            ],
          },
          businessKey: 'businessKey',
          id: 'id',
        },
      });
    });
    await functions.onSubmit('1234', newProps);
    expect(props.actions.instanceId.update).not.toHaveBeenCalled();
  });

  it('should properly call onChange  ', () => {
    functions.onChange('1234', props);
    expect(props.actions.form.update).toHaveBeenCalled();
  });

  it('should properly call getOnChangeHandler  ', () => {
    expect(functions.getOnChangeHandler({ form: '123' })(props, {})).toBe(
      undefined,
    );

    expect(props.actions.form.update).toHaveBeenCalled();
  });

  it('should properly call validateTransactionNumber with success response', () => {
    // const { transactionNumber } = props.form;
    // expect(functions.validateTransactionNumber(props)).toHaveBeenCalled;
    // expect(isTransactionNumber(transactionNumber)).toHaveBeenCalled;
  });
  it('should properly call onShowTradeName with success response', async () => {
    const result = await functions.onShowTradeName(props);
    // expect(functions.validateTransactionNumber(props)).toBeUndefined;
    // expect(isTransactionNumber(transactionNumber)).toBeUndefined
    expect(result).toBeUndefined();
  });
});
