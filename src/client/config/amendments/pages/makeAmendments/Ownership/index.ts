import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';
import {
  PROCESS_NAME,
  mapStateCommonForAll,
} from 'client/config/amendments/constants';
import {
  AMENDMENT_CATEGORIES as categories,
  AMENDMENT_PAGES as pages,
} from 'client/config/amendments/constants/amendmentObjects';
import {
  getSteps,
  getStepsStatus,
} from 'client/config/amendments/utils/functions';
import functions from './functions';

const ownership = [
  {
    path: '/amendments/ownership', // path for router
    uniqueId: 'ownership', // uniqueId for caching and other purposes
    template: 'ownership', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
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
    onPageInit: functions.onPageInit,
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['logUuid', 'dbAmendmentId'],
    },
    state: {
      mapState: [
        ...mapStateCommonForAll,
        'loggedIn',
        'dedErrorMessage',
        'profile',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus(
            'process.makeAmendment',
            'subStep.ownership',
          ),
        },
      ],
      mapDispatch: [
        'licenseType',
        'amendmentCategories',
        'legalForm',
        'licenceDetails',
        'profile',
        'amendmentServerError',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default ownership;
