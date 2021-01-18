import httpMocks from 'node-mocks-http';
import { businessCertificate } from 'server/services/ded';
import {
  businessCertificateGeneric,
  businessCertificate as businessCertificateAdu,
} from 'server/services/adu';
import {
  businessCertificateAPI,
  businessCertificateGenericADUAPI,
  businessCertificateFromAduAPI,
  businessCertificateGenericAuthADUAPI,
} from './businessCertificate';

jest.mock('@tamm/response');
jest.mock('server/services/ded');
jest.mock('server/services/adu');

describe('Server/api/ded', () => {
  let req: any;
  let res: any;
  let mockBusiness: any;
  let mockBusinessGeneric: any;
  let mockbusinessCertificateAdu: any;
  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    mockBusiness = businessCertificate;
    mockBusinessGeneric = businessCertificateGeneric;
    mockbusinessCertificateAdu = businessCertificateAdu;
  });

  it('should properly call businessCertificate', () => {
    const businessRes = {
      status: 'success',
      data: {
        result: {
          Certificate: ':Certificate',
        },
      },
    };
    req.body = { capId: 'capId', applicationNumber: 'applicationNumber' };
    req.query = { capId: 'capId', applicationNumber: 'applicationNumber' };
    mockBusiness.mockImplementation(() => Promise.resolve(businessRes));
    expect(businessCertificateAPI(req, res)).toBeInstanceOf(Promise);
  });

  it('should properly call businessCertificate without Query', () => {
    const businessRes = {
      status: 'success',
      data: {
        result: {
          Certificate: ':Certificate',
        },
      },
    };
    req.body = { capId: 'capId', applicationNumber: 'applicationNumber' };
    req.query = {};
    mockBusiness.mockImplementation(() => Promise.resolve(businessRes));
    expect(businessCertificateAPI(req, res)).toBeInstanceOf(Promise);
  });

  it('should properly call businessCertificate when status is fail', () => {
    const businessRes = {
      status: 'fail',
      data: {
        result: {
          Certificate: ':Certificate',
        },
      },
    };
    req.body = { capId: 'capId', applicationNumber: 'applicationNumber' };
    req.query = { capId: 'capId', applicationNumber: 'applicationNumber' };
    mockBusiness.mockImplementation(() => Promise.resolve(businessRes));
    expect(businessCertificateAPI(req, res)).toBeInstanceOf(Promise);
  });

  it('should properly call businessCertificate without certificate result', () => {
    const businessRes = {
      status: 'success',
      data: {
        result: {},
      },
    };
    req.body = { capId: 'capId', applicationNumber: 'applicationNumber' };
    req.query = { capId: 'capId', applicationNumber: 'applicationNumber' };
    mockBusiness.mockImplementation(() => Promise.resolve(businessRes));
    expect(businessCertificateAPI(req, res)).toBeInstanceOf(Promise);
  });

  // businessCertificateGenericADUAPI
  it('should properly call businessCertificateGeneric', () => {
    const businessRes = {
      status: 'success',
      data: {
        fileContent: 'PDF%\r\n%%EOF\r\n',
        mimeType: 'application/pdf',
        fileName: 'Certificate.pdf',
        result: {
          Certificate: ':Certificate',
        },
      },
    };
    req.body = {};
    req.query = {
      capId: 'capId',
      applicationNumber: 'applicationNumber',
      certificateName: 'receipt',
    };
    mockBusinessGeneric.mockImplementation(() => Promise.resolve(businessRes));
    expect(businessCertificateGenericADUAPI(req, res)).toBeInstanceOf(Promise);
  });

  it('should properly handle error for businessCertificateGeneric if filedata is empty', () => {
    const businessRes = {
      status: 'success',
      data: {
        mimeType: 'application/pdf',
        fileName: 'Certificate.pdf',
        result: {
          Certificate: ':Certificate',
        },
      },
    };
    req.body = {};
    req.query = {
      capId: 'capId',
      applicationNumber: 'applicationNumber',
      certificateName: 'receipt',
    };
    mockBusinessGeneric.mockImplementation(() => Promise.resolve(businessRes));
    expect(businessCertificateGenericADUAPI(req, res)).toBeInstanceOf(Promise);
  });

  it('should properly handle error for businessCertificateGeneric when status is fail', () => {
    const businessRes = {
      status: 'fail',
      data: {
        result: {
          Certificate: ':Certificate',
        },
      },
    };
    req.body = {};
    req.query = {
      capId: 'capId',
      applicationNumber: 'applicationNumber',
      certificateName: 'receipt',
    };
    mockBusinessGeneric.mockImplementation(() => Promise.resolve(businessRes));
    expect(businessCertificateGenericADUAPI(req, res)).toBeInstanceOf(Promise);
  });

  // businessCertificateGenericAuthADUAPI
  it('should properly call businessCertificateGeneric', () => {
    const businessRes = {
      status: 'success',
      data: {
        fileContent: 'PDF%\r\n%%EOF\r\n',
        mimeType: 'application/pdf',
        fileName: 'Certificate.pdf',
        result: {
          Certificate: ':Certificate',
        },
      },
    };
    req.session = { tammUserInfo: { IDN: '789199312345' } };

    req.body = {};
    req.query = {
      capId: 'capId',
      applicationNumber: 'applicationNumber',
      certificateName: 'receipt',
    };
    mockBusinessGeneric.mockImplementation(() => Promise.resolve(businessRes));
    expect(businessCertificateGenericAuthADUAPI(req, res)).toBeInstanceOf(
      Promise,
    );
  });

  it('should properly handle error for businessCertificateGeneric if filedata is empty', () => {
    const businessRes = {
      status: 'success',
      data: {
        mimeType: 'application/pdf',
        fileName: 'Certificate.pdf',
        result: {
          Certificate: ':Certificate',
        },
      },
    };
    req.session = { tammUserInfo: { IDN: '789199312345' } };

    req.body = {};
    req.query = {
      capId: 'capId',
      applicationNumber: 'applicationNumber',
      certificateName: 'receipt',
    };
    mockBusinessGeneric.mockImplementation(() => Promise.resolve(businessRes));
    expect(businessCertificateGenericAuthADUAPI(req, res)).toBeInstanceOf(
      Promise,
    );
  });

  it('should properly handle error for businessCertificateGeneric when status is fail', () => {
    const businessRes = {
      status: 'fail',
      data: {
        result: {
          Certificate: ':Certificate',
        },
      },
    };
    req.body = {};
    req.session = { tammUserInfo: { IDN: '789199312345' } };

    req.query = {
      capId: 'capId',
      applicationNumber: 'applicationNumber',
      certificateName: 'receipt',
    };
    mockBusinessGeneric.mockImplementation(() => Promise.resolve(businessRes));
    expect(businessCertificateGenericAuthADUAPI(req, res)).toBeInstanceOf(
      Promise,
    );
  });
  it('should properly handle error for businessCertificateGeneric when status is fail', () => {
    const businessRes = {
      status: 'fail',
      data: {
        result: {
          Certificate: ':Certificate',
        },
      },
    };
    req.body = {};
    req.query = {
      capId: 'capId',
      applicationNumber: 'applicationNumber',
      certificateName: 'receipt',
    };
    mockBusinessGeneric.mockImplementation(() => Promise.resolve(businessRes));
    expect(businessCertificateGenericAuthADUAPI(req, res)).toBeInstanceOf(
      Promise,
    );
  });
  // businessCertificateFromAduAPI
  it('should properly call businessCertificateGeneric', async () => {
    const businessRes = {
      status: 'success',
      data: {
        fileContent: 'PDF%\r\n%%EOF\r\n',
        mimeType: 'application/pdf',
        fileName: 'Certificate.pdf',
        result: {
          Certificate: ':Certificate',
        },
      },
    };
    req.body = {};
    req.query = {
      capId: 'capId',
      applicationNumber: 'applicationNumber',
      certificateName: 'receipt',
    };
    mockbusinessCertificateAdu.mockImplementation(() =>
      Promise.resolve(businessRes),
    );
    await businessCertificateFromAduAPI(req, res);
    // expect(resp).toBeInstanceOf(Promise);
  });

  it('should properly call businessCertificateGeneric', async () => {
    const businessRes = {
      status: 'success',
      data: {
        fileContent: 'PDF%\r\n%%EOF\r\n',
        mimeType: 'application/pdf',
        fileName: 'Certificate.pdf',
        result: {
          Certificate: ':Certificate',
        },
      },
    };
    req.body = {};
    req.session = { tammUserInfo: { IDN: '789199312345' } };

    req.query = {
      capId: 'capId',
      applicationNumber: 'applicationNumber',
      certificateName: 'receipt',
    };
    mockbusinessCertificateAdu.mockImplementation(() =>
      Promise.resolve(businessRes),
    );
    await businessCertificateFromAduAPI(req, res);
    // expect(resp).toBeInstanceOf(Promise);
  });

  it('should properly handle error for businessCertificateGeneric if filedata is empty', () => {
    const businessRes = {
      status: 'success',
      data: {
        mimeType: 'application/pdf',
        fileName: 'Certificate.pdf',
        result: {
          Certificate: ':Certificate',
        },
      },
    };
    req.session = { tammUserInfo: { IDN: '789199312345' } };

    req.body = {};
    req.query = {
      capId: 'capId',
      applicationNumber: 'applicationNumber',
      certificateName: 'receipt',
    };
    mockbusinessCertificateAdu.mockImplementation(() =>
      Promise.resolve(businessRes),
    );
    expect(businessCertificateFromAduAPI(req, res)).toBeInstanceOf(Promise);
  });

  it('should properly handle error for businessCertificateGeneric when status is fail', () => {
    const businessRes = {
      status: 'fail',
      data: {
        result: {
          Certificate: ':Certificate',
        },
      },
    };
    req.session = { tammUserInfo: { IDN: '789199312345' } };

    req.body = {};
    req.query = {
      capId: 'capId',
      applicationNumber: 'applicationNumber',
      certificateName: 'receipt',
    };
    mockbusinessCertificateAdu.mockImplementation(() =>
      Promise.resolve(businessRes),
    );
    expect(businessCertificateFromAduAPI(req, res)).toBeInstanceOf(Promise);
  });
});
