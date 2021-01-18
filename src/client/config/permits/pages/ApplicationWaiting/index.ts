import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME, REQUIRES_SOP3 } from 'client/config/permits/constants';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import { LoadingCircle2 } from '@tamm/ui-lib-v2-icon/Icons';
import getSteps from '../../utils/getSteps';
import { PATH_APPLICATION_WAITING } from '../../utils/constants/pageRoutes';
import functions from './functions';

const permitWaiting = [
  {
    path: `/:serviceName${PATH_APPLICATION_WAITING}`, // path for router
    uniqueId: 'application-waiting', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'pageTitle.permitApplication', // title of the page, later it will be read from CMS
    props: {
      status: 'custom',
      icon: LoadingCircle2,
      type: 'inProgress',
      title: 'applicationApprovalWaiting.title',
      content: 'applicationApprovalWaiting.content',
      buttons: [],
    },
    init: (props: IVariables) => {
      let clearDoc: any;
      if (props.serviceType && props.permitInfo[props.serviceType].documents) {
        Object.keys(props.permitInfo[props.serviceType].documents).forEach(
          (formField: string) => {
            clearDoc = {
              ...clearDoc,
              [formField]: null,
            };
          },
        );
        props.actions.permitInfo.update({
          ...props.permitInfo,
          [props.serviceType]: {
            ...props.permitInfo[props.serviceType],
            documents: {
              ...clearDoc,
            },
          },
        });
      }
    },
    onPageInit: (props: IVariables) => {
      return {
        currentStep: functions.getCurrentStep(props),
        stepsStatus: functions.getStepStatus(props),
        tags: [
          {
            label: 'global.referenceNumber',
            value: props.apTransactionNumber || '',
          },
          {
            label: 'global.submittedOn',
            value: props.submitDate
              ? getDateFromTimeStamp(props.submitDate)
              : '',
          },
        ],
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['apTransactionNumber', 'submitDate', 'otherEntitySubmitted'],
    },
    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        'entityApprovalDocs',
        {
          steps: (state: IVariables) => {
            return getSteps(state);
          },
        },
        'permitInfo',
        'serviceType',
        'user',
      ],
      mapDispatch: ['permitInfo'],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default permitWaiting;
