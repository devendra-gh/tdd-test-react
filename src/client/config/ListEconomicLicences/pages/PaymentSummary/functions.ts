import { IVariables } from '@tamm/app-composer';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import {
  getFeeDetails,
  proceedToPayment,
  getPaymentLink,
  addAnalytics,
  PAY1_EVENT_KEY,
} from '../../utils';
import { PATH_HOME } from '../../routes';
import { errorBoundary } from '../../services';

export const startPayment = async (props: IVariables, shouldStart: boolean) => {
  // open paymentLnk in new window
  if (shouldStart) {
    props.actions.showErrors.update(true);
    const unchecked = props.termsAndConditionsValues.includes(false);
    if (!unchecked) {
      props.actions.startingPayment.update(true);
      addAnalytics(
        PAY1_EVENT_KEY,
        { applicationStatus: 'start Payment', serviceStatus: 'success' },
        { sum: props.totalSection },
      );
      window.location.href = props.paymentLink;
      proceedToPayment(props, shouldStart);
    }
  } else {
    await proceedToPayment(props, shouldStart);
    props.history.push(PATH_HOME);
  }
};

export const handleTermsConditions = (props: IVariables, item: any) => {
  const { termsAndConditionsValues, actions } = props;
  const updatedTermsAndConditions = [...termsAndConditionsValues];
  updatedTermsAndConditions[item] = !termsAndConditionsValues[item];
  actions.termsAndConditionsValues.update(updatedTermsAndConditions);
};

export const onPageInit = (props: IVariables) => {
  const tags = [
    {
      label: 'notice.refNo',
      value: props.cnNumber,
    },
    {
      label: 'notice.submit',
      value: getDateFromTimeStamp(props.submitDate),
    },
  ];

  return {
    tags,
  };
};

export const init = async (props: IVariables) => {
  const { i18n, locale } = props;
  let fees = [];
  let paymentLink: any;
  props.actions.showErrors.update(false);
  try {
    fees = await getFeeDetails(props);
    paymentLink = await getPaymentLink(props);

    if (!fees || !paymentLink) {
      errorBoundary(props, 'Invalid initialization');
    }
  } catch (exception) {
    // console.log('error while fetching fee details', exception); // eslint-disable-line
  }

  const list = [
    {
      title: i18n('payment.summary'),
      columns: [
        {
          id: 'description',
          title: i18n('payment.table.description.title'),
        },
        {
          id: 'price',
          title: i18n('payment.table.price.title'),
          align: 'end',
        },
      ],
      items: fees.map((fee: IVariables, id: number) => ({
        id,
        description: locale === 'en' ? fee.feeDescEn : fee.feeDescAr,
        price: fee.FeeAmount,
      })),
    },
  ];

  const totalSection = fees.reduce((total: number, fee: IVariables) => {
    return total + fee.FeeAmount;
  }, 0);

  props.actions.paymentLink.update(paymentLink);
  props.actions.list.update(list);
  props.actions.totalSection.update(totalSection);
};
