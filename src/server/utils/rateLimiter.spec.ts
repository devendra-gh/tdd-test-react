import httpMocks from 'node-mocks-http';
import tammRateLimiter from '@tamm/rate-limiter';
import rateLimiter from './rateLimiter';

jest.mock('@tamm/rate-limiter');
describe('rateLimiter', () => {
  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    req.app = {
      locals: {
        useRelaxedRate: false,
      },
    };
    next = jest.fn();
  });
  it('should call req.csrfToken() and res.cookie() with correct params', () => {
    rateLimiter(req, res, next);

    expect(tammRateLimiter).toHaveBeenCalledWith(req, res, next);
  });
});
