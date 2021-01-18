import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { economicNameSteps } from 'client/config/steps';
import { PROCESS_NAME } from 'client/config/constants';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import { syncLicenseTypeAndCode } from '../../ContinueProcess/functions';
import { PATH_WAITING_APPROVAL, BASE_PATH } from '../../../../routes';

const dedApproval = [
  {
    path: PATH_WAITING_APPROVAL,
    uniqueId: 'economic-name-waitingApproval',
    template: 'notice',
    title: 'global.economicName',
    init: (props: IVariables) => {
      if (!props.instanceId) {
        props.history.push(BASE_PATH); // TODO : Check
      }
    },
    props: {
      currentStep: 'ded_approval',
      stepsStatus: {},
      steps: economicNameSteps,
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
      mapState: ['loggedIn', 'businessKey', 'instanceId', 'economicLicense'],
      mapDispatch: ['stepsStatus', 'economicLicense'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default dedApproval;
