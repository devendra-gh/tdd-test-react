import { REQUIRES_LOGIN } from '@tamm/app-composer';
import {
  getSteps,
  getStepsStatus,
} from 'client/config/amendments/utils/functions';
import {
  AMENDMENT_CATEGORIES as categories,
  AMENDMENT_PAGES as pages,
} from 'client/config/amendments/constants/amendmentObjects';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';
import functions from '../functions';

const switchLegalForm = [
  {
    path: ['/amendments/switch-legalForm'], // path for router
    uniqueId: 'switchLegalForm', // uniqueId for caching and other purposes
    template: 'switchLegalForm', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    // init: functions.init,
    props: {
      showSidebar: false,
      currentStep: 'process.makeAmendment',
      currentSubStep: 'subStep.ownership',
      currentCategory: categories.OWNERSHIP,
      currentPage: pages.OWNERSHIP,

      checkRules: functions.checkRules,
      getAmendmentTypes: functions.getAmendmentTypes,
      getRuleList: functions.getRuleList,
      onNext: functions.onNext,
      onBack: functions.handleBack,
      getActionType: functions.getActionType,
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        'licenseNo',
        'legalForm',
        'prevLegalForm',
        'licenseType',
        'amendmentCategories',
        'licenceDetails',
        'profile',
        'prevLegalForm',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus(
            'process.makeAmendment',
            'subStep.ownership',
          ),
        },
      ],
      mapDispatch: [
        'instanceId',
        'businessKey',
        'licenseNo',
        'licenseType',
        'amendmentCategories',
        'legalForm',
        'licenceDetails',
        'profile',
        'prevLegalForm',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default switchLegalForm;
