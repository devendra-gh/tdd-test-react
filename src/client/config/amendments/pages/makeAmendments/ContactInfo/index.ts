import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';
import {
  PROCESS_NAME,
  mapStateCommonForAll,
} from 'client/config/amendments/constants';
import {
  getSteps,
  getStepsStatus,
} from 'client/config/amendments/utils/functions';
import functions from './functions';

const contactInfo = [
  {
    path: '/amendments/contact-information', // path for router
    uniqueId: 'welcome-page', // uniqueId for caching and other purposes
    template: 'contactInfo', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.makeAmendment',
      currentSubStep: 'subStep.contactInfo',
      currentPage: 'contactInfo',
      submit: functions.submit,
      onBack: functions.handleBack,
      validation: functions.validation,
      init: functions.init,
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
        'user',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus(
            'process.makeAmendment',
            'subStep.contactInfo',
          ),
        },
      ],
      mapDispatch: [
        'licenceDetails',
        'dedErrorMessage',
        'amendmentServerError',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default contactInfo;
