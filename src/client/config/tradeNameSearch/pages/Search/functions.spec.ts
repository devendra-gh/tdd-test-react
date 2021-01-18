import fetch from 'client/services/fetch';
import { cleanup } from '@testing-library/react';
import functions from './functions';

jest.mock('client/services/fetch');
jest.mock('../../utils/common');

const actions = {
  tradeName: {
    update: jest.fn(),
  },
  displaySpinner: {
    update: jest.fn(),
  },
  displayTable: {
    update: jest.fn(),
  },
  displayErrorFlag: {
    update: jest.fn(),
  },
  showNotFoundAlert: {
    update: jest.fn(),
  },
  showErrorAlert: {
    update: jest.fn(),
  },
};

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('TradeNameSearch', () => {
  let mockFetch: any;
  let props: any;

  beforeEach(() => {
    mockFetch = fetch;
    props = {
      tradeName: {
        recInPage: 10,
        value: 'test',
      },
      actions,
      history: {
        push: jest.fn(),
      },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('should properly update tradeName to redux', async () => {
    await functions.onPageInit(props);
    expect(props.actions.tradeName.update).toBeCalled();
  });

  it('should properly update displaySpinner to redux', async () => {
    await functions.changePage(1, props);
    expect(props.actions.displaySpinner.update).toBeCalled();
  });

  it('should not execute statements if length of value less than 3 or greater than 200', async () => {
    await functions.getTradeName('te', 1, props);
    expect(props.actions.tradeName.update).not.toBeCalled();
  });

  it('should execute statements if length of value valid and records are not found', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          data: { totalRecords: 0 },
          suggestions: {
            nameEn: 'nameEn',
            nameAr: 'nameAr',
          },
        },
      });
    });

    await functions.getTradeName('test', 1, props);
    expect(props.actions.showNotFoundAlert.update).toHaveBeenCalled();
  });

  it('should execute statements if length of value valid and records are found', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          data: { totalRecords: 10 },
          suggestions: {
            nameEn: 'nameEn',
            nameAr: 'nameAr',
          },
        },
      });
    });
    await functions.getTradeName('test', 1, props);
  });

  it('should throw if API error', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: false,
      });
    });
    await functions.getTradeName('test', 1, props);
  });

  it('should throw if data empty error', async () => {
    props = {
      ...props,
      locale: 'ar',
      tradeName: {
        ...props.tradeName,
        recInPage: null,
      },
    };

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: false,
        data: {},
      });
    });
    await functions.getTradeName('test', 1, props);
  });

  it('should call the back function', () => {
    functions.onBack(props);
    expect(props.history.push).toHaveBeenCalled();
  });

  it('should not validate when field is empty', () => {
    functions.getValidation(undefined, props);
    expect(props.actions.displayErrorFlag.update).toBeCalled();
  });

  it('should call the validation function', () => {
    functions.getValidation('te', props);
    expect(props.actions.displayErrorFlag.update).toBeCalled();
  });

  it('should call the validation function max length', () => {
    functions.getValidation('test', props);
    expect(props.actions.displayErrorFlag.update).toBeCalled();
  });
});
