import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import * as functions from 'client/config/amendments/utils/functions';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import { updateReduxStoreInDB } from '../../utils/setUpdateReduxState';

const onPageInit = async (props: IVariables) => {
  props.actions.amendmentServerError.reset();
  if (Object.values(props.amendmentCategories.category).includes(true) !== true)
    await updateReduxStoreInDB(props);

  return {
    logUuid: props.logUuid,
    dbAmendmentId: props.dbAmendmentId,
  };
};

const handleNext = async (props: IVariables) => {
  if (
    Object.values(props.amendmentCategories.category).includes(true) === true
  ) {
    await updateReduxStoreInDB(props);

    props.actions.pageLoading.update(false);
    const nextPage = functions.getNextSubStepPage('', props);

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
  } else {
    props.actions.pageLoading.update(true);
  }
};
const handleBack = (props: IVariables) => {
  props.history.push(`/amendments/select-licence`);
};
export default {
  handleNext,
  handleBack,
  onPageInit,
};
