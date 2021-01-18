import { IVariables } from '@tamm/app-composer';
import { PATH_REJECTED_ACTIVITY } from 'client/config/AddEconomicActivity/routes';
import { getAnalyticsData, getDateFromTimeStamp } from '../../utils/common';
import { PROCESS_NAME_ADD_ECONOMIC_ACTIVITY } from '../../constants';
// import functions from './functions';

const rejectedActivity = [
  {
    path: PATH_REJECTED_ACTIVITY, // path for router
    uniqueId: 'add-economic-activity.rejected-activity', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'addEconomicActivity.title', // title of the page, later it will be read from CMS

    props: {
      type: 'WARNING',
      title: 'addEconomicActivity.rejected.title',
      text: 'addEconomicActivity.rejected.subTitle',
      steps: [],
      buttons: [
        // {
        //   label: 'button.dashboard',
        //   onClick: functions.navigateToDashboard,
        //   uiType: 'secondary',
        // },
      ],
    },
    fromProcessState: {
      processName: PROCESS_NAME_ADD_ECONOMIC_ACTIVITY,
      variables: ['applicationStatus'],
    },
    onPageInit: async (props: IVariables) => {
      getAnalyticsData('sla', {
        serviceStatus: 'success',
        applicationStatus: props.applicationStatus,
      });
      return {
        tags: [
          {
            label: 'addEconomicActivity.notice.refNo',
            value: props.newActivityApiData.altId,
          },
          {
            label: 'addEconomicActivity.notice.submit',
            value: getDateFromTimeStamp(props.newActivityApiData.submittedOn),
          },
        ],
      };
    },

    state: {
      mapState: ['steps', 'stepsStatus', 'newActivityApiData'],
      mapDispatch: ['stepsStatus'],
    },
  },
];

export default rejectedActivity;
