import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
// import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import {
  getSteps,
  getStepsStatus,
} from 'client/config/amendments/utils/functions';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';
import functions from './functions';

const applicationApproved = [
  {
    path: `/amendments/application-approved`, // path for router
    uniqueId: 'payment-success', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.downloadLicence',
      status: 'success',
      withArrow: false,
      title: 'applicationApproved.title',
      content: 'applicationApproved.content',
      currentPage: 'applicationApproved',
      buttons: [],
      downloadLicences: functions.downloadLicences,
      dropDown: [],
      startOver: functions.startOver,
    },
    onPageInit: functions.onPageInit,
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['apTransactionNumber', 'submitDate', 'cnNumber'],
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        'history',
        'currentPage',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus('process.downloadLicence', ''),
        },
      ],
      mapDispatch: [],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default applicationApproved;
