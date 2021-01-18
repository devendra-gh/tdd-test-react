import { Request, Response, NextFunction } from 'express';
import generate from 'nanoid/generate';

const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

const LONG_AGE = 60 * 60 * 24 * 365 * 1000;

export default (req: Request, res: Response, next: NextFunction) => {
  const logUuid = req.cookies.logUuid || generate(alphabet, 10);

  if (!req.cookies.logUuid) {
    res.cookie('logUuid', logUuid, { maxAge: LONG_AGE });
  }

  req.logUuid = logUuid;

  next();
};
