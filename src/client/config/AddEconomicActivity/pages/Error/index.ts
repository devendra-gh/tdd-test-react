import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { PATH_ERROR } from 'client/config/AddEconomicActivity/routes';
import functions from './functions';
import { getAnalyticsData } from '../../utils/common';

const error = [
  {
    path: PATH_ERROR, // path for router
    uniqueId: 'add-economic-activity.error', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'addEconomicActivity.title', // title of the page, later it will be read from CMS
    props: {
      title: 'addEconomicActivity.errorTitle',
      text: 'addEconomicActivity.errorText',
      type: noticeTypes.WARNING,
      buttons: [
        {
          label: 'button.back',
          onClick: functions.onClick,
          withArrow: true,
          alignIcon: 'start',
          variant: 'secondary',
        },
      ],
    },
    onPageInit: async (props: IVariables) => {
      getAnalyticsData('sla', { serviceStatus: 'fail' });
    },
    state: {
      mapState: [
        'stepsStatus',
        'businessKey',
        // {
        //   steps: (state: IVariables) => {
        //     return state.addEconomicActivitySteps;
        //   },
        // },
      ],
      mapDispatch: [
        'stepsStatus',
        'newActivityApiData',
        'formData',
        'instanceId',
        'businessKey',
        'helperData',
      ],
    },
  },
];

export default error;
