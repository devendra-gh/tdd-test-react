import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { getAnalyticsData } from '../../utils';

const ErrorPage = [
  {
    path: '/business-licence-procedure/error-page', // path for router
    uniqueId: 'error-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'businessLicenseProcedure.main.title', // title of the page, later it will be read from CMS
    onPageInit: () => {
      getAnalyticsData('sla', { serviceStatus: 'fail' });
    },
    props: {
      title: 'businessLicenseProcedure.errorTitle',
      text: 'businessLicenseProcedure.errorText',
      type: noticeTypes.WARNING,
      buttons: [
        {
          label: 'button.back',
          link: '/business-licence-procedure',
          withArrow: true,
          alignIcon: 'start',
          variant: 'secondary',
        },
      ],
    },
    state: {
      mapState: ['loggedIn', 'businessKey', 'stepsStatus'],
      mapDispatch: ['instanceId', 'businessKey', 'stepStatus'],
    },
  },
];

export default ErrorPage;
