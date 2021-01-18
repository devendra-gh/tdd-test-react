import bpm from 'client/services/bpm';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import { returnCamundaMessage } from 'client/config/amendments/utils/functions';

const onPageInit = async (props: IVariables) => {
  props.actions.amendmentServerError.reset();
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

const onClick = async (props: IVariables) => {
  const response = await bpm.message(PROCESS_NAME, {
    businessKey: props.businessKey,
    messageName: 'amendmentRejected',
  });
  returnCamundaMessage(response, props, 'select-licence');
};
export default {
  onClick,
  onPageInit,
};
