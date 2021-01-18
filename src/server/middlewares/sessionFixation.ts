import { Request, Response, NextFunction } from 'express';

interface Options {
  everyRequest?: boolean;
}

/**
 * @author https://www.npmjs.com/package/express-session-fixation
 * @param {Object} [options]
 * @param {boolean} options.everyRequest=false - Reset session ID automatically every request
 * @returns {undefined}
 */
function fixation(options: Options = {}) {
  return (req: Request, res: Response, next: NextFunction) => {
    req.resetSessionID = () =>
      new Promise((resolve, reject) => {
        const session = req.session!;

        req.session!.regenerate(err => {
          if (err) {
            reject(err);
          } else {
            Object.keys(session).forEach(i => {
              req.session![i] = req.session![i] || session[i];
            });

            resolve();
          }
        });
      });
    if (
      options.everyRequest &&
      req.headers['X-Requested-With'] !== 'XMLHttpRequest' &&
      !req.xhr
    ) {
      return req
        .resetSessionID()
        .then(() => next())
        .catch((err: any) => next(err));
    }
    return next();
  };
}

export default fixation;
