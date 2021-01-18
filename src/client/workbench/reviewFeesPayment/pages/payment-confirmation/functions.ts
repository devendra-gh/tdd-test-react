import {
  getDashboardUrl,
  getDateFromTimeStamp,
} from '../../sharedFunctions/util';

import { getSteps } from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
  //const { locale, i18n } = props;
  if (!props.businessKey || !props.instanceId) {
    window.location.href = getDashboardUrl();
  }
  props.actions.showSideBar.update(true);
  props.actions.loading.update(false);
  props.actions.currentStepIndex.update(2);
  props.actions.currentSubStepIndex.update(999);
  props.actions.expandedStepIndexes.update([2]);
  const cStep = { id: 'step_makePayment', status: '' };
  const cSubStep = { id: 'subStep_payAmount', status: 'process' };
  const steps = getSteps(props.i18n, cStep, cSubStep);
  props.actions.steps.update(steps);
  // props.actions.paymentTag.update(tags);
  // props.actions.paymentLinkString.update();
}
export async function onPageInit(props: any) {
  const { i18n, locale } = props;
  const tags = [
    { label: i18n('global-reference'), value: props.apTransactionNumber },
    {
      label: i18n('global-submitted'),
      value: getDateFromTimeStamp(props.submitDate, locale),
    },
  ];
  props.actions.paymentTag.update(tags);
  const message =
    locale === 'en'
      ? `Your payment confirmation is in progress. If this does not open automatically, please <a href='${props.paymentLink}' target='_self'>click here.</a>`
      : `جاري تأكيد عملية الدفع. إن لم تفتح النافذة بشكل تلقائي، يرجى  <a href='${props.paymentLink}' target='_self'> النقر هنا. </a>`;
  const paymentLinkMessage = props.paymentLink ? message : '';
  props.actions.paymentLinkString.update(paymentLinkMessage);
}
