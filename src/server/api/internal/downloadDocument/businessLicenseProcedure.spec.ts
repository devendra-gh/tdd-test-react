import httpMocks from 'node-mocks-http';
import { convertToPdf } from 'server/services/download';
import { businessLicenseProcedureAPI } from './businessLicenseProcedure';

jest.mock('@tamm/response');
jest.mock('server/services/download');

describe('Server/api/ded', () => {
  let req: any;
  let res: any;
  let mockBusiness: any;
  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    mockBusiness = convertToPdf;
    req.body = {
      locale: 'en',
      payload: {
        printDate: '',
        printTime: '',
        transactiontype: '',
        legalType: '',
        activities: [],
        conditions: [],
        requirements: [],
        fees: [],
        total: '0',
      },
    };
  });

  it('should properly call businessLicenseProcedureAPI', () => {
    const businessRes = {
      success: true,
      data: 'PDF',
    };
    mockBusiness.mockImplementation(() => Promise.resolve(businessRes));
    expect(businessLicenseProcedureAPI(req, res)).toBeInstanceOf(Promise);
    req.body.locale = 'ar';
    expect(businessLicenseProcedureAPI(req, res)).toBeInstanceOf(Promise);
  });

  it('should properly be handled when convertToPdf returns success as false', () => {
    const businessRes = {
      success: false,
      data: null,
    };
    mockBusiness.mockImplementation(() => Promise.resolve(businessRes));
    expect(businessLicenseProcedureAPI(req, res)).toBeInstanceOf(Promise);
  });
});
