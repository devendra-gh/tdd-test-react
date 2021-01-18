import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { PATH_ERROR, BASE_PATH } from '../../routes';
import { getAnalyticsData } from '../../utils/common';

const ErrorPage = [
  {
    path: PATH_ERROR, // path for router
    uniqueId: 'error-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'investorProtection.title', // title of the page, later it will be read from CMS
    props: {
      showSteps: false,
      title: 'investorProtection.errorTitle',
      content: 'investorProtection.errorDescription',
      type: noticeTypes.WARNING,
      buttons: [
        {
          label: 'button.back',
          onClick: (props: IVariables) => {
            props.history.push(BASE_PATH);
          },
          withArrow: true,
          alignIcon: 'start',
        },
      ],
      onPageInit: async (props: IVariables) => {
        getAnalyticsData('sla', { serviceStatus: 'fail' });
      },
    },
    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return [];
          },
        },
      ],
      mapDispatch: ['stepStatus'],
    },
  },
];

export default ErrorPage;
