import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';
import { PROCESS_NAME } from '../../../../constants';
import { getDateFromTimeStamp } from '../../../../utils/datetime';

const initialApproval = [
  {
    path: '/economic-licence/initial-approval', // path for router
    uniqueId: 'economic-name-waiting-initial-approval', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'global.economicLicence', // title of the page, later it will be read from CMS
    props: {
      currentStep: 'initial_approval',
      currentSubStep: 'initial_approval',
      type: noticeTypes.INFO,
      title: 'notice.economicLicence.waitingIcaApproval.title',
      text: 'notice.economicLicence.waitingIcaApproval.text',
      buttons: [],
      stepsStatus: {
        moa_approval: 'finish',
        ded_approval: 'finish',
        ica_payment: 'finish',
      },
    },
    onPageInit: (props: IVariables) => {
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
        'withoutNameSteps',
        { steps: functions.getStep },
        'economicLicense',
      ],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default initialApproval;
