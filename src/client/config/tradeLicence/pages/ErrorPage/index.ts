import { IVariables } from '@tamm/app-composer';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { PROCESS_NAME } from '../../constants';
import functions from './functions';
import { PATH_ERROR } from '../../routes';
import { getAnalyticsData } from '../../utils/analytics';

const ErrorPage = [
  {
    path: PATH_ERROR, // path for router
    uniqueId: 'error-page', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'errorPage.pageTitle', // title of the page, later it will be read from CMS
    props: {
      title: 'errorPage.text',
      type: noticeTypes.WARNING,
      buttons: [
        {
          label: 'button.ok',
          onClick: functions.redirect,
          uiType: 'secondary',
        },
      ],
    },
    onPageInit: (props: IVariables) => {
      getAnalyticsData('sla', {
        applicationStatus: 'error Page',
        serviceStatus: 'fail',
      });
      return {
        text: props.errorMsg,
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['errorMsg'],
    },
    state: {
      mapState: ['loggedIn', 'businessKey'],
      mapDispatch: ['instanceId', 'businessKey'],
    },
  },
];

export default ErrorPage;
