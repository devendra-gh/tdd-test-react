// import { REQUIRES_LOGIN } from '@tamm/app-composer';
import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import functions from './functions';
import { getAnalyticsData } from '../../utils/common';

const routes = [
  {
    path: '/application-status/info',
    uniqueId: 'application-status-info',
    template: 'statusInfo',
    title: 'checkApplicationStatus.title',
    init: functions.init,
    getVariables: bpm.getVariables,
    props: {
      titlePrefix: functions.getTitleMessage,
      currentStep: 'checkApplicationStatus.step.2',
      getStatus: functions.getStatus,
      content: 'checkApplicationStatus.infoPage.content',
    },
    onPageInit: () => {
      getAnalyticsData('sla', { serviceStatus: 'success' });
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'formApplicationNumber',
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return state.checkApplicationSteps;
          },
        },
        'applicationStatusResponse',
        'statusRecieved',
      ],
      mapDispatch: [
        'formApplicationNumber',
        'stepStatus',
        'applicationStatusResponse',
        'statusRecieved',
      ],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

// @ts-ignore
export default routes;
