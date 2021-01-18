import csrf from 'csurf';
import httpMocks from 'node-mocks-http';

import { getCsrfProtection, csrfToken } from 'server/middlewares/csrf';

jest.mock('csurf');

describe('csrf', () => {
  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();

    req.csrfToken = jest.fn(() => 'token');
    res.cookie = jest.fn();
    next = jest.fn();
  });

  it('should call csrf() with correct params', () => {
    getCsrfProtection();

    expect(csrf).toHaveBeenCalledWith({
      cookie: { httpOnly: true, key: '_csrf' },
    });
  });

  it('should call req.csrfToken() and res.cookie() with correct params', () => {
    csrfToken(req, res, next);

    expect(req.csrfToken).toHaveBeenCalled();
    expect(res.cookie).toHaveBeenCalledWith('XSRF-TOKEN', 'token');
  });

  it('should call next() if no csrfToken in req', () => {
    req.csrfToken = null;

    csrfToken(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
