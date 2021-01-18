import express from 'express';

import smartPassRouter from 'server/api/internal/smartpass';
import cmsRouter from 'server/api/internal/cms';
import errorLogging from 'server/api/internal/errorLogging';
import uploadDocument from 'server/api/internal/uploadDocument/uploadDocuments';
import {
  aduProxyRouter,
  msProxyRouter,
  configVarsBodyHandler,
} from 'server/api/proxy';
import proxyAuthMiddleware from 'server/middlewares/proxyAuthMiddleware';
import downloadRouter from 'server/api/internal/downloadDocument';
import getApplications from 'server/api/internal/io/getApplications';
import fileRouter from 'server/api/internal/file';
import bodyParser from 'body-parser';
import coexistParser from 'coexist-parser-proxy';

const router = express.Router();

router.use((req, res, next) => {
  req.log.info('Internal API');
  next();
});

/**
 * Internal API
 */
router.use(
  '/proxy/ms-call',
  proxyAuthMiddleware('protected'),
  coexistParser,
  bodyParser.json(),
  bodyParser.raw(),
  bodyParser.text(),
  configVarsBodyHandler,
  msProxyRouter,
);
router.use('/proxy', proxyAuthMiddleware('protected'), aduProxyRouter);
router.use('/upload', uploadDocument);
router.use('/download', downloadRouter);
router.use('/smartpass', smartPassRouter);
router.use('/io', getApplications);
router.use('/cms', cmsRouter);
router.use('/error-logging', errorLogging);
router.use('/file', fileRouter);

export default router;
