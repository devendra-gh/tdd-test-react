import tammRateLimiter from '@tamm/rate-limiter';
import { Request, Response, NextFunction } from 'express';

export default (request: Request, response: Response, next: NextFunction) => {
  request.app.locals.useRelaxedRate = true;
  return tammRateLimiter(request, response, next);
};
