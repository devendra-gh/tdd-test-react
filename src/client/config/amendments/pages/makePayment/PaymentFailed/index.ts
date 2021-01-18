import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import {
  getSteps,
  getStepsStatus,
} from 'client/config/amendments/utils/functions';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';
import functions from './functions';

const paymentFailed = [
  {
    path: `/amendments/payment-failed`, // path for router
    uniqueId: 'payment-failed', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.makePayment',
      type: noticeTypes.INFO,
      title: 'paymentFailed.title',
      content: 'paymentFailed.content',
      status: 'failure',
      buttons: [
        {
          label: 'button.retryPayment',
          onClick: functions.onClick(PROCESS_NAME),
        },
      ],
    },
    onPageInit: functions.onPageInit,
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['apTransactionNumber', 'submitDate'],
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus('process.makePayment', ''),
        },
      ],
      mapDispatch: ['stepsStatus', 'businessKey'],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default paymentFailed;
