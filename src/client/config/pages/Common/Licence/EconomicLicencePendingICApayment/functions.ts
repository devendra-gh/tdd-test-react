import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { isMoaRequired } from 'client/config/pages/EconomicLicence/functions/getLegalForms';
import { withoutNameSteps, moaWithoutNameSteps } from 'client/config/steps';

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
  if (isMoaRequired(licenceType, legalForm)) {
    return moaWithoutNameSteps;
  }
  return withoutNameSteps;
};

/**
 * get form state
 * @param {IVariables} state
 * @returns {Array}
 */

const findPaymentSummary = (state: IVariables) => {
  const {
    locale: { locale },
  } = state;

  const formatValue = (value: number) => {
    return typeof value === 'number'
      ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
      : value;
  };

  const list = [
    {
      labelEn:
        locale === 'en'
          ? 'ICA payment'
          : 'رسوم الهيئة الاتحادية للهوية والجنسية',
      labelAr: '',
      value: `${(locale === 'en' ? 'AED ' : 'درهم ') + formatValue(15)}`,
    },
  ];
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
      description: li.labelEn,
      price: li.value,
    })),
    title: locale === 'en' ? 'Payment summary' : 'ملخص المدفوعات',
    uiType: 'default',
  };

  return [paymentSummary];
};

const findPaymentSummaryTotal = (state: any) => {
  const total = 15;
  return total;
};

const onClick = async (props: IVariables) => {
  await bpm.message('economicLicence', {
    businessKey: props.businessKey,
    messageName: 'onPaymentLicenceICA',
  });
  window.open(props.paymentLink, '_blank');
};

const getStepStatus = (state: IVariables) => {
  const status = {
    moa_approval: 'finish',
    ded_approval: 'finish',
  };
  return status;
};

export default {
  findPaymentSummary,
  findPaymentSummaryTotal,
  getStep,
  onClick,
  getStepStatus,
};
