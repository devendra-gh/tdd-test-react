import { validationTypes } from 'client/config/amendments/utils/checkValidation';
import {
  LocalCompany,
  GovernmentEnity,
} from 'client/config/amendments/constants';

const partnersCompany = {
  details: {
    id: 'partner',
    // name: 'partners',
    name: 'profile.addCompanyDetails',
    fields: [
      {
        'aria-label': 'contact.companyType',
        elementType: 'select',
        label: 'contact.companyType',
        name: 'companyType',
        showSearch: false,

        conditionalBehaviour: () => true,
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
      {
        'aria-label': 'contact.licenceNo',
        elementType: 'input',
        key: 'partner.licenceNo',
        label: 'contact.licenceNo',
        name: 'licenceNo',
        conditionalBehaviour: () => true,
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
      {
        'aria-label': 'contact.companyNameEn',
        elementType: 'input',
        key: 'partner.companyNameEn',
        label: 'contact.companyNameEn',
        name: 'companyNameEn',
        conditionalBehaviour: () => true,
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
      {
        'aria-label': 'contact.companyNameAr',
        elementType: 'input',
        key: 'partner.companyNameAr',
        label: 'contact.companyNameAr',
        name: 'companyNameAr',
        conditionalBehaviour: () => true,
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
      {
        'aria-label': 'contact.domicile',
        elementType: 'select',
        label: 'contact.domicile',
        name: 'domicile',
        showSearch: true,
        conditionalDisable: (values: any) => {
          return (
            values &&
            (values.companyType === LocalCompany ||
              values.companyType === GovernmentEnity)
          );
        },
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
      {
        'aria-label': 'contact.phone',
        code: 971,
        countries: [
          {
            code: 971,
            name: 'UAE',
          },
        ],
        elementType: 'inputTelephone',
        label: 'contact.phone',
        name: 'phoneNumber',
        conditionalBehaviour: () => true,
        validationConfig: {
          type: validationTypes && validationTypes.PHONE,
        },
      },
      {
        'aria-label': 'contact.email',
        elementType: 'input',
        key: 'partner.lastNameEn',
        label: 'contact.email',
        name: 'pEmail',
        conditionalBehaviour: () => true,
        validationConfig: {
          type: validationTypes && validationTypes.EMAIL,
        },
      },
      {
        'aria-label': 'contact.share',
        elementType: 'inputNumber',
        min: 1,
        max: 100,
        defaultValue: 1,
        step: 1,
        precision: 0,
        label: 'contact.share',
        name: 'sharePercentage',
        value: () => null,
        conditionalBehaviour: () => true,
        // validationConfig: {
        //   type: validationTypes && validationTypes.REQUIRED,
        // },
      },
    ],
    // name: 'Form',
    twoColumns: true,
  },
};
// export const name = 'partners';
export default partnersCompany;
