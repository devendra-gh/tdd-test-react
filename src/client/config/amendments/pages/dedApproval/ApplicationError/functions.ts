import bpm from 'client/services/bpm';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import * as functions from 'client/config/amendments/utils/functions';

const onPageInit = async (props: IVariables) => {
  props.actions.amendmentServerError.reset();
  props.actions.dedErrorMessage.update(props.errorMessage || '');
  return {
    dedErrorMessage: props.errorMessage || '',
  };
};

const onClickReviewApplication = async (props: IVariables) => {
  const response = await bpm.message(PROCESS_NAME, {
    businessKey: props.businessKey,
    messageName: 'errorAcknowledge',
    variables: {
      continueAmendments: true,
      pageName: 'categories',
    },
  });
  functions.returnCamundaMessage(response, props, 'categories');
};
export default {
  onPageInit,
  onClickReviewApplication,
};
