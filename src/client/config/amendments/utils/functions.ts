/* eslint-disable complexity */
import { IVariables } from '@tamm/app-composer';
import {
  DOCUMENT_CHUNK_LIMIT,
  TOTAL_CHUNKS_COUNT,
} from 'client/config/amendments/constants';
import LEGAL_FORMS, {
  LEGAL_FORMS_LIST,
  BRANCH_MAPPINGS,
} from 'client/config/amendments/constants/legalForms';
import licenseTypes, {
  LICENSE_TYPE_LIST,
} from 'client/config/amendments/constants/licenseTypes';
import allowedSections from 'client/config/amendments/configs/rules';
import scrollToElement from 'client/config/amendments/utils/scrollToElement';
import amendmentPages, { pageUrls } from '../configs/amendmentPages';
import steps, { IStep } from '../steps';
import {
  AMENDMENT_CATEGORIES,
  AMENDMENT_PAGES,
} from '../constants/amendmentObjects';

function getReduxState(props: IVariables): string {
  const {
    licenseNo,
    capID,
    legalForm,
    prevLegalForm,
    licenseType,
    prevLicenseType,
    amendmentCategories,
    licenceDetails,
    initialValues,
    tradeName,
    activity,
    tawtheeqDetails,
  } = props;

  return JSON.stringify({
    licenseNo,
    capID,
    legalForm,
    prevLegalForm,
    licenseType,
    prevLicenseType,
    amendmentCategories,
    tradeName,
    activity,
    tawtheeqDetails,
    licenceDetails,
    initialValues,
  });
}

function getLegalForm(licenceDetails: IVariables, licenceType: string): string {
  if (licenceType === licenseTypes.BRANCH) {
    return BRANCH_MAPPINGS[licenceDetails.branchTypeEn] || LEGAL_FORMS.BRANCH;
  }
  const legalForm = licenceDetails.legalForm.eng;
  const legalFormObject = Object.values(LEGAL_FORMS_LIST).find(
    (legalFormItem: IVariables) => legalFormItem.nameEn === legalForm,
  );
  return legalFormObject ? legalFormObject.id : '';
}

function getLicenceType(licenceDetails: IVariables): string {
  const licenceType = licenceDetails.licenceType.eng;
  if (licenceType === 'Normal' && licenceDetails.isbranch === 'Y') {
    return licenseTypes.BRANCH;
  }
  const licenceTypeObject = Object.values(LICENSE_TYPE_LIST).find(
    (licenceTypeItem: IVariables) => licenceTypeItem.nameEn === licenceType,
  );
  return licenceTypeObject ? licenceTypeObject.id : '';
}

function getCategoryTypes(legalForm: string, licenceType: string) {
  const categories =
    allowedSections[licenceType] && allowedSections[licenceType][legalForm];
  return Object.keys(categories || {});
}

function getPagesFromCategories(categoryCollection: IVariables): string[] {
  const selectedCategories: string[] =
    categoryCollection &&
    categoryCollection.category &&
    Object.keys(categoryCollection.category).filter(
      (iCategory: string) =>
        categoryCollection.category[iCategory] ||
        (categoryCollection[AMENDMENT_CATEGORIES.OWNERSHIP] &&
          categoryCollection[AMENDMENT_CATEGORIES.OWNERSHIP][iCategory]),
    );
  return amendmentPages
    .filter(
      (page: IVariables) =>
        selectedCategories && selectedCategories.includes(page.category),
    )
    .map((page: IVariables) => page.name);
}

const isUploadPage = (amendPages: string[], props: IVariables) => {
  const {
    amendmentCategories: { isUploadStep },
  } = props;
  if (isUploadStep) {
    return true;
  }
  if (amendPages.includes(AMENDMENT_PAGES.PAID_UP_CAPITAL)) {
    return true;
  }
  if (amendPages.includes(AMENDMENT_PAGES.TRADE_NAME)) {
    return (
      props.legalForm === LEGAL_FORMS.LLC ||
      props.legalForm === LEGAL_FORMS.SOLE_LLC
    );
  }
  // if (amendPages.includes(AMENDMENT_PAGES.OWNERSHIP)) {
  //   return true;
  // const amendmentsMade = getAmendmentsMade(props);
  // if (amendmentsMade[AMENDMENT_CATEGORIES.OWNERSHIP]) {
  //   return true;
  // }
  // }
  // if (
  //   amendPages.includes(AMENDMENT_PAGES.LOCATION)
  // ) {
  //   // todo - correct the logic for foriegn branch check
  //   // upload is mandatory if doing country amendment
  //   return true;
  // }
  return false;
};

const getAllSubSteps = (props: IVariables) => {
  const { amendmentCategories } = props;
  const amendPages = getPagesFromCategories(amendmentCategories);
  const subSteps: string[] = amendPages.map(
    (pageName: string) => `subStep.${pageName}`,
  );
  if (isUploadPage(amendPages, props)) {
    subSteps.push('subStep.uploadDocuments');
  }
  subSteps.push('subStep.contactInfo');
  return subSteps;
};

const findSubStepPage = (
  currentPage: string,
  props: IVariables,
  type: string,
): string => {
  const subSteps: string[] = getAllSubSteps(props);
  if (!currentPage) {
    return pageUrls[subSteps[0]];
  }
  const pageIndex = subSteps.indexOf(`subStep.${currentPage}`);
  if (pageIndex === -1) {
    return '';
  }
  const toPageIndex = type === 'next' ? pageIndex + 1 : pageIndex - 1;
  if (toPageIndex === -1) {
    return 'categories';
  }
  return pageUrls[subSteps[toPageIndex]];
};

const getFirstSubStepPage = (props: IVariables): string => {
  const subSteps: string[] = getAllSubSteps(props);
  let firstSubStep: string = '';
  if (subSteps.length) {
    const pageStep = subSteps[0];
    firstSubStep = pageUrls[pageStep];
  }
  return firstSubStep;
};

const getNextSubStepPage = (currentPage: string, props: IVariables): string =>
  findSubStepPage(currentPage, props, 'next');

const getPrevSubStepPage = (currentPage: string, props: IVariables): string =>
  findSubStepPage(currentPage, props, 'prev');

/**
 * @param {IVariables} state
 * @returns {IStep[]}
 */
const getSteps = (state: IVariables): IStep[] => {
  const subSteps: string[] = getAllSubSteps(state);
  const newSteps = steps.map((step: IStep) => {
    return step.id === 'amendments'
      ? {
          ...step,
          subSteps,
        }
      : step;
  });
  return newSteps;
};

const getStepsStatus = (currentStep: string, currentSubStep: string) => (
  state: IVariables,
): Record<string, string> => {
  let stepsStatus: IVariables = {};
  let finishFlag = false;

  let i = 0;
  while (!finishFlag) {
    const step = steps[i];
    if (step.id === 'amendments') {
      const subSteps: string[] = getAllSubSteps(state);
      let j = 0;
      const subStepStatus: IVariables = [];
      while (!finishFlag && subSteps[j]) {
        const subStep = subSteps[j];
        if (subStep === currentSubStep) {
          finishFlag = true;
        } else {
          subStepStatus[`${step.name}.${subStep}`] = 'finish';
        }
        j += 1;
      }
      if (currentStep !== 'process.makeAmendment' || finishFlag) {
        stepsStatus = { ...stepsStatus, ...subStepStatus };
      }
      if (currentStep === 'process.makeAmendment') {
        finishFlag = true;
      } else if (!finishFlag) {
        stepsStatus[step.name] = 'finish';
      }
    } else if (currentStep === step.name) {
      finishFlag = true;
    } else {
      stepsStatus[step.name] = 'finish';
    }
    i += 1;
  }

  // steps.forEach((step: IStep) => {
  //   if (step.id === 'amendments') {
  //     const subSteps: string[] = getAllSubSteps(state);
  //     subSteps.forEach((subStep: string) => {
  //       if (finishFlag || subStep === currentSubStep) {
  //         finishFlag = true;
  //         return null;
  //       }
  //       stepsStatus[`${step.name}.${subStep}`] = 'finish';
  //       return '';
  //     });
  //     if (currentStep === 'process.makeAmendment' && !finishFlag) {
  //       finishFlag = true;
  //     }
  //     if (!finishFlag) {
  //       stepsStatus[step.name] = 'finish';
  //     }
  //   } else if (finishFlag || currentStep === step.name) {
  //     finishFlag = true;
  //     return null;
  //   } else {
  //     stepsStatus[step.name] = 'finish';
  //   }
  //   return '';
  // });
  return stepsStatus;
};

function convertChunk(arr: any[], size: number) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size),
  );
}
function documentsToBeSavedInCamunda(documents: IVariables[]) {
  const response: IVariables = {};
  const documentChunks = convertChunk(documents, DOCUMENT_CHUNK_LIMIT);
  documentChunks.forEach((chunk: IVariables[], i: number) => {
    if (i < TOTAL_CHUNKS_COUNT) {
      response[`documents${i + 1}`] = JSON.stringify(chunk);
    }
  });
  return response;
}

function generateProfileKey() {
  const minimum = 1000000000;
  const maximum = 9999999999;
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function truncate(value: string, n: number) {
  return value && value.length > n ? `${value.substr(0, n - 1)}..` : value;
}

function returnCamundaMessage(
  response: any,
  props: IVariables,
  pageName: string,
) {
  let errorMessage: string = '';
  if (response.success && response.message === 'Success') {
    errorMessage = '';
  } else if (response.success && response.message) {
    errorMessage = response.message;
  } else {
    errorMessage = props.i18n('wentWrong.info');
  }
  props.actions.amendmentServerError.update(errorMessage);
  if (errorMessage) {
    scrollToElement('errorMessage', 'id');
  } else if (pageName) {
    props.history.push(`/amendments/${pageName}`);
  }
}

export {
  getReduxState,
  getLicenceType,
  getLegalForm,
  getCategoryTypes,
  getPagesFromCategories,
  getSteps,
  getStepsStatus,
  getFirstSubStepPage,
  getNextSubStepPage,
  getPrevSubStepPage,
  documentsToBeSavedInCamunda,
  generateProfileKey,
  truncate,
  returnCamundaMessage,
};
