import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';
import { PROCESS_NAME } from '../../../../constants';
import { getDateFromTimeStamp } from '../../../../utils/datetime';

const icaPayment = [
  {
    path: '/economic-licence/ica-payment-process', // path for router
    uniqueId: 'economic-licence-ica-payment', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'global.economicLicence', // title of the page, later it will be read from CMS
    props: {
      currentStep: 'ica_payment',
      currentSubStep: 'ica_payment',
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
        'withoutNameSteps',
        { steps: functions.getStep, stepsStatus: functions.getStepStatus },
        'economicLicense',
      ],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default icaPayment;
