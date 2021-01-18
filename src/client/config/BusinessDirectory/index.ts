import config from './config';
// import fetchState from './state';
import templates from './templates';
import translations from './localisation';

const fetchState = () => {};

const skipFetchState: string[] = ['/'];

export { config, fetchState, templates, skipFetchState, translations };
