import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME, REQUIRES_SOP3 } from 'client/config/permits/constants';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import functions from './functions';
import getSteps from '../../utils/getSteps';
import { PATH_APPLICATION_REJECTED } from '../../utils/constants/pageRoutes';

const applicationRejected = [
  {
    path: `/:serviceName${PATH_APPLICATION_REJECTED}`, // path for router
    uniqueId: 'application-rejected', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'pageTitle.permitApplication', // title of the page, later it will be read from CMS
    props: {
      status: 'failure',
      title: 'applicationRejected.title',
      content: 'applicationRejected.content',
      onFinish: functions.onClick(PROCESS_NAME),
      buttons: [],
      finishButton: true,
    },
    onPageInit: (props: IVariables) => {
      return {
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
        commentMessage: props.applicationStatusComments || '-',
        currentStep: functions.getCurrentStep(props),
        stepsStatus: functions.getStepStatus(props),
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: [
        'apTransactionNumber',
        'submitDate',
        'Comments',
        'applicationStatusComments',
        'otherEntitySubmitted',
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        {
          steps: (state: IVariables) => {
            return getSteps(state);
          },
        },
        'businessKey',
        'history',
        'user',
      ],
      mapDispatch: [
        'stepsStatus',
        'businessKey',
        'instanceId',
        'serviceType',
        'companyType',
        'companyDetails',
        'permitType',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default applicationRejected;
