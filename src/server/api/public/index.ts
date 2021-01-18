import express, { Response } from 'express';
import { cmsProxy } from '@tamm/cms-integration';

import lookupRouter from 'server/api/public/lookup';
import rateLimiter from 'server/utils/rateLimiter';

import {
  aduProxyRouter,
  msProxyRouter,
  configVarsBodyHandler,
} from 'server/api/proxy';
import config from 'config';

import proxyAuthMiddleware from 'server/middlewares/proxyAuthMiddleware';
import ajaxClient from 'server/services/ajaxClient';
import coexistParser from 'coexist-parser-proxy';
import bodyParser from 'body-parser';
import workbenchRouter from './workbench';
import serviceRouter from './service';
import cmsRouter from './cms';
import gspRouter from './gsp';
import adfeedbackRouter from './adfeedback/adfeedbackRouter';
import esriRouter from './esri';

const router = express.Router();

router.get('/', (req: Express.Request, res: Response) => {
  res.json({
    message: 'Public API',
  });
});

/**
 * external apis
 */
router.use(
  '/proxy/ms-call',
  proxyAuthMiddleware('public'),
  coexistParser,
  bodyParser.json(),
  bodyParser.raw(),
  bodyParser.text(),
  configVarsBodyHandler,
  msProxyRouter,
);
router.use(
  '/proxy',
  rateLimiter,
  proxyAuthMiddleware('public'),
  aduProxyRouter,
);
router.use('/lookup', lookupRouter);
router.use('/workbench', workbenchRouter);
router.use('/service', serviceRouter);
router.use('/cms', cmsRouter);
router.use('/gsp', gspRouter);
router.use('/esri', esriRouter);
router.use(
  '/search/autosuggest',
  cmsProxy({
    service: ajaxClient,
    apiGateway: config.gateway,
    url: `${config.cms.host}${config.cms.search.autoSuggest}`,
    plainResponse: true,
  }),
);
router.use('/adfeedback', adfeedbackRouter);

export default router;
