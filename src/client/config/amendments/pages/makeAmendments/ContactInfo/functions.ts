import bpm from 'client/services/bpm';
import { IVariables } from '@tamm/app-composer';
import { validation } from 'client/config/amendments/utils/validations';
import getApplicationPayload from 'client/config/amendments/utils/getApplicationPayload';
import * as functions from 'client/config/amendments/utils/functions';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import { updateReduxStoreInDB } from 'client/config/amendments/utils/setUpdateReduxState';

const onPageInit = async (props: IVariables) => {
  return {
    logUuid: props.logUuid,
    dbAmendmentId: props.dbAmendmentId,
  };
};

const init = async (props: IVariables) => {
  props.actions.amendmentServerError.reset();
  // props.actions.licenceDetails.update({
  //   ...props.licenceDetails,
  //   contactInfo: {
  //     ...props.licenceDetails.contactInfo,
  //     name: `${props.user['First Name EN']} ${props.user['Last Name EN']} `,
  //     phone: props.user.Mobile,
  //     email: props.user['User Email'],
  //   },
  // });
};

const submit = async (props: IVariables) => {
  const applicationPayload = getApplicationPayload(props);
  const nextPage = 'application-submitted';
  await updateReduxStoreInDB(props);

  const data = await bpm.message(PROCESS_NAME, {
    businessKey: props.businessKey,
    messageName: 'makeAmendments',
    variables: {
      continueAmendments: false,
      pageName: nextPage,
      // //...functions.valuesToBeSavedToCamunda(props),
      applicationPayload: JSON.stringify(applicationPayload),
    },
  });
  props.actions.dedErrorMessage.reset();
  functions.returnCamundaMessage(data, props, nextPage);
};

const handleBack = async (props: IVariables) => {
  const prevPage = functions.getPrevSubStepPage(props.currentPage, props);
  await updateReduxStoreInDB(props);
  if (prevPage) {
    const data = await bpm.message(PROCESS_NAME, {
      businessKey: props.businessKey,
      messageName: 'makeAmendments',
      variables: {
        continueAmendments: true,
        pageName: prevPage,
        // //...functions.valuesToBeSavedToCamunda(props),
      },
    });
    functions.returnCamundaMessage(data, props, prevPage);
  }
};

export default {
  submit,
  handleBack,
  validation,
  init,
  onPageInit,
};
