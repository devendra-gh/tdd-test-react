import { Moment } from 'moment';
import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateFutureDate,
} from 'client/config/amendments/utils/checkValidation';
import { residenceTypes } from 'client/config/amendments/constants';

const partners = {
  form: {
    id: 'partner',
    // name: 'partners',
    twoColumns: true,
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
  },
  details: {
    id: 'partnerDetails',
    twoColumns: true,
    name: '',
    fields: [
      {
        'aria-label': 'contact.firstNameEn',
        elementType: 'input',
        key: 'partner.firstNameEn',
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
        key: 'partner.lastNameEn',
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
        key: 'partner.firstNameAr',
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
        key: 'partner.lastNameAr',
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
        key: 'partner.emiratesId',
        label: 'contact.emiratesId',
        name: 'emiratesId',
        conditionalBehaviour: (values: any) => {
          return values && values.type === residenceTypes.RESIDENT_CITIZEN;
        },
        validationConfig: {
          type: validationTypes && validationTypes.EMIRATESID,
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
      //   key: 'partner.passportNumber',
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
        'aria-label': 'contact.share',
        elementType: 'inputNumber',
        // key: 'partner.share',
        uiType: 'horizontal',
        label: 'contact.share',
        min: 1,
        max: 100,
        defaultValue: 1,
        step: 1,
        precision: 0,
        name: 'sharePercentage',
        value: () => null,
        conditionalBehaviour: () => true,
        // validationConfig: {
        //   type: validationTypes && validationTypes.REQUIRED,
        // },
      },
    ],
  },
};
// export const name = 'partners';
export default partners;
