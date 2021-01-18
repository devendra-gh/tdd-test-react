import config from './config';
import fetchState from './state';
import templates from './templates';
import translations from './localization';

/* istanbul ignore file */

const skipFetchState: string[] = [
  '/issue-commercial-register-certificate',
  '/issue-commerical-register-certificate/error',
];

export { config, fetchState, templates, skipFetchState, translations };
