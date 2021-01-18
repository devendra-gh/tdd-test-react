import fetch from 'client/services/fetch';
import { updateReduxStoreInDB, setReduxState } from './setUpdateReduxState';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/ setUpdateReduxState.spec', () => {
  const props = {
    actions: {
      businessKey: {
        update: jest.fn(),
      },
      instanceId: {
        update: jest.fn(),
      },
      legalForm: {
        update: jest.fn(),
      },
      documents: {
        update: jest.fn(),
      },
    },
    user: { IDN: 'EID' },
    instanceId: '123',
    businessKey: '123',
    dbAmendmentId: '123',
    logUuid: '123',
    licenseNo: 'CN-1234567',
    capID: '123',
    legalForm: 'establishment',
    prevLegalForm: 'establishment',
    licenseType: 'mobdea',
    prevLicenseType: 'mobdea',
    amendmentCategories: {
      category: {
        ownership: false,
        activities: false,
        tradename: false,
        location: false,
        financialDetails: false,
      },
      ownership: {
        ownership: false,
        activities: false,
        tradename: false,
        location: false,
        financialDetails: false,
      },
    },
    licenceDetails: {},
    initialValues: {},
    tradeName: {},
    activity: {},
    tawtheeqDetails: {},
  };
  let mockFetch: any;
  beforeEach(() => {
    mockFetch = fetch;
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          logUuid: 'no',
          amendmentById: {
            value: 'teet',
            reduxState: { ...props },
          },

          dbAmendmentId: {
            value: 'teet',
            reduxState: {},
          },
          state: {
            value: 'teet',
          },
          emiratesId: {
            value: 'EID',
          },
          documents1: {
            value: 'EID',
          },
        },
      });
    });
  });

  it('should update update Redux Store In DB', () => {
    updateReduxStoreInDB(props);
  });

  it('should not update update Redux Store In DB, if dbAmendmentId is missing', () => {
    const updatedProps = {
      ...props,
      dbAmendmentId: '',
    };
    updateReduxStoreInDB(updatedProps);
  });

  it('should set Redux Store', () => {
    setReduxState(props.instanceId, props.businessKey, props);
  });

  it('should set Redux Store else statemtnt', () => {
    mockFetch.mockImplementation(() => {
      return Promise.reject(new Error('something bad happened'));
    });
    setReduxState(props.instanceId, props.businessKey, props);
  });

  it('should return empty camunda state on setting Redux Store ', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          logUuid: 'no',
          amendmentById: {
            value: 'teet',
            reduxState: { ...props },
          },

          dbAmendmentId: {
            value: 'teet',
            reduxState: {},
          },
          state: null,
        },
      });
    });
    setReduxState(props.instanceId, props.businessKey, props);
  });

  it('should return empty camunda state on setting Redux Store ', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          logUuid: 'no',
          amendmentById: {
            value: 'teet',
          },

          dbAmendmentId: {
            value: 'teet',
          },
        },
      });
    });
    setReduxState(props.instanceId, props.businessKey, props);
  });
  it('should return empty camunda state on setting Redux Store ', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {},
      });
    });
    setReduxState(props.instanceId, props.businessKey, props);
  });
});
