import generate from 'nanoid/generate';
import httpMocks from 'node-mocks-http';

import logUuid from 'server/middlewares/logUuid';

jest.mock('nanoid/generate');

const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

describe('logUuid', () => {
  let req: any;
  let res: any;
  let next: any;

  let logger: any;
  let childLogger: any;

  let mockGenerate: any;

  beforeAll(() => {
    mockGenerate = generate;
  });

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();

    childLogger = {
      child: jest.fn(),
    };
    logger = {
      child: jest.fn().mockReturnValue(childLogger),
    };
    req.log = logger;
  });

  it('should generate uuid and pass it to res.cookie() with 1 year maxAge and set to res.session.logUuid', () => {
    const uuid = 'some';

    mockGenerate.mockReturnValue(uuid);
    res.cookie = jest.fn();

    logUuid(req, res, next);

    expect(res.cookie).toHaveBeenCalledWith('logUuid', uuid, {
      maxAge: 60 * 60 * 24 * 365 * 1000,
    });
    expect(req.logUuid).toBe(uuid);
    expect(mockGenerate).toHaveBeenCalledWith(alphabet, 10);
  });

  it('should set res.logUuid from existed', () => {
    req.cookies.logUuid = 'some';

    res.cookie = jest.fn();

    logUuid(req, res, next);

    expect(req.logUuid).toBe(req.cookies.logUuid);
    expect(res.cookie).not.toHaveBeenCalled();
    expect(mockGenerate).not.toHaveBeenCalled();
  });
});
