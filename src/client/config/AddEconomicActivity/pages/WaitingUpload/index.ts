import { IVariables } from '@tamm/app-composer';
import { PATH_WAITING_UPLOAD } from 'client/config/AddEconomicActivity/routes';
import { addEconomicActivitySteps } from '../../steps';
import { IN_PROGRESS } from '../../constants';
import { getDateFromTimeStamp } from '../../utils/common';

const waitingUpload = [
  {
    path: PATH_WAITING_UPLOAD, // path for router
    uniqueId: 'add-economic-activity.waiting-upload', // uniqueId for caching and other purposes
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
    onPageInit: async (props: IVariables) => {
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
      mapDispatch: ['steps', 'stepsStatus'],
    },
  },
];

export default waitingUpload;
