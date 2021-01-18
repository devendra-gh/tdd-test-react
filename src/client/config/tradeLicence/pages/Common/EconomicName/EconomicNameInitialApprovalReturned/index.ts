import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { economicNameSteps } from 'client/config/steps';
import { PROCESS_NAME } from '../../../../constants';
import functions from './functions';
import { getDateFromTimeStamp } from '../../../../utils/datetime';
import { PATH_ICA_RETURNED } from '../../../../routes';

const initialApproval = [
  {
    path: PATH_ICA_RETURNED, // path for router
    uniqueId: 'economic-name-initial-approval-returned', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'global.economicName', // title of the page, later it will be read from CMS
    props: {
      currentStep: 'initial_approval',
      type: noticeTypes.WARNING,
      title: 'notice.economicName.initialReturned.title',
      // text: 'notice.economicName.initialReturned.text',
      buttons: [],
      stepsStatus: {
        ded_approval: 'finish',
        payment: 'finish',
      },
      steps: economicNameSteps,
    },
    onPageInit: (props: IVariables) => {
      return {
        text: `${props.i18n('notice.economicName.returned.text')} - ${
          props.returnedMessage
        }`,
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
      variables: ['tnNumber', 'submitDate', 'returnedMessage'],
    },
    state: {
      mapState: ['loggedIn', { steps: functions.getStep }],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default initialApproval;
