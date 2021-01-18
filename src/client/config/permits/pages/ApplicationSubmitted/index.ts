import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { REQUIRES_SOP3 } from 'client/config/permits/constants';
import { IVariables } from '@tamm/app-composer';
import getSteps from '../../utils/getSteps';
import { PATH_APPLICATION_SUBMITTED } from '../../utils/constants/pageRoutes';

import {
  STEP_TRACKER_STATUS_FINISH,
  STEP_TRACKER_STATUS_PROCESS,
} from '../../utils/constants/stepTrackerStatus';

const applicationSubmitted = [
  {
    path: `/:serviceName${PATH_APPLICATION_SUBMITTED}`, // path for router
    uniqueId: 'application-submitted', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'pageTitle.permitApplication', // title of the page, later it will be read from CMS
    props: {
      status: 'inProgress',
      icon: 'default',
      type: 'inProgress',
      title: 'applicationSubmitted.title',
      content: 'applicationSubmitted.content',
      buttons: [],
    },
    onPageInit: (props: IVariables) => {
      const { steps } = props;
      return {
        currentStep: steps[1].name,
        stepsStatus: {
          [steps[1].name]: STEP_TRACKER_STATUS_PROCESS,
          [steps[0].name]: STEP_TRACKER_STATUS_FINISH,
        },
      };
    },
    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return getSteps(state);
          },
        },
        'user',
      ],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default applicationSubmitted;
