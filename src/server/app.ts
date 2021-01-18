import { hookLoader, createHandler } from 'istanbul-middleware';
import bodyParser from 'body-parser';
import compression from 'compression';
import config from 'config';
import helmetConfig from 'config/helmetConfig';
import cookieParser from 'cookie-parser';
import express, { NextFunction, Request, Response } from 'express';
import session from 'express-session';
import helmet from 'helmet';
import path from 'path';

import internalApi from 'server/api/internal';
import publicApi from 'server/api/public';
import { getCsrfProtection, csrfToken } from 'server/middlewares/csrf';
import initialRender from 'server/middlewares/initialRender';
import logUuid from 'server/middlewares/logUuid';
import sessionFixation from 'server/middlewares/sessionFixation';
import getSessionStore from 'server/session-store';
import cms from 'server/cms';
import getSSR from 'server/middlewares/ssr';
import smartpass from 'server/smartpass';
import tammLogger, { getMiddleware } from 'server/utils/logger';

const now = new Date();
const rootApp = express();
const redirectApp = express();
const app = express();
const logger = tammLogger.getService();
const csrfProtection = getCsrfProtection();

rootApp.disable('x-powered-by');
app.disable('x-powered-by');
redirectApp.disable('x-powered-by');

if (process.env.NODE_ENV === 'development') {
  hookLoader(__dirname);
  app.use('/coverage', createHandler());
}

app.use(getMiddleware());

// logger.info(`Configs for ${config.projectName}`, {
//   config,
//   env: process.env,
// });

rootApp.get(/\/static\/ui-lib/, (req, res) => {
  if (req.method === 'GET' && req.hostname.match(/localhost/)) {
    res.redirect(`${config.staticUrl}${req.path.replace(config.basePath, '')}`);
  }
});

rootApp.use(config.basePath, app);
redirectApp.get(`*`, (req: Express.Request, res: Response) => {
  res.redirect(config.basePath);
});
rootApp.use(redirectApp);

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
try {
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
} catch (e) {
  logger.error('Some navigator setting issue', { err: e });
}
//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use((req, res, next) => {
  // https://jira.digitalx1.io/jira/browse/TQA-928
  req.headers['user-agent'] = `${req.headers['user-agent']}`.substr(0, 150);
  next();
});
app.use(compression());

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  /^\/(?!((api\/proxy)|(pub\/proxy))).*/,
  bodyParser.json({
    limit: '5000kb',
  }),
);

//
// Authentication
// -----------------------------------------------------------------------------

app.set('trust proxy', config.behindProxy || undefined);

/* global GIT_SHORT */
const name = `${process.env.SESSION_STORE_PREFIX}_${GIT_SHORT}_sid`;
const ONE_AND_HALF_HOUR = 90 * 60 * 1000;
app.use((req, res, next) => {
  session({
    name,
    store: getSessionStore(req),
    secret: config.sesSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: ONE_AND_HALF_HOUR,
      secure: config.overHttps,
      httpOnly: true,
    },
  })(req, res, next);
});

app.use(sessionFixation({ everyRequest: true }));

app.use(logUuid);

app.use(helmet(helmetConfig));

/**
 * Applciation Routes
 */

// csrfProtection for all POSTs
// except /pub/*
// except api/smartpass
// except api/cms
app.post(
  /^\/(?!((pub\/|login\/callback)|(api\/smartpass)|(api\/cms))).*/,
  csrfProtection,
  (req, res, next) => {
    req.log.debug('POST on API under CSRF protection');
    next();
  },
);

// csrfProtection for all PUTs
app.put('*', csrfProtection, (req, res, next) => {
  req.log.debug('PUT on API under CSRF protection');
  next();
});

const tags = process.env.HEALTH_TAGS || 'unknown revision';
const date = `${now.toLocaleTimeString()} ${now.toLocaleDateString()}`;
app.get('/health', async (_req, res) =>
  res.json({
    status: 'OK',
    tags,
    date,
  }),
);

app.get(
  '/graceful-shutdown-test',
  (req: express.Request, res: express.Response) => {
    setTimeout(() => {
      res.send('~20000ms');
    }, 20000);
  },
);

/**
 * Register API middleware
 */
// Rest APIz
app.use('/api', internalApi);

// public facing api for push updates
app.use('/pub', publicApi);

// page initial rendering

app.get(
  '*',
  smartpass.middlewares.auth,
  csrfProtection,
  csrfToken,
  cms.middlewares.data,
  cms.middlewares.info,
  getSSR(),
  initialRender,
);

app.use((err: any, req: Express.Request, res: Response, next: NextFunction) => {
  req.log.error('General error handler', { err, req });
  try {
    next();
  } catch (handlerError) {
    logger.error('Unhandled error:', {
      err,
      handlerError,
    });
  }
});

process.on('unhandledRejection', (reason: any, promise: any) => {
  logger.error('Unhandled Rejection at:', {
    err: reason ? reason.stack || reason : promise,
  });
});

export default rootApp;

if (module && module.exports) {
  module.exports.rootApp = rootApp;
}
