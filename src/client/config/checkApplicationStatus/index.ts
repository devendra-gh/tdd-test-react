import config from './config';
import fetchState from './state';
import templates from './templates';
import translations from './localisation';

const skipFetchState: string[] = [
  '/',
  '/application-status/landing',
  '/application-status/info',
  '/application-status/error-page',
  '/application-status/enter-number',
];

export { config, fetchState, templates, skipFetchState, translations };
