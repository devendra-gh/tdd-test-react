import qs from 'querystring';
import bpm from 'client/services/bpm';
import { continueProcess, syncLicenseTypeAndCode } from './functions';

jest.mock('querystring');
jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/common', () => {
  const mockQs: any = qs.parse;
  const mockBpmVariables: any = bpm.getVariables;
  let props: any;
  beforeEach(() => {
    props = {
      actions: {
        businessKey: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
        partners: {
          update: jest.fn(),
        },
        smartPassData: {
          update: jest.fn(),
        },
        economicLicense: {
          update: jest.fn(),
        },
        cnNumber: {
          update: jest.fn(),
        },
        tnNumber: {
          update: jest.fn(),
        },
      },
      history: {
        location: {
          search: '',
        },
      },
    };
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('continueProcess', () => {
    it('should properly call continueProcess ', async () => {
      mockQs.mockImplementation(() => {
        return {
          instanceId: 'instanceId',
          businessKey: 'businessKey',
        };
      });

      mockBpmVariables.mockImplementation(() => {
        return Promise.resolve({
          data: {
            logUuid: '12345',
            partners: { value: JSON.stringify(['partner1']) },
            smartPassData: { value: JSON.stringify(['smartPassData1']) },
            licenceType: { value: JSON.stringify(['licenceType1']) },
            businessLegalFormCode: {
              value: JSON.stringify(['businessLegalFormCode1']),
            },
            tnNumber: { value: 'TN-123456' },
            cnNumber: { value: 'CN-123456' },
            state: { value: '/link' },
          },
        });
      });
      await continueProcess(props);
      expect(mockBpmVariables).toBeCalled();
    });

    it('should properly call continueProcess without redux actions', async () => {
      props.actions = {};
      mockQs.mockImplementation(() => {
        return {
          instanceId: 'instanceId',
          businessKey: 'businessKey',
        };
      });

      mockBpmVariables.mockImplementation(() => {
        return Promise.resolve({
          data: {
            logUuid: '12345',
            partners: { value: JSON.stringify(['partner1']) },
            smartPassData: { value: JSON.stringify(['smartPassData1']) },
            licenceType: { value: JSON.stringify(['licenceType1']) },
            businessLegalFormCode: {
              value: JSON.stringify(['businessLegalFormCode1']),
            },
            tnNumber: { value: 'TN-123456' },
            cnNumber: { value: 'CN-123456' },
            state: { value: '/link' },
          },
        });
      });
      await continueProcess(props);
      expect(mockBpmVariables).toBeCalled();
    });

    it('should properly call continueProcess without variables', async () => {
      mockQs.mockImplementation(() => {
        return {
          instanceId: 'instanceId',
          businessKey: 'businessKey',
        };
      });

      mockBpmVariables.mockImplementation(() => {
        return Promise.resolve({
          data: {
            logUuid: '12345',
          },
        });
      });
      await continueProcess(props);
      expect(mockBpmVariables).toBeCalled();
    });

    it('should properly call continueProcess without logUuid ', async () => {
      mockQs.mockImplementation(() => {
        return {
          instanceId: 'instanceId',
          businessKey: 'businessKey',
        };
      });

      mockBpmVariables.mockImplementation(() => {
        return Promise.resolve({
          data: {},
        });
      });
      await continueProcess(props);
      expect(mockBpmVariables).toBeCalled();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('syncLicenseTypeAndCode', () => {
    it('should properly call syncLicenseTypeAndCode ', async () => {
      props.instanceId = 'instanceId';
      props.businessKey = 'businessKey';
      mockQs.mockImplementation(() => {
        return {
          instanceId: 'instanceId',
          businessKey: 'businessKey',
        };
      });

      mockBpmVariables.mockImplementation(() => {
        return Promise.resolve({
          data: {
            logUuid: '12345',
            partners: { value: JSON.stringify(['partner1']) },
            smartPassData: { value: JSON.stringify(['smartPassData1']) },
            licenceType: { value: JSON.stringify(['licenceType1']) },
            businessLegalFormCode: {
              value: JSON.stringify(['businessLegalFormCode1']),
            },
            tnNumber: { value: 'TN-123456' },
            cnNumber: { value: 'CN-123456' },
            state: { value: '/link' },
          },
        });
      });
      await syncLicenseTypeAndCode(props);
    });
  });
});
