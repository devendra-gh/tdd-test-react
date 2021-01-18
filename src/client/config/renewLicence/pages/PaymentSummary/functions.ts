import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { PROCESS_NAME_RENEW_LICENCE } from '../../constants';
import { getAnalyticsData } from '../../utils/common';

const proceedWithPayment = async (props: IVariables) => {
  getAnalyticsData(
    'pay1',
    { applicationStatus: 'Payment In Progress' },
    { sum: props.paymentAmount },
  );
  await bpm.message(PROCESS_NAME_RENEW_LICENCE, {
    messageName: 'msgProceedWithPayment',
    businessKey: props.businessKey,
  });
};

const onClick = (props: IVariables) => {
  proceedWithPayment(props);
  if (props.paymentLink) {
    window.location.replace(props.paymentLink);
  }
};

const findPaymentSummary = (props: IVariables) => {
  const {
    locale: { locale },
  } = props;

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
        title: 'global.fees',
      },
      {
        id: 'price',
        title: 'global.renew.price',
        align: 'end',
      },
    ],
    headerHidden: false,
    items: list.map((li, index) => ({
      id: index,
      description: li.labelEn,
      price: li.value,
    })),
    title: 'notice.paymentSummary.title',
    uiType: 'default',
  };

  return [paymentSummary];
};

const findPaymentSummaryTotal = (state: any) => {
  const total = 15;
  return total;
};

export default {
  onClick,
  findPaymentSummaryTotal,
  findPaymentSummary,
};
