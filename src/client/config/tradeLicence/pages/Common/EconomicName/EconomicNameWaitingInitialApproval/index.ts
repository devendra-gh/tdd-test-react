import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { economicNameSteps } from 'client/config/steps';
import baseUrl from 'client/utils/baseUrl';
import { PROCESS_NAME } from '../../../../constants';
import { getDateFromTimeStamp } from '../../../../utils/datetime';
import { PATH_INITIAL_APPROVAL } from '../../../../routes';
import { getAnalyticsData } from '../../../../utils/analytics';

const initialApproval = [
  {
    path: PATH_INITIAL_APPROVAL, // path for router
    uniqueId: 'economic-name-waiting-initial-approval', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'global.economicName', // title of the page, later it will be read from CMS
    props: {
      currentStep: 'initial_approval',
      stepsStatus: {
        ded_approval: 'finish',
        payment: 'finish',
      },
      steps: economicNameSteps,
      type: noticeTypes.INFO,
      title: 'notice.economicName.waitingIcaApproval.title',
      text: 'notice.economicName.waitingIcaApproval.text',
      buttons: [
        {
          label: 'button.downloadCertificate',
          onClick: (props: IVariables) => {
            window.open(
              `${baseUrl}/api/download/businessCertificateFromAdu?instanceId=${
                props.instanceId || ''
              }&type=tradeNameTn&mobileDownloadable=pdf&mobileFileName=Certificate`,
              '_blank',
            );
          },
          uiType: 'secondary',
        },
      ],
    },
    onPageInit: (props: IVariables) => {
      getAnalyticsData(
        'pay2',
        {
          applicationStatus: 'waiting for initial approval',
        },
        { sum: props.tradenameFees },
      );
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
      mapState: ['loggedIn', 'instanceId', 'tradenameFees'],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default initialApproval;
