import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import {
  getSteps,
  getStepsStatus,
} from 'client/config/amendments/utils/functions';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';
import functions from './functions';

const paymentSummary = [
  {
    path: `/amendments/payment-summary`, // path for router
    uniqueId: 'payment-summary', // uniqueId for caching and other purposes
    template: 'summary', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.makePayment',
      type: noticeTypes.INFO,
      title: 'global.payment',
      content: 'applicationPaymentSummary.content',
      buttons: [],
      pay: functions.pay,
    },
    onPageInit: functions.onPageInit,
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: [
        'apTransactionNumber',
        'submitDate',
        'licenceFees',
        'paymentLink',
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        'amendmentServerError',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus('process.makePayment', ''),
        },
      ],
      mapDispatch: ['stepsStatus', 'businessKey', 'amendmentServerError'],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default paymentSummary;
