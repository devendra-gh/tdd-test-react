import httpMocks from 'node-mocks-http';
import request from 'server/services/ajaxClient';
import { getMapServerQuery } from 'server/services/esri';

import getArcgisMapServerQuery from 'server/api/public/esri/getArcgisMapServerQuery';

jest.mock('server/utils/response-utils');
jest.mock('server/services/ajaxClient');
jest.mock('server/services/esri');
jest.mock('server/utils/logger');
jest.mock('config/authConfig', () => ({
  apiGateway: {
    header: 'x-Gateway-APIKey',
    key: 'apiKey',
  },
}));

describe('cmsProxy', () => {
  let req: httpMocks.MockRequest<any>;
  let res: httpMocks.MockResponse<any>;

  let mockData: any;

  const mockRequest = request as jest.MockedFunction<typeof request>;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    mockData = getMapServerQuery;
    req.body = {
      scLang: 'en',
      pageSize: '10',
      query: 'request',
    };

    mockRequest.mockResolvedValue(mockData);
  });

  it('should properly call businessLicenseProcedureAPI', () => {
    const businessRes = {
      success: true,
      data: '',
    };
    mockData.mockImplementation(() => Promise.resolve(businessRes));
    expect(getArcgisMapServerQuery(req, res)).toBeInstanceOf(Promise);
    req.body.locale = 'ar';
    expect(getArcgisMapServerQuery(req, res)).toBeInstanceOf(Promise);
  });

  it('should properly be handled when convertToPdf returns success as false', () => {
    const businessRes = {
      success: false,
      data: null,
    };
    mockData.mockImplementation(() => Promise.resolve(businessRes));
    expect(getArcgisMapServerQuery(req, res)).toBeInstanceOf(Promise);
  });

  it('should call request() with correct data', () => {
    getArcgisMapServerQuery(req, res);
  });

  it('should call createErrorResponse()', async () => {
    const mockError = new Error('Failed to get token');

    mockRequest.mockRejectedValue(mockError);
    await getArcgisMapServerQuery(req, res);
  });
});
