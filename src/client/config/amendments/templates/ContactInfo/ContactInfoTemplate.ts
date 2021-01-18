import { validationTypes } from 'client/config/amendments/utils/checkValidation';

const ContactInfoTemplate = {
  proInfo: {
    stateKey: 'proInfo',
    twoColumns: true,
    fields: [
      {
        'aria-label': 'contactInfo.proName',
        elementType: 'input',
        key: 'contactInfoName',
        label: 'contactInfo.proName',
        name: 'name',
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
      {
        'aria-label': 'contactInfo.phone',
        code: 971,
        countries: [
          {
            code: 971,
            name: 'UAE',
          },
        ],
        elementType: 'inputTelephone',
        key: 'contactInfoPhone',
        label: 'contactInfo.phone',
        name: 'phone',
        validationConfig: {
          type: validationTypes && validationTypes.PHONE,
        },
      },
      {
        'aria-label': 'contactInfo.email',
        elementType: 'input',
        key: 'contactInfoEmail',
        label: 'contactInfo.email',
        name: 'email',
        validationConfig: {
          type: validationTypes && validationTypes.EMAIL,
        },
      },
    ],
  },
  details: {
    stateKey: 'proInfo',
    name: 'contactInfo.addStatisticalDetails',
    twoColumns: true,
    fields: [
      {
        'aria-label': 'contactInfo.paidupCapital',
        elementType: 'select',
        label: 'contactInfo.paidupCapital',
        name: 'paidupCapital',
        value: 'value',
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
      {
        'aria-label': 'contactInfo.revenueApprox',
        elementType: 'select',
        label: 'contactInfo.revenueApprox',
        name: 'revenueApprox',
        value: 'value',
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
    ],
  },
  termsConditions: {
    stateKey: 'termsConditions',
    fields: [
      {
        'aria-label': 'paidup.capital',
        elementType: 'checkbox',
        label: 'contactInfo.termsAndCondition',
        name: 'termsAndCondition',
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
    ],
  },
};

export const name = 'contactInfoTemplate';

export default ContactInfoTemplate;
