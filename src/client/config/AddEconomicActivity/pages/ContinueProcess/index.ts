import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import functions from './functions';
import { PATH_CONTINUE_PROCESS } from '../../routes';

const result = [
  {
    path: `${PATH_CONTINUE_PROCESS}`, // path for router
    uniqueId: 'continue-process', // uniqueId for caching and other purposes
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
        'user',
        'newActivityApiData',
      ],
      mapDispatch: ['businessKey', 'instanceId', 'newActivityApiData'],
    },
  },
];

export default result;
