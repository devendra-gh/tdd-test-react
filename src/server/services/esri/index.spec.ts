import httpMocks from 'node-mocks-http';
import request from 'server/services/ajaxClient';
import { get, getTokenHandler, getMapServerQuery } from './index';

jest.mock('server/services/ajaxClient');

describe('server/services/ded', () => {
  const mockRequest: any = request;
  const req: httpMocks.MockRequest<any> = {
    body: {
      capId: 'capID',
      applicationNumber: 'applicationNumber',
    },
  };
  const response = {
    data: {
      data: {
        result: {
          token: 'token',
        },
      },
    },
  };
  it('should properly call businessCertificate', async () => {
    const res = mockRequest.mockResolvedValue(Promise.resolve(response));
    await getTokenHandler(req);
    expect(res).toBeCalled();
  });

  it('should properly call businessCertificate', async () => {
    const res = mockRequest.mockResolvedValue(Promise.reject(Error));
    await getTokenHandler(req);
    expect(res).toBeCalled();
  });

  it('should properly call businessCertificate', async () => {
    const response2 = {
      data: { status: 'fail' },
    };
    const res = mockRequest.mockResolvedValue(Promise.resolve(response2));
    await getTokenHandler(req);
    expect(res).toBeCalled();
  });

  it('should properly call businessCertificate', async () => {
    const res = mockRequest.mockResolvedValue(Promise.resolve(response));
    await getMapServerQuery(req);
    expect(res).toBeCalled();
  });

  it('should properly call businessCertificate', async () => {
    const res = mockRequest.mockResolvedValue(Promise.reject(Error));
    await getMapServerQuery(req);
    expect(res).toBeCalled();
  });

  it('should properly call businessCertificate', async () => {
    const response2 = {
      data: { status: 'fail' },
    };
    const res = mockRequest.mockResolvedValue(Promise.resolve(response2));
    await getMapServerQuery(req);
    expect(res).toBeCalled();
  });

  it('should properly call businessCertificate', async () => {
    const response2 = {
      data: { status: 'fail' },
    };
    const res = mockRequest.mockResolvedValue(Promise.resolve(response2));
    await get(undefined, 'url', req);
    expect(res).toBeCalled();
  });
});
