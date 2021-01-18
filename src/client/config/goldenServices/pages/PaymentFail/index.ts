import { IVariables } from '@tamm/app-composer';
import functions from './functions';
import { PROCESS_NAME } from '../../constants';
import { PATH_PAYMENT_FAIL } from '../../routes';

const routes = [
  {
    path: PATH_PAYMENT_FAIL,
    uniqueId: 'payment-fail',
    template: 'paymentFail',
    title: 'goldenServices.title.goldenServices',
    init: functions.init,
    onPageInit: (props: IVariables) => {
      props.actions.stepsStatus.update({
        ...props.stepsStatus,
        'goldenServices.steps.makePayment': 'process',
      });

      return {};
    },
    props: {
      onSubmit: functions.onSubmit,
      currentStep: 'goldenServices.steps.makePayment',
      buttons: [],
      subTitle: 'goldenServices.subTitle.paymentFail',
      description: 'goldenServices.subTitle.desc.paymentFail',
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['altId', 'submitDate'],
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
      mapDispatch: ['stepsStatus', 'goldenService'],
    },
  },
];

export default routes;
