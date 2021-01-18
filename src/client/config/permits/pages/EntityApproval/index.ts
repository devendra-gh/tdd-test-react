import { REQUIRES_LOGIN, IVariables } from '@tamm/app-composer';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import functions from './functions';
import { PATH_ENTITY_APPROVAL } from '../../utils/constants/pageRoutes';
import getSteps from '../../utils/getSteps';
import { STEP_TRACKER_STATUS_FINISH } from '../../utils/constants/stepTrackerStatus';
import {
  PERMIT_MOBILE_CAR,
  PERMIT_FOOD_TRUCK,
} from '../../utils/constants/permits';
import { PROCESS_NAME } from '../../constants';

const entityApproval = [
  {
    path: [
      `/${PERMIT_MOBILE_CAR}${PATH_ENTITY_APPROVAL}`,
      `/${PERMIT_FOOD_TRUCK}${PATH_ENTITY_APPROVAL}`,
    ], // path for router
    uniqueId: 'permits-entityApproval', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'pageTitle.permitApplication', // title of the page, later it will be read from CMS

    props: {
      entityApproval: true,
      type: 'inProgress',
      status: 'success',
      buttons: [],
      title: 'entityApproval.title',
      content: 'entityApproval.content',
      onNextClick: functions.onNextClick,
    },
    onPageInit: (props: IVariables) => {
      const { steps, apTransactionNumber, submitDate } = props;
      return {
        currentStep: steps[2].name,
        stepsStatus: {
          [steps[1].name]: STEP_TRACKER_STATUS_FINISH,
          [steps[0].name]: STEP_TRACKER_STATUS_FINISH,
        },
        tags: [
          {
            label: 'global.referenceNumber',
            value: apTransactionNumber || '',
          },
          {
            label: 'global.submittedOn',
            value: submitDate ? getDateFromTimeStamp(submitDate) : '',
          },
        ],
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['otherEntitySubmitted', 'apTransactionNumber', 'submitDate'],
    },
    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return getSteps(state);
          },
        },
        'businessKey',
        'serviceType',
        'permitType',
        'permitInfo',
        'history',
        'user',
      ],
      mapDispatch: ['instanceId', 'businessKey', 'history'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default entityApproval;
