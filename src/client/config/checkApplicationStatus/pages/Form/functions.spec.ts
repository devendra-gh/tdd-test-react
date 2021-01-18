import { cleanup } from '@testing-library/react';
import functions from './functions';
import fetchApplicationStatus from '../../services/fetchApplicationStatus';

jest.mock('client/services/fetch');
jest.mock('../../services/fetchApplicationStatus');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ApplicationStatusForm/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      formApplicationNumber: {
        applicationNumber: 'CN-1234567',
      },
      i18n: jest.fn(),
      actions: {
        formApplicationNumber: {
          update: jest.fn(),
        },
        applicationStatusResponse: {
          update: jest.fn(),
        },
        statusRecieved: {
          update: jest.fn(),
        },
        stepsStatus: {
          update: jest.fn(),
        },
      },
      history: [],
      fields: [
        {
          'aria-label': 'test',
          elementType: 'test',
          name: 'test',
          key: 'test',
          label: 'test',
          placeholder: 'test',
          onChange: jest.fn(),
          validate: jest.fn(),
        },
      ],
    };
  });

  let mockFetchApplicationStatus: any;
  beforeEach(() => {
    mockFetchApplicationStatus = fetchApplicationStatus;
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('should call init with no response', async () => {
    functions.init(props);
    expect(props.actions.formApplicationNumber.update).toHaveBeenCalled();
  });

  it('Check isTransactionNumber if applicationNumber is valid', () => {
    expect(functions.isTransactionNumber('CN-1234567')).toBeTruthy();
  });

  it('Check isTransactionNumber if applicationNumber is valid', () => {
    expect(functions.isTransactionNumber('testWrong')).toBeFalsy();
  });

  it('Check onChange to be called properly', () => {
    props = {
      ...props,
      ...{
        formApplicationNumber: {
          applicationNumber: 'CN-1234567',
        },
      },
    };
    functions.onChange(props, 'test', 'test');
    expect(props.actions.formApplicationNumber.update).toHaveBeenCalled();
  });

  it('Check validate if applicationNumber is invalid', () => {
    expect(
      functions.validate({
        formApplicationNumber: {
          applicationNumber: 'test',
        },
      }),
    ).toBeTruthy();
  });

  it('Check validate if applicationNumber is valid', () => {
    expect(
      functions.validate({
        formApplicationNumber: {
          applicationNumber: 'CN-1234567',
        },
      }),
    ).toBeUndefined();
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onSubmit', () => {
    it('should properly call onSubmit with throw error', async () => {
      mockFetchApplicationStatus.mockImplementation(() => {
        return Promise.resolve({
          success: false,
          data: {
            code: '400',
          },
        });
      });
      await functions.onSubmit(props);
      expect(props.actions.formApplicationNumber.update).toHaveBeenCalled();
    });

    it('should properly call onSubmit with not found', async () => {
      mockFetchApplicationStatus.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {
            code: '500',
          },
        });
      });
      await functions.onSubmit(props);
      expect(props.actions.formApplicationNumber.update).toHaveBeenCalled();
    });

    it('should properly call onSubmit with success response', async () => {
      mockFetchApplicationStatus.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          message: 'Success',
          data: {
            code: '200',
            result: [
              {
                applicationStatusResponse: {
                  applicaionStatus: 'test-status',
                },
              },
            ],
          },
        });
      });
      await functions.onSubmit(props);
      expect(props.actions.formApplicationNumber.update).toHaveBeenCalled();
    });
  });
});
