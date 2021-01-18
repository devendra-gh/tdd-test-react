import config from './config';
import fetchState from './state';
import templates from './templates';
import translations from './localization';

/* istanbul ignore file */

const skipFetchState: string[] = ['/list-economic-licences-certificate/error'];

export { config, fetchState, templates, skipFetchState, translations };
