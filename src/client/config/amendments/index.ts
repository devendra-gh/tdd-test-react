import config from './config';
import fetchState from './state';
import templates from './templates';
import translations from './localization';

const skipFetchState: string[] = [
  '/',
  '/continue-process',
  '/amendments/start-process',
  '/amendments/select-licence',
  '/amendments/profile',
  '/amendments/switch-legalForm',
  // '/amendments/ownership',
  //  '/amendments/upload',
  // '/amendments/financial-details',
  // '/amendments/activities',
  // '/amendments/trade-name',
  //  '/amendments/contact-information'
];

export { config, fetchState, templates, skipFetchState, translations };
