import React, { useState } from 'react';
import { IVariables } from '@tamm/app-composer';
import FormTemplate from '@tamm/ui-lib-v2-form-template';
import {
  checkValidationField,
  validateSharePercentage,
  validationTypes,
} from 'client/config/utils/checkValidation';
import {
  companies,
  nationalities,
  emirates,
  legalForms,
  representativeType,
  countries,
} from '../../../../utils/constants';

const margin = {
  margin: '20px',
};

export const checkLicenseDetails = async (
  licenseNumber: string,
  fetchLicenseDetails: any,
  callback: any,
) => {
  const details = await fetchLicenseDetails(licenseNumber);
  if (details) {
    const location = details.businessLicCity || '';
    const businessNameEn =
      details.businessNameEng || details.businessNameArb || '';
    const businessNameAr =
      details.businessNameArb || details.businessNameEng || '';

    callback({
      licenseValid: true,
      location,
      businessNameEn,
      businessNameAr,
    });
  } else {
    callback({
      licenseValid: false,
      location: '',
      businessNameEn: '',
      businessNameAr: '',
    });
  }
};

const CompanyDetailsQuestion = ({
  values,
  handleChange,
  handleCompanyTypeChange,
  handleRepresentativeTypeChange,
  companyType,
  companyTypes,
  serviceType,
  fetchLicenseDetails,
  startShowingErrors,
  i18n,
}: {
  values: IVariables;
  handleChange: Function;
  handleCompanyTypeChange: Function;
  handleRepresentativeTypeChange: Function;
  companyType: string;
  companyTypes: any[];
  serviceType: string;
  fetchLicenseDetails: Function;
  startShowingErrors: boolean;
  i18n: Function;
}) => {
  if (!serviceType) {
    return null;
  }

  const [loading, setLoading] = useState(false);

  const onBlurLicenseNumber = async () => {
    const typeValidation = checkValidationField(
      {
        type: validationTypes.CN_NUMBER,
      },
      values.licenseNo || null,
      true,
      i18n,
    );
    if (!typeValidation && values.licenseNo) {
      setLoading(true);
      await checkLicenseDetails(
        values.licenseNo,
        fetchLicenseDetails,
        handleChange,
      );
      setLoading(false);
    }
  };

  // License field for onshore comapnies
  const licenceNumberField = {
    label: i18n('field.comLicenseNumber'),
    value: values.licenseNo,
    name: 'contactDetails.licenseNo',
    elementType: 'input',
    onChange: (value: string) => {
      handleChange({ licenseNo: value });
    },
    onBlur: () => onBlurLicenseNumber(),
    validate: () => {
      if (loading) {
        return i18n('error.validatingLicenseNumber');
      }
      if (values.licenseValid === false) {
        return i18n('error.licenseNbrInvalid');
      }
      const typeValidation = checkValidationField(
        {
          type: validationTypes.CN_NUMBER,
        },
        values.licenseNo || null,
        startShowingErrors,
        i18n,
      );
      if (typeValidation) return typeValidation;
      return undefined;
    },
  };

  // License field for other companies
  const contactLicenceNumberField = {
    label: i18n('field.comLicenseNumber'),
    value: values.contactLicenseNo,
    name: 'contactDetails.contactlicenseNo',
    elementType: 'input',
    onChange: (value: string) => {
      handleChange({ contactLicenseNo: value });
    },
    validate: () => {
      const typeValidation = checkValidationField(
        {
          type: validationTypes.REQUIRED,
        },
        values.contactLicenseNo || null,
        startShowingErrors,
        i18n,
      );
      if (typeValidation) return typeValidation;
      return undefined;
    },
  };

  const nationalityField = {
    label: i18n('field.nationality'),
    value: values.nationality,
    name: 'contactDetails.nationality',
    elementType: 'select',
    showSearch: companyType !== 'ADGE',
    items:
      companyType === 'ADGE'
        ? [
            {
              id: 'ARE',
              label: i18n('country.unitedarabemirates'),
            },
          ]
        : nationalities.map((item: IVariables) => {
            return {
              id: item.id,
              label: i18n(item.label),
            };
          }),
    onChange: (value: any) => handleChange({ nationality: value }),
    validate: () => {
      const typeValidation = checkValidationField(
        {
          type: validationTypes.REQUIRED,
        },
        values.nationality || null,
        startShowingErrors,
        i18n,
      );
      if (typeValidation) return typeValidation;
      return undefined;
    },
  };

  const mobileNoField = {
    label: i18n('field.mobilePhone'),
    value: values.mobileNo,
    elementType: 'inputTelephone',
    name: 'contactDetails.mobileNo',
    countries,
    onSelect: (value: any) => handleChange({ mobileNo: value }),
    validate: () => {
      const typeValidation = checkValidationField(
        {
          type: validationTypes.PHONE,
        },
        values.mobileNo || null,
        startShowingErrors,
        i18n,
      );
      if (typeValidation) return typeValidation;
      return undefined;
    },
  };

  const emailField = {
    label: i18n('applicantContact.email'),
    value: values.emailAddress,
    name: 'contactDetails.email',
    elementType: 'input',
    onChange: (value: any) => handleChange({ emailAddress: value }),
    validate: () => {
      const typeValidation = checkValidationField(
        {
          type: validationTypes.EMAIL,
        },
        values.emailAddress || null,
        startShowingErrors,
        i18n,
      );
      if (typeValidation) return typeValidation;
      return undefined;
    },
  };

  const companyNameENField = {
    label: i18n('field.companyNameEn'),
    value: values.englishName,
    name: 'contactDetails.englishName',
    elementType: 'input',
    onChange: (value: any) => handleChange({ englishName: value }),
    validate: () => {
      const typeValidation = checkValidationField(
        {
          type: validationTypes.REQUIRED,
        },
        values.englishName || null,
        startShowingErrors,
        i18n,
      );
      if (typeValidation) return typeValidation;
      return undefined;
    },
  };

  const companyNameARField = {
    label: i18n('field.companyNameAr'),
    value: values.arabicName,
    name: 'contactDetails.arabicName',
    elementType: 'input',
    onChange: (value: any) => handleChange({ arabicName: value }),
    validate: () => {
      const typeValidation = checkValidationField(
        {
          type: validationTypes.REQUIRED,
        },
        values.arabicName || null,
        startShowingErrors,
        i18n,
      );
      if (typeValidation) return typeValidation;
      return undefined;
    },
  };

  const legalFormField = {
    label: i18n('field.legalForm'),
    value: values.legalForm,
    name: 'contactDetails.legalForm',
    elementType: 'select',
    items: legalForms.map((item: IVariables) => {
      return {
        id: item.id,
        label: i18n(item.label),
      };
    }),
    onChange: (value: any) => handleChange({ legalForm: value }),
    validate: () => {
      const typeValidation = checkValidationField(
        {
          type: validationTypes.REQUIRED,
        },
        values.legalForm || null,
        startShowingErrors,
        i18n,
      );
      if (typeValidation) return typeValidation;
      return undefined;
    },
  };

  const repTypeField = {
    label: i18n('field.repTypeField'),
    value: values.representativeType,
    name: 'contactDetails.repType',
    elementType: 'select',
    items: representativeType.map((item: IVariables) => {
      return {
        id: item.id,
        label: i18n(item.label),
      };
    }),
    onChange: (value: any) =>
      handleRepresentativeTypeChange({
        representativeType: value,
      }),
    validate: () => {
      const typeValidation = checkValidationField(
        {
          type: validationTypes.REQUIRED,
        },
        values.representativeType || null,
        startShowingErrors,
        i18n,
      );
      if (typeValidation) return typeValidation;
      return undefined;
    },
  };

  // Fully controlled component, must send 0 as initially value ( check initial state ) to control state strictly, sends back e
  const sharePercentageField = {
    label: i18n('field.sharePercentage'),
    disabled: () => {
      if (values.representativeType === '2') {
        return false;
      }
      return true;
    },
    precision: 2,
    step: 0.5,
    value: values.partnerSharePercentage,
    name: 'contactDetails.partnerSharePercentage',
    elementType: 'inputNumber',
    onChange: (e: any) => {
      const { value } = e.target;
      // This regex allows . but the final validation does not
      const partnerSharePercentageRegex = /^(100(?:\.00?)?|\d?\d(?:\.\d?\d?)?)$/;
      if (value.match(partnerSharePercentageRegex)) {
        handleChange({ partnerSharePercentage: String(value) });
      } else if (value === '') {
        handleChange({ partnerSharePercentage: String(value) });
      } else {
        handleChange({ partnerSharePercentage: '1' });
      }
    },
    validate: () => {
      if (values.representativeType === '2') {
        const typeValidation = validateSharePercentage(values, i18n);
        if (typeValidation) return typeValidation;
      }
      return undefined;
    },
  };

  const emirateField = {
    label: i18n('field.emirateOfBusiness'),
    value: values.emirate,
    name: 'contactDetails.emirate',
    elementType: 'select',
    items: emirates.map((item: IVariables) => {
      return {
        id: item.id,
        label: i18n(item.label),
      };
    }),
    onChange: (value: any) => handleChange({ emirate: value }),
    validate: () => {
      const typeValidation = checkValidationField(
        {
          type: validationTypes.REQUIRED,
        },
        values.emirate || null,
        startShowingErrors,
        i18n,
      );
      if (typeValidation) return typeValidation;
      return undefined;
    },
  };

  const allGccField = {
    label: i18n('field.allGcc'),
    name: 'contactDetails.allGcc',
    checked: values.allGcc,
    elementType: 'checkbox',
    onClick: (e: any) => {
      handleChange({ allGcc: e.target.checked });
    },
  };

  // These details may change with updated business requirements
  // Pass groups for formTemplate for each type of company
  const DEDCompanyTypeFields = [
    { twoColumns: true, fields: [licenceNumberField] },
  ];

  const ADGECompanyTypeFields = [
    {
      twoColumns: true,
      fields: [
        companyNameENField,
        companyNameARField,
        repTypeField,
        sharePercentageField,
        nationalityField,
      ],
    },
  ];

  const FZCompanyTypeFields = [
    {
      twoColumns: true,
      fields: [
        companyNameENField,
        companyNameARField,
        contactLicenceNumberField,
      ],
    },
    {
      twoColumns: true,
      fields: [
        repTypeField,
        sharePercentageField,
        nationalityField,
        mobileNoField,
        emailField,
      ],
    },
  ];

  const NLCompanyTypeFields = [
    {
      twoColumns: true,
      fields: [
        legalFormField,
        emirateField,
        companyNameENField,
        companyNameARField,
        contactLicenceNumberField,
      ],
    },
    {
      twoColumns: true,
      fields: [
        repTypeField,
        sharePercentageField,
        nationalityField,
        mobileNoField,
        emailField,
      ],
    },
  ];

  const FCCompanyTypeFields = [
    {
      twoColumns: true,
      fields: [
        companyNameENField,
        companyNameARField,
        contactLicenceNumberField,
      ],
    },
    {
      twoColumns: true,
      fields: [
        repTypeField,
        sharePercentageField,
        nationalityField,
        mobileNoField,
        emailField,
      ],
    },
    {
      twoColumns: false,
      fields: [allGccField],
    },
  ];

  const CompanyTypeFields: { [key: string]: any } = {
    DED: DEDCompanyTypeFields,
    ADGE: ADGECompanyTypeFields,
    FZ: FZCompanyTypeFields,
    NL: NLCompanyTypeFields,
    FC: FCCompanyTypeFields,
  };

  const companyTypeSelectField = [
    {
      'aria-label': 'select  ',
      label: i18n('field.companyType'),
      elementType: 'select',
      showSearch: false,
      name: 'field.companyType',
      value: companies[companyType].id,
      items: companyTypes.map((key: string) => {
        return {
          label: i18n(companies[key].label),
          id: companies[key].id,
        };
      }),
      onChange: (value: any) => handleCompanyTypeChange(value),
    },
  ];

  // Function to return fields based on companyType selected
  const getCompanyFormDetails = (fieldGroups: any[]): any[] => {
    if (companyTypes.length <= 1) {
      return [
        // companyType drop down group
        {
          fields: [],
          twoColumns: true,
          name: i18n('title.addCompanyDetails'),
        },
        // Field grups based on companyType selected
        ...fieldGroups.map((group: IVariables) => {
          const { fields } = group;
          return {
            twoColumns: group.twoColumns,
            // Unpack fields using methods
            fields,
          };
        }),
      ];
    }
    return [
      // companyType drop down group
      {
        fields: [...companyTypeSelectField],
        twoColumns: true,
        name: i18n('title.addCompanyDetails'),
      },
      // Field grups based on companyType selected
      ...fieldGroups.map((group: IVariables) => {
        const { fields } = group;
        return {
          twoColumns: group.twoColumns,
          // Unpack fields using methods
          fields,
        };
      }),
    ];
  };

  const formFieldGroups = CompanyTypeFields[companyType];
  const formGroups = getCompanyFormDetails(formFieldGroups);

  return (
    <React.Fragment>
      <FormTemplate inputGroups={formGroups} name="companyDetails" />
      <div style={margin} />
    </React.Fragment>
  );
};

export default CompanyDetailsQuestion;
