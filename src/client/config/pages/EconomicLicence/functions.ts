import { IVariables } from '@tamm/app-composer';
import fetch from 'client/services/fetch';
import getActivities from './functions/getActivities';
import onCheckTradeName from './functions/onCheckTradeName';
import autoGenerateTradeName from './functions/autoGenerateTradeName';
import getTransliteration from './functions/getTransliteration';
import authorizedOperations from './functions/authorizedOperations';
import getLocationActivities from './functions/getLocationActivities';
import fetchAttachments from './functions/fetchAttachments';
import fetchBranchDetails from './functions/fetchBranchDetails';
import getEconomicNameSuggestions from './functions/getEconomicNameSuggestions';

import getLicenceTypes from './functions/getLicenceTypes';
import getLegalForms from './functions/getLegalForms';
import getBusinessLocations from './functions/getBusinessLocations';
import getRepresentatives from './functions/getRepresentatives';

import submitLicence from './functions/submitLicence';
import validation from './functions/validation';
import visibility from './functions/visibility';

const init = async (props: IVariables) => {
  props.actions.economicLicense.update({
    ...props.economicLicense,
    pageTitle: 'licenceForm.title',
  });
  props.actions.economicLicenceSubmitting.update(false);
  props.actions.economicLicenceSubmitting.update(false);

  try {
    const payload = await fetch('/pub/lookup/countries');
    props.actions.countries.update(payload.success ? payload.data : []);
  } catch (e) {
    console.error('---Failed to fetch countries--', e);
  }
};

const updatePageTitle = (
  licenceType: string,
  branch: string,
  props: IVariables,
) => {
  const licenceName = licenceType !== 'branch' ? licenceType : branch;
  props.actions.economicLicense.update({
    ...props.economicLicense,
    pageTitle: licenceName
      ? `global.title.${licenceName}`
      : 'licenceForm.title',
    licenceType: {
      licenceType,
    },
    branchDetails: {
      branch,
    },
  });
};

export default {
  init,
  onCheckTradeName,
  autoGenerateTradeName,
  getTransliteration,
  getActivities,
  getEconomicNameSuggestions,
  authorizedOperations,
  getLocationActivities,
  fetchAttachments,
  fetchBranchDetails,

  getLicenceTypes,
  getLegalForms,
  getBusinessLocations,
  getRepresentatives,

  updatePageTitle,
  submitLicence,
  validation,
  visibility,
};
