import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME, REQUIRES_SOP3 } from 'client/config/permits/constants';
import { InformationCircleFilled } from '@tamm/ui-lib-v2-icon/Icons';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import functions from './functions';
import getSteps from '../../utils/getSteps';
import { PATH_APPLICATION_RETURNED } from '../../utils/constants/pageRoutes';

const applicationReturned = [
  {
    path: `/:serviceName${PATH_APPLICATION_RETURNED}`, // path for router
    uniqueId: 'application-returned', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'pageTitle.permitApplication', // title of the page, later it will be read from CMS
    props: {
      multiple: true,
      status: 'custom',
      showUpload: true,
      icon: InformationCircleFilled,
      title: 'applicationReturned.title',
      content: 'applicationReturned.content',
      buttons: [],
      reUpload: functions.onClick(PROCESS_NAME),
      validation: functions.validation,
    },
    init: (props: IVariables) => {
      props.actions.permitSubmitting.update(false);
      props.actions.permitServerError.update('');
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
        comments: props.applicationStatusComments || '-',
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: [
        'apTransactionNumber',
        'submitDate',
        'applicationStatusComments',
        'otherEntitySubmitted',
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        {
          steps: (state: IVariables) => {
            return getSteps(state);
          },
        },
        'businessKey',
        'history',
        'permitType',
        'serviceType',
        'permitInfo',
        'permitSubmitting',
        'permitServerError',
        'returnPage',
        'user',
      ],
      mapDispatch: [
        'permitInfo',
        'permitSubmitting',
        'permitServerError',
        'returnPage',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default applicationReturned;
