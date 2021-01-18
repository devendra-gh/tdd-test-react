import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { REQUIRES_SOP3 } from 'client/config/permits/constants';
import functions from './functions';
import { PATH_CONTINUE_PROCESS } from '../../utils/constants/pageRoutes';

const result = [
  {
    path: `/:serviceName${PATH_CONTINUE_PROCESS}`, // path for router
    uniqueId: 'permits-continue-process', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'pageTitle.continueProcess', // title of the page, later it will be read from CMS

    props: {
      type: noticeTypes.SUCCESS,
      title: 'continueProcess.title',
      text: 'continueProcess.content',
      buttons: [],
      tags: [],
    },
    onPageInit: functions.onPageInit,
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        'instanceId',
        'serviceType',
        'permitType',
        'permitInfo',
        'user',
      ],
      mapDispatch: [
        'businessKey',
        'instanceId',
        'serviceType',
        'permitType',
        'permitInfo',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default result;
