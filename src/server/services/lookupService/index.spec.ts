import httpMocks from 'node-mocks-http';
import { fetchCountries } from 'server/services/lookupService';
import request from 'server/services/ajaxClient';

jest.mock('server/services/ajaxClient');
jest.mock('config/authConfig', () => ({
  esb: {
    header: 'header',
    key: 'key',
  },
  apiGateway: {
    header: 'header',
    key: 'key',
  },
}));

describe('service/lookUp', () => {
  let req: httpMocks.MockRequest<any>;
  const mockRequest: any = request;
  const response = {
    data: 'test',
  };

  it('fetchCountries', async () => {
    const res = mockRequest.mockResolvedValue(Promise.resolve(response));

    await fetchCountries(req);
    expect(res).toBeCalled();
  });
});
