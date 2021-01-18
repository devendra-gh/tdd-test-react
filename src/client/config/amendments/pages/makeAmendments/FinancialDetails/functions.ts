import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import * as functions from 'client/config/amendments/utils/functions';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import { updateReduxStoreInDB } from 'client/config/amendments/utils/setUpdateReduxState';

const onPageInit = async (props: IVariables) => {
  props.actions.amendmentServerError.reset();
  return {
    logUuid: props.logUuid,
    dbAmendmentId: props.dbAmendmentId,
  };
};

const onSubmitAmendment = async (props: IVariables) => {
  await updateReduxStoreInDB(props);
  const nextPage = functions.getNextSubStepPage(props.currentPage, props);
  if (nextPage) {
    const response = await bpm.message(PROCESS_NAME, {
      businessKey: props.businessKey,
      messageName: 'makeAmendments',
      variables: {
        continueAmendments: true,
        pageName: nextPage,
      },
    });
    functions.returnCamundaMessage(response, props, nextPage);
  }
};

const handleBack = async (props: IVariables) => {
  const prevPage = functions.getPrevSubStepPage(props.currentPage, props);
  await updateReduxStoreInDB(props);
  if (prevPage) {
    const response = await bpm.message(PROCESS_NAME, {
      businessKey: props.businessKey,
      messageName: 'makeAmendments',
      variables: {
        continueAmendments: true,
        pageName: prevPage,
      },
    });
    functions.returnCamundaMessage(response, props, prevPage);
  }
};
const handleCapitalAmountChange = (props: IVariables, value: string) => {
  props.actions.licenceDetails.update({
    ...props.licenceDetails,
    paidUpCapital: {
      ...props.licenceDetails.paidUpCapital,
      amendedCapital: value,
    },
  });
};

export default {
  onSubmitAmendment,
  handleBack,
  handleCapitalAmountChange,
  onPageInit,
};
