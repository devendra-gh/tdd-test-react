import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { economicNameSteps } from 'client/config/steps';
import { PROCESS_NAME } from '../../../../constants';
import { getDateFromTimeStamp } from '../../../../utils/datetime';
import { PATH_PAYMENT_PROGRESS } from '../../../../routes';

const payment = [
  {
    path: PATH_PAYMENT_PROGRESS, // path for router
    uniqueId: 'economic-name-payment', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'global.economicName', // title of the page, later it will be read from CMS
    props: {
      currentStep: 'payment',
      type: noticeTypes.INFO,
      title: 'notice.paymentInprogress.title',
      text: 'notice.paymentInprogress.text',
      buttons: [],
      stepsStatus: {
        ded_approval: 'finish',
      },
      steps: economicNameSteps,
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
            value: props.tnNumber,
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
      variables: ['tnNumber', 'submitDate', 'paymentLink'],
    },
    state: {
      mapState: ['loggedIn'],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default payment;
