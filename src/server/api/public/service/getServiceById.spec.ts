import httpMocks from 'node-mocks-http';
import fs from 'fs';
import {
  createSuccessResponse,
  createErrorResponse,
} from 'server/utils/response-utils';
import getServiceById from 'server/api/public/service/getServiceById';

jest.mock('server/utils/response-utils');
jest.mock('fs');

describe('public/routes/getServiceById', () => {
  let req: any;
  let res: any;

  let mockService: any;

  const mockReadFile = fs.readFile as jest.MockedFunction<any>;

  beforeEach(() => {
    req = httpMocks.createRequest({
      params: {
        id: '694',
      },
    });
    res = httpMocks.createResponse();
    req.log = {
      error: jest.fn(),
    };

    mockService = {
      en: {
        serviceid: '694',
      },
    };
  });

  it('should call fs.readFile', () => {
    getServiceById(req, res);

    expect(fs.readFile).toHaveBeenCalled();
  });

  it('should call createSuccessResponse()', () => {
    mockReadFile.mockImplementationOnce((path: string, char: string, cb: any) =>
      cb(null, JSON.stringify(mockService)),
    );

    getServiceById(req, res);

    expect(createSuccessResponse).toHaveBeenCalledWith(
      res,
      'Success',
      mockService,
    );
  });

  it('should call createErrorResponse() with 500 status code and error message', () => {
    const mockMessage = 'GSP Services not found';
    const mockError = 'error';
    const mockErr = new Error(mockError);
    const mockCode = 404;

    mockReadFile.mockImplementationOnce((path: string, char: string, cb: any) =>
      cb(mockErr, null),
    );

    getServiceById(req, res);

    expect(createErrorResponse).toHaveBeenCalledWith(
      req,
      res,
      mockMessage,
      mockError,
      mockCode,
    );
  });
});
