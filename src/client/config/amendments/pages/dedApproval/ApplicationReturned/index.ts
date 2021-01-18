import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import {
  getSteps,
  getStepsStatus,
} from 'client/config/amendments/utils/functions';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';
import functions from './functions';

const applicationReturned = [
  {
    path: `/amendments/application-returned`, // path for router
    uniqueId: 'application-returned', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.getDEDApproval',
      currentPage: 'applicationReturned',
      type: 'inProgress',
      title: 'applicationReturned.title',
      content: 'applicationReturned.content',
      buttons: [],
      onUploadDocuments: functions.onUploadDocuments,
    },
    init: functions.init,
    onPageInit: functions.onPageInit,
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: [
        'apTransactionNumber',
        'submitDate',
        'applicationStatusComments',
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus('process.getDEDApproval', ''),
        },
        'licenceDetails',
        'applicationReturnDocuments',
        'pageLoading',
        'amendmentServerError',
      ],
      mapDispatch: [
        'licenceDetails',
        'applicationReturnDocuments',
        'pageLoading',
        'amendmentServerError',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default applicationReturned;
