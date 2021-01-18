import { IVariables } from '@tamm/app-composer';
import {
  steps,
  withoutNameSteps,
  moeSteps,
  moaWithoutNameSteps,
} from 'client/config/steps';
import { isMoaRequired } from 'client/config/pages/EconomicLicence/functions/getLegalForms';

const checkLicenceOnly = (licenceType: string) => {
  if (
    licenceType === 'instant' ||
    licenceType === 'allInOne' ||
    licenceType === 'tajer'
  )
    return true;
  return false;
};

const checkMoeStep = (licenceType: string) => {
  if (licenceType === 'branchForeign' || licenceType === 'branchGCC')
    return true;
  return false;
};

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
  if (checkLicenceOnly(licenceType)) {
    if (isMoaRequired(licenceType, legalForm)) {
      return moaWithoutNameSteps;
    }
    return withoutNameSteps;
  }
  if (checkMoeStep(licenceType)) return moeSteps;
  return steps;
};

const getCurrentStep = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
    },
  } = state;
  if (checkLicenceOnly(licenceType)) {
    return 'ded_approval';
  }
  return 'economic_licence';
};

const getStepStatus = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
      legalForm: { legalForm },
    },
  } = state;

  if (checkLicenceOnly(licenceType)) {
    if (isMoaRequired(licenceType, legalForm)) {
      return {
        moa_approval: 'finish',
      };
    }

    const status = {};
    return status;
  }
  if (checkMoeStep(licenceType)) {
    const status = {
      'economic_name.ded_approval': 'finish',
      'economic_name.payment': 'finish',
      'economic_name.initial_approval': 'finish',
      economic_name: 'finish',
      initial_registration: 'finish',
      'economic_licence.submit_licence': 'finish',
    };
    return status;
  }

  const status = {
    'economic_name.ded_approval': 'finish',
    'economic_name.payment': 'finish',
    'economic_name.initial_approval': 'finish',
    'economic_name.download_certificate': 'finish',
    economic_name: 'finish',
  };
  return status;
};

export default { getStep, getCurrentStep, getStepStatus };
