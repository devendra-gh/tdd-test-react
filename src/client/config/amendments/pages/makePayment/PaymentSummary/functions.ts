import bpm from 'client/services/bpm';
import { IVariables } from '@tamm/app-composer';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import { returnCamundaMessage } from 'client/config/amendments/utils/functions';
import { PROCESS_NAME } from 'client/config/amendments/constants';

const formatValue = (value: any) => {
  return typeof value === 'number'
    ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    : value;
};

const onPageInit = async (props: IVariables) => {
  props.actions.amendmentServerError.reset();
  const { locale } = props;
  let licenceFees;
  try {
    licenceFees = props.licenceFees ? JSON.parse(props.licenceFees) : [];
  } catch (e) {
    licenceFees = [];
  }

  return {
    list: {
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
      items:
        licenceFees.length > 0
          ? licenceFees.map((li: any, index: number) => ({
              id: `'${index}'`,
              description: locale === 'en' ? li.feeDescEn : li.feeDescAr,
              price:
                locale === 'en'
                  ? `AED ${formatValue(li.FeeAmount)}`
                  : `درهم ${formatValue(li.FeeAmount)}`,
            }))
          : [{ id: '0', description: '', price: 0 }],
      title: locale === 'en' ? 'Payment summary' : 'ملخص المدفوعات',
      uiType: 'default',
    },
    totalSection:
      licenceFees.length > 0
        ? licenceFees.reduce((a: any, b: any) => {
            return a + b.FeeAmount;
          }, 0)
        : 0,
    tags: [
      {
        label: 'global.referenceNumber',
        value: props.apTransactionNumber || '',
      },
      {
        label: 'global.submittedOn',
        value: props.submitDate ? getDateFromTimeStamp(props.submitDate) : '',
      },
    ],
  };
};

const pay = (props: IVariables) => async () => {
  const response = await bpm.message(PROCESS_NAME, {
    businessKey: props.businessKey,
    messageName: 'paymentAmendment',
  });
  if (props.paymentLink) {
    window.open(props.paymentLink, '_blank');
  }
  returnCamundaMessage(response, props, '');
};

export default {
  onPageInit,
  pay,
  formatValue,
};
