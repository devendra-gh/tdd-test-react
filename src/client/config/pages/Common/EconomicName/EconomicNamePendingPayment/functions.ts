import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { steps, moeSteps } from 'client/config/steps';

/**
 * get form state
 * @param {IVariables} state
 * @returns {Array}
 */

const findPaymentSummary = (state: any) => {
  return (resPeriod: string = '03') => {
    const reservationPeriod = parseInt(resPeriod, 10);
    const {
      economicName,
      locale: { locale },
    } = state;

    const formatValue = (value: number) => {
      return typeof value === 'number'
        ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        : value;
    };

    const list = [
      {
        labelEn: `Economic name (regular name) - ${reservationPeriod} months reservation`,
        labelAr:
          `أشهر ${reservationPeriod} ` + `الاسم الاقتصادي (اسم غير استثنائي)`,
        value: `${(locale === 'en' ? 'AED ' : 'درهم ') +
          formatValue((200 * reservationPeriod) / 3)}`,
      },
      {
        labelEn:
          'Security check by Federal Authority for Identity and Citizenship (ICA)',
        labelAr: 'التدقيق الأمني من قبل الهيئة الاتحادية للهوية والجنسية',
        // eslint-disable-next-line no-useless-concat
        value: locale === 'en' ? 'AED 15.00' : ' درهم ' + '15.00',
      },
    ];

    if (economicName.isSpecial) {
      list.push({
        labelEn: 'Exceptional name',
        labelAr: 'اسم استثنائي',
        value:
          locale === 'en'
            ? `AED ${formatValue((1000 * reservationPeriod) / 3)}`
            : `درهم${formatValue((1000 * reservationPeriod) / 3)}`,
      });
    }

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
};

const findPaymentSummaryTotal = (state: any) => {
  return (resPeriod: string = '03') => {
    const reservationPeriod = parseInt(resPeriod, 10);

    const { economicName } = state;
    let total = 15 + (200 * reservationPeriod) / 3;
    if (economicName.isSpecial) {
      total += (1000 * reservationPeriod) / 3;
    }
    return total;
  };
};

const onClick = async (props: IVariables) => {
  await bpm.message('economicLicence', {
    businessKey: props.businessKey,
    messageName: 'onPaymentSubmitName',
  });
  window.open(props.paymentLink, '_blank');
};

const checkMoeStep = (licenceType: string) => {
  if (licenceType === 'branchForeign' || licenceType === 'branchGCC')
    return true;
  return false;
};

const getStep = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
    },
  } = state;
  if (checkMoeStep(licenceType)) return moeSteps;
  return steps;
};

const formatValue = (value: number) => {
  return typeof value === 'number'
    ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    : value;
};

export default {
  findPaymentSummary,
  findPaymentSummaryTotal,
  onClick,
  getStep,
  formatValue,
};
