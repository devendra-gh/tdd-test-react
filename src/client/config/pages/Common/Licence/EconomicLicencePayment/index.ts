import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';
import { PROCESS_NAME } from '../../../../constants';
import { getDateFromTimeStamp } from '../../../../utils/datetime';

const result = [
  {
    path: '/economic-licence/payment-processing', // path for router
    uniqueId: 'economic-licence-payment', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'global.economicLicence', // title of the page, later it will be read from CMS
    props: {
      // currentStep: 'economic_licence',
      currentSubStep: 'payment',
      type: noticeTypes.INFO,
      title: 'notice.paymentInprogress.title',
      text: 'notice.paymentInprogress.text',
      buttons: [],
    },
    onPageInit: (props: IVariables) => {
      return {
        additionalTextWithLink: true,
        text1: 'payment.link.text1',
        text2: 'payment.link.text2',
        text3: 'payment.link.text3',
        link: props.paymentLink,
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
      variables: ['cnNumber', 'submitDate', 'paymentLink'],
    },
    state: {
      mapState: [
        'loggedIn',
        'economicLicense',
        'businessKey',
        'economicLicense',
        {
          steps: functions.getStep,
          currentStep: functions.getCurrentStep,
          stepsStatus: functions.getStepStatus,
        },
      ],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default result;
