import { Moment } from 'moment';
import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateFutureDate,
} from 'client/config/amendments/utils/checkValidation';
import { residenceTypes } from 'client/config/amendments/constants';

const managers = {
  form: {
    id: 'manager',
    name: 'profile.addIndividualDetails',
    fields: [
      {
        'aria-label': 'contact.type',
        elementType: 'select',
        label: 'contact.type',
        name: 'type',
        showSearch: false,

        conditionalBehaviour: () => true,
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
    ],
    // name: 'Form',
    twoColumns: true,
  },
  details: {
    id: 'managerDetails',
    twoColumns: true,
    fields: [
      {
        'aria-label': 'contact.firstNameEn',
        elementType: 'input',
        key: 'manager.firstNameEn',
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
        key: 'manager.lastNameEn',
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
        key: 'manager.firstNameAr',
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
        key: 'manager.lastNameAr',
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
        key: 'manager.emiratesId',
        label: 'contact.emiratesId',
        name: 'emiratesId',
        conditionalBehaviour: (values: any) => {
          return values && values.type === residenceTypes.RESIDENT_CITIZEN;
        },
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
      {
        'aria-label': 'contact.moiID',
        elementType: 'input',
        key: 'manager.moiID',
        label: 'contact.moiID',
        name: 'moiID',
        conditionalBehaviour: (values: any) => {
          return values && values.type === residenceTypes.VISITOR;
        },
        validationConfig: {
          type: validationTypes && validationTypes.REQUIRED,
        },
      },
      // {
      //   'aria-label': 'contact.passportNumber',
      //   elementType: 'input',
      //   key: 'manager.passportNumber',
      //   label: 'contact.passportNumber',
      //   name: 'passportNumber',
      //   conditionalBehaviour: () => true,
      //   validationConfig: {
      //     type: validationTypes && validationTypes.REQUIRED,
      //   },
      // },
      {
        'aria-label': 'contact.nationality',
        elementType: 'select',
        label: 'contact.nationality',
        name: 'nationality',
        showSearch: true,
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
    ],
  },
};

// export const name = 'manager';
export default managers;
