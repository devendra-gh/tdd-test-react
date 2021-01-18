import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from 'client/config/constants';
import functions from './functions';
import { PATH_PAYMENT_SUMMARY } from '../../routes';

const routes = [
  {
    path: PATH_PAYMENT_SUMMARY,
    uniqueId: 'make-payment',
    template: 'payment',
    title: 'goldenServices.title.goldenServices',
    init: functions.init,
    onPageInit: (props: IVariables) => {
      return {
        summaryList: functions.getSummaryList(props),
        totalAmount: functions.getTotalAmount(props),
      };
    },

    props: {
      currentStep: 'goldenServices.steps.makePayment',
      buttons: [],
      onClick: functions.proceedWithPay,
      subTitle: 'goldenServices.subTitle.makePayment',
      description: 'goldenServices.subTitle.desc.makePayment',
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['paymentLink'],
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'stepsStatus',
        'goldenService',
        'businessKey',
        {
          steps: (state: IVariables) => {
            return state.goldenServicesSteps;
          },
        },
      ],
      mapDispatch: ['stepsStatus', 'goldenService', 'businessKey'],
    },
  },
];

export default routes;
