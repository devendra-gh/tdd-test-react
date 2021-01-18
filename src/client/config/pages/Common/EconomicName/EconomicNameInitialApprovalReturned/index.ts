import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from '../../../../constants';
import functions from './functions';
import { getDateFromTimeStamp } from '../../../../utils/datetime';

const initialApproval = [
  {
    path: '/economic-name/ica-returned', // path for router
    uniqueId: 'economic-name-initial-approval-returned', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'global.economicName', // title of the page, later it will be read from CMS
    props: {
      currentStep: 'economic_name',
      currentSubStep: 'initial_approval',
      type: noticeTypes.WARNING,
      title: 'notice.economicName.initialReturned.title',
      // text: 'notice.economicName.initialReturned.text',
      buttons: [],
      stepsStatus: {
        'economic_name.ded_approval': 'finish',
        'economic_name.payment': 'finish',
      },
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
