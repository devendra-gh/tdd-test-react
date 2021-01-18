import { IVariables } from '@tamm/app-composer';
import { FORM_STEP_1 } from 'client/config/renewLicence/steps';
import { PATH_ENTER_LICENCE_NO } from 'client/config/renewLicence/routes';
import {
  REQUIRES_CUSTOM_LOGIN,
  REQUIRES_UPGRADE_SOP3,
} from 'client/config/utils/customRequireTests';
import { PROCESS_NAME_RENEW_LICENCE } from '../../constants';
import functions from './functions';

const routes = [
  {
    path: PATH_ENTER_LICENCE_NO,
    uniqueId: 'renew-economic-licence-enter-licence-no',
    template: 'form',
    title: 'main.title',
    props: {
      currentStep: FORM_STEP_1,
      onSubmit: functions.onSubmit,
      onSubmitLabel: 'button.next',
      withArrow: true,
      subTitle: 'step1.title',
      description: 'enter_licence_number.description',
    },
    fromProcessState: {
      processName: PROCESS_NAME_RENEW_LICENCE,
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'instanceId',
        'businessKey',
        'form',
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return state.minimumSteps;
          },
        },
      ],
      mapDispatch: ['form', 'instanceId', 'businessKey', 'stepsStatus'],
    },
    requires: [REQUIRES_CUSTOM_LOGIN, REQUIRES_UPGRADE_SOP3],
  },
];

export default routes;
