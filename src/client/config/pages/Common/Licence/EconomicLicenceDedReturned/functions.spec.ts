import fetch from 'client/services/fetch';
import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EconomicNameDedReturned', () => {
  let mockFetch: any;
  beforeEach(() => {
    mockFetch = fetch;
  });

  it('should properly call onDocumentCategoryChange', () => {
    const props = {
      actions: {
        licenceAdditionalDocumentCategory: {
          update: jest.fn(),
        },
      },
    };
    functions.onDocumentCategoryChange({}, props);
    expect(props.actions.licenceAdditionalDocumentCategory.update).toBeCalled();
  });

  it('should properly call onFileUpload', async () => {
    const files = ['file'];
    const props = {
      actions: {
        disableDocumentCategorySelection: {
          update: jest.fn(),
        },
        licenceAdditionalDocuments: {
          update: jest.fn(),
        },
        licenceAdditionalDocumentCategory: {
          update: jest.fn(),
        },
      },
      uploadDocs: ['document'],
    };
    const fakefetchresponse = {
      success: true,
      status: 'success',
      data: {
        status: '200',
        uploadedFileDetails: 'uploadedFileDetails',
        businessKey: 'economic-licence',
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakefetchresponse);
    });

    await functions.onFileUpload(files, props);
    expect(mockFetch).toBeCalledTimes(2);
  });

  it('should properly call onFileUpload if fetch fail', async () => {
    const files = ['file'];
    const props = {
      actions: {
        disableDocumentCategorySelection: {
          update: jest.fn(),
        },
        licenceAdditionalDocuments: {
          update: jest.fn(),
        },
        licenceAdditionalDocumentCategory: {
          update: jest.fn(),
        },
      },
      uploadDocs: ['document'],
    };
    const fakefetchresponse = {
      status: 'fail',
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakefetchresponse);
    });

    await functions.onFileUpload(files, props);
  });

  it('should properly call onFileUpload', async () => {
    const files = ['file'];
    const props = {
      actions: {
        disableDocumentCategorySelection: {
          update: jest.fn(),
        },
        licenceAdditionalDocuments: {
          update: jest.fn(),
        },
        licenceAdditionalDocumentCategory: {
          update: jest.fn(),
        },
      },
      uploadDocs: ['document'],
    };
    const fakefetchresponse = {
      success: true,
      status: 'success',
      data: {
        status: '400',
        uploadedFileDetails: 'uploadedFileDetails',
        businessKey: 'economic-licence',
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakefetchresponse);
    });

    await functions.onFileUpload(files, props);
    expect(mockFetch).toBeCalledTimes(2);
  });
  it('should properly call handleDocumentDelete', () => {
    const props = {
      actions: {
        licenceAdditionalDocuments: {
          update: jest.fn(),
        },
      },
      uploadDocs: [{ s3FilePath: 'filePath' }],
    };
    functions.handleDocumentDelete('filePath', props);
    expect(props.actions.licenceAdditionalDocuments.update).toBeCalled();
  });

  it('should properly call handleDocumentDelete without s3FilePath', () => {
    const props = {
      actions: {
        licenceAdditionalDocuments: {
          update: jest.fn(),
        },
      },
      uploadDocs: [{ s3FilePath: '' }],
    };
    functions.handleDocumentDelete('filePath', props);
    expect(props.actions.licenceAdditionalDocuments.update).not.toBeCalled();
  });

  it('should properly call getDocs', () => {
    const state = {
      licenceAdditionalDocuments: 'additionalDocuments',
    };
    const data = functions.getDocs(state);
    expect(data).toBe('additionalDocuments');
  });

  it('should properly call getSelectedDocumentCategory', () => {
    const state = {
      licenceAdditionalDocumentCategory: 'additionalDocumentCategory',
    };
    const data = functions.getSelectedDocumentCategory(state);
    expect(data).toBe('additionalDocumentCategory');
  });

  it('should properly call getCapId', () => {
    const state = {
      licenceCapId: 'economicNameCapId',
    };
    const data = functions.getCapId(state);
    expect(data).toBe('economicNameCapId');
  });

  it('should properly call getStep with instant', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'instant' },
        legalForm: { licenceType: 'instant' },
      },
    };
    const data = functions.getStep(state);
    expect(data).toMatchObject([
      { name: 'ded_approval' },
      { name: 'ica_payment' },
      { name: 'initial_approval' },
      { name: 'payment' },
      { name: 'download_certificate' },
    ]);
  });

  it('should properly call getStep with allInOne', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'allInOne' },
        legalForm: { licenceType: 'allInOne' },
      },
    };
    const data = functions.getStep(state);
    expect(data).toMatchObject([
      { name: 'ded_approval' },
      { name: 'ica_payment' },
      { name: 'initial_approval' },
      { name: 'payment' },
      { name: 'download_certificate' },
    ]);
  });

  it('should properly call getStep with tajer', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'tajer' },
        legalForm: { licenceType: 'tajer' },
      },
    };
    const data = functions.getStep(state);
    expect(data).toMatchObject([
      { name: 'ded_approval' },
      { name: 'ica_payment' },
      { name: 'initial_approval' },
      { name: 'payment' },
      { name: 'download_certificate' },
    ]);
  });

  it('should properly call getStep with otherLicences', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'otherLicences' },
        legalForm: { licenceType: 'otherLicences' },
      },
    };
    const data = functions.getStep(state);
    expect(data).toMatchObject([
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

  it('should properly call getStep with branchForeign', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'branchForeign' },
        legalForm: { licenceType: 'branchForeign' },
      },
    };
    const data = functions.getStep(state);
    expect(data).toMatchObject([
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

  it('should properly call getCurrentStep with allInOne', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'allInOne' },
        legalForm: { licenceType: 'allInOne' },
      },
    };
    const data = functions.getCurrentStep(state);
    expect(data).toBe('ded_approval');
  });

  it('should properly call getCurrentStep with otherLicence', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'otherLicence' },
        legalForm: { licenceType: 'otherLicence' },
      },
    };
    const data = functions.getCurrentStep(state);
    expect(data).toBe('economic_licence');
  });

  it('should properly call getStepStatus with otherLicence', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'otherLicence' },
        legalForm: { licenceType: 'otherLicence' },
      },
    };
    const data = functions.getStepStatus(state);
    expect(data).toMatchObject({
      'economic_name.ded_approval': 'finish',
      'economic_name.payment': 'finish',
      'economic_name.initial_approval': 'finish',
      'economic_name.download_certificate': 'finish',
      economic_name: 'finish',
    });
  });
  it('should properly call getStepStatus with instant', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'instant' },
        legalForm: { licenceType: 'instant' },
      },
    };
    const data = functions.getStepStatus(state);
    expect(data).toMatchObject({});
  });

  it('should properly call getStepStatus with branchForeign', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'branchForeign' },
        legalForm: { legalForm: 'branchForeign' },
      },
    };
    const data = functions.getStepStatus(state);
    expect(data).toMatchObject({
      'economic_name.ded_approval': 'finish',
      'economic_name.payment': 'finish',
      'economic_name.initial_approval': 'finish',
      economic_name: 'finish',
      initial_registration: 'finish',
      'economic_licence.submit_licence': 'finish',
    });
  });
});
