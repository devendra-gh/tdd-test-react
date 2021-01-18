import config from './config';
import templates from './templates';
import translations from './localization';

const skipFetchState: string[] = ['/'];

export { config, templates, skipFetchState, translations };
