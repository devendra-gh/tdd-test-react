import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from 'client/config/constants';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import functions from './functions';
import { syncLicenseTypeAndCode } from '../../ContinueProcess/functions';

const dedApproval = [
  {
    path: '/economic-name/waiting-approval',
    uniqueId: 'economic-name-waitingApproval',
    template: 'notice',
    title: 'global.economicName',
    init: (props: IVariables) => {
      if (!props.instanceId) {
        props.history.push('/'); // TODO : Check
      }
    },
    props: {
      currentStep: 'economic_name',
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
            value: props.tnNumber,
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
      variables: ['tnNumber', 'submitDate'],
    },
    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        { steps: functions.getStep },
        'businessKey',
        'instanceId',
        'economicLicense',
      ],
      mapDispatch: ['stepsStatus', 'economicLicense'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default dedApproval;
