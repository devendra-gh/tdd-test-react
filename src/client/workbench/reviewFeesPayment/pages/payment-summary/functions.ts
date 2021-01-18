import {
  returnCamundaMessage,
  getDashboardUrl,
  formatValue,
  getDateFromTimeStamp,
} from '../../sharedFunctions/util';

import { addAnalyticsEvent } from '../../sharedFunctions/analytics';

import { getSteps } from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
  if (!props.businessKey || !props.instanceId) {
    window.location.href = getDashboardUrl();
  }
  props.actions.showSideBar.update(true);
  props.actions.loading.update(false);
  //const { locale, i18n } = props;
  props.actions.currentStepIndex.update(2);
  props.actions.currentSubStepIndex.update(0);
  props.actions.expandedStepIndexes.update([2]);
  props.actions.camundaMessage.update('');
  const cStep = { id: 'step_makePayment', status: '' };
  const cSubStep = { id: 'subStep_requestConfirmation', status: '' };
  const steps = getSteps(props.i18n, cStep, cSubStep);
  props.actions.steps.update(steps);

  // const camundaDate = getVariables.variables('instanceId', props.fromProcessState);
  // let licenceFees =
  //   '[{"authorityEn":"Department of Economic Development","authorityAr":"دائرة التنمية الاقتصادية","feeDescEn":"EHMS Reviewing Fees Payment(Application fees)","feeDescAr":"رسم تعديل الموقع ( العنوان )","FeeAmount":101,"TrackingNumber":"null"}]';
  // licenceFees =
  //   licenceFees && licenceFees !== 'null' ? JSON.parse(licenceFees) : [];

  // if (licenceFees.length === 0) {
  //   props.history.push('/went-wrong');
  // }
  // console.log("licenceFees",licenceFees);
  // const paymentRow =
  //   licenceFees.length > 0
  //     ? licenceFees.map((value: any, index: number) => ({
  //         id: `'${index}'`,
  //         description: locale === 'en' ? value.feeDescEn : value.feeDescAr,
  //         price:
  //           locale === 'en'
  //             ? `AED ${formatValue(value.FeeAmount)}`
  //             : `${formatValue(value.FeeAmount)} درهم`,
  //       }))
  //     : [{ id: '0', description: '', price: 0 }];

  //      console.log("paymentRowNew",paymentRow);
  // const tags = [
  //   { label: i18n('referenceNo'), value: props.apTransactionNo.value },
  //   {
  //     label: i18n('submittedon'),
  //     value: getDateFromTimeStamp(props.submitDate.value),
  //   },
  // ];
  // console.log("paymentRow",paymentRow);
  // const totalFees =
  //   licenceFees.length > 0
  //     ? licenceFees.reduce((a: any, b: any) => {
  //         return a + b.FeeAmount;
  //       }, 0)
  //     : 0;

  //  console.log("totalFees",totalFees);
  /**
   * Please dont delete line Number 56
   *
   */
  // props.actions.paymentTag.update(tags);
  //props.actions.payment_table_rows.update(paymentRow);
  //props.actions.paymentTotal.update(totalFees);
  // props.actions.paymentURL.update('');
}
export async function onPageInit(props: any) {
  const { locale, i18n } = props;

  const tags = [
    { label: i18n('global-reference'), value: props.apTransactionNumber },
    {
      label: i18n('global-submitted'),
      value: getDateFromTimeStamp(props.submitDate, locale),
    },
  ];
  props.actions.paymentTag.update(tags);

  // const camundaDate = getVariables.variables('instanceId', props.fromProcessState);
  let feeDetails = props.feeDetails;

  feeDetails =
    feeDetails && feeDetails !== 'null' ? JSON.parse(feeDetails) : {};

  let licenceFees = [];
  licenceFees.push(feeDetails);
  if (!licenceFees[0].FeeAmount) {
    props.history.push('/application-error');
  }
  const paymentRow =
    licenceFees.length > 0
      ? licenceFees.map((value: any, index: number) => ({
          id: `'${index}'`,
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

  props.actions.payment_table_rows.update(paymentRow);
  props.actions.paymentTotal.update(totalFees);

  // if (props.feeErrorMessage) {
  //   props.actions.camundaMessage.update(props.feeErrorMessage);
  // } else {
  props.actions.paymentURL.update(props.paymentLink);
  // }
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
  // await returnCamundaMessage(data, props);
  addAnalyticsEvent(props, 'PAY1', 'success', props.paymentTotal);
  if (props.paymentURL) window.location.href = props.paymentURL;
  props.actions.loading.update(false);
}
