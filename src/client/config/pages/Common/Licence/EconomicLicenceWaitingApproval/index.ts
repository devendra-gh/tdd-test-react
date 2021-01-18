import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';
import { PROCESS_NAME } from '../../../../constants';
import { getDateFromTimeStamp } from '../../../../utils/datetime';
import { syncLicenseTypeAndCode } from '../../ContinueProcess/functions';

const result = [
  {
    path: '/economic-licence/waiting-approval', // path for router
    uniqueId: 'economic-licence-waiting-approval', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'global.economicLicence', // title of the page, later it will be read from CMS
    props: {
      // currentStep: 'economic_licence',
      currentSubStep: 'ded_approval',
      type: noticeTypes.INFO,
      title: 'notice.economicName.waitingApproval.title',
      text: 'notice.economicName.waitingApproval.description',
      buttons: [],
    },
    onPageInit: (props: IVariables) => {
      syncLicenseTypeAndCode(props);
      return {
        tags: [
          {
            label: 'notice.refNo',
            value: props.cnNumber,
          },
          {
            label: 'notice.submit',
            value: getDateFromTimeStamp(props.submitDate),
          },
        ],
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['cnNumber', 'submitDate'],
    },
    state: {
      mapState: [
        'loggedIn',
        {
          steps: functions.getStep,
          currentStep: functions.getCurrentStep,
          stepsStatus: functions.getStepStatus,
        },
        'businessKey',
        'instanceId',
        'economicLicense',
      ],
      mapDispatch: ['stepsStatus', 'economicLicense'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default result;
