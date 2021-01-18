import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { IVariables } from '@tamm/app-composer';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { PROCESS_NAME, REQUIRES_SOP3 } from 'client/config/permits/constants';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import functions from './functions';
import getSteps from '../../utils/getSteps';
import { PATH_PAYMENT_SUMMARY } from '../../utils/constants/pageRoutes';
import checkIfMultiStepPermit from '../../utils/checkIfMultiStepPermit';
import { calculateSum } from '../../utils/common';

const summary = [
  {
    path: `/:serviceName${PATH_PAYMENT_SUMMARY}`, // path for router
    uniqueId: 'payment-summary', // uniqueId for caching and other purposes
    template: 'summary', // template name, must be located in index of folder template/index
    title: 'pageTitle.permitApplication', // title of the page, later it will be read from CMS
    props: {
      type: noticeTypes.INFO,
      title: 'global.payment',
      subTitle: 'global.payment',
      content: 'applicationPaymentSummary.content',
      buttons: [
        {
          label: 'button.pay',
          onClick: functions.onClick(PROCESS_NAME),
          withArrow: true,
        },
      ],
    },
    onPageInit: (props: IVariables) => {
      const { steps } = props;
      const permitsFees = props.permitsFees
        ? JSON.parse(props.permitsFees)
        : [];
      return {
        currentStep: checkIfMultiStepPermit(props)
          ? steps[3].name
          : steps[2].name,
        currentSubStep: checkIfMultiStepPermit(props)
          ? steps[3].subSteps[2]
          : '',
        stepsStatus: functions.getStepStatus(props),
        list: functions.getPaymentSummaryDetails(props),
        totalSection: calculateSum(permitsFees, 'FeeAmount'),
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
      variables: ['permitsFees', 'paymentLink', 'submitDate'],
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
        'serviceType',
        'businessKey',
        'history',
        'permitType',
        'permitInfo',
        'companyDetails',
        'user',
      ],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN, REQUIRES_SOP3],
  },
];

export default summary;
