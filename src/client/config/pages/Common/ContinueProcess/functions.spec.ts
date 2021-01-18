// import qs from 'querystring';
import bpm from 'client/services/bpm';
import { continueProcess, syncLicenseTypeAndCode } from './functions';

jest.mock('querystring');
jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/common/continueProcess', () => {
  // const mockQs = qs.parse;
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
  it('should properly call continueProcess ', async () => {
    // mockQs.mockImplementation(() => {
    //   return {
    //     instanceId: 'instanceId',
    //     businessKey: 'businessKey',
    //   };
    // });

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
    // mockQs.mockImplementation(() => {
    //   return {
    //     instanceId: 'instanceId',
    //     businessKey: 'businessKey',
    //   };
    // });

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
    // mockQs.mockImplementation(() => {
    //   return {
    //     instanceId: 'instanceId',
    //     businessKey: 'businessKey',
    //   };
    // });

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
    // mockQs.mockImplementation(() => {
    //   return {
    //     instanceId: 'instanceId',
    //     businessKey: 'businessKey',
    //   };
    // });

    mockBpmVariables.mockImplementation(() => {
      return Promise.resolve({
        data: {},
      });
    });
    await continueProcess(props);
    expect(mockBpmVariables).toBeCalled();
  });

  it('should properly call syncLicenseTypeAndCode', async () => {
    mockBpmVariables.mockImplementation(() => {
      return Promise.resolve({
        data: {},
      });
    });

    props = {
      instanceId: '',
      businessKey: '',
    };

    await syncLicenseTypeAndCode(props);
  });

  it('should properly call syncLicenseTypeAndCode with props 1', async () => {
    mockBpmVariables.mockImplementation(() => {
      return Promise.resolve({
        data: {},
      });
    });

    props = {
      instanceId: 'test',
      businessKey: 'test',
      economicLicense: '',
      actions: {
        economicLicense: {
          update: jest.fn(),
        },
      },
    };

    await syncLicenseTypeAndCode(props);
  });

  it('should properly call syncLicenseTypeAndCode with props 2', async () => {
    mockBpmVariables.mockImplementation(() => {
      return Promise.resolve({
        data: {
          licenceType: {
            value: 'test',
          },
          businessLegalFormCode: 'test',
        },
      });
    });

    props = {
      instanceId: 'test',
      businessKey: 'test',
      economicLicense: '',
      actions: {
        economicLicense: '',
      },
    };

    await syncLicenseTypeAndCode(props);
  });

  it('should properly call syncLicenseTypeAndCode with props 3', async () => {
    mockBpmVariables.mockImplementation(() => {
      return Promise.resolve({
        data: {
          licenceType: false,
          businessLegalFormCode: false,
        },
      });
    });

    props = {
      instanceId: 'test',
      businessKey: 'test',
      economicLicense: 'test',
      actions: {
        economicLicense: {
          update: jest.fn(),
        },
      },
    };

    await syncLicenseTypeAndCode(props);
  });

  it('should properly call syncLicenseTypeAndCode with props 4', async () => {
    mockBpmVariables.mockImplementation(() => {
      return Promise.resolve({
        data: {
          licenceType: {
            value: 'test',
          },
          businessLegalFormCode: 'test',
        },
      });
    });

    props = {
      instanceId: 'test',
      businessKey: 'test',
      economicLicense: 'test',
      actions: {
        economicLicense: {
          update: jest.fn(),
        },
      },
    };

    await syncLicenseTypeAndCode(props);
  });
});
