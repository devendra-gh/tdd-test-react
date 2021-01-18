import httpMocks from 'node-mocks-http';
import fs from 'fs';
import { createSuccessResponse } from 'server/utils/response-utils';
import getServiceByPath from 'server/api/public/service/getServiceByPath';
import request from 'server/services/ajaxClient';

jest.mock('server/utils/response-utils');
jest.mock('server/services/ajaxClient');
jest.mock('fs');

describe('public/routes/getServiceByPath', () => {
  let req: any;
  let res: any;

  let mockService: any;

  const mockReadFile = fs.readFile as jest.MockedFunction<any>;
  const mockRequest = request as jest.MockedFunction<any>;

  beforeEach(() => {
    req = httpMocks.createRequest({
      params: {
        path: 'path',
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
    const mockData = {
      data: {},
    };
    mockRequest.mockResolvedValue(mockData);

    getServiceByPath(req, res);

    expect(fs.readFile).toHaveBeenCalled();
  });

  it('should call fs.statSync when recache param is present', () => {
    req.query = {
      recache: true,
    };
    getServiceByPath(req, res);

    expect(fs.statSync).toHaveBeenCalled();
  });

  it('should call createSuccessResponse()', () => {
    mockReadFile.mockImplementationOnce((path: string, char: string, cb: any) =>
      cb(null, JSON.stringify(mockService)),
    );

    getServiceByPath(req, res);

    expect(createSuccessResponse).toHaveBeenCalledWith(
      res,
      'Success',
      mockService,
    );
  });

  it('should request for service when cache is missing', async () => {
    const mockError = 'error';
    const mockErr = new Error(mockError);

    mockReadFile.mockImplementationOnce((path: string, char: string, cb: any) =>
      cb(mockErr, null),
    );

    const mockData = {
      data: {},
    };
    mockRequest.mockResolvedValue(mockData);

    await getServiceByPath(req, res);

    expect(createSuccessResponse).toHaveBeenCalled();
  });
});
