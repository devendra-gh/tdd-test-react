import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
// import { IVariables } from '@tamm/app-composer';
import {
  getSteps,
  getStepsStatus,
} from 'client/config/amendments/utils/functions';

const wentWrong = [
  {
    path: `/amendments/went-wrong`, // path for router
    uniqueId: 'went-wrong', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS
    props: {
      showSidebar: true,
      currentStep: 'process.downloadLicence',
      icon: 'default',
      status: 'failure',
      title: 'wentWrong.info',
      content: 'wentWrong.content',
      buttons: [
        {
          label: 'button.back',
          uiType: 'secondary',
          alignIcon: 'start',
          withArrow: true,
        },
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        {
          steps: getSteps,
          stepsStatus: getStepsStatus('process.downloadLicence', ''),
        },
      ],
      mapDispatch: [],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default wentWrong;
