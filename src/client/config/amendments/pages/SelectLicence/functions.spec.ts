import bpm from 'client/services/bpm';
import fetch from 'client/services/fetch';
import * as setUpdateReduxState from 'client/config/amendments/utils/setUpdateReduxState';
import functions from './functions';

const qs = require('querystring');

jest.mock('client/config/amendments/utils/setUpdateReduxState');
jest.mock('querystring');
jest.mock('client/services/fetch');
jest.mock('client/services/bpm');

describe('amendments/pages/SelectLicence', () => {
  let props: any;
  let mockFetch: any;
  let mockCall: any;
  const mockQs: any = qs.parse;
  const mockBpm: any = bpm.start;
  const mockBpmgetVariables: any = bpm.getVariables;
  // const instanceId = 'instanceId';
  // const businessKey = 'businessKey';
  beforeEach(() => {
    props = {
      i18n: jest.fn(value => value),
      user: {
        IDN: 'emiratesId',
      },
      history: {
        location: {
          search: 'instanceId="testid"&businessKey="testkey"',
        },
        push: jest.fn(),
      },
      amendmentCategories: 'test',
      locale: 'en',
      actions: {
        businessKey: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        licenseNo: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        capID: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        licenseType: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        prevLicenseType: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        legalForm: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        prevLegalForm: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        amendmentCategories: {
          reset: jest.fn(),
          update: jest.fn(),
        },
        licenceDetails: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        initialValues: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        documents: {
          reset: jest.fn(),
        },
        applicationReturnDocuments: {
          reset: jest.fn(),
        },
        tradeName: {
          reset: jest.fn(),
        },
        tawtheeqDetails: {
          reset: jest.fn(),
        },
        activity: {
          reset: jest.fn(),
        },
        tradeLicenceList: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        pageLoading: {
          update: jest.fn(),
        },
        dedErrorMessage: {
          reset: jest.fn(),
        },
        amendmentServerError: {
          reset: jest.fn(),
          update: jest.fn(),
        },
      },
      tradeLicenceList: {
        data: [
          {
            tradeLicenseNumber: 'CN-2682854',
            businessNameEng: '1003417 L.L.C',
            status: 'Start',
            dbAmendmentId: 0,
          },
          {
            tradeLicenseNumber: 'CN-2682946',
            businessNameEng: 'LOCAL DED NEW BRANCH L.L.C. - BRANCH',
            status: 'Start',
            dbAmendmentId: 1,
          },
        ],
      },
    };
    mockCall = setUpdateReduxState.setReduxState;
    mockFetch = fetch;
    mockQs.mockImplementation(() => {
      return {
        instanceId: 'instanceId',
        businessKey: 'businessKey',
      };
    });
    mockBpm.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          businessKey: '1',
          id: '1',
        },
      });
    });
    mockBpmgetVariables.mockImplementation(() => {
      return Promise.resolve({
        data: {
          logUuid: 'logUuid',
          state: {
            value: 'state',
          },
          emiratesId: {
            value: 'emiratesId',
          },
        },
      });
    });
  });

  describe('selectLicense functions', () => {
    it('should properly call onSubmit with success response', async () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {
            result: [
              {
                capId: '20LIC-00000-008B7',
              },
            ],
          },
        });
      });
      await bpm.start(
        'amendments',
        {
          key: 'value1',
        },
        true,
      );
      await functions.selectLicense('CN-2682854', props);
    });

    it('should properly call onSubmit with success response', async () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {
            result: [
              {
                applicationStatus: 'Issued',
                capId: '20LIC-00000-008B7',
                licenseNo: 'CN-1234567',
                clasification_en: 'en',
                clasification_ar: 'ar',
                legalFormEng: 'Establishment',
                legalFormArb: 'Establishment',
                partners: [
                  {
                    representativeTypeEng: 'Owner',
                    pEmail: 'test',
                    bDate: '10-01-2020',
                    phoneNumber: 'name',
                  },
                ],
              },
            ],
          },
        });
      });
      await functions.selectLicense('CN-2682854', props);
    });

    it('should properly call onSubmit with success response', async () => {
      mockBpm.mockImplementation(() => {
        return Promise.resolve('');
      });
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {
            result: [
              {
                applicationStatus: 'Issued',
                capId: '20LIC-00000-008B7',
                licenseNo: 'CN-1234567',
                clasification_en: 'en',
                clasification_ar: 'ar',
                legalFormEng: 'Establishment',
                legalFormArb: 'Establishment',
                partners: [
                  {
                    representativeTypeEng: 'Owner',
                    pEmail: 'test',
                    bDate: '10-01-2020',
                    phoneNumber: 'name',
                  },
                ],
              },
            ],
          },
        });
      });
      await functions.selectLicense('CN-2682854', props);
    });

    it('should properly call onSubmit with success response', async () => {
      mockCall.mockImplementation(() => {
        return Promise.resolve('/amendments/upload');
      });
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {
            result: [
              {
                applicationStatus: 'Not Issued',
                capId: '20LIC-00000-008B7',
              },
            ],
          },
        });
      });
      await functions.selectLicense('CN-2682854', props);
    });

    it('should properly call onSubmit with success response', async () => {
      // mockCall.mockImplementation(() => {
      //   return Promise.resolve('');
      // });
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {
            result: [
              {
                applicationStatus: 'Not Issued',
                capId: '20LIC-00000-008B7',
              },
            ],
          },
        });
      });
      await functions.selectLicense('CN-2682854', props);
    });

    it('should properly call onSubmit with success response', async () => {
      mockBpm.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {
            businessKey: 'businessKey',
            id: 'id',
          },
        });
      });
      await functions.selectLicense('CN-2682854', props);
    });

    it('should properly call onSubmit with success response', async () => {
      mockFetch.mockImplementation(() => {
        Promise.reject(new Error('something bad happened'));
      });
      functions.selectLicense('CN-2682854', props);
    });

    it('should properly call continueProcess with success response', async () => {
      props = {
        ...props,
        tradeLicenceList: {
          data: [
            {
              tradeLicenseNumber: 'CN-2682854',
              businessNameEng: '1003417 L.L.C',
              status: 'Start22',
              dbAmendmentId: 1,
              ioDetails: {
                businessKey: 'id',
                processInstanceId: 'id',
              },
            },
          ],
        },
      };
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {
            result: [
              {
                applicationStatus: 'hold',
                capId: '20LIC-00000-008B7',
                ioDetails: {
                  businessKey: '123',
                  processInstanceId: '123',
                },
              },
            ],
          },
        });
      });
      await functions.selectLicense('CN-2682854', props);
    });
  });

  // describe('localSearch functions', () => {
  //   it('should properly call localSearch with success response', async () => {
  //     functions.localSearch('test', props);
  //     expect(props.history.push).not.toBeCalled();
  //   });

  //   it('should properly call localSearch with success response', async () => {
  //     props.locale = 'ar';
  //     functions.localSearch('Start', props);
  //     expect(props.history.push).not.toBeCalled();
  //   });

  //   it('should properly call localSearch with success response', async () => {
  //     functions.localSearch('Continue', props);
  //     expect(props.history.push).not.toBeCalled();
  //   });
  // });

  describe('listTradeLicenses functions', () => {
    it('should properly call onSubmit with success response', async () => {
      const fakePayload = {
        success: true,
        // data: [
        //   {
        //     tradeLicenseNumber: '123',
        //   },
        //   {
        //     tradeLicenseNumber: '124',
        //   },
        // ],
        data: {
          amendmentsByFilter: [
            {
              test: '123',
            },
          ],
        },
      };
      mockFetch.mockImplementation(() => {
        return Promise.resolve(fakePayload);
      });
      await functions.listTradeLicenses(props);
      expect(mockFetch).toBeCalledWith('/pub/proxy/listTradeLicenses', 'POST', {
        emiratesIdNumber: props.user.IDN,
      });
      // expect(props.actions.categoryAlert.update).toHaveBeenCalled();
    });

    it('should properly call onSubmit with success response', async () => {
      const fakePayload = {
        success: true,
        data: [
          {
            tradeLicenseNumber: '123',
          },
        ],
      };
      mockFetch.mockImplementation(() => {
        return Promise.resolve(fakePayload);
      });
      await functions.listTradeLicenses(props);
      expect(mockFetch).toBeCalledWith('/pub/proxy/listTradeLicenses', 'POST', {
        emiratesIdNumber: props.user.IDN,
      });
      // expect(props.actions.categoryAlert.update).toHaveBeenCalled();
    });

    it('should properly call onSubmit with success response', async () => {
      const fakePayload = {
        status: 'fail',
        error: {},
      };
      mockFetch.mockImplementation(() => {
        return Promise.resolve(fakePayload);
      });
      await functions.listTradeLicenses(props);
      expect(mockFetch).toBeCalledWith('/pub/proxy/listTradeLicenses', 'POST', {
        emiratesIdNumber: props.user.IDN,
      });
      // expect(props.actions.categoryAlert.update).toHaveBeenCalled();
    });

    it('should properly call onSubmit with success response', async () => {
      const fakePayload = {
        success: true,
        data: [],
      };
      mockFetch.mockImplementation(() => {
        return Promise.resolve(fakePayload);
      });
      await functions.listTradeLicenses(props);
      expect(mockFetch).toBeCalledWith('/pub/proxy/listTradeLicenses', 'POST', {
        emiratesIdNumber: props.user.IDN,
      });
      // expect(props.actions.categoryAlert.update).toHaveBeenCalled();
    });

    it('should properly call onSubmit with success response', async () => {
      props.user.IDN = undefined;
      await functions.listTradeLicenses(props);
    });
  });

  describe('init functions', () => {
    it('should properly call onPageInit', () => {
      functions.init(props);
    });
  });

  describe('filterSearchTradeLicenseList functions', () => {
    it('should properly call filterSearchTradeLicenseList', () => {
      functions.filterSearchTradeLicenseList('all', 'test', props);
    });

    it('should properly call filterSearchTradeLicenseList', () => {
      functions.filterSearchTradeLicenseList('new', '', props);
    });

    it('should properly call filterSearchTradeLicenseList', () => {
      props.locale = 'ar';
      props.tradeLicenceList.data = undefined;
      functions.filterSearchTradeLicenseList('all', 'test', props);
    });
  });

  describe('onPageInit functions', () => {
    it('should properly call localSearch with success response', async () => {
      functions.onPageInit(props);
      expect(props.history.push).not.toBeCalled();
    });
  });
});
