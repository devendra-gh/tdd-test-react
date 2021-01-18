import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import {
  getSteps,
  getStepsStatus,
} from 'client/config/amendments/utils/functions';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';
import functions from './functions';

const applicationError = [
  {
    path: `/amendments/application-error`, // path for router
    uniqueId: 'application-error', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.getDEDApproval',
      type: 'inProgress',
      title: 'applicationError.title',
      content: 'applicationError.content',
      buttons: [],
      onReviewApplication: functions.onClickReviewApplication,
      currentPage: 'applicationError',
    },
    onPageInit: functions.onPageInit,
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['errorMessage'],
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus('process.getDEDApproval', ''),
        },
        'amendmentCategories',
        'licenceDetails',
        'amendmentServerError',
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

export default applicationError;
