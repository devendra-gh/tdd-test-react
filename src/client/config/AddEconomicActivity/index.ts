import {
  BASE_URL,
  BASE_PATH,
  PATH_SUCCESS_ACTIVITY,
  PATH_REJECTED_ACTIVITY,
} from 'client/config/AddEconomicActivity/routes';
import config from './config';
import fetchState from './state';
import templates from './templates';
import translations from './localisation';

const skipFetchState: string[] = [
  BASE_URL,
  BASE_PATH,
  // PATH_ADD_ACTIVITY,
  // PATH_WAITING_APPROVAL,
  PATH_SUCCESS_ACTIVITY,
  PATH_REJECTED_ACTIVITY,
  // PATH_RETURNED,
];

export { config, fetchState, templates, skipFetchState, translations };
