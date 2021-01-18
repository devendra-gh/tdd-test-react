import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from 'client/config/constants';
import functions from './functions';
import { PATH_PAYMENT_SUCCESS } from '../../routes';

const routes = [
  {
    path: PATH_PAYMENT_SUCCESS,
    uniqueId: 'appointment-summary',
    template: 'summary',
    title: 'goldenServices.title.goldenServices',
    init: functions.init,
    onPageInit: (props: IVariables) => {
      functions.paymentAnalytics(props);
      props.actions.stepsStatus.update({
        ...props.stepsStatus,
        'goldenServices.steps.makePayment': 'finish',
      });

      return {
        summaryList: functions.getSummaryList(props),
      };
    },

    props: {
      onSubmit: functions.onSubmit,
      currentStep: 'goldenServices.steps.appointmentSummary',
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: [
        'altId',
        'submitDate',
        'datePreference',
        'timePreference',
        'address',
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'stepsStatus',
        'businessKey',
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
