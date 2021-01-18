import httpMocks from 'node-mocks-http';
import { getApplications } from 'server/services/adu/index';
import { getApplicationsAPI } from './getApplications';

jest.mock('@tamm/response');
jest.mock('server/services/adu/index');

describe('Server/api/io', () => {
  let req: any;
  let res: any;
  let mockGetApplications: any;
  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    mockGetApplications = getApplications;
    req = {
      query: { type: '' },
      body: { sponsorEmiratesId: '' },
      session: { tammUserInfo: { IDN: '123' } },
    };
  });

  it('should properly call getApplicationsAPI', () => {
    const getApplicationsRes = {
      data: [{}],
    };
    mockGetApplications.mockImplementation(() =>
      Promise.resolve(getApplicationsRes),
    );
    expect(getApplicationsAPI(req, res)).toBeInstanceOf(Promise);
    req.query.type = 'tradeLicence';
    expect(getApplicationsAPI(req, res)).toBeInstanceOf(Promise);
    req = {};
    expect(getApplicationsAPI(req, res)).toBeInstanceOf(Promise);
  });

  it('should properly return response on getApplications failure', () => {
    const getApplicationsRes = {};
    mockGetApplications.mockImplementation(() =>
      Promise.resolve(getApplicationsRes),
    );
    expect(getApplicationsAPI(req, res)).toBeInstanceOf(Promise);
    mockGetApplications.mockRejectedValue(Promise.reject(Error));
    expect(getApplicationsAPI(req, res)).toBeInstanceOf(Promise);
  });
});
