import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { continueProcess } from './functions';
// import { PROCESS_NAME } from "../../../constants";

const result = [
  {
    path: '/economic-licence/continue-process', // path for router
    uniqueId: 'economic-name-approved', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'global.continueProcess', // title of the page, later it will be read from CMS

    props: {
      type: noticeTypes.SUCCESS,
      title: 'notice.continueProcess.title',
      text: 'notice.continueProcess.text',
      buttons: [],
      tags: [],
    },
    onPageInit: async (props: IVariables) => {
      const redirectData: any = await continueProcess(props);
      if (redirectData) {
        setTimeout(() => {
          props.history.push(redirectData.state);
        }, 3000);
      }
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        'instanceId',
        'economicLicense',
        'smartPassData',
        'partners',
      ],
      mapDispatch: [
        // required params for continue-process
        'businessKey',
        'instanceId',
        'economicLicense',

        // pass extra keys that you want to load from camunda to our redux state
        // it will update current redux state
        'smartPassData',
        'partners',
        'tnNumber',
        // 'cnNumber',
      ],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default result;
