import httpMocks from 'node-mocks-http';
import request from 'server/services/ajaxClient';
import authConfig from 'config/authConfig';
import {
  createSuccessResponse,
  // createErrorResponse,
} from 'server/utils/response-utils';

import gspProxy from 'server/api/public/gsp/gspProxy';

jest.mock('server/utils/response-utils');
jest.mock('server/services/ajaxClient');
jest.mock('server/utils/logger');
jest.mock('config/authConfig', () => ({
  apiGateway: {
    header: 'x-Gateway-APIKey',
    key: 'apiKey',
  },
}));

describe('gspProxy', () => {
  let req: httpMocks.MockRequest<any>;
  let res: httpMocks.MockResponse<any>;

  let mockData: any;
  let mockUrl: string;

  const mockRequest = request as jest.MockedFunction<typeof request>;

  beforeAll(() => {
    mockData = {
      data: {
        data: 'data',
      },
    };
    mockUrl = 'some-url';
  });

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();

    req.body = {
      scLang: 'en',
      pageSize: '10',
      query: 'request',
    };

    mockRequest.mockResolvedValue(mockData);
  });

  it('should call request() with correct data', () => {
    gspProxy(mockUrl)(req, res);

    expect(mockRequest).toHaveBeenCalledWith(
      {
        url: mockUrl,
        method: 'POST',
        headers: {
          [authConfig.apiGateway.header]: authConfig.apiGateway.key,
        },
        data: {
          scDevice: 'json',
          ...req.body,
        },
      },
      req,
    );
  });

  it('should call createSuccessResponse() with resolved data', async () => {
    await gspProxy(mockUrl)(req, res);

    expect(createSuccessResponse).toHaveBeenCalledWith(res, 'success', 'data');
  });
  //
  // it('should call createErrorResponse()', () => {
  //   const mockError = new Error('Failed to load cms data');
  //
  //   mockRequest.mockRejectedValue(mockError);
  //   cmsProxy(mockUrl)(req, res);
  //
  //   expect(createErrorResponse).toBeCalled();
  // });
});
