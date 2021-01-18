import { IVariables } from '@tamm/app-composer';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';

const onPageInit = async (props: IVariables) => {
  return {
    additionalTextWithLink: true,
    text1: 'payment.link.text1',
    text2: 'payment.link.text2',
    text3: 'payment.link.text3',
    link: props.paymentLink,
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

export default { onPageInit };
