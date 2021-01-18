import config from './config';
import fetchState from './state';
import templates from './templates';
import translations from './localisation';
import { BASE_PATH, PATH_CONTINUE_PROCESS } from './routes';

/* istanbul ignore file */

const skipFetchState: string[] = ['/', BASE_PATH, PATH_CONTINUE_PROCESS];

export { config, fetchState, templates, skipFetchState, translations };
