import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import * as functions from 'client/config/amendments/utils/functions';
import { validation } from 'client/config/amendments/utils/validations';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import fetch from 'client/services/fetch';
import { updateReduxStoreInDB } from 'client/config/amendments/utils/setUpdateReduxState';

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
const onPageInit = async (props: IVariables) => {
  props.actions.amendmentServerError.reset();
  if (props.countryList.length === 0) {
    const result = await fetch(`/pub/proxy/getCountriesList`);
    if (result && result.data.length >= 1) {
      const countryList = Object.values(result.data).map((item: any) => ({
        id: item.name,
        label: item.name,
      }));
      props.actions.countryList.update(countryList);
    }
  }
  return {
    logUuid: props.logUuid,
    dbAmendmentId: props.dbAmendmentId,
  };
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

export default {
  onSubmitAmendment,
  handleBack,
  validation,
  onPageInit,
};
