import bpm from 'client/services/bpm';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import { IVariables } from '@tamm/app-composer';
import * as functions from 'client/config/amendments/utils/functions';
// import scrollToElement from 'client/config/amendments/utils/scrollToElement';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';

const init = async (props: IVariables) => {
  props.actions.pageLoading.update(false);
  props.actions.amendmentServerError.reset();
};

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
    comments: props.applicationStatusComments,
  };
};

const onUploadDocuments = async (props: IVariables) => {
  props.actions.pageLoading.update(true);

  const emptyDocuments = {
    documents1: JSON.stringify([]),
    documents2: JSON.stringify([]),
    documents3: JSON.stringify([]),
    documents4: JSON.stringify([]),
    documents5: JSON.stringify([]),
  };
  const docChunks = props.applicationReturnDocuments
    ? {
        ...emptyDocuments,
        ...functions.documentsToBeSavedInCamunda(
          props.applicationReturnDocuments || [],
        ),
      }
    : {};

  const response = await bpm.message(PROCESS_NAME, {
    businessKey: props.businessKey,
    messageName: 'amendmentReturned',
    variables: {
      ...docChunks,
    },
  });

  functions.returnCamundaMessage(response, props, '');

  props.actions.pageLoading.update(false);
};

export default {
  init,
  onPageInit,
  onUploadDocuments,
};
