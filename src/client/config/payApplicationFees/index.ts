import config from './config';
import fetchState from './state';
import templates from './templates';
import translations from './localisation';

const skipFetchState: string[] = ['/', '/pay-application-fees'];

export { config, fetchState, templates, skipFetchState, translations };
