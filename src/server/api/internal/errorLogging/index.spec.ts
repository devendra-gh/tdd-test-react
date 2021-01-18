import httpMocks from 'node-mocks-http';

import { createSuccessResponse } from 'server/utils/response-utils';

jest.mock('server/utils/response-utils');

const { errorLoggingHandler } = require('./index');

describe('errorLogging', () => {
  let req: any;
  let res: any;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    req.log = {
      error: jest.fn(),
    };
  });

  describe('errorLoggingHandler', () => {
    it('should run TAMM logger.error() and createSuccessResponse()', () => {
      const data = { exception: 'exception' };

      req.body.data = data;

      errorLoggingHandler(req, res);

      expect(req.log.error).toHaveBeenCalledWith('Client error logging', {
        data,
      });
      expect(createSuccessResponse).toHaveBeenCalledWith(
        res,
        'Error was logged',
      );
    });
  });
});
