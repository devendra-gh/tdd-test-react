import { REQUIRES_LOGIN } from '@tamm/app-composer';
import functions from './functions';
import { PATH_ACCOUNT_UPGRADE } from '../../routes';

const accountUpgrade = [
  {
    path: PATH_ACCOUNT_UPGRADE, // path for router
    uniqueId: 'accountUpgrade', // uniqueId for caching and other purposes
    template: 'accountUpgrade', // template name, must be located in index of folder template/index
    title: 'title.accountUpdateRequired', // title of the page, later it will be read from CMS
    props: {
      init: functions.init,
    },
    state: {
      mapState: ['loggedIn', 'businessKey', 'user'],
      mapDispatch: ['instanceId', 'businessKey'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default accountUpgrade;
