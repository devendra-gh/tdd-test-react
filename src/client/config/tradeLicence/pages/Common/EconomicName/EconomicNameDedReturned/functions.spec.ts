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
        additionalDocumentCategory: {
          update: jest.fn(),
        },
      },
    };
    functions.onDocumentCategoryChange({}, props);
  });

  it('should properly call onFileUpload', async () => {
    const files = ['file'];
    const props = {
      actions: {
        disableDocumentCategorySelection: {
          update: jest.fn(),
        },
        additionalDocumentCategory: {
          update: jest.fn(),
        },
        additionalDocuments: {
          update: jest.fn(),
        },
      },
      uploadDocs: ['document'],
    };
    const fakefetchresponse = {
      status: 'success',
      success: true,
      data: {
        status: '200',
        uploadedFileDetails: 'uploadedFileDetails',
        businessKey: 'economic-licence',
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakefetchresponse);
    });

    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakefetchresponse);
    });

    await functions.onFileUpload(files, props);
  });

  it('should properly call onFileUpload if fetch fail', async () => {
    const files = ['file'];
    const props = {
      actions: {
        disableDocumentCategorySelection: {
          update: jest.fn(),
        },
        additionalDocumentCategory: {
          update: jest.fn(),
        },
        additionalDocuments: {
          update: jest.fn(),
        },
      },
      uploadDocs: ['document'],
    };
    const fakefetchresponse = {
      status: 'fail',
      data: {
        uploadedFileDetails: 'uploadedFileDetails',
        businessKey: 'economic-licence',
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakefetchresponse);
    });

    await functions.onFileUpload(files, props);
  });

  it('should properly call handleDocumentDelete', () => {
    const props = {
      actions: {
        disableDocumentCategorySelection: {
          update: jest.fn(),
        },
        additionalDocumentCategory: {
          update: jest.fn(),
        },
        additionalDocuments: {
          update: jest.fn(),
        },
      },
      uploadDocs: [{ s3FilePath: 'filePath' }],
    };
    functions.handleDocumentDelete('filePath', props);
    expect(props.actions.additionalDocuments.update).toBeCalled();
  });

  it('should properly call handleDocumentDelete without s3FilePath', () => {
    const props = {
      actions: {
        disableDocumentCategorySelection: {
          update: jest.fn(),
        },
        additionalDocumentCategory: {
          update: jest.fn(),
        },
        additionalDocuments: {
          update: jest.fn(),
        },
      },
      uploadDocs: [{ s3FilePath: '' }],
    };
    functions.handleDocumentDelete('filePath', props);
    expect(props.actions.additionalDocuments.update).not.toBeCalled();
  });

  it('should properly call onRemoveFile', () => {
    const props = {
      actions: {
        uploads: {
          reset: jest.fn(),
        },
      },
    };
    functions.onRemoveFile({}, props);
    expect(props.actions.uploads.reset).toBeCalled();
  });

  it('should properly call getDocs', () => {
    const state = {
      additionalDocuments: 'additionalDocuments',
    };
    const data = functions.getDocs(state);
    expect(data).toBe('additionalDocuments');
  });

  it('should properly call getSelectedDocumentCategory', () => {
    const state = {
      additionalDocumentCategory: 'additionalDocumentCategory',
    };
    const data = functions.getSelectedDocumentCategory(state);
    expect(data).toBe('additionalDocumentCategory');
  });

  it('should properly call getCapId', () => {
    const state = {
      economicNameCapId: 'economicNameCapId',
    };
    const data = functions.getCapId(state);
    expect(data).toBe('economicNameCapId');
  });

  // it('should properly call getStep with branchForeign', () => {
  //   const state = {
  //     economicLicense: {
  //       licenceType: { licenceType: 'branchForeign' },
  //     },
  //   };
  //   const data = functions.getStep(state);
  //   expect(data).toMatchObject([
  //     {
  //       name: 'economic_name',
  //       subSteps: ['ded_approval', 'payment', 'initial_approval'],
  //     },
  //     { name: 'initial_registration' },
  //     {
  //       name: 'economic_licence',
  //       subSteps: ['submit_licence', 'ded_approval', 'payment'],
  //     },
  //     { name: 'final_registration' },
  //   ]);
  // });

  // it('should properly call getStep with branchGCC', () => {
  //   const state = {
  //     economicLicense: {
  //       licenceType: { licenceType: 'branchGCC' },
  //     },
  //   };
  //   const data = functions.getStep(state);
  //   expect(data).toMatchObject([
  //     {
  //       name: 'economic_name',
  //       subSteps: ['ded_approval', 'payment', 'initial_approval'],
  //     },
  //     { name: 'initial_registration' },
  //     {
  //       name: 'economic_licence',
  //       subSteps: ['submit_licence', 'ded_approval', 'payment'],
  //     },
  //     { name: 'final_registration' },
  //   ]);
  // });

  // it('should properly call getStep with otherLicences', () => {
  //   const state = {
  //     economicLicense: {
  //       licenceType: { licenceType: 'instant' },
  //     },
  //   };
  //   const data = functions.getStep(state);
  //   expect(data).toMatchObject([
  //     {
  //       name: 'economic_name',
  //       subSteps: [
  //         'ded_approval',
  //         'payment',
  //         'initial_approval',
  //         'download_certificate',
  //       ],
  //     },
  //     {
  //       name: 'economic_licence',
  //       subSteps: ['ded_approval', 'payment', 'download_certificate'],
  //     },
  //   ]);
  // });
});
