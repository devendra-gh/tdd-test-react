import functions from './functions';
import fetchFees from '../../services/fees';
import fetchRequirements from '../../services/requirements';

jest.mock('client/services/fetch');
jest.mock('../../services/fees');
jest.mock('../../services/requirements');
jest.mock('../../config', () => {
  return {
    __esModule: true,
    initialState: { resultState: {} },
  };
});
jest.mock('client/services/InternalApi', () => ({
  getDownloadLicenseProcedureDoc: jest
    .fn()
    .mockReturnValueOnce({
      success: true,
      data: {
        data: [12, 34],
      },
    })
    .mockRejectedValueOnce(new Error('some error')),
}));
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('getInitialState', () => {
  const props = {
    history: { push: jest.fn() },
    locale: 'en',
    resultState: {
      requirements: [{ requirementDescEn: 'en', requirementDescAr: 'ar' }],
      fees: [
        { feeDescEn: 'en', feeDescAr: 'ar', activityCode: '11', feeAmount: 20 },
        { feeDescEn: 'en', feeDescAr: 'ar', activityCode: '11', feeAmount: 50 },
      ],
      selectedActivity: [{ activity: '', activityAr: '' }],
    },
    formCompanyDetails: {},
    formSelectActivity: {
      activities: [],
    },
    actions: {
      resultState: {
        update: jest.fn(),
      },
    },
    i18n: jest.fn(),
  };
  let mockFetchFees: any;
  let mockFetchRequirements: any;

  beforeEach(() => {
    mockFetchFees = fetchFees;
    mockFetchRequirements = fetchRequirements;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('apis success - resultState.update should be called with', async () => {
    mockFetchFees.mockImplementation(() => {
      return [{}];
    });
    mockFetchRequirements.mockImplementation(() => {
      return [{}];
    });
    await functions.getInitialState(props);
    functions.getDownloadLicenseProcedureDoc(props);
    props.locale = 'ar';
    functions.getDownloadLicenseProcedureDoc(props);
    props.resultState.requirements = [];
    props.resultState.fees = [];
    props.resultState.selectedActivity = [];
    functions.getDownloadLicenseProcedureDoc(props);
    expect(props.actions.resultState.update).toHaveBeenCalledWith({});
  });

  it('apis fail - resultState.update should be called with', async () => {
    mockFetchFees.mockImplementation(() => {
      return Promise.reject(new Error());
    });
    mockFetchRequirements.mockImplementation(() => {
      return Promise.reject(new Error());
    });
    await functions.getInitialState(props);
    expect(props.actions.resultState.update).toHaveBeenCalledWith({});
  });
});
