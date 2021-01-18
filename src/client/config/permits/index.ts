import fetchState from './state';
import templates from './templates';
import translations from './localization';
import {
  PATH_UNDERTAKING,
  PATH_APPLICATION_DETAILS,
  PATH_CONTINUE_PROCESS,
  PATH_ENTITY_APPROVAL_DOCS,
} from './utils/constants/pageRoutes';

const skipFetchState: string[] = [
  '/',
  `/:serviceName${PATH_UNDERTAKING}`,
  `/:serviceName${PATH_APPLICATION_DETAILS}`,
  `/:serviceName${PATH_ENTITY_APPROVAL_DOCS}`,
  PATH_CONTINUE_PROCESS,
];

export { fetchState, templates, skipFetchState, translations };
