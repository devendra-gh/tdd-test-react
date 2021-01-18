import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import fetch from 'client/services/fetch';
import functions from './functions';
import { PERMIT_AIR_AD, PERMIT_DRAWS } from '../../utils/constants/permits';

jest.mock('client/services/bpm');

jest.mock('client/services/fetch');
jest.mock('client/config/permits/permitConfigs');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permit/pages/Home/functions', () => {
  let props: IVariables;
  let bpmUrl: string;
  let mockBpmstart: any;
  let mockBpmMessage: any;
  window.scrollTo = jest.fn();

  beforeEach(() => {
    bpmUrl = 'http://test-bpm-url';
    mockBpmstart = bpm.start;
    mockBpmMessage = bpm.message;
    props = {
      instanceId: '',
      businessKey: '',
      serviceType: PERMIT_AIR_AD,
      companyDetails: {},
      permitInfo: {},
      history: {
        push: jest.fn(),
      },
      actions: {
        businessKey: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
        validityPeriod: {
          update: jest.fn(),
        },
        permitInfo: {
          update: jest.fn(),
        },
        companyDetails: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        companyType: {
          update: jest.fn(),
        },
        permitType: {
          update: jest.fn(),
        },
        permitCompanyTypes: {
          update: jest.fn(),
        },
        serviceType: {
          update: jest.fn(),
        },
        permitSubmitting: {
          update: jest.fn(),
        },
        permitServerError: {
          update: jest.fn(),
        },
        urlServiceName: {
          update: jest.fn(),
        },
      },
    };
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onInit', () => {
    let serviceName: string;
    let mockFetch: any;
    beforeEach(() => {
      mockFetch = fetch;
      serviceName = PERMIT_AIR_AD;
      props = {
        ...props,
        user: {},
        match: {
          params: { serviceName },
        },
        serviceType: serviceName,
        permitInfo: {
          [serviceName]: {
            requiresUndertakingApproval: false,
            undertaking: {
              isApproved: false,
            },
          },
        },
      };
    });
    it('should be called', async () => {
      const fakePayload = {
        success: true,
        data: {
          result: { AllowedForContactType: true },
        },
      };
      mockFetch.mockImplementation(() => {
        return Promise.resolve(fakePayload);
      });
      await functions.init(props);
      expect(props.actions.permitSubmitting.update).toBeCalled();
      expect(props.actions.permitServerError.update).toBeCalled();
      expect(props.actions.companyType.update).toBeCalled();
      expect(props.actions.permitInfo.update).toBeCalled();
    });
    it('should be called', async () => {
      props.match.params = {};
      mockFetch.mockImplementation(() => {
        return Promise.reject(new Error('some test error'));
      });
      await functions.init(props);
      expect(props.actions.permitSubmitting.update).toBeCalled();
      expect(props.actions.permitServerError.update).toBeCalled();
      expect(props.actions.companyType.update).toBeCalled();
      expect(props.actions.permitInfo.update).toBeCalled();
    });
    it('should be called', async () => {
      props.match.params = {};
      props.serviceType = '';
      await functions.init(props);
      expect(props.actions.urlServiceName.update).toBeCalled();
    });
    it('should be called', async () => {
      const fakePayload = {
        success: true,
        data: {
          result: { AllowedForContactType: false },
        },
      };
      mockFetch.mockImplementation(() => {
        return Promise.resolve(fakePayload);
      });
      props.match.params = { serviceName: PERMIT_DRAWS };
      props = {
        ...props,
        permitInfo: {
          ...props.permitInfo,
          [PERMIT_DRAWS]: {
            undertaking: {
              isApproved: false,
            },
          },
        },
      };
      await functions.init(props);
      expect(props.actions.serviceType.update).toBeCalled();
      expect(props.actions.permitType.update).toBeCalled();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onSubmit', () => {
    beforeEach(() => {
      props = {
        ...props,
        user: {
          IDN: 'test-IDN',
        },
      };
    });
    // eslint-disable-next-line no-console
    console.log = () => {};
    console.info = () => {};
    console.warn = () => {};
    console.error = () => {};

    describe('without businessKey and instanceId', () => {
      beforeEach(() => {
        props = {
          ...props,
          businessKey: '',
          instanceId: '',
        };
      });
      it('should resolve all success ', async () => {
        mockBpmstart.mockImplementation(() => {
          return Promise.resolve({
            success: true,
            data: {
              businessKey: 'test',
              id: 2,
            },
          });
        });
        mockBpmMessage.mockImplementation(() => {
          return Promise.resolve({
            success: true,
            message: 'Success',
          });
        });
        await functions.onSubmit(bpmUrl)(props);
        expect(props.history.push).toBeCalled();
      });
      it('should resolve success false', async () => {
        mockBpmstart.mockImplementation(() => {
          return Promise.resolve({
            success: false,
            data: {},
          });
        });
        await functions.onSubmit(bpmUrl)(props);
        expect(props.actions.permitServerError.update).toBeCalled();
      });
      it('should BPM start API reject request', async () => {
        mockBpmstart.mockImplementation(() => {
          return Promise.reject(new Error('Some Test Error'));
        });
        await functions.onSubmit(bpmUrl)(props);
        expect(props.actions.permitServerError.update).toBeCalled();
      });
      it('should BPM Message API reject request', async () => {
        mockBpmstart.mockImplementation(() => {
          return Promise.resolve({
            success: true,
            data: {
              businessKey: 'test',
              id: 2,
            },
          });
        });
        mockBpmMessage.mockImplementation(() => {
          return Promise.reject(new Error('Some Test Error'));
        });
        await functions.onSubmit(bpmUrl)(props);
        expect(props.actions.permitServerError.update).toBeCalled();
      });
    });
    // eslint-disable-next-line no-console
    console.log = () => {};
    console.info = () => {};
    console.warn = () => {};
    console.error = () => {};

    describe('with businessKey and instanceId', () => {
      beforeEach(() => {
        props = {
          ...props,
          businessKey: 'businessKey',
          instanceId: 'instanceId',
        };
      });
      it('should resolve all success', async () => {
        mockBpmMessage.mockImplementation(() => {
          return Promise.resolve({
            success: true,
            message: 'Success',
          });
        });
        await functions.onSubmit(bpmUrl)(props);
        expect(props.actions.permitServerError.update).toBeCalled();
      });
      it('should resolve success true and random error msg', async () => {
        mockBpmMessage.mockImplementation(() => {
          return Promise.resolve({
            success: true,
            message: 'test',
          });
        });
        await functions.onSubmit(bpmUrl)(props);
        expect(props.actions.permitServerError.update).toBeCalled();
      });
      it('should resolve success true and pre-defined error msg', async () => {
        mockBpmMessage.mockImplementation(() => {
          return Promise.resolve({
            success: true,
            message: 'Incorrect emirates ID',
          });
        });
        await functions.onSubmit(bpmUrl)(props);
        expect(props.actions.permitServerError.update).toBeCalled();
      });
      it('should resolve success false', async () => {
        mockBpmMessage.mockImplementation(() => {
          return Promise.resolve({
            success: false,
            message: 'test',
          });
        });
        await functions.onSubmit(bpmUrl)(props);
        expect(props.actions.permitServerError.update).toBeCalled();
      });
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('getPermitFormChangeHandler', () => {
    it('should update required fields', () => {
      const changeHandler = functions.getPermitFormChangeHandler(props);
      const testPermitType: string = 'test';
      const fieldValues = {
        value: 'new test value',
      };
      changeHandler(props, testPermitType, fieldValues);
      expect(props.actions.permitInfo.update).toBeCalled();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('handlePermitFormChange', () => {
    it('should update required fields', () => {
      const changeHandler = functions.handlePermitFormChange(props);
      changeHandler(props, { serviceType: 'test' });
      expect(props.actions.permitInfo.update).toBeCalled();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('handleCategoryChange', () => {
    it('should update required fields', () => {
      functions.handleCategoryChange(props, '');
      expect(props.actions.permitType.update).toBeCalled();
      expect(props.actions.serviceType.update).toBeCalled();
      expect(props.actions.companyType.update).toBeCalled();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('handleServiceTypeChange', () => {
    it('without user props', () => {
      functions.handleServiceTypeChange(props, '');
      expect(props.actions.serviceType.update).toBeCalled();
      expect(props.actions.companyType.update).toBeCalled();
    });
    it('with user props', () => {
      props.user = {};
      functions.handleServiceTypeChange(props, '');
      expect(props.actions.serviceType.update).toBeCalled();
      expect(props.actions.companyType.update).toBeCalled();
      expect(props.actions.permitInfo.update).toBeCalled();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('handleCompanyTypeChange', () => {
    it('should call companyDetails update', () => {
      functions.handleCompanyTypeChange(props, '');
      expect(props.actions.companyType.update).toBeCalled();
      expect(props.actions.companyDetails.reset).toBeCalled();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('handleCompanyDetailsChange', () => {
    it('should call companyDetails update', () => {
      functions.handleCompanyDetailsChange(props, {});
      expect(props.actions.companyDetails.update).toBeCalled();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('handleRepresentativeTypeChange', () => {
    it('should call companyDetails update ==> representativeType 1', () => {
      functions.handleRepresentativeTypeChange(props, {
        representativeType: '1',
      });
      expect(props.actions.companyDetails.update).toBeCalled();
    });
    it('should call companyDetails update ==> representativeType 2', () => {
      functions.handleRepresentativeTypeChange(props, {
        representativeType: '2',
      });
      expect(props.actions.companyDetails.update).toBeCalled();
    });
    it('should call companyDetails update ==> representativeType default', () => {
      functions.handleRepresentativeTypeChange(props, {
        representativeType: '',
      });
      expect(props.actions.companyDetails.update).toBeCalled();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('handleValidityPeriodChange', () => {
    it('should call validityPeriod update', () => {
      functions.handleValidityPeriodChange(props, {});
      expect(props.actions.validityPeriod.update).toBeCalled();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('getFormFields', () => {
    it('should get permit form fields', () => {
      const companyTypes = functions.getFormFields(props)();
      expect(companyTypes).toBeInstanceOf(Object);
    });
  });
});
