import TammLogger from '@tamm/logger';
import config from 'config';

const { projectName, log } = config;

const tammLogger = TammLogger({ projectName, log });

/**
 * @returns {Function}
 */
export const getMiddleware = () => tammLogger.getMiddleware();

export default tammLogger;
