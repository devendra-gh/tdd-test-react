import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import functions from './functions';

const ErrorPage = [
  {
    path: '/business-licence-fine/error-page', // path for router
    uniqueId: 'error-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'payfines.title', // title of the page, later it will be read from CMS
    init: functions.init,
    props: {
      title: 'payfines.error.somethingWentWrong',
      text: 'payfines.error.desc.somethingWentWrong',
      type: noticeTypes.WARNING,
      onClick: functions.onClick,
      steps: [],
      buttons: [
        {
          label: 'button.back',
          ariaLabel: 'back',
          link: '/business-licence-fine',
          withArrow: true,
          uiType: 'secondary',
          alignIcon: 'start',
        },
      ],
    },
    state: {
      mapState: ['formBusinessLicenceFine'],
      mapDispatch: ['instanceId', 'businessKey', 'formBusinessLicenceFine'],
    },
  },
];

export default ErrorPage;
