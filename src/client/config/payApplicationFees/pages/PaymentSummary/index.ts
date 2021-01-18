// import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from 'client/config/payApplicationFees/constants';
import { FORM_STEP_2 } from 'client/config/payApplicationFees/steps';
import {
  PATH_PAYMENT_SUMMARY,
  PATH_ERROR,
} from 'client/config/payApplicationFees/routes';
import functions from './functions';

const paymentSummary = [
  {
    path: PATH_PAYMENT_SUMMARY, // path for router
    uniqueId: 'pay-application-fees.payment-summary', // uniqueId for caching and other purposes
    template: 'summary', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    description: 'notice.economiclicence.pendingPayment.description',
    init: functions.onInit,
    props: {
      currentStep: FORM_STEP_2,
      title: 'notice.economicName.pendingPayment.title',
      subTitle: 'payment',
      description: 'notice.economicName.pendingPayment.text',
      type: noticeTypes.INFO,
      buttons: [
        {
          label: 'common.back',
          onClick: functions.onBack,
          uiType: 'secondary',
          withArrow: true,
          alignIcon: 'start',
        },
        {
          label: 'button.pay',
          onClick: functions.onClick,
          uiType: 'primary',
          withArrow: true,
          alignIcon: 'end',
        },
      ],
    },
    onPageInit: (props: IVariables) => {
      const { feesDetails, totalFees, applicationFeesResult } = props;
      if (applicationFeesResult === 'FEE_API_ERROR') {
        props.history.push(PATH_ERROR);
      }
      const listItems = JSON.parse(feesDetails);
      props.actions.form.update({
        ...props.form,
        feesDetails: listItems,
        totalFees,
      });
      return {
        list: [
          {
            uiType: 'default',
            title: props.i18n('notice.paymentSummary.title'),
            items: listItems,
            columns: [
              {
                id: props.locale === 'en' ? 'feeDescEn' : 'feeDescAr',
                title: props.i18n('label.description'),
              },
              {
                id: 'FeeAmount',
                title: props.i18n('label.fees'),
                align: 'end',
              },
            ],
          },
        ],
        totalSection: props.totalFees,
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: ['feesDetails', 'totalFees', 'applicationFeesResult'],
    },
    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        'steps',
        'businessKey',
        'history',
        'form',
      ],
      mapDispatch: ['stepsStatus', 'form'],
    },
    // requires: [REQUIRES_LOGIN],
  },
];

export default paymentSummary;
