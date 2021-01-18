import { addAnalyticsEvent } from '../../sharedFunctions/tammAnalytics';

import { stepsLists } from '../../sharedFunctions/serviceSteps';

import { getSteps } from '../../sharedFunctions/stepUtils';

import { getDateFromTimeStamp, formatValue } from '../../sharedFunctions/utils';

/* istanbul ignore file */

export async function init(props: any) {
  // props.actions.individualIssuedTags.update([]);
  // props.actions.paymentTotal.update();
  // props.actions.paymentSummaryRows.update([]);
  // props.actions.paymentSummaryColoum.update([]);
  // props.adgeName
  // props.serviceCode
  // props.productName
  props.actions.showSidebar.update(true);
  props.actions.currentStepIndex.update(1);
  props.actions.currentSubStepIndex.update(1);
  // which substep to open up
  props.actions.expandedStepIndexes.update([1]);
  const cStep = { id: 'Global_GetLicenceStep', status: '' };
  const cSubStep = { id: 'Global_GetLicenceMakePayment', status: '' };
  // the steps of the current service
  const stepsList = stepsLists();
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);
  const payment = props.paymentLink;
  props.actions.paymentURL.update(payment);
}
export async function onPageInit(props: any) {
  addAnalyticsEvent(props, 'SLA', 'success');
  const licenceFees = JSON.parse(props.feeDetails);
  props.actions.individualIssuedTags.update([
    {
      label: props.i18n('AwaitingPayment_RefNo'),
      value: props.renewalNumber,
    },
    {
      label: props.i18n('Submitted On:'),
      value: getDateFromTimeStamp(props.submitDate),
    },
  ]);
  // add i18n for the table
  let tableColoum: any[] = [];
  props.paymentSummaryColoum.map((item: any) => {
    tableColoum = [...tableColoum, { ...item, title: props.i18n(item.title) }];
  });
  props.actions.paymentSummaryColoum.update(tableColoum);
  // add the rows to the table
  const paymentRow =
    licenceFees.length > 0
      ? licenceFees.map((value: any, index: number) => ({
          id: `'${index}'`,
          description:
            props.locale === 'en' ? value.feeDescEn : value.feeDescAr,
          price:
            props.locale === 'en'
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

  props.actions.paymentTotal.update(totalFees);
  props.actions.paymentSummaryRows.update(paymentRow);
  const payment = props.paymentLink;
  props.actions.paymentURL.update(payment);
}
export function call_f1_onClick(props: any) {
  // props.fetch();
  return async (value: string) => {
    props.actions.loading.update(true);
    await props.bpm.sendMessage({
      businessKey: props.businessKey,
      messageName: 'onPayment',
      variables: {},
    });
    props.actions.loading.update(false);
    if (props.paymentURL) {
      window.location.href = props.paymentURL;
      // tamm analytics
      addAnalyticsEvent(props, 'PAY1', 'success', props.paymentTotal);
    }
  };
}
