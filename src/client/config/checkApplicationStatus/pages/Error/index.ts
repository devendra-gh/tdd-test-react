import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { getAnalyticsData } from '../../utils/common';

const ErrorPage = [
  {
    path: '/application-status/error-page', // path for router
    uniqueId: 'error-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'checkApplicationStatus.title', // title of the page, later it will be read from CMS
    props: {
      title: 'checkApplicationStatus.errorTitle',
      text: 'checkApplicationStatus.errorText',
      type: noticeTypes.WARNING,
      buttons: [
        {
          label: 'button.back',
          link: '/application-status/landing',
          withArrow: true,
          alignIcon: 'start',
          variant: 'secondary',
        },
      ],
    },
    onPageInit: () => {
      getAnalyticsData('sla', { serviceStatus: 'fail' });
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return state.checkApplicationSteps;
          },
        },
      ],
      mapDispatch: ['instanceId', 'businessKey', 'stepStatus'],
    },
  },
];

export default ErrorPage;
