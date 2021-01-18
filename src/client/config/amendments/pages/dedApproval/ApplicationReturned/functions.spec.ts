import bpm from 'client/services/bpm';
import functions from './functions';

jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/dedApproval/ApplicationReturned', () => {
  let props: any;
  const mockBpm: any = bpm.message;

  beforeEach(() => {
    window.scrollTo = jest.fn();

    props = {
      businessKey: 'businessKey',
      currentPage: 'ownership',

      history: {
        push: jest.fn(),
      },
      actions: {
        amendmentServerError: {
          update: jest.fn(),
        },
        pageLoading: {
          update: jest.fn(),
        },
        licenseType: {
          update: jest.fn(),
        },
        amendmentPage: {
          update: jest.fn(),
        },
        profile: {
          update: jest.fn(),
        },
      },
      applicationReturnDocuments: [
        {
          name: 'fileName',
          size: 'fileSize',
        },
      ],
      i18n: jest.fn(),
    };

    mockBpm.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        message: 'Success',
      });
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onUploadDocuments functions', () => {
    it('should be instance of function onUploadDocuments', () =>
      expect(functions.onUploadDocuments).toBeInstanceOf(Function));

    it('should call function onUploadDocuments with bpm success', async () => {
      await functions.onUploadDocuments(props);
    });

    it('should call function onUploadDocuments with bpm success without applicationReturnDocuments', async () => {
      const updatedProps = {
        ...props,
        applicationReturnDocuments: null,
      };
      await functions.onUploadDocuments(updatedProps);
    });

    it('should call function onUploadDocuments with bpm success without applicationReturnDocuments', async () => {
      const updatedProps = {
        ...props,
        applicationReturnDocuments: null,
      };

      mockBpm.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          message: 'Failure',
        });
      });

      await functions.onUploadDocuments(updatedProps);
    });

    it('should call function onUploadDocuments with bpm success without applicationReturnDocuments', async () => {
      const updatedProps = {
        ...props,
        applicationReturnDocuments: null,
      };

      mockBpm.mockImplementation(() => {
        return Promise.resolve({
          success: false,
          error: 'Something went wrong',
        });
      });

      await functions.onUploadDocuments(updatedProps);
    });

    it('should call function onUploadDocuments with bpm success without applicationReturnDocuments', async () => {
      const updatedProps = {
        ...props,
        applicationReturnDocuments: null,
      };

      mockBpm.mockImplementation(() => {
        return Promise.resolve({
          success: false,
          message: 'Something went wrong',
        });
      });

      await functions.onUploadDocuments(updatedProps);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onPageInit functions', () => {
    it('should properly call onPageInit', () => {
      props = {
        apTransactionNumber: 'submit-date',
        submitDate: '13-10-2019',
      };
      expect(functions.onPageInit(props)).toBeInstanceOf(Object);

      props = {
        apTransactionNumber: '',
        submitDate: '',
      };
      expect(functions.onPageInit(props)).toBeInstanceOf(Object);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('init functions', () => {
    it('should properly call onPageInit', () => {
      functions.init(props);
    });
  });
});
