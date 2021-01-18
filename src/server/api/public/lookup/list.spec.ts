import httpMocks from 'node-mocks-http';
import {
  createSuccessResponse,
  createErrorResponse,
} from 'server/utils/response-utils';
import * as lookup from 'server/services/lookupService';
import listCountries from './list';

jest.mock('server/utils/response-utils');

describe('lookup', () => {
  let mockLookup: any;
  let req: httpMocks.MockRequest<any>;
  let res: httpMocks.MockResponse<any>;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();

    mockLookup = lookup;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should give success response', async () => {
    const payload = {
      data: [],
    };
    mockLookup.fetchCountries = jest
      .fn()
      .mockResolvedValue(Promise.resolve(payload));
    await listCountries(req, res);
    expect(createSuccessResponse).toHaveBeenCalledWith(
      res,
      'List of countries',
      payload.data,
    );
  });

  it('should give error response', async () => {
    mockLookup.fetchCountries = jest.fn().mockRejectedValue('error');
    await listCountries(req, res);
    expect(createErrorResponse).toHaveBeenCalledWith(
      req,
      res,
      'Failed to fetch countries',
      'error',
    );
  });
});
