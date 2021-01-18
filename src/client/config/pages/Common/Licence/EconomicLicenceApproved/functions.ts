import { IVariables } from '@tamm/app-composer';
// import bpm from 'client/services/bpm';
import {
  steps,
  withoutNameSteps,
  moaWithoutNameSteps,
  // instantLicenceSteps,
} from 'client/config/steps';
import baseUrl from 'client/utils/baseUrl';
import { isMoaRequired } from 'client/config/pages/EconomicLicence/functions/getLegalForms';
import { categoriesAr, categoriesEn } from '../../../../data';

const checkLicenceOnly = (licenceType: string) => {
  if (
    licenceType === 'instant' ||
    licenceType === 'allInOne' ||
    licenceType === 'tajer'
  )
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
  return steps;
};

const getCurrentStep = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
    },
  } = state;
  if (checkLicenceOnly(licenceType)) {
    return 'download_certificate';
  }
  return 'economic_licence';
};

const onClick = async (props: IVariables) => {
  // await bpm.message('economicLicence', {
  //   businessKey: props.businessKey,
  //   messageName: 'onLicenceSuccess',
  // });
  window.open(
    'http://www.tamm.abudhabi/journeys/manage-your-business',
    '_blank',
  );
  // props.history.push('/economic-licence/submit');
};

const getStepStatus = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
    },
  } = state;

  if (checkLicenceOnly(licenceType)) {
    const status = {
      moa_approval: 'finish',
      ded_approval: 'finish',
      ica_payment: 'finish',
      initial_approval: 'finish',
      payment: 'finish',
    };
    return status;
  }
  const status = {
    'economic_name.ded_approval': 'finish',
    'economic_name.payment': 'finish',
    'economic_name.initial_approval': 'finish',
    'economic_name.download_certificate': 'finish',
    economic_name: 'finish',
    'economic_licence.ded_approval': 'finish',
    'economic_licence.payment': 'finish',
  };
  return status;
};

const documentDownload = (props: IVariables) => {
  window.open(
    `${baseUrl}/api/download/businessCertificateFromAdu?instanceId=${props.instanceId ||
      ''}&type=economicLicenceCn`,
    '_blank',
  );
};

const getCategories = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
    },
  } = state;

  if (licenceType === 'instant') {
    return { categoriesAr, categoriesEn };
  }
  return null;
};

export default {
  onClick,
  getStep,
  getCurrentStep,
  getStepStatus,
  documentDownload,
  getCategories,
};
