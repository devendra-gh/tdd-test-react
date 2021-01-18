// import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
// import { PROCESS_NAME_RENEW_LICENCE } from 'client/config/constants';
import { IVariables } from '@tamm/app-composer';
import { FORM_STEP_1 } from 'client/config/payApplicationFees/steps';
import { PATH_NO_FEES } from 'client/config/payApplicationFees/routes';
import { getDateFromTimeStamp } from '../../utils/common';
import functions from './functions';

const noFeesPage = [
  {
    path: PATH_NO_FEES, // path for router
    uniqueId: 'pay-application-fees-no-fees', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    props: {
      currentStep: true,
      type: 'custom',
      title: 'errorMsg.noPendingFees.title',
      content: 'errorMsg.noPendingFees.content',
      buttons: [
        {
          label: 'button.tryAnother',
          onClick: functions.onTryAnother,
          uiType: 'secondary',
        },
        {
          label: 'button.checkApplicationStatus',
          onClick: functions.onClick,
          uiType: 'primary',
        },
      ],
    },
    init: (props: IVariables) => {
      props.actions.stepsStatus.update({
        ...props.stepsStatus,
        [`${FORM_STEP_1}`]: 'finish',
      });
    },
    onPageInit: (props: IVariables) => {
      const { transactionNumber, submittedDate } = props.form;
      return {
        tags: [
          {
            label: 'label.tags.refNo',
            value: transactionNumber, // props.renewalNumber,
          },
          {
            label: 'label.tags.submittedOn',
            value: getDateFromTimeStamp(submittedDate), // props.submittedDate,
          },
        ],
      };
    },

    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        'currentStep',
        'businessKey',
        'showLoader',
        'form',
        {
          steps: (state: IVariables) => {
            return state.minimumSteps;
          },
        },
      ],
      mapDispatch: [
        'stepsStatus',
        'form',
        'instanceId',
        'businessKey',
        'currentStep',
        'showLoader',
      ],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default noFeesPage;
