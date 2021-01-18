import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { IVariables } from '@tamm/app-composer';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import { PROCESS_NAME } from '../../../constants';
import functions from './functions';

const waitingApproval = [
  {
    path: '/economic-licence/instant-returned', // path for router
    uniqueId: 'instant-licence-payment', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'global.instantLicence', // title of the page, later it will be read from CMS
    props: {
      type: 'information',
      title: 'notice.instancrReturned.title',
      text: 'notice.instancrReturned.description',
      buttons: [
        {
          label: 'button.ok',
          onClick: functions.redirect,
          uiType: 'secondary',
        },
      ],
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
        'economicLicense',
        'stepsStatus',
        'instantLicenceSteps',
        'businessKey',
      ],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default waitingApproval;
