// import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { IVariables } from '@tamm/app-composer';
import { PATH_CHECK_APPLICATION } from 'client/config/payApplicationFees/routes';
import { FORM_STEP_1 } from 'client/config/payApplicationFees/steps';
import functions from './functions';

/* istanbul ignore file */

const checkApplication = [
  {
    path: PATH_CHECK_APPLICATION,
    uniqueId: 'pay-application-fees.check-application',
    template: 'form',
    title: 'main.title',
    props: {
      currentStep: FORM_STEP_1,
      onSubmit: functions.onSubmit,
      onSubmitLabel: 'button.next',
      withArrow: true,
      subTitle: 'step1.title',
      description: 'label.transactionNumber.description',
      getOnChangeHandler: functions.getOnChangeHandler,
      onChange: functions.onChange,
      validateTransactionNumber: functions.validateTransactionNumber,
      onShowTradeName: functions.onShowTradeName,
    },
    onPageInit: async (props: IVariables) => {
      props.actions.showLoader.update(false);
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'instanceId',
        'businessKey',
        'form',
        'stepsStatus',
        'currentStep',
        'buttonDisabled',
        {
          steps: (state: IVariables) => {
            return state.minimumSteps;
          },
        },
        'showSpinner',
        'showError',
        'showLoader',
      ],
      mapDispatch: [
        'form',
        'instanceId',
        'businessKey',
        'stepsStatus',
        'currentStep',
        'showSpinner',
        'showLoader',
        'showError',
        'buttonDisabled',
      ],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default checkApplication;
