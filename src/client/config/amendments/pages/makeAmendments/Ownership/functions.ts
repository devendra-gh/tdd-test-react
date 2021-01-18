import { IVariables } from '@tamm/app-composer';
import evaluateRules from 'client/config/amendments/utils/evaluateRules';
import * as functions from 'client/config/amendments/utils/functions';
import allRules from 'client/config/amendments/configs/rules'; // , { Rule }
import { AMENDMENT_CATEGORIES as categories } from 'client/config/amendments/constants/amendmentObjects';
import bpm from 'client/services/bpm';
import {
  UPDATE,
  PROCESS_NAME,
  profileTypes,
} from 'client/config/amendments/constants';
import { updateReduxStoreInDB } from 'client/config/amendments/utils/setUpdateReduxState';

const onPageInit = async (props: IVariables) => {
  props.actions.amendmentServerError.reset();
  return {
    logUuid: props.logUuid,
    dbAmendmentId: props.dbAmendmentId,
  };
};

const checkRules = (props: IVariables, type = 'single') => {
  const eligibility = evaluateRules(props, type);
  const rules =
    type !== 'single'
      ? eligibility
      : Object.values(eligibility).reduce((acc, item) => acc.concat(item), []);
  return rules;
};

const onNext = async (props: IVariables) => {
  const nextPage = functions.getNextSubStepPage(props.currentPage, props);
  await updateReduxStoreInDB(props);
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

const getAmendmentTypes = (
  legalForm: string,
  licenseType: string,
  amendmentCategory: string,
) => {
  const amendmentType =
    allRules[licenseType] &&
    allRules[licenseType][legalForm] &&
    allRules[licenseType][legalForm][amendmentCategory];

  return amendmentType || null;
};

const getRuleList = (licenseType: string, legalForm: string) => {
  const amendmentCategory = categories.OWNERSHIP;
  const rulesConfig: IVariables =
    allRules[licenseType] &&
    allRules[licenseType][legalForm] &&
    allRules[licenseType][legalForm][amendmentCategory];

  const rules: string[] = [];
  if (rulesConfig) {
    Object.keys(rulesConfig).forEach((subCategoryName: string) => {
      (rulesConfig[subCategoryName].rules || []).map((rule: IVariables) => {
        if (!rule.noDisplay) rules.push(rule.message);
        return null;
      });
      return null;
    });
  }

  return rules || [];
};

const getActionType = (
  representativeType: string,
  action: string,
  index: number,
  props: IVariables,
) => {
  let formValues: IVariables = {};
  if (representativeType && action === UPDATE && index >= 0) {
    formValues = props.licenceDetails[representativeType][index] || {};
  }
  props.actions.profile.update({
    representativeType,
    profileType: formValues.profileType || profileTypes.INDIVIDUAL,
    action,
    index,
    formValues,
  });
  props.history.push('/amendments/profile');
};

export default {
  onPageInit,
  checkRules,
  getAmendmentTypes,
  getRuleList,
  onNext,
  getActionType,
  handleBack,
};
