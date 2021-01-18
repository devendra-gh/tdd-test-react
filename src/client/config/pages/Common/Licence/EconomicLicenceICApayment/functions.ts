import { IVariables } from '@tamm/app-composer';
import { isMoaRequired } from 'client/config/pages/EconomicLicence/functions/getLegalForms';
import { moaWithoutNameSteps, withoutNameSteps } from 'client/config/steps';

/**
 * @param {IVariables} state
 * @returns {Object}
 */
const getStep = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
      legalForm: { legalForm },
    },
  } = state;
  if (isMoaRequired(licenceType, legalForm)) {
    return moaWithoutNameSteps;
  }
  return withoutNameSteps;
};

const getStepStatus = (state: IVariables) => {
  const status = {
    moa_approval: 'finish',
    ded_approval: 'finish',
  };
  return status;
};

export default {
  getStep,
  getStepStatus,
};
