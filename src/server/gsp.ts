import GSPService from '@tamm/gsp';

import ajaxClient from 'server/services/ajaxClient';
import tammLogger from 'server/utils/logger';

import gspConfig from 'server/config/gsp.json';

import config from 'config';

const logger = tammLogger.getService();

export default GSPService({
  service: ajaxClient,
  logger,
  gateway: {
    header: process.env.API_GATEWAY_HEADER || '',
    key: process.env.API_GATEWAY_KEY || '',
  },
  services: {
    url: `${config.gsp.host}${config.gsp.services.endpoint}`,
    path: config.gsp.baseCacheDir,
    config: gspConfig,
  },
});
