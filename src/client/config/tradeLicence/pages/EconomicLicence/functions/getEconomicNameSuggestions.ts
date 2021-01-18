import { IVariables } from '@tamm/app-composer';
import fetch from 'client/services/fetch';
import { get, take } from 'lodash';

export const getLegalFormType = (type: string) => {
  // set types
  let typeOfEntity = 'Establishment';
  if (type === 'limitedLiabilityCompanyLLC') {
    typeOfEntity = 'Limited Liability Company';
  } else if (type === 'soleProprietorshipLLC') {
    typeOfEntity = 'Sole Proprietorship L.L.C.';
  }
  return typeOfEntity;
};

const getEconomicNameSuggestions = async (formState: IVariables) => {
  const payload = await fetch('/pub/proxy/businessNameSuggestion', 'POST', {
    arabicName: formState.tradeNameAr,
    englishName: formState.tradeNameEn,
    legalForm: getLegalFormType(formState.legalForm),
    activitCode: formState.activities
      .map((i: IVariables) => i.activityCode)
      .join(','),
  });

  return take(get(payload, 'data.result.res', []), 4);
};

export default getEconomicNameSuggestions;
