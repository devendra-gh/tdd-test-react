import config from './config';
import fetchState from './state';
import templates from './templates';
import translations from './localization';

const skipFetchState: string[] = [
  '/',
  '/get-licence-details',
  '/get-licence-details/licence-details',
  '/get-licence-details/licence-number',
];

export { config, fetchState, templates, skipFetchState, translations };
