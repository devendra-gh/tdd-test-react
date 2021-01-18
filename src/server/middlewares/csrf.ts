import { Request, Response, NextFunction } from 'express';
import csrf from 'csurf';

/**
 * @returns {undefined}
 */
export const getCsrfProtection = () =>
  csrf({ cookie: { httpOnly: true, key: '_csrf' } });

/**
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {undefined}
 */
export const csrfToken = (req: Request, res: Response, next: NextFunction) => {
  if (req.csrfToken) {
    const token = req.csrfToken();

    res.cookie('XSRF-TOKEN', token);
  }

  next();
};
