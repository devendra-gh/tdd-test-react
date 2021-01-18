import {
  returnCamundaMessage,
  getDateFromTimeStamp,
} from '../../sharedFunctions/utils';

import { getSteps } from '../../sharedFunctions/stepUtils';

import { addAnalyticsEvent } from '../../sharedFunctions/analytics';

export async function init(props: any) {
  const { i18n } = props;
  props.actions.showSideBar.update(true);
  props.actions.loading.update(false);
  props.actions.camundaMessage.update('');
  props.actions.currentStepIndex.update(2);
  props.actions.currentSubStepIndex.update(1);
  props.actions.expandedStepIndexes.update([2]);
  const cStep = { id: 'step_makePayment', status: '' };
  const cSubStep = { id: 'subStep_payAmount', status: '' };
  const steps = getSteps(i18n, cStep, cSubStep);
  props.actions.steps.update(steps);

  // props.actions.paymentTag.update(tags);
}
export async function onPageInit(props: any) {
  const { i18n, locale } = props;
  const tags = [
    { label: i18n('globalReference'), value: props.apTransactionNumber },
    {
      label: i18n('globalSubmitted'),
      value: getDateFromTimeStamp(props.submitDate, locale),
    },
  ];
  props.actions.paymentTag.update(tags);
  addAnalyticsEvent(props, 'PAY2', 'fail');
}
export function f1_visible(props: any) {
  return props.camundaMessage ? true : false;
}
export async function f2_onClick(props: any) {
  props.actions.pageLoader.update(true);
  const data = await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onPaymentError',
  });
  await returnCamundaMessage(data, props);
  props.actions.pageLoader.update(false);
  // props.actions.camundaMessage.update(errorMessage);
}
