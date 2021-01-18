import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from '../../../../constants';
import functions from './functions';
import { getDateFromTimeStamp } from '../../../../utils/datetime';
import { PATH_REJECTED } from '../../../../routes';
import { getAnalyticsData } from '../../../../utils/analytics';

const rejected = [
  {
    path: PATH_REJECTED,
    uniqueId: 'economic-name-rejected',
    template: 'notice',
    title: 'global.economicName',
    props: {
      type: noticeTypes.WARNING,
      title: 'notice.rejected.title',
      buttons: [
        {
          label: 'button.ok',
          onClick: functions.redirect,
          uiType: 'secondary',
        },
      ],
    },
    onPageInit: (props: IVariables) => {
      props.actions.economicNameCapId.update(props.capId);
      props.actions.tnNumber.update(props.tnNumber);
      getAnalyticsData('sla', {
        applicationStatus: 'rejected',
        serviceStatus: 'fail',
      });
      return {
        text: `${props.i18n('notice.rejected.text')} ${
          props.returnedMessage ? `- ${props.returnedMessage}` : ''
        }`,
        tags: props.tnNumber
          ? [
              {
                label: 'notice.refNo',
                value: props.tnNumber,
              },
              {
                label: 'notice.submit',
                value: getDateFromTimeStamp(props.submitDate),
              },
            ]
          : [],
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['tnNumber', 'capId', 'submitDate', 'returnedMessage'],
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        'instanceId',
        'tnNumber',
        { capId: functions.getCapId },
      ],
      mapDispatch: ['economicNameCapId', 'tnNumber'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default rejected;
