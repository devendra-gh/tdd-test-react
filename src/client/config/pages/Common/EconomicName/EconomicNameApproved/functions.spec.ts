import fetch from 'client/services/fetch';
import { get } from 'lodash';
import functions from './functions';

jest.mock('client/services/fetch');
jest.mock('lodash');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('EconomicNameApproved', () => {
  let mockFetch: any;
  let mockLodash: any;

  let props: any;
  beforeEach(() => {
    mockFetch = fetch;
    mockLodash = get;

    props = {
      businessKey: 'business-key',
      files: [
        {
          fieldName: 'ownershipAttachment',
          documentName: 'Info_Desk_English_33970.pdf',
          documentPath:
            'journey-id**-zLrNu46902WixqNdajS8PjuwKid7-kv**/tmp/uploaded/**0317138711934203951575012598.pdf__mgJASIoUigdw3YLbQm4jdCbMhi4x',
          type: 'application/pdf',
          lastModified: 1571919086878,
          size: 89016,
        },
      ],
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should instant of function', () => {
    expect(functions.onClick).toBeInstanceOf(Function);
  });

  it('should call api with correct params', async () => {
    const fakePayload = {
      success: true,
      data: {
        id: 2,
        businessKey: 'economic-licence',
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });
    await functions.onClick(props);

    expect(mockFetch).toHaveBeenCalledWith(
      '/api/proxy/bpm/economicLicence/message',
      'POST',
      {
        businessKey: 'business-key',
        messageName: 'onSubmitLicence',
        variables: {
          documentsLicence:
            '[{"fieldName":"ownershipAttachment","documentName":"Info_Desk_English_33970.pdf","documentPath":"journey-id**-zLrNu46902WixqNdajS8PjuwKid7-kv**/tmp/uploaded/**0317138711934203951575012598.pdf__mgJASIoUigdw3YLbQm4jdCbMhi4x","type":"application/pdf","lastModified":1571919086878,"size":89016}]',
        },
      },
    );
  });

  it('should call api properly without files', async () => {
    const fakePayload = {
      success: true,
      data: {
        id: 2,
        businessKey: 'economic-licence',
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });

    await functions.onClick({ ...props, files: null });

    expect(mockFetch).toHaveBeenCalledWith(
      '/api/proxy/bpm/economicLicence/message',
      'POST',
      {
        businessKey: 'business-key',
        messageName: 'onSubmitLicence',
        variables: {
          documentsLicence: '',
        },
      },
    );
  });

  it('should properly call getStep with branchForeign ', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'branchForeign' },
      },
    };
    expect(functions.getStep(state)).toMatchObject([
      {
        name: 'economic_name',
        subSteps: ['ded_approval', 'payment', 'initial_approval'],
      },
      { name: 'initial_registration' },
      {
        name: 'economic_licence',
        subSteps: ['submit_licence', 'ded_approval', 'payment'],
      },
      { name: 'final_registration' },
    ]);
  });

  it('should properly call getStep with branchGCC ', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'branchGCC' },
      },
    };
    expect(functions.getStep(state)).toMatchObject([
      {
        name: 'economic_name',
        subSteps: ['ded_approval', 'payment', 'initial_approval'],
      },
      { name: 'initial_registration' },
      {
        name: 'economic_licence',
        subSteps: ['submit_licence', 'ded_approval', 'payment'],
      },
      { name: 'final_registration' },
    ]);
  });

  it('should properly call getStep with otherLicenceType ', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'otherLicenceType' },
      },
    };

    expect(functions.getStep(state)).toMatchObject([
      {
        name: 'economic_name',
        subSteps: [
          'ded_approval',
          'payment',
          'initial_approval',
          'download_certificate',
        ],
      },
      {
        name: 'economic_licence',
        subSteps: ['ded_approval', 'payment', 'download_certificate'],
      },
    ]);
  });

  it('should properly call getStepStatus with branchGCC or branchForeign', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'branchGCC' },
      },
    };
    expect(functions.getStepStatus(state)).toMatchObject({
      economic_name: 'finish',
      'economic_name.ded_approval': 'finish',
      'economic_name.initial_approval': 'finish',
      'economic_name.payment': 'finish',
      initial_registration: 'finish',
    });
  });

  it('should properly call getStepStatus with otherLicenceType ', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'otherLicenceType' },
      },
    };

    expect(functions.getStepStatus(state)).toMatchObject({
      'economic_name.ded_approval': 'finish',
      'economic_name.initial_approval': 'finish',
      'economic_name.payment': 'finish',
    });
  });

  it('should properly call getCurrentStep with branchGCC or branchForeign', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'branchGCC' },
      },
    };
    expect(functions.getCurrentStep(state)).toBe('economic_licence');
  });

  it('should properly call getCurrentStep with otherLicenceType', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'otherLicenceType' },
      },
    };
    expect(functions.getCurrentStep(state)).toBe('economic_name');
  });

  it('should properly call getCurrentSubStep with branchGCC or branchForeign', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'branchGCC' },
      },
    };
    expect(functions.getCurrentSubStep(state)).toBe('submit_licence');
  });

  it('should properly call getCurrentSubStep with otherLicenceType', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'otherLicenceType' },
      },
    };
    expect(functions.getCurrentSubStep(state)).toBe('download_certificate');
  });

  it('should properly call fetchAttachments', async () => {
    const fakePayload = {
      success: true,
      data: {
        id: 2,
        businessKey: 'economic-licence',
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });
    mockLodash.mockImplementation(() => {
      return Promise.resolve({ data: 'some-data' });
    });
    const data = await functions.fetchAttachments('1002', 'establishment');

    expect(mockFetch).toBeCalledWith('/pub/proxy/getRequirements', 'POST', {
      activityId: '1002',
      legalType: 'establishment',
      location: 'ABU DHABI',
      transactionType: 'License Issue',
      type: 'Document',
    });
    expect(data).toMatchObject({ data: 'some-data' });
  });

  it('should properly call uploadFile', () => {
    const state = {
      props: {},
    };

    expect(functions.uploadFile(state));
  });

  it('should properly call getDocuments', () => {
    const state = {
      economicLicenceDocuments: 'economic-Licence-Documents',
    };
    expect(functions.getDocuments(state)).toBe('economic-Licence-Documents');
  });

  it('should properly call getActivites', () => {
    const state = {
      economicLicenceActivities: 'economic-Licence-Activities',
    };
    expect(functions.getActivites(state)).toBe('economic-Licence-Activities');
  });

  it('should properly call uploadFile ', async () => {
    const state = {
      economicLicenceConditions: ['some data'],
    };
    const props1 = {};
    const files = [{}, {}];

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        data: {
          uploadedFileDetails: {
            nameOfFile: 'name-of-file',
            lastModifiedDate: 'last-Modified-Date',
            s3FilePath: 's3-File-Path',
          },
        },
      });
    });
    expect(await functions.uploadFile(state)(props1)('filedName')(files)).toBe(
      undefined,
    );
  });

  it('should properly call uploadFile and throw an error', async () => {
    const state = {
      economicLicenceConditions: ['some data'],
    };
    const props2 = {
      actions: { economicLicenceDocuments: { update: jest.fn() } },
    };
    const files = ['file-1-data', 'file-2-data'];

    mockFetch.mockImplementation(() => {
      return Promise.resolve({});
    });
    expect(await functions.uploadFile(state)(props2)('filedName')(files)).toBe(
      undefined,
    );
  });

  it('should properly call removeFile ', async () => {
    const state = {
      economicLicenceDocuments: [
        { fieldName: 'document-1' },
        { fieldName: 'document-2' },
      ],
    };
    const props3 = {
      actions: {
        economicLicenceDocuments: { update: jest.fn() },
      },
    };

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        data: {
          uploadedFileDetails: {
            nameOfFile: 'name-of-file',
            lastModifiedDate: 'last-Modified-Date',
            s3FilePath: 's3-File-Path',
          },
        },
      });
    });
    expect(await functions.removeFile(state)(props3)('filedName')()).toBe(
      undefined,
    );
  });

  it('should properly call getConditions and return mappedConditions', () => {
    const state = {
      economicLicenceConditions: [
        {
          RequirementDescEn: 'RequirementDescEn',
          RequirementDescAr: 'RequirementDescAr',
        },
      ],
    };
    const mappedConditions = functions.getConditions(state);
    expect(mappedConditions).toMatchObject([
      { labelEn: 'RequirementDescEn', labelAr: 'RequirementDescAr' },
    ]);
  });

  it('should properly call formatActivities return mappedActivityCode', () => {
    const activityData = ['activity 25475', 'activity 15547'];
    const mappedActivityCode = functions.formatActivities(activityData);
    expect(mappedActivityCode).toBeInstanceOf(Object);
  });

  it('should properly call documentDownload', () => {
    const props4 = {
      capId: 'cap-id',
      tnNumber: 'TN-NUMBER',
    };
    window.open = jest.fn();
    functions.documentDownload(props4);
    expect(window.open).toBeCalled();
  });

  it('should properly call fetchConditions', async () => {
    const activityData = ['activity 25475', 'activity 15547'];

    const fakePayload = {
      success: true,
      data: {
        id: 2,
        businessKey: 'economic-licence',
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });
    mockLodash.mockImplementation(() => {
      return Promise.resolve({ data: 'some-data' });
    });
    const data = await functions.fetchConditions(activityData, 'establishment');
    expect(mockFetch).toBeCalledWith('/pub/proxy/getRequirements', 'POST', {
      activityId: ',',
      legalType: 'establishment',
      location: 'ABU DHABI',
      transactionType: 'License Issue',
      type: 'Condition',
    });
    expect(data).toMatchObject({ data: 'some-data' });
  });

  it('should properly getTawtheeqStatus', () => {
    const state = {
      tawtheeqNumber: {
        status: 'Pending',
        tawtheeqNumber: 10089,
      },
    };
    expect(functions.getTawtheeqStatus(state)).toBe('Pending');
  });

  it('should properly getTawtheeqValue', () => {
    const state = {
      tawtheeqNumber: {
        status: 'Pending',
        tawtheeqNumber: 10089,
      },
    };
    expect(functions.getTawtheeqValue(state)).toBe(10089);
  });

  it('should properly update tawtheeqNumber to redux', () => {
    const actions = {
      tawtheeqNumber: {
        update: jest.fn(),
      },
    };
    functions.inputOnChange('value', actions);
    expect(actions.tawtheeqNumber.update).toBeCalled();
  });

  it('should properly call onBlur if fetch success', async () => {
    const actions = {
      tawtheeqNumber: {
        update: jest.fn(),
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({ success: true });
    });
    await functions.onBlur('10087', actions);
    expect(actions.tawtheeqNumber.update).toBeCalledTimes(1);
  });

  it('should properly call onBlur if fetch fail', async () => {
    const actions = {
      tawtheeqNumber: {
        update: jest.fn(),
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({ success: false });
    });
    await functions.onBlur('10087', actions);
    expect(actions.tawtheeqNumber.update).toBeCalledTimes(1);
  });

  it('should properly call onBlur without value', async () => {
    const actions = {
      tawtheeqNumber: {
        update: jest.fn(),
      },
    };

    await functions.onBlur('', actions);
    expect(actions.tawtheeqNumber.update).toBeCalledTimes(1);
  });
});
