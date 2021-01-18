/* global __DEV__ */
import { Request, Response, NextFunction } from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';

import { processCmsResult } from 'server/utils/cmsResultProcessing';

import config from 'config';
import Html, { HtmlProps } from 'server/Html';

import chunksManifest from './chunk-manifest.json';

type ChunksManifest = {
  [key: string]: any;
};

/* global APP_NESTED_PATH */
const baseUrl = APP_NESTED_PATH || '';

/**
 * @param {Object} chunk
 * @param {Set} scripts
 * @returns {undefined}
 */
const addChunk = (chunk: string, scripts: Set<string>) => {
  const chunks: ChunksManifest = chunksManifest;
  if (chunks[chunk]) {
    chunks[chunk].forEach((asset: string) => scripts.add(asset));
  } else if (__DEV__) {
    throw new Error(`Chunk with name '${chunk}' cannot be found`);
  }
};

/**
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 * @returns {undefined}
 */
async function initialRender(req: Request, res: Response, next: NextFunction) {
  try {
    const css = new Set();
    const scripts: Set<string> = new Set();
    const scriptsHead: Set<string> = new Set();
    const data: HtmlProps = {
      app: '',
      staticUrl: config.staticUrl,
      analyticsConfig: {
        key: config.analyticsAppKey,
        host: config.analyticsHost,
      },
    };
    const cms = req.cms || {};
    const mode = req.query.mode || req.cookies.mode || '';
    res.cookie('mode', mode);

    // preload config from document store
    if (['v3', 'v4', 'v5'].some(v => req.path.indexOf(`/${v}`) === 0)) {
      const [, , prototypeId] = req.path.split('/');
      scriptsHead.add(`${baseUrl}/pub/workbench/bundle/${prototypeId}`);
    }

    data.mode = `${mode}`.split(',');

    addChunk('client', scripts);

    data.scripts = Array.from(scripts);
    data.scriptsHead = Array.from(scriptsHead);
    data.styles = [{ id: 'css', cssText: [...css].join('') }];
    data.app = {
      apiUrl: config.api.clientUrl,
      url: config.api.clientUrl,
      meta: {
        favicon: `${baseUrl}/favicon.ico`,
      },
      demoLogin: config.demoLogin,
      smartpassData: req.session ? req.session.tammUserInfo : null,
      cms: processCmsResult(cms, req.cmsJourneyInfo),
      featureFlags: config.featureFlags,
    };
    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);

    res.status(200).send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
}

export default initialRender;
