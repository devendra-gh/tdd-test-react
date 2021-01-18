import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import * as functions from 'client/config/amendments/utils/functions';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import { AMENDMENT_CATEGORIES } from 'client/config/amendments/constants/amendmentObjects';
import scrollToElement from 'client/config/amendments/utils/scrollToElement';
// import { updateReduxStoreInDB } from 'client/config/amendments/utils/setUpdateReduxState';

export { getRequiredDocuments } from 'client/config/amendments/utils/getReqDocuments';

const onPageInit = async (props: IVariables) => {
  props.actions.amendmentServerError.reset();
  return {
    logUuid: props.logUuid,
    dbAmendmentId: props.dbAmendmentId,
  };
};

const handleSubmitFiles = async (props: IVariables) => {
  const nextPage =
    functions.getNextSubStepPage(props.currentPage, props) ||
    'contact-information';
  // await updateReduxStoreInDB(props);

  const data = await bpm.message(PROCESS_NAME, {
    businessKey: props.businessKey,
    messageName: 'makeAmendments',
    variables: {
      continueAmendments: true,
      pageName: nextPage,
      ...functions.documentsToBeSavedInCamunda(props.documents),
    },
  });
  functions.returnCamundaMessage(data, props, nextPage);
};

const handleBack = async (props: IVariables) => {
  const prevPage = functions.getPrevSubStepPage(props.currentPage, props);
  // await updateReduxStoreInDB(props);
  if (prevPage) {
    const data = await bpm.message(PROCESS_NAME, {
      businessKey: props.businessKey,
      messageName: 'makeAmendments',
      variables: {
        continueAmendments: true,
        pageName: prevPage,
        ...functions.documentsToBeSavedInCamunda(props.documents),
      },
    });
    functions.returnCamundaMessage(data, props, prevPage);
  }
};

export const validation = (
  documentGroups: IVariables[],
  documentValues: IVariables[],
) => {
  let allValid: boolean = true;
  documentGroups.forEach((formGroups: IVariables) => {
    formGroups.sections.forEach((formSection: IVariables) => {
      const sectionName =
        formGroups.name === AMENDMENT_CATEGORIES.OWNERSHIP
          ? `${formSection.name}.${formSection.referenceKey}`
          : formGroups.name;
      const fields = formSection.fields || [];
      fields.forEach((fileConfig: IVariables) => {
        const { name, required } = fileConfig;
        const fieldName = `${sectionName}.${name}`;
        if (required) {
          const valid = documentValues.some(
            (file: IVariables) =>
              !file.loading &&
              file.fieldName === fieldName &&
              file.documentPath,
          );
          if (!valid && allValid) {
            allValid = false;
            scrollToElement(fieldName, 'id');
          }
        }
        return '';
      });
    });
  });
  return allValid;
};

export default {
  onPageInit,
  handleSubmitFiles,
  handleBack,
};
