import { REQUIRES_LOGIN, IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from 'client/config/permits/constants';
import functions from './functions';
import {
  PATH_ENTITY_APPROVAL_DOCS,
  PATH_APPLICATION_WAITING,
} from '../../utils/constants/pageRoutes';
import getSteps from '../../utils/getSteps';
import {
  STEP_TRACKER_STATUS_FINISH,
  STEP_TRACKER_STATUS_PROCESS,
} from '../../utils/constants/stepTrackerStatus';
import {
  PERMIT_MOBILE_CAR,
  PERMIT_FOOD_TRUCK,
} from '../../utils/constants/permits';
import { STEP_4_1_1 } from '../../steps';

const entityApproval = [
  {
    path: [
      `/${PERMIT_MOBILE_CAR}${PATH_ENTITY_APPROVAL_DOCS}`,
      `/${PERMIT_FOOD_TRUCK}${PATH_ENTITY_APPROVAL_DOCS}`,
    ], // path for router
    uniqueId: 'permits-entityApproval-docs', // uniqueId for caching and other purposes
    template: 'entityApprovedDocs', // template name, must be located in index of folder template/index
    title: 'pageTitle.permitApplication', // title of the page, later it will be read from CMS
    props: {
      buttons: [],
      title: 'entityApproval.title',
      content: 'entityApproval.content',
      onBackClick: functions.onBackClick,
      onSubmit: functions.onSubmit,
      validation: functions.validation,
      handleToggleCheckbox: functions.handleToggleCheckbox,
    },
    onPageInit: (props: IVariables) => {
      const { serviceType, otherEntitySubmitted, steps } = props;
      if (otherEntitySubmitted) {
        props.history.push(`/${serviceType}${PATH_APPLICATION_WAITING}`);
      }
      return {
        currentStep: steps[3].name,
        stepsStatus: {
          [`${steps[3].name}.${STEP_4_1_1}`]: STEP_TRACKER_STATUS_PROCESS,
          [steps[2].name]: STEP_TRACKER_STATUS_FINISH,
          [steps[1].name]: STEP_TRACKER_STATUS_FINISH,
          [steps[0].name]: STEP_TRACKER_STATUS_FINISH,
        },
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['otherEntitySubmitted'],
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
      mapDispatch: ['instanceId', 'businessKey', 'permitInfo'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default entityApproval;
