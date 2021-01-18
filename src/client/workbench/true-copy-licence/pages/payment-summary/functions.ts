import {
  returnCamundaMessage,
  getDashboardUrl,
  getDateFromTimeStamp,
  formatValue,
} from '../../sharedFunctions/utils';

import { addAnalyticsEvent } from '../../sharedFunctions/analytics';

import { getSteps } from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
  const { i18n } = props;
  if (!props.businessKey || !props.instanceId) {
    window.location.href = getDashboardUrl();
  }
  props.actions.showSideBar.update(true);
  props.actions.loading.update(false);
  props.actions.currentStepIndex.update(2);
  props.actions.currentSubStepIndex.update(1);
  props.actions.expandedStepIndexes.update([2]);
  const cStep = { id: 'step_makePayment', status: '' };
  const cSubStep = { id: 'subStep_payAmount', status: '' };
  const steps = getSteps(props.i18n, cStep, cSubStep);
  props.actions.steps.update(steps);

  const tableHeaders = [
    {
      id: 'description',
      title: i18n('paymentSummaryDescriptionColumn'),
    },
    {
      id: 'price',
      title: i18n('paymentSummaryPriceColumn'),
    },
  ];
  props.actions.paymentTableColumns.update(tableHeaders);
  /**
   * Dont delete props.actions.paymentTag.update()
   */
  // props.actions.paymentTag.update(tags);
  //props.actions.paymentTableRows.update(paymentRow);
  //props.actions.paymentTotal.update(totalFees);
  //props.actions.camundaMessage.update('');
  // props.actions.paymentURL.update('');
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

  let feeDetails = props.feeDetails;
  feeDetails =
    feeDetails && feeDetails !== 'null' ? JSON.parse(feeDetails) : {};
  console.log('feeDetails', feeDetails);
  let licenceFees = [];
  licenceFees.push(feeDetails);
  if (!licenceFees[0].FeeAmount) {
    props.history.push('/application-error');
  }

  const paymentRow =
    licenceFees.length > 0
      ? licenceFees.map((value: any, index: number) => ({
          id: `${index}`,
          description: locale === 'en' ? value.feeDescEn : value.feeDescAr,
          price:
            locale === 'en'
              ? `AED ${formatValue(value.FeeAmount)}`
              : `${formatValue(value.FeeAmount)} درهم`,
        }))
      : [{ id: '0', description: '', price: 0 }];

  const totalFees =
    licenceFees.length > 0
      ? licenceFees.reduce((a: any, b: any) => {
          return a + b.FeeAmount;
        }, 0)
      : 0;
  props.actions.paymentTableRows.update(paymentRow);
  props.actions.paymentTotal.update(totalFees);
  props.actions.camundaMessage.update('');
  props.actions.paymentURL.update(props.paymentLink);
  addAnalyticsEvent(props, 'PAY1', 'success');
}
export function f1_visible(props: any) {
  return props.camundaMessage ? true : false;
}
export async function f2_onClick(props: any) {
  props.actions.loading.update(true);
  const data = await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onPay',
    variables: {},
  });
  await returnCamundaMessage(data, props);
  addAnalyticsEvent(props, 'PAY1', 'success', props.paymentTotal);
  if (props.paymentURL) window.location.href = props.paymentURL;
  props.actions.loading.update(false);
}
