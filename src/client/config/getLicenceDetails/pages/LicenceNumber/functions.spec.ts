import fetch from 'client/services/fetch';
import functions from './functions';
import fetchLicenceDetails from '../../services/licence';

jest.mock('client/services/fetch');
jest.mock('../../services/licence');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('LicenceNumber/functions', () => {
  let mockFetchDetails: any;
  const props = {
    tradeLicence: {
      licenceNo: 'CN-2344343',
      isLoading: false,
      data: null,
      errorCode: 204,
    },
    history: {
      push: jest.fn(),
    },
    actions: {
      tradeLicence: {
        update: jest.fn(),
      },
      stepsStatus: {
        update: jest.fn(),
      },
    },
    locale: 'en',
    i18n: jest.fn(),
  };
  let mockFetch: any;
  beforeEach(() => {
    mockFetchDetails = fetchLicenceDetails;
    mockFetch = fetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update initialize tradeLicence after init call', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {},
      });
    });
    await functions.init(props);
    expect(props.actions.tradeLicence.update).nthCalledWith(1, {
      licenceNo: '',
      data: null,
      isLoading: false,
      errorCode: null,
    });
  });

  it('should properly call onSubmit with success response', async () => {
    mockFetchDetails.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {},
      });
    });
    const licenceNo = 'CN-1023919';
    await functions.onSubmit(licenceNo, props);
  });

  it('should properly call onSubmit with success response with array', async () => {
    mockFetchDetails.mockImplementation(() => {
      return Promise.resolve(['test']);
    });
    const licenceNo = 'CN-1023919';
    await functions.onSubmit(licenceNo, props);
  });

  it('should properly call onSubmit with error response with 204', async () => {
    mockFetchDetails.mockImplementation(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        code: 204,
      });
    });
    const licenceNo = 'abc';
    await functions.onSubmit(licenceNo, props);
  });

  it('should properly call onSubmit with error response with 500', async () => {
    mockFetchDetails.mockImplementation(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        code: 500,
      });
    });
    const licenceNo = 'abc';
    await functions.onSubmit(licenceNo, props);
  });

  it('should properly call onChange  ', async () => {
    functions.onChange('1234', props);
    expect(props.actions.tradeLicence.update).toHaveBeenCalled();
  });

  it('should properly call goBack', async () => {
    functions.goBack(props);
    expect(props.history.push).toBeCalledWith('/get-licence-details/');
  });

  it('should properly call getSummaryList', async () => {
    const arr = functions.getSummaryList(props.tradeLicence, props);
    expect(arr).toBeInstanceOf(Array);
    const arr2 = functions.getSummaryList(props.tradeLicence, props);
    expect(arr2).toBeInstanceOf(Array);
  });

  it('should properly call getActivityList', async () => {
    const arr = functions.getActivityList(props.tradeLicence, props);
    expect(arr).toBeInstanceOf(Array);
  });

  it('should properly call getActivityList', () => {
    props.locale = 'ar';
    const arr = functions.getActivityList(props.tradeLicence, props);
    expect(arr).toBeInstanceOf(Array);
  });
});
