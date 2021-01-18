import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import {
  getSteps,
  getStepsStatus,
} from 'client/config/amendments/utils/functions';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';
import functions from './functions';

const paymentWaiting = [
  {
    path: `/amendments/payment-waiting`, // path for router
    uniqueId: 'payment-waiting', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.downloadLicence',
      // status: 'inProgress',
      icon: 'default',
      title: 'applicationPaymentWaiting.title',
      content: 'applicationPaymentWaiting.content',
      buttons: [],
    },
    onPageInit: functions.onPageInit,
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['apTransactionNumber', 'submitDate', 'paymentLink'],
    },
    state: {
      mapState: [
        'loggedIn',
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

export default paymentWaiting;
