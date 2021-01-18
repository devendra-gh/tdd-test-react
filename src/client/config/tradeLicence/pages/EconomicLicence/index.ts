import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { CATEGORIES } from 'client/config/utils/lookup';
import functions from './functions';
import { PATH_SUBMIT } from '../../routes';

const routes = [
  {
    path: PATH_SUBMIT,
    uniqueId: 'economic-licence',
    template: 'licenceForm',
    title: 'tradeNameForm.title',
    init: functions.init,
    props: {
      categories: CATEGORIES,
      autoGenerateTradeName: functions.autoGenerateTradeName,
      getActivities: functions.getActivities,
      onLoadSuggestions: functions.getEconomicNameSuggestions,
      onCheckTradeName: functions.onCheckTradeName,
      getTransliteration: functions.getTransliteration,
      authorizedOperations: functions.authorizedOperations,
      getLocationActivities: functions.getLocationActivities,
      fetchAttachments: functions.fetchAttachments,
      fetchBranchDetails: functions.fetchBranchDetails,

      updatePageTitle: functions.updatePageTitle,
      licenceTypes: functions.getLicenceTypes,
      legalForms: functions.getLegalForms,
      businessLocations: functions.getBusinessLocations,
      representatives: functions.getRepresentatives,
      visibility: functions.visibility,
      validation: functions.validation,
      onSubmit: functions.submitLicence,
    },
    state: {
      mapState: [
        'countries',
        'activities',
        'currentCategory',
        'economicLicense',
        'economicLicenceSubmitting',
        'economicLicenceServerError',
        'loggedIn',
        'user',
        'instanceId',
        'businessKey',
        'tradeNameCheckStatus',
      ],
      mapDispatch: [
        'countries',
        'activities',
        'currentCategory',
        'economicLicense',
        'instanceId',
        'businessKey',
        'economicLicenceSubmitting',
        'economicLicenceServerError',
        'tradeNameCheckStatus',
      ],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default routes;
