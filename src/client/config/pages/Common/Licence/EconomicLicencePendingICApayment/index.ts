import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import functions from './functions';
import { PROCESS_NAME } from '../../../../constants';

const icaPaymentSummary = [
  {
    path: '/economic-licence/ica-payment', // path for router
    uniqueId: 'economic-licence-ica-payment-summary', // uniqueId for caching and other purposes
    template: 'summary', // template name, must be located in index of folder template/index
    title: 'global.economicLicence', // title of the page, later it will be read from CMS
    props: {
      currentStep: 'ica_payment',
      currentSubStep: 'ica_payment',
      title: 'ICA payment summary',
      subTitle: 'notice.economiclicence.pendingPayment.title',
      description: 'notice.economiclicence.pendingPayment.description',
      buttons: [
        {
          label: 'PAY',
          onClick: functions.onClick,
        },
      ],
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['paymentLink'],
    },
    state: {
      mapState: [
        'loggedIn',
        'withoutNameSteps',
        'businessKey',
        'paymentLink',
        {
          steps: functions.getStep,
          list: functions.findPaymentSummary,
          totalSection: functions.findPaymentSummaryTotal,
          stepsStatus: functions.getStepStatus,
        },
      ],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default icaPaymentSummary;
