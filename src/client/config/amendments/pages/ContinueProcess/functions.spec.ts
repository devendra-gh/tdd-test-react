import * as setUpdateReduxState from 'client/config/amendments/utils/setUpdateReduxState';
import functions from './functions';

const qs = require('querystring');

jest.mock('client/config/amendments/utils/setUpdateReduxState');
jest.mock('querystring');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/ContinueProcess', () => {
  let mockCall: any;
  let props: any;
  const mockQs: any = qs.parse;
  beforeEach(() => {
    mockCall = setUpdateReduxState.setReduxState;
    mockQs.mockImplementation(() => {
      return {
        instanceId: 'instanceId',
        businessKey: 'businessKey',
      };
    });
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
          reset: jest.fn(),
        },
        capID: {
          reset: jest.fn(),
        },
        licenseType: {
          reset: jest.fn(),
        },
        prevLicenseType: {
          reset: jest.fn(),
        },
        legalForm: {
          reset: jest.fn(),
        },
        prevLegalForm: {
          reset: jest.fn(),
        },
        amendmentCategories: {
          reset: jest.fn(),
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
        dedErrorMessage: {
          reset: jest.fn(),
        },
      },
    };
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onPageInit functions', () => {
    it('properly call continue-process if businessKey or instanceId is missing', async () => {
      mockCall.mockImplementation(() => {
        return Promise.resolve('/amendments/upload');
      });
      mockQs.mockImplementation(() => {
        return {
          instanceId: 'instanceId',
          businessKey: '',
        };
      });
      functions.onPageInit(props);
      expect(props.history.push).not.toBeCalled();
    });

    it('properly call continue-process if redirect state is there', async () => {
      mockCall.mockImplementation(() => {
        return Promise.resolve('/amendments/upload');
      });
      functions.onPageInit(props);
      expect(props.history.push).not.toBeCalled();
    });

    it('properly call continue-process if redirect state is there', async () => {
      mockCall.mockImplementation(() => {
        return Promise.resolve('');
      });
      functions.onPageInit(props);
      expect(props.history.push).not.toBeCalled();
    });

    it('fail continue-process if props action is missing (licenseType)', async () => {
      mockCall.mockImplementation(() => {
        return Promise.resolve('');
      });
      const updatedProps = {
        ...props,
        actions: undefined,
      };
      functions.onPageInit(updatedProps);
      expect(props.history.push).toBeCalled();
    });
  });
});
