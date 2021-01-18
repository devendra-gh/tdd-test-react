import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME, REQUIRES_SOP3 } from 'client/config/permits/constants';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import functions from './functions';
import getSteps from '../../utils/getSteps';
import { PATH_PAYMENT_FAIL } from '../../utils/constants/pageRoutes';
import checkIfMultiStepPermit from '../../utils/checkIfMultiStepPermit';

const paymentFailed = [
  {
    path: `/:serviceName${PATH_PAYMENT_FAIL}`, // path for router
    uniqueId: 'payment-fail', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'pageTitle.permitApplication', // title of the page, later it will be read from CMS
    props: {
      status: 'failure',
      title: 'paymentFailed.title',
      content: 'paymentFailed.content',
      buttons: [
        {
          label: 'button.retryPayment',
          onClick: functions.onClick(PROCESS_NAME),
        },
      ],
    },
    onPageInit: (props: IVariables) => {
      const { steps } = props;
      return {
        currentStep: checkIfMultiStepPermit(props)
          ? steps[3].name
          : steps[2].name,
        currentSubStep: checkIfMultiStepPermit(props)
          ? steps[3].subSteps[2]
          : '',
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
      variables: ['apTransactionNumber', 'submitDate'],
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
        'serviceType',
      ],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default paymentFailed;
