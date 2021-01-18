import fetch from 'client/services/fetch';
import InternalApi from './InternalApi';

jest.mock('client/services/fetch');

describe('InternalApi', () => {
  let mockFetch: any;

  beforeAll(() => {
    mockFetch = fetch;
  });

  describe('sendErrorLogs', () => {
    it('should be instance of function', () =>
      expect(InternalApi.sendErrorLogs).toBeInstanceOf(Function));

    it('should call api with post method with correct params', () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({});
      });

      const data = {
        some: 'error',
      };

      InternalApi.sendErrorLogs(data);

      expect(mockFetch).toHaveBeenCalledWith('/error-logging', 'POST', {
        data,
      });
    });

    it('should call uploadDedDoc with post method with correct params', () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({});
      });
      const file = 'some_file';
      const formData = new FormData();
      formData.append('file', file);
      InternalApi.uploadDedDoc(file);
      expect(mockFetch).toHaveBeenCalledWith(
        '/api/upload/uploadDocuments',
        'POST',
        formData,
        true,
      );
    });

    it('should call uploadDocumentToDed with post method with correct params', () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({});
      });
      const data = {};
      InternalApi.uploadDocumentToDed(data);
      expect(mockFetch).toHaveBeenCalledWith(
        '/api/proxy/uploadDocument',
        'POST',
        {},
        false,
      );
    });
  });

  describe('getServiceByPath', () => {
    it('should be instance of function', () =>
      expect(InternalApi.getServiceByPath).toBeInstanceOf(Function));

    it('should call api with get method with correct params', () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({});
      });

      const servicePath = '/servicePath';

      InternalApi.getServiceByPath(servicePath);

      expect(mockFetch).toHaveBeenCalledWith(
        `/pub/service/gsp-path/${servicePath}`,
      );
    });
  });

  describe('getServiceByPath', () => {
    it('should be instance of function', () =>
      expect(InternalApi.getServiceByPath).toBeInstanceOf(Function));

    it('should call api with get method with correct params', () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({});
      });

      const servicePath = '/servicePath';

      InternalApi.getServiceByPath(servicePath);

      expect(mockFetch).toHaveBeenCalledWith(
        `/pub/service/gsp-path/${servicePath}`,
      );
    });
  });

  describe('getServiceByPath', () => {
    it('should be instance of function', () =>
      expect(InternalApi.getServiceByPath).toBeInstanceOf(Function));

    it('should call api with get method with correct params', () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({});
      });

      const servicePath = '/servicePath';

      InternalApi.getServiceByPath(servicePath);

      expect(mockFetch).toHaveBeenCalledWith(
        `/pub/service/gsp-path/${servicePath}`,
      );
    });
  });
});
