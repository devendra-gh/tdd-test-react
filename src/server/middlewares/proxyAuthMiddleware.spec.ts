import httpMocks from 'node-mocks-http';
import proxyAuthMiddleware from 'server/middlewares/proxyAuthMiddleware';

describe('proxyAuthMiddleware', () => {
  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
  });

  it('should handle public endpoints', () => {
    req.originalUrl = '/pub/pub-test';

    proxyAuthMiddleware('public')(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('should handle endpoints with query params', () => {
    req.originalUrl = '/pub/pub-test?abc=123';

    proxyAuthMiddleware('public')(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('should handle loggedIn endpoints', () => {
    req.originalUrl = '/api/loggedin-test';
    req.session = {
      tammUserInfo: {
        Type: 'SOP1',
      },
    };

    proxyAuthMiddleware('protected')(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('should handle verified endpoints', () => {
    req.originalUrl = '/api/bpm/licence/start';
    req.session = {
      tammUserInfo: {
        Type: 'SOP3',
      },
    };

    proxyAuthMiddleware('protected')(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  // it('should set res.logUuid from existed', () => {
  //   req.cookies.logUuid = 'some';
  //
  //   res.cookie = jest.fn();
  //
  //   logUuid(req, res, next);
  //
  //   expect(req.logUuid).toBe(req.cookies.logUuid);
  //   expect(res.cookie).not.toHaveBeenCalled();
  //   expect(mockGenerate).not.toHaveBeenCalled();
  // });
});
