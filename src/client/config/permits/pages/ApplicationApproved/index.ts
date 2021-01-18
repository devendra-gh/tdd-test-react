import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME, REQUIRES_SOP3 } from 'client/config/permits/constants';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import functions from './functions';
import getSteps from '../../utils/getSteps';
import { PATH_APPLICATION_APPROVED } from '../../utils/constants/pageRoutes';
import { STEP_TRACKER_STATUS_FINISH } from '../../utils/constants/stepTrackerStatus';

const applicationApproved = [
  {
    path: `/:serviceName${PATH_APPLICATION_APPROVED}`, // path for router
    uniqueId: `application-approved`, // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'pageTitle.permitApplication', // title of the page, later it will be read from CMS
    props: {
      status: 'success',
      icon: 'default',
      withArrow: true,
      title: 'applicationApproved.title',
      content: 'applicationApproved.content',
      buttons: [
        {
          label: 'button.next',
          onClick: functions.onClick,
        },
      ],
    },
    onPageInit: (props: IVariables) => {
      return {
        currentStep: '',
        stepsStatus: {
          [props.steps[1].name]: STEP_TRACKER_STATUS_FINISH,
          [props.steps[0].name]: STEP_TRACKER_STATUS_FINISH,
        },
        tags: [
          {
            label: 'global.referenceNumber',
            value: props.apTransactionNumber || '',
          },
          {
            label: 'global.submittedOn',
            value: props.submitDate
              ? getDateFromTimeStamp(props.submitDate)
              : '',
          },
        ],
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['apTransactionNumber', 'submitDate'],
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
        'user',
      ],
      mapDispatch: [
        'businessType',
        'tradeNameEn',
        'tradeNameAr',
        'instanceId',
        'businessKey',
        'stepsStatus',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default applicationApproved;
