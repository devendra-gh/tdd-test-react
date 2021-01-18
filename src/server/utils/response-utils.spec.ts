import {
  createResponse,
  createInvalidParameterResponse,
  createSuccessResponse,
  createErrorResponse,
  createAccessDeniedResponse,
} from './response-utils';

/** @returns {Object} */
const getRequest = () => ({
  log: {
    error: jest.fn(),
  },
});

/** @returns {Object} */
const getResponse = () => ({
  status: jest.fn().mockReturnThis(),
  json: jest.fn().mockReturnThis(),
  req: {
    originalUrl: 'some-url',
  },
});

describe('response-utils', () => {
  let response: any;
  let request: any;

  beforeEach(() => {
    response = getResponse();
    request = getRequest();
  });

  describe('createResponse', () => {
    it('should pass params to response methods', () => {
      const params = {
        response,
        code: 200,
        success: true,
        message: 'message',
        data: {
          some: 'data',
        },
        error: {
          some: 'error',
        },
      };

      createResponse(params);

      expect(response.status).toHaveBeenCalledWith(params.code);
      expect(response.json).toHaveBeenCalledWith({
        success: params.success,
        message: params.message,
        error: params.error,
        data: params.data,
      });
    });
  });

  describe('createInvalidParameterResponse', () => {
    it('should pass params to response methods', () => {
      const error = {};

      createInvalidParameterResponse(request, response, error);

      expect(response.status).toHaveBeenCalledWith(400);
      expect(response.json).toHaveBeenCalledWith({
        message: 'Validation Error',
        error,
        success: false,
        data: {},
      });
    });

    it('should pass params to response methods (with default error)', () => {
      createInvalidParameterResponse(request, response);

      expect(response.status).toHaveBeenCalledWith(400);
      expect(response.json).toHaveBeenCalledWith({
        message: 'Validation Error',
        error: {},
        success: false,
        data: {},
      });
    });

    it('should log error with its data', () => {
      const testMessage = 'Some error';
      const testError = new Error(testMessage);

      createInvalidParameterResponse(request, response, testError, testMessage);

      expect(request.log.error).toHaveBeenCalledWith(testMessage, {
        err: testError,
      });
    });
  });

  describe('createSuccessResponse', () => {
    it('should pass params to response methods', () => {
      createSuccessResponse(response);

      expect(response.status).toHaveBeenCalledWith(200);
      expect(response.json).toHaveBeenCalledWith({
        data: {},
        error: {},
        message: 'Success',
        success: true,
      });
    });
  });

  describe('createErrorResponse', () => {
    it('should pass params to response methods', () => {
      createErrorResponse(request, response);

      expect(response.status).toHaveBeenCalledWith(500);
      expect(response.json).toHaveBeenCalledWith({
        data: {},
        error: {},
        message: 'Server Internal Error',
        success: false,
      });
    });

    it('should log error with its data', () => {
      const testMessage = 'Some error';
      const testError = new Error(testMessage);

      createErrorResponse(request, response, testMessage, testError);

      expect(request.log.error).toHaveBeenCalledWith(testMessage, {
        err: testError,
      });
    });
  });

  describe('createAccessDeniedResponse', () => {
    it('should pass params to response methods', () => {
      createAccessDeniedResponse(request, response);

      expect(response.status).toHaveBeenCalledWith(403);
      expect(response.json).toHaveBeenCalledWith({
        data: {},
        error: {},
        message: 'Sorry you do not have permission anymore',
        success: false,
      });
    });

    it('should log error with its data', () => {
      const testMessage = 'Some error';
      const testError = new Error(testMessage);

      createErrorResponse(request, response, testMessage, testError);

      expect(request.log.error).toHaveBeenCalledWith(testMessage, {
        err: testError,
      });
    });
  });
});
