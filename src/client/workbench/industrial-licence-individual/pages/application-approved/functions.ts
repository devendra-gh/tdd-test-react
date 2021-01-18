

import {sendEmailNotification} from '../../sharedFunctions/services';

import {crumsList} from '../../sharedFunctions/breadCrumLinks';

import {stepsListsWithoutEconomicName, stepsLists} from '../../sharedFunctions/serviceSteps';

import {getSteps} from '../../sharedFunctions/stepUtils';

import {getDateFromTimeStamp, formatValue} from '../../sharedFunctions/utils';

export async function init(props: any) {
    const { locale, i18n } = props;
  //props.fetch();
  //props.actions();
  // props.actions.individualIssuedTags.update([]);
  // props.actions.paymentSummaryColoum
  // props.actions.paymentTotal.update('');
  // props.actions.paymentSummaryRows.update([]);

  // breadCrumbs
  const breadCrums = crumsList(props);
  props.actions.breadCrumItems.update(breadCrums);

  props.actions.showSidebar.update(true);
  props.actions.currentStepIndex.update(1);
  props.actions.currentSubStepIndex.update(1);
  // which substep to open up
  props.actions.expandedStepIndexes.update([1]);
  const cStep = { id: 'get_economic_licence', status: '' };
  const cSubStep = { id: 'make_payment', status: '' };
  // the steps of the current service
  let stepsList: any[];
  if (props.skipEconomicName || props.skipEconomicName) {
    stepsList = stepsListsWithoutEconomicName();
  } else {
    stepsList = stepsLists();
  }
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);

  // add i18n for the table
  let tableColoum: any[] = [];
  // props.paymentSummaryColoum.map((item: any) => {
  //   tableColoum = [...tableColoum, { ...item, title: props.i18n(item.title) }];
  // });
  props.actions.paymentSummaryColoum.update([
    {
      id: 'description',
      title: props.i18n('individual_description_title'),
    },
    {
      id: 'price',
      title: props.i18n('price'),
      align: 'end',
    },
  ]);
}
export async function onPageInit(props: any) {
    const { locale, i18n } = props;
  //props.fetch();
  //props.actions();
  const tags = [
    { label: i18n('referenceNo'), value: props.apTransactionNumber },
    {
      label: i18n('submittedOn'),
      value: getDateFromTimeStamp(props.submitDate),
    },
  ];
  props.actions.individualIssuedTags.update(tags);

  const selectedActivities = JSON.parse(props.selectedActivities);
  const basketArr =
    selectedActivities && selectedActivities.length > 0
      ? selectedActivities
      : [];
  let licenceFees = [
    ...basketArr,
    ...[
      {
        activityNameEn: 'Processing fee',
        activityNameAr: 'رسم تعديل الموقع ( العنوان )',
        dedFee: 100.0,
      },
      {
        activityNameEn: 'Price Waive off',
        activityNameAr: 'رسم تعديل الموقع ( العنوان )',
        dedFee: basketArr.reduce((acc: any, obj: any) => {
          return acc - obj.dedFee;
        }, -100.0),
      },
    ],
  ];
  const paymentRow =
    licenceFees.length > 0
      ? licenceFees.map((value: any, index: number) => ({
          id: `'${index}'`,
          description:
            props.locale === 'en' ? value.activityNameEn : value.activityNameAr,
          price:
            props.locale === 'en'
              ? `AED ${formatValue(value.dedFee)}`
              : `${formatValue(value.dedFee)} درهم`,
        }))
      : [{ id: '0', description: '', price: 0 }];

  // const totalFees =
  //   licenceFees.length > 0
  //     ? licenceFees.reduce((a: any, b: any) => {
  //         return a + formatValue(b.dedFee);
  //       }, 0)
  //     : 0;

  // props.actions.paymentTotal.update(totalFees);
  props.actions.paymentSummaryRows.update(paymentRow);
}
export async function f1_onClick(props: any) {
	 props.actions.isModalOpen.update(true);
}
export async function f2_onClick(props: any) {
	  //props.fetch();
  const { fetch, bpm } = props;
  props.actions.loading.update(true);
  const serviceNameEn =
    'Request for Issuing Economic Licence - Industrial  Leader - Individual';
  const serviceNameAr = 'طلب إصدار رخصة اقتصادية - رواد الصناعة -  أفراد';
  const applicationSuccessEn = `Your Economic Licence - Industrial Leader - Individual ${props.apTransactionNumber} has been issued. Please find the licence along with the registration certificate attached in this email.`;
  const applicationSuccessAr = `<span dir='rtl'>
 صدرت رخصتك الاقتصادية - رواد الصناعة - أفراد رقم
  </span>
  <span dir='rtl'>
   <strong> ${props.apTransactionNumber} </strong>
  </span>
  <span dir='rtl'>
   بنجاح.
  </span>`;

  const emailTokens = [
    {
      subject: `${serviceNameEn} - ${serviceNameAr}`,
      enText: applicationSuccessEn,
      arText: applicationSuccessAr,
      docType: 'certificate',
      emailType: 'application-success',
    },
  ];
  const data = await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onApplicationApproved',
    variables: {
      proEmail: props.user['User Email'],
      emailTokens: JSON.stringify(emailTokens),
    },
  });

  await sendEmailNotification(
    props,
    'application-success',
    props.instanceId
  );
}
export async function f3_primaryButton_onClick(props: any) {
	props.actions.isModalOpen.update(false);
}
export async function f4_onClose(props: any) {
	props.actions.isModalOpen.update(false);
}
