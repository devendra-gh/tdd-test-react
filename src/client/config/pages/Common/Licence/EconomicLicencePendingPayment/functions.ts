/* eslint-disable no-useless-concat */
/* eslint-disable complexity */
import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import {
  steps,
  withoutNameSteps,
  moeSteps,
  moaWithoutNameSteps,
} from 'client/config/steps';
import { isMoaRequired } from 'client/config/pages/EconomicLicence/functions/getLegalForms';

const formatValue = (value: number) => {
  return typeof value === 'number'
    ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    : value;
};

/**
 * get form state
 * @param {IVariables} state
 * @returns {Array}
 */

const findPaymentSummary = (state: IVariables) => {
  const {
    //   totalActivityFees,
    //   selectedActivities,
    locale: { locale },
  } = state;
  // eslint-disable-next-line no-shadow
  const formatValue = (value: number) => {
    return typeof value === 'number'
      ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
      : value;
  };
  const totalActivityFees = 1000;
  const serviceFee = formatValue(totalActivityFees * 0.25);
  const list = [
    {
      labelEn: 'Activity fee',
      labelAr: 'رسوم الأنشطة',
      value:
        locale === 'en'
          ? `AED ${formatValue(totalActivityFees)}`
          : `درهم ${formatValue(totalActivityFees)}`,
    },
    {
      labelEn: 'Signboard fee',
      labelAr: 'رسوم اللافتة',
      value: locale === 'en' ? 'AED 200.00' : ' درهم ' + '200.00',
    },
    {
      labelEn: 'Commercial board fee',
      labelAr: 'رسوم المجلس الاقتصادي',
      value: locale === 'en' ? 'AED 100.00' : ' درهم ' + '100.00',
    },
    {
      labelEn: 'Civil defence fee',
      labelAr: 'رسوم الدفاع المدني',
      value: locale === 'en' ? 'AED 500.00' : ' درهم ' + '500.00',
    },
    {
      labelEn: 'ICA approval fee',
      labelAr: 'رسوم الهيئة الاتحادية للهوية والجنسية',
      value: locale === 'en' ? 'AED 100.00' : ' درهم ' + '100.00',
    },
    {
      labelEn: 'Economic licence fee',
      labelAr: 'رسوم الرخصة الاقتصادية',
      value: locale === 'en' ? 'AED 100.00' : ' درهم ' + '100.00',
    },
    {
      labelEn: 'Establishment card fee',
      labelAr: 'رسوم بطاقة المنشأة',
      value: locale === 'en' ? 'AED 350.00' : ' درهم ' + '350.00',
    },
    {
      labelEn: 'Service fee - 25% of total activities cost',
      labelAr: 'رسوم الخدمة',
      value: locale === 'en' ? `AED ${serviceFee}` : ` درهم ${serviceFee}`,
    },
    {
      labelEn: 'Federal activities service fee',
      labelAr: 'رسوم خدمات الأنشطة الاتحادية',
      value: locale === 'en' ? 'AED 100.00' : 'درهم ' + '100.00 ',
    },
  ];
  // if (selectedActivities.length) {
  const specialActivitiesFee = [
    {
      labelEn: 'ADCCI fee - Depends on the activities selected',
      labelAr: 'رسوم غرفة أبوظبي للتجارة والصناعة',
      value: locale === 'en' ? 'AED 200.00' : ' درهم ' + '200.00',
    },
    {
      labelEn: 'Additional approval fee from entities – varies with activities',
      labelAr:
        'رسوم الموافقات الإضافية من الجهات المختصة – تختلف باختلاف النشاط',
      value: locale === 'en' ? 'AED 200.00' : ' درهم ' + '200.00',
    },
  ];
  list.push(...specialActivitiesFee);
  // }

  const paymentSummary = {
    columns: [
      {
        id: 'description',
        title: locale === 'en' ? 'Description' : 'الوصف',
      },
      {
        id: 'price',
        title: locale === 'en' ? 'Price' : 'السعر',
        align: 'end',
      },
    ],
    headerHidden: false,
    items: list.map((li, index) => ({
      id: index,
      description: locale === 'en' ? li.labelEn : li.labelAr,
      price: li.value,
    })),
    title: locale === 'en' ? 'Payment summary' : 'ملخص المدفوعات',
    uiType: 'default',
  };
  return [paymentSummary];
};

const findPaymentSummaryTotal = (state: any) => {
  // const { totalActivityFees, selectedActivities } = state;
  const totalActivityFees = 1000;
  const serviceFee = totalActivityFees * 0.25;
  //   Calculate and add all the fees
  let total =
    totalActivityFees + serviceFee + 200 + 100 + 500 + 100 + 100 + 350;
  // if (selectedActivities.length) {
  total += 200 + 200;
  // }
  return total;
};

const checkLicenceOnly = (licenceType: string) => {
  if (
    licenceType === 'instant' ||
    licenceType === 'allInOne' ||
    licenceType === 'tajer'
  )
    return true;
  return false;
};

const checkMoeStep = (licenceType: string) => {
  if (licenceType === 'branchForeign' || licenceType === 'branchGCC')
    return true;
  return false;
};

/**
 * @param {IVariables} state
 * @returns {Object}
 */
const getStep = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
      legalForm: { legalForm },
    },
  } = state;
  if (checkLicenceOnly(licenceType)) {
    if (isMoaRequired(licenceType, legalForm)) {
      return moaWithoutNameSteps;
    }
    return withoutNameSteps;
  }
  if (checkMoeStep(licenceType)) return moeSteps;
  return steps;
};

const getCurrentStep = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
    },
  } = state;
  if (licenceType === 'instant') {
    return false;
  }
  if (checkLicenceOnly(licenceType)) {
    return 'payment';
  }
  return 'economic_licence';
};

const onClick = async (props: IVariables) => {
  await bpm.message('economicLicence', {
    businessKey: props.businessKey,
    messageName: 'onPaymentLicence',
  });
  window.open(props.paymentLink, '_blank');
};

const getStepStatus = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
    },
  } = state;

  if (checkLicenceOnly(licenceType)) {
    const status = {
      moa_approval: 'finish',
      ded_approval: 'finish',
      ica_payment: 'finish',
      initial_approval: 'finish',
    };
    return status;
  }
  if (checkMoeStep(licenceType)) {
    const status = {
      'economic_name.ded_approval': 'finish',
      'economic_name.payment': 'finish',
      'economic_name.initial_approval': 'finish',
      economic_name: 'finish',
      initial_registration: 'finish',
      'economic_licence.submit_licence': 'finish',
      'economic_licence.ded_approval': 'finish',
    };
    return status;
  }

  const status = {
    'economic_name.ded_approval': 'finish',
    'economic_name.payment': 'finish',
    'economic_name.initial_approval': 'finish',
    'economic_name.download_certificate': 'finish',
    economic_name: 'finish',
    'economic_licence.ded_approval': 'finish',
  };
  return status;
};

export default {
  findPaymentSummary,
  findPaymentSummaryTotal,
  getStep,
  getCurrentStep,
  onClick,
  getStepStatus,
  formatValue,
};
