import { Moment } from 'moment';
import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateFutureDate,
} from 'client/config/amendments/utils/checkValidation';

const localAgents = {
  details: {
    id: 'localAgents',
    name: 'profile.addIndividualDetails',
    fields: [
      {
        'aria-label': 'contact.firstNameEn',
        elementType: 'input',
        key: 'contact.firstNameEn',
        label: 'contact.firstNameEn',
        name: 'firstNameEn',
        conditionalBehaviour: () => true,
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
      {
        'aria-label': 'contact.lastNameEn',
        elementType: 'input',
        key: 'contact.lastNameEn',
        label: 'contact.lastNameEn',
        name: 'lastNameEn',
        conditionalBehaviour: () => true,
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
      {
        'aria-label': 'contact.firstNameAr',
        elementType: 'input',
        key: 'contact.firstNameAr',
        label: 'contact.firstNameAr',
        name: 'firstNameAr',
        conditionalBehaviour: () => true,
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
      {
        'aria-label': 'contact.lastNameAr',
        elementType: 'input',
        key: 'contact.lastNameAr',
        label: 'contact.lastNameAr',
        name: 'lastNameAr',
        conditionalBehaviour: () => true,
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
      {
        'aria-label': 'contact.emiratesId',
        elementType: 'input',
        key: 'contact.emiratesId',
        label: 'contact.emiratesId',
        name: 'emiratesId',
        conditionalBehaviour: () => true,
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
      // {
      //   'aria-label': 'contact.passportNumber',
      //   elementType: 'input',
      //   key: 'contact.passportNumber',
      //   label: 'contact.passportNumber',
      //   name: 'passportNumber',
      //   conditionalBehaviour: () => true,
      //   validationConfig: {
      //     type: validationTypes && validationTypes.REQUIRED,
      //   },
      // },
      {
        'aria-label': 'contact.DateOfBirth',
        elementType: 'datePicker',
        label: 'contact.DateOfBirth',
        name: 'bDate',
        value: (formValues: IVariables) =>
          formValues.bDate ? new Date(formValues.bDate) : null,

        conditionalBehaviour: () => true,
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
        customDisabledDate: (hoverDate: Moment) =>
          validateFutureDate(hoverDate),
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
    ],
    // name: 'Form',
    twoColumns: true,
  },
};
// export const name = 'localAgent';
export default localAgents;
