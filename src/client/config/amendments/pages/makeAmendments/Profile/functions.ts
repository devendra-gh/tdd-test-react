import { IVariables } from '@tamm/app-composer';
import {
  AMENDMENT_TYPES as types,
  AMENDMENT_CATEGORIES as categories,
} from 'client/config/amendments/constants/amendmentObjects';
import {
  ADD,
  UPDATE,
  DELETE,
  UAE,
  profileTypes,
  LocalCompany,
} from 'client/config/amendments/constants';
import allRules from 'client/config/amendments/configs/rules';
import representativeStructure from 'client/config/amendments/configs/representativeStructure';
import { generateProfileKey } from 'client/config/amendments/utils/functions';
import fetch from 'client/services/fetch';
import LEGAL_FORMS from 'client/config/amendments/constants/legalForms';
import { OWNER } from 'client/config/amendments/constants/representativeType';

const onPageInit = async (props: IVariables) => {
  if (props.countryList.length === 0) {
    const result = await fetch(`/pub/proxy/getCountriesList`);
    if (result && result.data.length >= 1) {
      const countryList = Object.values(result.data).map((item: any) => ({
        id: item.name,
        label: item.name,
      }));
      props.actions.countryList.update(countryList);
    }
  }
};

const getPossibleRepTypes = (props: IVariables) => {
  const { legalForm, licenseType, profile } = props;
  const ownershipStructure =
    allRules[licenseType] &&
    allRules[licenseType][legalForm] &&
    allRules[licenseType][legalForm][categories.OWNERSHIP];
  /* eslint-disable complexity */
  const representativeList = Object.keys(ownershipStructure).reduce(
    (list: IVariables[], type: string) => {
      if (
        ownershipStructure[type].noDisplay === true ||
        ownershipStructure[type].actions.add === false ||
        ownershipStructure[type].actions.edit === false ||
        (profile.action !== UPDATE &&
          (type === types.MANAGERS ||
            type === types.LOCAL_AGENT ||
            type === types.REPRESENTATIVES) &&
          props.licenceDetails[type].filter(
            (item: IVariables) => item.status !== DELETE,
          ).length === 1)
      ) {
        return list;
      }

      let repType;
      if (type === types.PARTNERS) {
        repType =
          legalForm === LEGAL_FORMS.ESTABLISHMENT ||
          legalForm === LEGAL_FORMS.SOLE_LLC
            ? OWNER
            : types.PARTNERS;
      } else {
        repType = type;
      }
      list.push({
        id: type,
        label: props.i18n(`tableTitle.${repType}`),
      });
      return list;
    },
    [],
  );
  return representativeList || null;
};

const onSubmit = (props: IVariables) => {
  const {
    profile: { action, index, representativeType, profileType, formValues },
  } = props;
  if (action === UPDATE) {
    const updatedRepType = props.licenceDetails[representativeType].map(
      (item: IVariables, i: number) => {
        const currentStatus = item.status === ADD ? ADD : UPDATE;
        return index === i
          ? {
              ...item,
              ...formValues,
              status: currentStatus,
              nameEn: formValues.firstNameEn + formValues.lastNameEn,
              nameAr: formValues.firstNameAr + formValues.lastNameAr,
              ...(formValues.companyType === LocalCompany &&
              profileType === profileTypes.COMPANY
                ? { domicile: UAE }
                : {}),
            }
          : item;
      },
    );
    props.actions.licenceDetails.update({
      ...props.licenceDetails,
      representativeTypeEng: representativeType,
      profileType,
      [representativeType]: updatedRepType,
    });
  } else {
    const newObject = {
      ...representativeStructure[representativeType],
      ...formValues,
      representativeTypeEng: representativeType,
      profileType,
      status: ADD,
      nameEn: formValues.firstNameEn + formValues.lastNameEn,
      nameAr: formValues.firstNameAr + formValues.lastNameAr,
      ...(formValues.companyType === LocalCompany &&
      profileType === profileTypes.COMPANY
        ? { domicile: UAE }
        : {}),
      referenceKey: generateProfileKey(),
    };
    props.actions.licenceDetails.update({
      ...props.licenceDetails,
      [representativeType]: [
        ...props.licenceDetails[representativeType],
        newObject,
      ],
    });
  }
  props.history.push('/amendments/ownership');
};

export default {
  onPageInit,
  getPossibleRepTypes,
  onSubmit,
};
