// import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { IVariables } from '@tamm/app-composer';
import { PATH_WAITING_APPROVAL } from 'client/config/AddEconomicActivity/routes';
import { addEconomicActivitySteps } from '../../steps';
import {
  IN_PROGRESS,
  PROCESS_NAME_ADD_ECONOMIC_ACTIVITY,
} from '../../constants';
import { getAnalyticsData, getDateFromTimeStamp } from '../../utils/common';

const waitingApproval = [
  {
    path: PATH_WAITING_APPROVAL, // path for router
    uniqueId: 'add-economic-activity.waiting-approval', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'addEconomicActivity.title', // title of the page, later it will be read from CMS

    props: {
      type: IN_PROGRESS,
      title: 'addEconomicActivity.waiting.title',
      text: 'addEconomicActivity.waiting.subTitle',
      steps: addEconomicActivitySteps,
      currentStep: 'addEconomicActivity.getDEDApproval',
      stepsStatus: {
        'addEconomicActivity.addActivity': 'finish',
      },
      buttons: [],
    },
    fromProcessState: {
      processName: PROCESS_NAME_ADD_ECONOMIC_ACTIVITY,
      variables: ['altId', 'submittedOn'],
    },
    onPageInit: async (props: IVariables) => {
      const { altId, submittedOn } = props;
      props.actions.newActivityApiData.update({ submittedOn, altId });
      getAnalyticsData('sla', { serviceStatus: 'success' });
      props.actions.helperData.update({
        ...props.helperData,
        isSubmitted: false,
      });
      return {
        tags: [
          {
            label: 'addEconomicActivity.notice.refNo',
            value: altId,
          },
          {
            label: 'addEconomicActivity.notice.submit',
            value: getDateFromTimeStamp(submittedOn),
          },
        ],
      };
    },

    state: {
      mapState: ['steps', 'stepsStatus', 'newActivityApiData', 'helperData'],
      mapDispatch: ['steps', 'stepsStatus', 'newActivityApiData', 'helperData'],
    },
  },
];

export default waitingApproval;
