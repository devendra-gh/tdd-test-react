import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import {
  getSteps,
  getStepsStatus,
} from 'client/config/amendments/utils/functions';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';

const applicationProgress = [
  {
    path: `/amendments/application-submitted`, // path for router
    uniqueId: 'application-submitted', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.getDEDApproval',
      // status: 'inProgress',
      icon: 'default',
      type: 'inProgress',
      title: 'applicationSubmitted.title',
      content: 'applicationSubmitted.content',
      buttons: [],
    },
    state: {
      mapState: [
        'loggedIn',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus('process.getDEDApproval', ''),
        },
      ],
      mapDispatch: [],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default applicationProgress;
