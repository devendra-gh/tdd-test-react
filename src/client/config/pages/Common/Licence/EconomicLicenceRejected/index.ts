import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from '../../../../constants';
import functions from './functions';
import { getDateFromTimeStamp } from '../../../../utils/datetime';

const rejected = [
  {
    path: '/economic-licence/rejected',
    uniqueId: 'economic-licence-ded-returned',
    template: 'notice',
    title: 'global.economicLicence',
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
      props.actions.licenceCapId.update(props.capId);
      props.actions.cnNumber.update(props.cnNumber);
      return {
        text: `${props.i18n('notice.rejected.text')} ${
          props.returnedMessage ? `- ${props.returnedMessage}` : ''
        }`,
        tags: props.cnNumber
          ? [
              {
                label: 'notice.refNo',
                value: props.cnNumber,
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
      variables: ['cnNumber', 'submitDate', 'returnedMessage'],
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        'instanceId',
        'licenseCapId',
        'cnNumber',
        'economicLicense',
        { capId: functions.getCapId },
      ],
      mapDispatch: ['stepsStatus', 'licenceCapId', 'cnNumber'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default rejected;
