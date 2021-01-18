import config from './config';
import fetchState from './state';
import templates from './templates';
import translations from './localisation';

const skipFetchState: string[] = [
  '/',
  '/business-licence-fine/pay-fines',
  '/business-licence-fine',
  '/business-licence-fine/success',
];

export { config, fetchState, templates, skipFetchState, translations };
