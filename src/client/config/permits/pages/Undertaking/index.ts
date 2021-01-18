import functions from './functions';
import { PATH_UNDERTAKING } from '../../utils/constants/pageRoutes';
import { REQUIRES_CUSTOM_LOGIN } from '../../constants';

const undertaking = [
  {
    path: `/:serviceName${PATH_UNDERTAKING}`, // path for router
    uniqueId: 'permits-undertaking', // uniqueId for caching and other purposes
    template: 'undertaking', // template name, must be located in index of folder template/index
    title: 'pageTitle.permitApplication', // title of the page, later it will be read from CMS
    init: functions.onInit,
    props: {
      handleToggleCheckbox: functions.handleToggleCheckbox,
      onSubmit: functions.onSubmit,
      onCancelClick: functions.onCancelClick,
      startShowingErrors: false,
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        'serviceType',
        'permitType',
        'permitInfo',
        'startShowingErrors',
      ],
      mapDispatch: [
        'instanceId',
        'businessKey',
        'serviceType',
        'permitType',
        'permitInfo',
        'startShowingErrors',
      ],
    },
    requires: [REQUIRES_CUSTOM_LOGIN],
  },
];

export default undertaking;
