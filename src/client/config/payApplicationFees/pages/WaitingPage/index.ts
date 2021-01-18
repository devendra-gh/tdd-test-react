// import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from 'client/config/payApplicationFees/constants';
import { PATH_WAITING } from 'client/config/payApplicationFees/routes';
import { FORM_STEP_2 } from 'client/config/payApplicationFees/steps';

const waitingPage = [
  {
    path: PATH_WAITING, // path for router
    uniqueId: 'pay-application-fees.waiting', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    props: {
      currentStep: FORM_STEP_2,
      type: noticeTypes.INFO,
      buttons: [],
      title: 'payment.inProgress.title',
      content: 'payment.inProgress.content',
    },
    onPageInit: (props: IVariables) => {
      props.actions.stepsStatus.update({
        ...props.stepsStatus,
        [`${FORM_STEP_2}`]: 'process',
      });
      window.location.replace(props.paymentLink);
      const { transactionNumber } = props.form;

      return {
        link: props.paymentLink,
        tags: [
          {
            label: 'label.tags.refNo',
            value: transactionNumber, // props.renewalNumber,
          },
        ],
        ...props.form.waitingMsg,
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['paymentLink'],
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'instanceId',
        'businessKey',
        'steps',
        'stepsStatus',
        'submitLicence',
        'form',
      ],
      mapDispatch: [
        'instanceId',
        'businessKey',
        'steps',
        'stepsStatus',
        'submitLicence',
      ],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default waitingPage;
