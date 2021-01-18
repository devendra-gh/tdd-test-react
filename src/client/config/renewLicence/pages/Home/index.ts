import { BASE_PATH } from 'client/config/renewLicence/routes';
import { FORM_STEP_1 } from 'client/config/renewLicence/steps';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';

const home = [
  {
    path: BASE_PATH, // path for router
    uniqueId: 'renew-licence-home', // uniqueId for caching and other purposes
    template: 'home', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    props: {
      currentStep: FORM_STEP_1,
      onSubmit: functions.onSubmit,
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'steps',
        'instanceId',
        'businessKey',
        'stepsStatus',
        'submitLicence',
        'form',
        {
          steps: (state: IVariables) => {
            return [];
          },
        },
      ],
      mapDispatch: [
        'instanceId',
        'businessKey',
        'steps',
        'stepsStatus',
        'submitLicence',
        'form',
      ],
    },
  },
];

export default home;
