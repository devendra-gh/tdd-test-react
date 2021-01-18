import { NextFunction, Request, Response } from 'express';
import { createErrorResponse } from 'server/utils/response-utils';
import proxyConfig from 'server/config/proxyConfig';
import url from 'url';

const route = require('path-match')({
  sensitive: false,
  strict: false,
  end: false,
});

const pathMatch = (paths: string[], path: string) => {
  return paths.some((item: string) => {
    const match = route(item);
    const params = match(path);
    return !!params;
  });
};

const getPath = (originalUrl: string): string => {
  const { pathname } = url.parse(originalUrl);
  return pathname ? pathname.substring(pathname.indexOf('proxy') + 5) : '';
};

const proxyAuthMiddleware = (type: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const path = getPath(req.originalUrl);

    if (type === 'public' && pathMatch(proxyConfig.public, path)) {
      return next();
    }

    if (type === 'protected') {
      const isAuthorized = req.session && req.session.tammUserInfo;
      // @ts-ignore
      const isSOP3 = isAuthorized && req.session.tammUserInfo.Type === 'SOP3';

      if (
        isSOP3 &&
        pathMatch([...proxyConfig.verified, ...proxyConfig.loggedIn], path)
      ) {
        return next();
      }

      if (isAuthorized && pathMatch(proxyConfig.loggedIn, path)) {
        return next();
      }
    }

    return createErrorResponse(req, res, 'Unauthorized', {});
  };
};

export default proxyAuthMiddleware;
