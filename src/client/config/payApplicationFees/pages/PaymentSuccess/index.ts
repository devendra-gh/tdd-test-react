// import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from 'client/config/payApplicationFees/constants';
import { PATH_PAYMENT_SUCCESS } from 'client/config/payApplicationFees/routes';
import functions from './functions';
import { getDateFromTimeStamp } from '../../utils/common';

const paymentSuccess = [
  {
    path: PATH_PAYMENT_SUCCESS, // path for router
    uniqueId: 'pay-application-fees.payment-success', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    init: functions.onInit,
    props: {
      type: noticeTypes.SUCCESS,
      title: 'payment.success.title',
      content: 'payment.success.content',
      showHelpFulBlock: true,
      buttons: [
        {
          label: 'button.printReceipt',
          onClick: functions.onDownloadReceipt,
          uiType: 'primary',
          alignIcon: 'start',
        },
        {
          label: 'button.dashboard',
          onClick: functions.onFinish,
          uiType: 'secondary',
          alignIcon: 'end',
        },
      ],
    },
    onPageInit: (props: IVariables) => {
      const {
        capId,
        submittedDate,
        applicationStatus,
        applicationCode,
      } = props;
      if (capId) {
        props.actions.form.update({
          ...props.form,
          submittedDate,
          applicationStatus,
          applicationCode,
          capId,
        });
      }
      const { transactionNumber } = props.form;
      return {
        tags: [
          {
            label: 'label.tags.refNo',
            value: transactionNumber,
          },
          {
            label: 'label.tags.submittedOn',
            value: submittedDate && getDateFromTimeStamp(submittedDate),
          },
        ],
        capId: props.capId,
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: [
        'submittedDate',
        'capId',
        'applicationStatus',
        'applicationCode',
        'totalFees',
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        'form',
        'capId',
        'steps',
        'businessKey',
        'history',
        'currentStep',
        'showTradeName',
      ],
      mapDispatch: [
        'stepsStatus',
        'currentStep',
        'showLoader',
        'form',
        'businessKey',
        'businessKey',
        'instanceId',
        'capId',
      ],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default paymentSuccess;
