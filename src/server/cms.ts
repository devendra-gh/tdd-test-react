import path from 'path';
import cms from '@tamm/cms-integration';

import ajaxClient from 'server/services/ajaxClient';
import tammLogger from 'server/utils/logger';

import cmsConfig from 'server/config/cms.json';

import config from 'config';

const logger = tammLogger.getService();

const {
  journeyItemsParams,
  journeyIds,
  journeyTranslationsNames,
  subjourneyIds,
  journeyInfoParams,
} = cmsConfig;

const { translations, templates, journeyItems, journeyInfo } = config.cms;

export default cms({
  journeyId: process.env.API_JOURNEY_ID || '',
  service: ajaxClient,
  logger,
  gateway: {
    header: process.env.API_GATEWAY_HEADER || '',
    key: process.env.API_GATEWAY_KEY || '',
  },
  translations: {
    url: `${config.cms.host}${translations.endpoint}`,
    path: path.join(config.cms.baseCacheDir, translations.directory),
    key: translations.key || '',
    names: journeyTranslationsNames,
  },
  templates: {
    url: `${config.cms.host}${templates.endpoint}`,
    path: path.join(config.cms.baseCacheDir, templates.directory),
    journeyList: journeyIds,
    subJourneyList: subjourneyIds,
  },
  items: {
    url: `${config.cms.host}${journeyItems.endpoint}`,
    path: path.join(config.cms.baseCacheDir, journeyItems.directory),
    meta: journeyItemsParams,
    link: journeyItems.linkHost || '',
    expiration: process.env.CMS_JOURNEY_ITEMS_EXP_DAYS
      ? parseInt(process.env.CMS_JOURNEY_ITEMS_EXP_DAYS, 10)
      : undefined,
  },
  info: {
    url: `${config.cms.host}${journeyInfo.endpoint}`,
    path: path.join(config.cms.baseCacheDir, journeyInfo.directory),
    meta: journeyInfoParams,
  },
});
