import config from './config';
import fetchState from './state';
import templates from './templates';
import translations from './localisation';

const skipFetchState: string[] = [
  '/',
  '/404',
  '/economic-licence/test-submit',
  '/renew-economic-licence/start',
  '/consumer-good-prices/start',
  // '/economic-licence/test-submit',
  // '/economic-licence/submit',
  '/questioner/:formIndex',
  '/economic-licence/continue-process',
];

export { config, fetchState, templates, skipFetchState, translations };
