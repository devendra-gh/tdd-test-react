import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { PATH_ERROR } from 'client/config/renewLicence/routes';
import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { REQUIRE_SOP3, getAnalyticsData } from '../../utils/common';
import functions from './functions';

const error = [
  {
    path: PATH_ERROR, // path for router
    uniqueId: 'error-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    init: functions.init,
    onPageInit: () => {
      getAnalyticsData('sla', { serviceStatus: 'fail' });
    },
    props: {
      title: 'errorMsg.somethingWentWrong.title',
      content: 'errorMsg.somethingWentWrong.content',
      type: noticeTypes.WARNING,

      steps: [],
      buttons: [
        {
          label: 'button.back',
          ariaLabel: 'back',
          withArrow: true,
          uiType: 'secondary',
          alignIcon: 'start',
          onClick: functions.onClick,
        },
      ],
    },
    state: {
      mapState: ['form', 'instanceId', 'businessKey', 'user'],
      mapDispatch: ['instanceId', 'businessKey', 'form'],
    },
    requires: [REQUIRES_LOGIN, REQUIRE_SOP3],
  },
];

export default error;
