import tammRequest from '@tamm/request';
import tammLogger from 'server/utils/logger';
import config from 'config';

const logger = tammLogger.getService();

export default tammRequest({ logger, appName: config.projectName });
