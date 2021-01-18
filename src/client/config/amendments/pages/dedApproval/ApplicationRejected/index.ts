import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import { REQUIRES_SOP3 } from 'client/config/amendments/constants/requires';
import functions from './functions';

const applicationRejected = [
  {
    path: `/amendments/application-rejected`, // path for router
    uniqueId: 'application-rejected', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'title.licenceAmendments', // title of the page, later it will be read from CMS

    props: {
      showSidebar: false,
      currentStep: 'process.getDEDApproval',
      status: 'failure',
      title: 'applicationRejected.title',
      content: 'applicationRejected.content',
      buttons: [
        {
          label: 'button.reject',
          uiType: 'primary',
          onClick: functions.onClick,
        },
        // {
        //   label: 'button.contactSupport',
        //   uiType: 'secondary',
        //  onClick: functions.onClick(PROCESS_NAME),
        // },
      ],
    },
    onPageInit: functions.onPageInit,
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['apTransactionNumber', 'submitDate'],
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        'history',
        'steps',
        'stepsStatus',
        'amendmentServerError',
      ],
      mapDispatch: ['businessKey', 'instanceId', 'amendmentServerError'],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default applicationRejected;
