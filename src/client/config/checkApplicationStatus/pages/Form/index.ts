// import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import functions from './functions';

const routes = [
  {
    path: '/application-status/enter-number',
    uniqueId: 'enter-transaction-number',
    template: 'statusForm',
    title: 'checkApplicationStatus.title',
    init: functions.init,
    getVariables: bpm.getVariables,
    props: {
      subTitle: 'checkApplicationStatus.form.subTitle',
      currentStep: 'checkApplicationStatus.step.1',
      cancelLink: '/application-status/landing',
      tooltipTitle: 'checkApplicationStatus.tooltip.title',
      isTransactionNumber: functions.isTransactionNumber,
      validate: functions.validate,
      onChange: functions.onChange,
      onSubmit: functions.onSubmit,
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return state.checkApplicationSteps;
          },
        },
        'formApplicationNumber',
        'applicationStatusResponse',
        'statusRecieved',
      ],
      mapDispatch: [
        'formApplicationNumber',
        'stepsStatus',
        'applicationStatusResponse',
        'statusRecieved',
      ],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

// @ts-ignore
export default routes;
