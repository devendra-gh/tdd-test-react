/* eslint-disable complexity */
import express, { Request, Response, NextFunction } from 'express';
import { IncomingMessage, ClientRequest } from 'http';
import proxy from 'http-proxy-middleware';
import { get } from 'lodash';
import {
  createErrorResponse,
  createSuccessResponse,
} from 'server/utils/response-utils';
import zlib from 'zlib';
import config from 'config';
import authConfig from 'config/authConfig';
import tammLogger from 'server/utils/logger';
import querystring from 'querystring';

const logger = tammLogger.getService();

// const anyBody = require('body/any');

const aduProxyRouter = express.Router();
const msProxyRouter = express.Router();

const filter = (pathname: string, req: Request) => {
  // filter URLs allowed in proxy

  return (
    pathname.indexOf(config.basePath) === 0 &&
    // pathname.match(/(.*)\/proxy\/bpm/g) &&
    (req.method === 'GET' || req.method === 'POST')
  );
};

function onProxyRes(proxyRes: IncomingMessage, req: Request, res: Response) {
  let originalBody = Buffer.from('');
  proxyRes.on('data', data => {
    try {
      originalBody = Buffer.concat([originalBody, data]);
    } catch (e) {
      logger.error('Error proxyRes onData', e.toString());
    }
  });
  // eslint-disable-next-line complexity
  proxyRes.on('end', () => {
    try {
      // tslint:disable-next-line
      const isZipped = proxyRes.headers['content-encoding'] === 'gzip';

      logger.info('onProxyRes - originalBody', originalBody);
      const bodyContent: string = (isZipped
        ? zlib.gunzipSync(originalBody)
        : originalBody
      ).toString('utf8');

      logger.info('onProxyRes - bodyContent', bodyContent);

      // get JSON of body
      const body: {
        status: string;
        data?: object;
        message: string;
        error?: string;
        Exception?: string;
      } = JSON.parse(bodyContent);

      // if message is properly formatted we can recognize errors and data

      if (
        proxyRes.statusCode &&
        proxyRes.statusCode >= 200 &&
        proxyRes.statusCode < 300
      ) {
        return createSuccessResponse(res, 'Success', body.data || body);
      }
      if (
        proxyRes.statusCode &&
        proxyRes.statusCode >= 300 &&
        body.message &&
        (body.data || body.error)
      ) {
        if (body.status === 'fail' && body.error) {
          return createErrorResponse(req, res, body.message, body.error);
        }
      }

      // how bpm validation error message
      const errorMsg =
        body.message ||
        body.Exception ||
        'Successfully returning proxy response, not properly formatted';
      // if not properly formatted we will just return correct response
      return createSuccessResponse(res, errorMsg, {});
    } catch (e) {
      logger.error('Error processing data', e.toString());
      return createErrorResponse(req, res, 'error processing data');
    }
  });
}
const generateProxyRequestHandler = (shouldHandelEnvVars: boolean = false) => (
  proxyReq: ClientRequest,
  req: Request,
  res: Response,
) => {
  if (
    req.session &&
    req.session.tammUserInfo
    // !req.originalUrl.includes('pub')  // TODO : remove headers from public api
  ) {
    const { SmartPassToken, ThirdPartyToken } = req.session.tammUserInfo;
    proxyReq.setHeader('Authorization', `Bearer ${SmartPassToken}`);
    proxyReq.setHeader('Auth-Third-Party-Token', ThirdPartyToken);
    proxyReq.setHeader(
      'Provider',
      req.session.tammUserInfo.provider || 'smartpass',
    );
  }

  /**
   * Add LogUuid
   */
  proxyReq.setHeader('Log-Uuid', req.logUuid);

  // remove cookies
  proxyReq.setHeader('Cookies', []);

  /**
   * Auth Headers
   */
  proxyReq.setHeader(authConfig.esb.header, authConfig.esb.key);
  proxyReq.setHeader(authConfig.apiGateway.header, authConfig.apiGateway.key);

  const contentType = proxyReq.getHeader('Content-Type');
  const writeBody = (bodyData: string) => {
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
    proxyReq.write(bodyData);
  };
  if (
    shouldHandelEnvVars &&
    contentType === 'application/json' &&
    req.body &&
    ['POST', 'PUT'].includes(req.method)
  ) {
    if (req.body.headers || req.body.params || req.body.body) {
      if (req.body.headers) {
        Object.keys(req.body.headers).forEach(headerKey => {
          proxyReq.setHeader(headerKey, req.body.headers[headerKey]);
        });
      }
      if (req.body.params) {
        // eslint-disable-next-line no-param-reassign
        proxyReq.path += `?${querystring.stringify(req.body.params)}`;
      }
      writeBody(JSON.stringify(req.body.body || {}));
    } else {
      writeBody(JSON.stringify(req.body));
    }
  }
};

function onError(err: Error, req: Request, res: Response) {
  return createErrorResponse(req, res, 'Error returning proxy call result'); // remove header from response
}

// @ts-ignore
const aduProxyConfigured = proxy(filter, {
  target: config.adu.host,
  pathRewrite: (path: string, req: Request) => {
    // replace part of path that ends with /proxy
    const path2 = path.replace(/(.*)\/proxy/g, '');
    return path2;
  },
  changeOrigin: true,
  selfHandleResponse: true,
  onProxyReq: generateProxyRequestHandler(false),
  onProxyRes,
  onError,
});

// @ts-ignore
const msProxyConfigured = proxy(filter, {
  target: config.serviceApiBaseUrl,
  pathRewrite: (path: string) => {
    // replace part of path that ends with /proxy
    const path2 = path.replace(/(.*)\/proxy\/ms-call/g, '');
    return path2;
  },
  changeOrigin: true,
  selfHandleResponse: true,
  onProxyReq: generateProxyRequestHandler(true),
  onProxyRes,
  onError,
});

aduProxyRouter.use('**', aduProxyConfigured);
msProxyRouter.use('**', msProxyConfigured);

export function configVarsBodyHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const bodyData = req.body;
    const stringedBody = JSON.stringify(bodyData);
    let parsedBody = stringedBody.replace(
      /{{configVars\.([\w.]*)}}/g,
      (matched: string, configVar: string) => {
        return get(config, configVar);
      },
    );
    if (parsedBody.includes('{{user.') || parsedBody.includes('{{user[')) {
      if (req.session && req.session.tammUserInfo) {
        parsedBody = stringedBody.replace(
          /{{user\.([\w. ]*)}}/g,
          (matched: string, userVar: string) => {
            return get(req.session.tammUserInfo, userVar);
          },
        );
      } else {
        throw Error('can not load user data');
      }
    }
    req.body = JSON.parse(parsedBody);
  } catch (error) {
    req.log.error('Error while parsing vars', req);
  } finally {
    next();
  }
}
export { aduProxyRouter, msProxyRouter };
