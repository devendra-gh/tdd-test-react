import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { getAnalyticsData } from '../../utils/common';

const ErrorPage = [
  {
    path: '/consumer-good-prices/error-page', // path for router
    uniqueId: 'error-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    props: {
      title: 'cgp.errorTitle',
      text: 'cgp.errorText',
      type: noticeTypes.WARNING,
      buttons: [
        {
          label: 'button.back',
          link: '/consumer-good-prices/search',
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
      mapState: ['loggedIn', 'businessKey', 'stepsStatus'],
      mapDispatch: ['instanceId', 'businessKey', 'stepStatus'],
    },
  },
];

export default ErrorPage;
