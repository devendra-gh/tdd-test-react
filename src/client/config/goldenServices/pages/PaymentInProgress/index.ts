import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from 'client/config/constants';
import functions from './functions';
import { PATH_PAYMENT_WAITING } from '../../routes';

const routes = [
  {
    path: PATH_PAYMENT_WAITING,
    uniqueId: 'payment-in-progress',
    template: 'paymentInProgress',
    title: 'goldenServices.title.goldenServices',
    init: functions.init,
    onPageInit: (props: IVariables) => {
      const { paymentLink } = props;
      return {
        additionalTextWithLink: true,
        text1: 'payment.link.text1',
        text2: 'payment.link.text2',
        text3: 'payment.link.text3',
        link: paymentLink,
      };
    },

    props: {
      currentStep: 'goldenServices.steps.makePayment',
      buttons: [],
      subTitle: 'goldenServices.subTitle.paymentInProgress',
      description: 'goldenServices.subTitle.desc.paymentInProgress',
    },

    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['altId', 'submitDate', 'paymentLink'],
    },

    state: {
      mapState: [
        'loggedIn',
        'user',
        'stepsStatus',
        'goldenService',
        {
          steps: (state: IVariables) => {
            return state.goldenServicesSteps;
          },
        },
      ],
      mapDispatch: ['stepsStatus', 'goldenService'],
    },
  },
];

export default routes;
