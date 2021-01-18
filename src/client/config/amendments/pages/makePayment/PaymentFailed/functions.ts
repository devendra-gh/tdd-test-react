import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';

/**
 * @param {string} bpmUrl
 * @returns {*}
 */

const onPageInit = async (props: IVariables) => {
  return {
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

const onClick = (bpmUrl: string) => async (props: IVariables) => {
  const data = await bpm.message(bpmUrl, {
    businessKey: props.businessKey,
    messageName: 'paymentFail',
  });
  if (data.success) props.history.push('/amendments/payment-waiting');
};

export default {
  onPageInit,
  onClick,
};
