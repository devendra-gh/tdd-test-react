import fetch from 'client/services/fetch';
import InternalApi from './InternalApi';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('InternalApi', () => {
  let mockFetch: any;

  beforeAll(() => {
    mockFetch = fetch;
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('sendErrorLogs', () => {
    it('should be instance of function', () => {
      expect(InternalApi.sendErrorLogs).toBeInstanceOf(Function);
    });

    it('should call api with post method with correct params', () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({});
      });

      const data = {
        some: 'error',
      };

      InternalApi.sendErrorLogs(data);
    });

    it('should call uploadDedDoc with post method with correct params', () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({});
      });
      const file = 'some_file';
      const formData = new FormData();
      formData.append('file', file);
      InternalApi.uploadDedDoc(file);
    });

    it('should call uploadDocumentToDed with post method with correct params', () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({});
      });
      const data = {};
      InternalApi.uploadDocumentToDed(data);
    });
  });
});
