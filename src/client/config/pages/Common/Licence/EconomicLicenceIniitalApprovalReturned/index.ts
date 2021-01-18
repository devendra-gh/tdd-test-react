import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';
import { PROCESS_NAME } from '../../../../constants';
import { getDateFromTimeStamp } from '../../../../utils/datetime';

const initialReturned = [
  {
    path: '/economic-licence/ica-returned',
    uniqueId: 'economic-licence-ica-returned',
    template: 'notice',
    title: 'global.economicLicence',
    props: {
      currentStep: 'initial_approval',
      currentSubStep: 'initial_approval',
      type: noticeTypes.WARNING,
      title: 'notice.economicLicence.returned.title',
      // text: 'notice.economicLicence.returned.text',
      buttons: [],
      stepsStatus: { ded_approval: 'finish', ica_payment: 'finish' },
    },
    onPageInit: (props: IVariables) => {
      return {
        text: `${props.i18n('notice.economicName.returned.text')} - ${
          props.returnedMessage
        }`,
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
      variables: ['cnNumber', 'submitDate', 'returnedMessage'],
    },
    state: {
      mapState: ['loggedIn', { steps: functions.getStep }],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default initialReturned;
