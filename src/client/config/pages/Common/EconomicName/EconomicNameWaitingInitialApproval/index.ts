import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import baseUrl from 'client/utils/baseUrl';
import { PROCESS_NAME } from '../../../../constants';
import functions from './functions';
import { getDateFromTimeStamp } from '../../../../utils/datetime';

const initialApproval = [
  {
    path: '/economic-name/initial-approval', // path for router
    uniqueId: 'economic-name-waiting-initial-approval', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'global.economicName', // title of the page, later it will be read from CMS
    props: {
      currentStep: 'economic_name',
      currentSubStep: 'initial_approval',
      type: noticeTypes.INFO,
      title: 'notice.economicName.waitingIcaApproval.title',
      text: 'notice.economicName.waitingIcaApproval.text',
      buttons: [
        {
          label: 'button.downloadCertificate',
          onClick: (props: IVariables) => {
            window.open(
              `${baseUrl}/api/download/businessCertificateFromAdu?instanceId=${props.instanceId ||
                ''}&type=economicLicenceTn`,
              '_blank',
            );
          },
          uiType: 'secondary',
        },
      ],
      stepsStatus: {
        'economic_name.ded_approval': 'finish',
        'economic_name.payment': 'finish',
      },
    },
    onPageInit: (props: IVariables) => {
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
      variables: ['tnNumber', 'submitDate', 'capId'],
    },
    state: {
      mapState: ['loggedIn', 'instanceId', { steps: functions.getStep }],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default initialApproval;
