import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { PATH_ERROR, BASE_PATH } from 'client/config/payApplicationFees/routes';
import functions from './functions';

const ErrorPage = [
  {
    path: PATH_ERROR, // path for router
    uniqueId: 'error-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    init: functions.init,
    props: {
      title: 'errorMsg.somethingWentWrong.title',
      text: 'errorMsg.somethingWentWrong.content',
      type: noticeTypes.WARNING,
      onClick: functions.onClick,
      steps: [],
      buttons: [
        {
          label: 'button.back',
          ariaLabel: 'back',
          link: BASE_PATH,
          withArrow: true,
          uiType: 'secondary',
          alignIcon: 'start',
        },
      ],
    },
    state: {
      mapState: ['form'],
      mapDispatch: ['instanceId', 'businessKey', 'form'],
    },
  },
];

export default ErrorPage;
