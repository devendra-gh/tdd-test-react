import config from './config';
import fetchState from './state';
import templates from './templates';
import translations from './localisation';
import { PATH_LICENCE_SUMMARY } from './routes';

const skipFetchState: string[] = ['/', PATH_LICENCE_SUMMARY];

export { config, fetchState, templates, skipFetchState, translations };
