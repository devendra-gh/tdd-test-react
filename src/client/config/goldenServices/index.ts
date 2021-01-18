import config from './config';
import fetchState from './state';
import templates from './templates';
import translations from './localization';
import { BASE_PATH, PATH_PAYMENT_SUCCESS } from './routes';

const skipFetchState: string[] = [BASE_PATH, PATH_PAYMENT_SUCCESS];

export { config, fetchState, templates, skipFetchState, translations };
