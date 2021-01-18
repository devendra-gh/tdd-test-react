import httpMocks from 'node-mocks-http';
import request from 'server/services/ajaxClient';
import {
  businessCertificateGeneric,
  getApplications,
  businessCertificate,
  post,
} from './index';

jest.mock('server/services/ajaxClient');

describe('server/services/adu', () => {
  const mockRequest: any = request;
  const businessCertificateGenericReq: httpMocks.MockRequest<any> = {
    query: {
      instanceId: '2b5b13c7-5931-11ea-9970-024257f4b7f9',
      type: 'businessLicenceFines',
      certificateName: 'receipt',
    },
  };
  const getApplicationsReq: httpMocks.MockRequest<any> = {
    body: {
      sponsorEmiratesId: '123',
    },
  };
  const businessCertificateGenericRes = {
    data: {
      data: {
        result: {
          token: 'token',
        },
      },
    },
  };
  const getApplicationsRes = {
    data: {
      data: {},
    },
  };

  it('should properly call businessCertificateGeneric', async () => {
    const res = mockRequest.mockResolvedValue(
      Promise.resolve(businessCertificateGenericRes),
    );
    await businessCertificateGeneric(businessCertificateGenericReq);
    expect(res).toBeCalled();
  });

  it('should properly call businessCertificateGeneric on error', async () => {
    const res = mockRequest.mockRejectedValue(Promise.reject(Error));
    await businessCertificateGeneric(businessCertificateGenericReq);
    expect(res).toBeCalled();
  });

  it('should properly call businessCertificate', async () => {
    const res = mockRequest.mockResolvedValue(
      Promise.resolve(businessCertificateGenericRes),
    );
    await businessCertificate(businessCertificateGenericReq);
    expect(res).toBeCalled();
  });

  it('should properly call businessCertificate on error', async () => {
    const res = mockRequest.mockRejectedValue(Promise.reject(Error));
    await businessCertificate(businessCertificateGenericReq);
    expect(res).toBeCalled();
  });

  it('should properly call getApplications', async () => {
    const res = mockRequest.mockResolvedValue(
      Promise.resolve(getApplicationsRes),
    );
    await getApplications(getApplicationsReq);
    expect(res).toBeCalled();
  });

  it('should properly call getApplications on error', async () => {
    const res = mockRequest.mockRejectedValue(Promise.reject(Error));
    await getApplications(getApplicationsReq);
    expect(res).toBeCalled();
  });

  it('should properly call businessCertificate', async () => {
    const response2 = {
      data: { status: 'fail' },
    };
    const res = mockRequest.mockResolvedValue(Promise.resolve(response2));
    await post(undefined, 'url', getApplicationsReq);
    expect(res).toBeCalled();
  });
});
