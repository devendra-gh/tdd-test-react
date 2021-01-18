import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME, REQUIRES_SOP3 } from 'client/config/permits/constants';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import getSteps from '../../utils/getSteps';
import { PATH_PAYMENT_WAITING } from '../../utils/constants/pageRoutes';
import functions from './functions';

const paymentWaiting = [
  {
    path: `/:serviceName${PATH_PAYMENT_WAITING}`, // path for router
    uniqueId: 'payment-waiting', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'pageTitle.permitApplication', // title of the page, later it will be read from CMS
    props: {
      status: 'inProgress',
      title: 'applicationPaymentWaiting.title',
      content: 'applicationPaymentWaiting.content',
      buttons: [],
    },
    onPageInit: (props: IVariables) => {
      const { paymentLink, apTransactionNumber, submitDate } = props;
      return {
        currentStep: functions.getCurrentStep(props),
        stepsStatus: functions.getStepStatus(props),
        additionalTextWithLink: true,
        text1: 'payment.link.text1',
        text2: 'payment.link.text2',
        text3: 'payment.link.text3',
        link: paymentLink,
        tags: [
          {
            label: 'global.referenceNumber',
            value: apTransactionNumber || '',
          },
          {
            label: 'global.submittedOn',
            value: submitDate ? getDateFromTimeStamp(submitDate) : '',
          },
        ],
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['apTransactionNumber', 'submitDate', 'paymentLink'],
    },
    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return getSteps(state);
          },
        },
        'user',
        'serviceType',
        'permitInfo',
      ],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default paymentWaiting;
