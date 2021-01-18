import { REQUIRES_LOGIN, IVariables } from '@tamm/app-composer';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { PATH_PAYMENT_SUMMARY } from 'client/config/renewLicence/routes';
import { FORM_STEP_5, FORM_STEP_4 } from 'client/config/renewLicence/steps';
import { PROCESS_NAME_RENEW_LICENCE } from '../../constants';
import functions from './functions';
import { REQUIRE_SOP3, getAnalyticsData } from '../../utils/common';

const paymentSummary = [
  {
    path: PATH_PAYMENT_SUMMARY, // path for router
    uniqueId: 'renew-economic-licence-payment-summary', // uniqueId for caching and other purposes
    template: 'summary', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    description: 'notice.economiclicence.pendingPayment.description',
    props: {
      currentStep: FORM_STEP_5,
      title: 'notice.renew.pendingPayment.title',
      subTitle: 'notice.renew.pendingPayment.title',
      description: 'notice.renew.pendingPayment.text',
      type: noticeTypes.INFO,
      buttons: [
        {
          label: 'button.pay',
          onClick: functions.onClick,
          uiType: 'primary',
          withArrow: true,
        },
      ],
    },
    onPageInit: (props: IVariables) => {
      props.actions.stepsStatus.update({
        // from returned/submit page
        ...props.stepsStatus,
        [FORM_STEP_4]: 'finish',
      });
      getAnalyticsData('sla', {
        applicationStatus: 'Payment Summary',
        serviceStatus: 'success',
      });
      props.actions.reachedPayment.update(true); // for toggle content for the waiting pages
      const { locale, renewalFees, i18n } = props;
      const fees = renewalFees && JSON.parse(renewalFees);
      let total = 0.0;
      const items =
        fees &&
        fees.length &&
        fees.map((fee: IVariables, index: number) => {
          total += fee.FeeAmount;
          return {
            id: `fee${index}`,
            document: locale === 'en' ? fee.feeDescEn : fee.feeDescAr,
            price: i18n('label.fees.currency', {
              amount: fee.FeeAmount.toFixed(2),
            }),
          };
        });
      props.actions.paymentAmount.update(total);
      return {
        list: [
          {
            uiType: 'default',
            title: props.i18n('notice.paymentSummary.title'),
            items,
            columns: [
              {
                id: 'document',
                title: props.i18n('label.document'),
              },
              {
                id: 'price',
                title: props.i18n('global.renew.price'),
                align: 'end',
              },
            ],
          },
        ],
        totalSection: total,
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME_RENEW_LICENCE,
      variables: ['renewalFees', 'paymentLink'],
    },
    state: {
      mapState: [
        'loggedIn',
        'stepsStatus',
        'steps',
        'businessKey',
        'history',
        'user',
        'paymentAmount',
      ],
      mapDispatch: ['stepsStatus', 'reachedPayment', 'paymentAmount'],
    },
    requires: [REQUIRES_LOGIN, REQUIRE_SOP3],
  },
];

export default paymentSummary;
