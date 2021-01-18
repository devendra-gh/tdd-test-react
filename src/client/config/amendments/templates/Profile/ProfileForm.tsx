import React from 'react';
import { IVariables } from '@tamm/app-composer';
import { Moment } from 'moment';

import FormTemplate from '@tamm/ui-lib-v2-form-template';

import { checkValidationField } from 'client/config/amendments/utils/checkValidation';
import {
  companyTypes,
  residenceTypes,
  UAE,
  LocalCompany,
  GovernmentEnity,
  NonLocalCompany,
} from 'client/config/amendments/constants';
import representativeForms from 'client/config/amendments/configs/representativeForms';

const ProfileForm = (props: IVariables) => {
  const {
    i18n,
    changeProfileForm,
    countryList,
    formValues,
    profileType,
    profileValidatedResponse,
    representativeType,
    validateOnSubmit,
  } = props;

  if (
    representativeType === '' ||
    profileType === '' ||
    !representativeForms[representativeType]
  ) {
    return null;
  }

  const handleFieldChange = (fieldName: string, value: any) => {
    changeProfileForm(fieldName, value);
  };

  const filterCountryList = (contryList: any, companyType: string) => {
    return companyType === NonLocalCompany
      ? contryList.filter((country: IVariables) => country.label !== UAE)
      : contryList;
  };
  const profileValidation = (
    currentFieldName: string,
    validatedResponse: any,
  ) => {
    let returnError: any;
    if (
      currentFieldName === 'bDate' &&
      validatedResponse.dateOfBirth === true
    ) {
      returnError = i18n('validationMessage.dobError');
    }
    // if (
    //   (currentFieldName === 'firstNameEn' ||
    //     currentFieldName === 'lastNameEn') &&
    //   validatedResponse.fullEnglishName === true
    // ) {
    //   returnError = i18n('validationMessage.engNameError');
    // }
    // if (
    //   (currentFieldName === 'firstNameAr' ||
    //     currentFieldName === 'lastNameAr') &&
    //   validatedResponse.fullArabicName === true
    // ) {
    //   returnError = i18n('validationMessage.arbNameError');
    // }
    return returnError || false;
  };
  const setValue = (setFormValues: any, setField: any) => {
    if (setField.name === 'bDate') {
      return setFormValues[setField.name]
        ? new Date(setFormValues[setField.name])
        : null;
    }
    if (
      setField.name === 'domicile' &&
      (setFormValues.companyType === LocalCompany ||
        setFormValues.companyType === GovernmentEnity)
    ) {
      return UAE;
    }
    return setField.value
      ? setField.value(setFormValues)
      : setFormValues[setField.name] || null;
  };
  const getProfileFields = (
    fieldName: string,
    profileCountryList: any,
    formValuesCompanyType: any,
    profileCompanyTypes: any,
    profileResidenceTypes: any,
  ) => {
    if (fieldName === 'nationality') {
      return profileCountryList;
    }
    if (fieldName === 'domicile') {
      return filterCountryList(profileCountryList, formValuesCompanyType);
    }
    if (fieldName === 'companyType') {
      return profileCompanyTypes.map((item: IVariables) => ({
        ...item,
        label: i18n(`companyTypes.${item.label}`),
      }));
    }
    if (fieldName === 'type') {
      return Object.values(profileResidenceTypes).map((item: any) => ({
        id: item,
        label: i18n(`residentTypes.${item}`),
      }));
    }
    return null;
  };
  const makeFieldConfig = (
    fields: IVariables[],
    {
      conditionalBehaviour,
      conditionalDisable,
      validationConfig,
      ...field
    }: IVariables,
  ) => {
    if (conditionalBehaviour && conditionalBehaviour(formValues) === false) {
      return fields;
    }
    const items = getProfileFields(
      field.name,
      countryList,
      formValues.companyType,
      companyTypes,
      residenceTypes,
    );
    fields.push({
      ...field,
      'aria-label': i18n(field['aria-label']),
      label: i18n(field.label),
      value: setValue(formValues, field),
      defaultValue: formValues[field.name]
        ? formValues[field.name]
        : field.defaultValue,
      validate: (value: any) => {
        if (Object.values(profileValidatedResponse).length > 0) {
          return profileValidation(field.name, profileValidatedResponse);
        }
        return checkValidationField(
          validationConfig,
          value,
          validateOnSubmit,
          i18n,
        );
      },

      ...(field.elementType === 'inputTelephone'
        ? {
            onSelect: (value: any) => handleFieldChange(field.name, value),
          }
        : {
            onChange: (value: any) => handleFieldChange(field.name, value),
          }),
      ...(field.elementType === 'datePicker'
        ? {
            disabledDate: (currentDate: Moment) =>
              typeof field.customDisabledDate === 'function' &&
              field.customDisabledDate(currentDate),
          }
        : {}),
      ...(conditionalDisable
        ? {
            disabled: () => conditionalDisable(formValues),
          }
        : {}),
      ...(items ? { items } : {}),
    });
    return fields;
  };

  const formFields = representativeForms[representativeType][profileType];

  const representativeConfig = Object.values(formFields).map((section: any) => {
    const fields = section.fields.reduce(makeFieldConfig, []);
    return {
      name: i18n(section.name),
      twoColumns: section.twoColumns,
      fields,
    };
  });

  return (
    <FormTemplate
      id="profile-form"
      i18n={i18n}
      inputGroups={representativeConfig}
    />
  );
};

export default ProfileForm;
