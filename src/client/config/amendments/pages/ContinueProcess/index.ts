import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';
import functions from './functions';
import { mapStateCommonForAll } from '../../constants';

const result = [
  {
    path: `/continue-process`, // path for router
    uniqueId: 'continue-process', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'title.continueProcess', // title of the page, later it will be read from CMS

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
        ...mapStateCommonForAll,
        'loggedIn',
        'instanceId',
        'user',
        'pageLoading',
      ],
      mapDispatch: [
        'instanceId',
        ...mapStateCommonForAll,
        'pageLoading',
        'documents',
        'applicationReturnDocuments',
        'dedErrorMessage',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default result;
