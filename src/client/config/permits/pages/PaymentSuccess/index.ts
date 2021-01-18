import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
// import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME, REQUIRES_SOP3 } from 'client/config/permits/constants';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import functions from './functions';
import getSteps from '../../utils/getSteps';
import { PATH_PAYMENT_SUCCESS } from '../../utils/constants/pageRoutes';

const paymentSuccess = [
  {
    path: `/:serviceName${PATH_PAYMENT_SUCCESS}`, // path for router
    uniqueId: 'payment-success', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'pageTitle.permitApplication', // title of the page, later it will be read from CMS
    props: {
      status: 'success',
      withArrow: false,
      title: 'applicationPaymentSuccess.title',
      content: 'applicationPaymentSuccess.content',
      buttons: [
        {
          label: 'button.downloadPermit',
          onClick: functions.documentDownload,
          uiType: 'primary',
        },
        {
          label: 'button.dashBoard',
          onClick: functions.onClick(PROCESS_NAME),
          uiType: 'secondary',
        },
      ],
    },
    onPageInit: (props: IVariables) => {
      const { apTransactionNumber, submitDate } = props;
      return {
        tags: [
          {
            label: 'global.referenceNumber',
            value: apTransactionNumber || '',
          },
          {
            label: 'global.submittedOn',
            value: submitDate ? getDateFromTimeStamp(submitDate) : '',
          },
        ],
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: [
        'apTransactionNumber',
        'submitDate',
        'capId',
        'DEDLicenseNumber',
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
        {
          stepsStatus: (state: IVariables) => {
            return functions.getStepStatus(state);
          },
        },
        {
          currentStep: (state: IVariables) => {
            return functions.getCurrentStep(state);
          },
        },
        'businessKey',
        'history',
        'permits',
        'user',
        'processComplete',
        'instanceId',
        'permitType',
        'serviceType',
        'companyType',
        'companyDetails',
        'permitInfo',
      ],
      mapDispatch: [
        'stepsStatus',
        'processComplete',
        'businessKey',
        'instanceId',
        'permitType',
        'serviceType',
        'companyType',
        'companyDetails',
        'permitInfo',
      ],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default paymentSuccess;
