import { IVariables } from '@tamm/app-composer';
import { includes } from 'lodash';
import { isGCC, UAE } from 'client/config/utils/gcc';
import {
  isEmiratesId,
  isMobile,
  isEmail,
} from 'client/config/utils/validations';
import { getSmartpassData } from 'client/utils/appData';
import moment from 'moment';
import { getAdditionalFields } from './getAdditionalFields';

const loggedInUser = getSmartpassData();

const ownerFieldsVisibility = (formData: IVariables, legalForm: string) => {
  const getPayLoad = () => {
    return {
      type: legalForm !== 'PJSCSoleProp' && formData.contactType !== 'company',
      firstNameEn:
        legalForm !== 'PJSCSoleProp' && formData.contactType !== 'company',
      lastNameEn:
        legalForm !== 'PJSCSoleProp' && formData.contactType !== 'company',
      emiratesId:
        legalForm !== 'PJSCSoleProp' &&
        formData.contactType !== 'company' &&
        formData.type !== 'visitor',
      uid:
        legalForm !== 'PJSCSoleProp' &&
        formData.contactType !== 'company' &&
        formData.type === 'visitor',
    };
  };

  return {
    nationality: true,
    phoneNumber: true,
    licenseNumber:
      formData.contactType === 'company' || legalForm === 'PJSCSoleProp',
    businessNameEn:
      formData.contactType === 'company' || legalForm === 'PJSCSoleProp',
    businessNameAr:
      formData.contactType === 'company' || legalForm === 'PJSCSoleProp',
    ...getPayLoad(),
  };
};

const ownerValidation = (
  owner: IVariables[],
  legalForm: string,
  licenceType: string,
) => {
  const requiredPass = owner.length > 0;

  let fieldsPass = true;

  if (requiredPass) {
    const [ownerData] = owner;
    const ownerRequiredFields = Object.entries(
      ownerFieldsVisibility(ownerData, legalForm),
    )
      .filter(([, value]) => value)
      .map(([key]) => key);

    const isNotValid = ownerRequiredFields.some((key: string) => {
      return !ownerData[key];
    });

    fieldsPass = !isNotValid;
  }

  let moaPass = true;
  if (
    includes(['tajer', 'allInOne'], licenceType) &&
    includes(['soleProprietorshipLLC'], legalForm)
  ) {
    // check moa validations => only owner can create this
    if (
      !(
        loggedInUser.IDN &&
        owner[0] &&
        owner[0].emiratesId &&
        loggedInUser.IDN === owner[0].emiratesId
      )
    ) {
      moaPass = false;
    }
  }

  return {
    requiredPass,
    fieldsPass,
    moaPass,
    isValid: requiredPass && fieldsPass && moaPass,
  };
};

const getRepresentatives = (
  licenceType: string,
  isBranch: boolean,
  legalForm: string,
  countries: IVariables[],
  ownership: any,
  branch: string,
  isGCCSelected: boolean,
  parentCompanyLegalForm: string,
) => {
  const getCountries = ({ type }: { type: string }) => {
    return countries
      .map((item: IVariables) => ({
        id: item.code,
        label: item.name,
      }))
      .filter((item: any) => {
        if (type === 'citizen') {
          return item.id === UAE;
        }
        if (type === 'visitor') {
          return item.id !== UAE;
        }
        return true;
      });
  };

  const isMoaFieldsRequired =
    ['tajer', 'allInOne'].includes(licenceType) &&
    ['soleProprietorshipLLC', 'limitedLiabilityCompanyLLC'].includes(legalForm);

  const dynamicLabelFirstName = isMoaFieldsRequired
    ? 'moa.firstNameENG'
    : 'input.firstNameEn.label';
  const dynamicLabelLastName = isMoaFieldsRequired
    ? 'moa.lastNameENG'
    : 'input.lastNameEn.label';
  const dynamicLabelMiddleName = isMoaFieldsRequired
    ? 'moa.middleNameENG'
    : 'input.middleNameEn.label';

  let ownerTypes = [
    { id: 'citizen', label: 'global.citizen' },
    { id: 'resident', label: 'global.resident' },
    { id: 'visitor', label: 'global.visitor' },
  ];

  if (licenceType === 'tajer' && legalForm === 'establishment') {
    ownerTypes = [
      { id: 'citizen', label: 'global.citizen' },
      { id: 'resident', label: 'global.resident' },
    ];
  }

  const getLegalForm = () => {
    let status = 50;
    if (legalForm === 'PJSCPublic') {
      status = 1000;
    } else if (legalForm === 'PJSCPrivate') {
      status = 200;
    }

    return status;
  };

  return {
    owner: {
      label: 'global.owner',
      min: 1,
      max: 1,
      disableActions: (() => {
        return isBranch && branch !== 'branchUAE';
      })(),
      visible: (() => {
        if (isBranch && branch === 'branchUAE') {
          return includes(['1', '34', '20'], parentCompanyLegalForm);
        }
        return (
          isBranch ||
          includes(
            ['establishment', 'soleProprietorshipLLC', 'PJSCSoleProp'],
            legalForm,
          )
        );
      })(),
      company: !includes(['establishment'], legalForm),
      individual: legalForm !== 'PJSCSoleProp',
      // includes(
      //   ["soleProprietorshipLLC"],
      //   formValues.legalForm.legalForm
      // )
      sharePercentage: {
        disabled: true,
        defaultValue: 100,
      },
      fields: [
        {
          type: 'select',
          name: 'type',
          label: 'global.type',
          items: ownerTypes,
          required: true,
          defaultValue: includes(['mubdia'], licenceType) ? 'citizen' : '',
          disabled: includes(['mubdia'], licenceType),
          visible: (formData: IVariables) =>
            ownerFieldsVisibility(formData, legalForm).type,
        },
        {
          type: 'select',
          name: 'title',
          label: 'input.title',
          items: [
            { id: 'Mr', label: 'input.title_mr' },
            { id: 'Mrs', label: 'input.title_ms' },
          ],
          required: true,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
        },
        {
          type: 'input',
          name: 'firstNameEn',
          label: dynamicLabelFirstName,
          required: true,
          visible: (formData: IVariables) =>
            ownerFieldsVisibility(formData, legalForm).firstNameEn,
        },
        {
          type: 'input',
          name: 'middleNameEn',
          label: dynamicLabelMiddleName,
          visible: (formData: IVariables) =>
            legalForm !== 'PJSCSoleProp' && formData.contactType !== 'company',
        },
        {
          type: 'input',
          name: 'lastNameEn',
          label: dynamicLabelLastName,
          required: true,
          visible: (formData: IVariables) =>
            ownerFieldsVisibility(formData, legalForm).lastNameEn,
        },
        {
          type: 'input',
          name: 'firstNameAr',
          label: 'input.firstNameAr.label',
          required: true,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
        },
        {
          type: 'input',
          name: 'middleNameAr',
          label: 'input.middleNameAr.label',
          required: false,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
        },
        {
          type: 'input',
          name: 'lastNameAr',
          label: 'input.lastNameAr.label',
          required: true,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
        },
        {
          type: 'date',
          name: 'dateOfBirth',
          required: true,
          label: 'input.dateOfBirth',
          defaultValue: moment(),
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
          disabledDate: (currentDate: any) => {
            return moment(currentDate).isAfter(Date.now());
          },
          validate: (value: string) => {
            if (!value) {
              return { status: 'error', message: 'required_field' };
            }
            return { status: 'success', message: '' };
          },
        },
        {
          type: 'input',
          name: 'passportNumber',
          required: true,
          label: 'input.passportNumber',
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
          validate: (value: string) => {
            if (!value) {
              return { status: 'error', message: 'required_field' };
            }
            return { status: 'success', message: '' };
          },
        },
        {
          type: 'input',
          name: 'emiratesId',
          label: 'input.emiratesId.label',
          required: true,
          validate: (value: string) => {
            if (!value) {
              return {
                status: 'error',
                message: 'required_field',
              };
            }
            if (!isEmiratesId(value)) {
              return {
                status: 'error',
                message: 'invalid_emirates_id',
              };
            }
            return {
              status: 'success',
              message: '',
            };
          },
          visible: (formData: IVariables) =>
            ownerFieldsVisibility(formData, legalForm).emiratesId,
        },
        {
          type: 'input',
          name: 'uid',
          label: 'input.uid.label',
          required: true,
          visible: (formData: IVariables) =>
            ownerFieldsVisibility(formData, legalForm).uid,
        },

        {
          type: 'input',
          name: 'licenseNumber',
          label: 'input.licenseNumber.label',
          required: true,
          visible: (formData: IVariables) =>
            ownerFieldsVisibility(formData, legalForm).licenseNumber,
        },
        {
          type: 'input',
          name: 'businessNameEn',
          label: 'input.businessNameEn.label',
          required: true,
          visible: (formData: IVariables) =>
            ownerFieldsVisibility(formData, legalForm).businessNameEn,
        },
        {
          type: 'input',
          name: 'businessNameAr',
          label: 'input.businessNameAr.label',
          required: true,
          visible: (formData: IVariables) =>
            ownerFieldsVisibility(formData, legalForm).businessNameAr,
        },
        {
          type: 'select',
          name: 'nationality',
          label: 'input.nationality.label',
          required: true,
          items: ({ type }: { type: string }) => {
            return getCountries({ type }).filter((item: IVariables) => {
              if (
                legalForm === 'PJSCSoleProp' ||
                legalForm === 'soleProprietorshipLLC'
              ) {
                return isGCC(item.id);
              }

              if (
                includes(['tajer'], licenceType) &&
                legalForm === 'establishment'
              ) {
                return isGCC(item.id);
              }
              return true;
            });
          },
          defaultValue: licenceType === 'mubdia' ? 'ARE' : '',
          disabled: ({ type }: { type: string }) =>
            licenceType === 'mubdia' ||
            legalForm === 'PJSCSoleProp' ||
            type === 'citizen',
        },
        {
          type: 'input-phone',
          name: 'phoneNumber',
          label: 'global.phone',
          required: true,
          validate: (value: string) => {
            if (!value) {
              return { status: 'error', message: 'required_field' };
            }
            if (!isMobile(value)) {
              return { status: 'error', message: 'invalid_mobile' };
            }
            return { status: 'success', message: '' };
          },
        },
        {
          type: 'input',
          name: 'email',
          label: 'global.email',
          required: true,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
          validate: (value: string) => {
            if (!value) {
              return { status: 'error', message: 'required_field' };
            }
            if (!isEmail(value)) {
              return { status: 'error', message: 'invalid_email' };
            }
            return { status: 'success', message: '' };
          },
        },
      ],
      additionals: getAdditionalFields(licenceType, legalForm),
    },
    partner: {
      label: 'global.partner',
      min: legalForm === 'PJSCPublic' ? 5 : 2,
      // max:
      //   legalForm === 'PJSCPublic'
      //     ? 1000
      //     : legalForm === 'PJSCPrivate'
      //     ? 200
      //     : 50,
      max: getLegalForm(),
      visible: (() => {
        if (isBranch && branch === 'branchUAE') {
          return !includes(['1', '34', '20'], parentCompanyLegalForm);
        }

        if (isBranch) {
          return false;
        }

        return !includes(
          ['establishment', 'soleProprietorshipLLC', 'PJSCSoleProp'],
          legalForm,
        );
      })(),
      sharePercentage: {
        disabled: false,
        defaultValue: 0,
      },
      company: true,
      fields: [
        // {
        //   type: "input",
        //   name: "sharePercentage",
        //   label: "Share percentage",
        //   disabled: true,
        //   defaultValue: "100%"
        // },

        {
          type: 'select',
          name: 'type',
          label: 'global.type',
          items: [
            { id: 'citizen', label: 'global.citizen' },
            { id: 'resident', label: 'global.resident' },
            { id: 'visitor', label: 'global.visitor' },
          ],
          required: true,
          visible: (formData: IVariables) => formData.contactType !== 'company',
        },
        {
          type: 'select',
          name: 'title',
          label: 'input.title',
          items: [
            { id: 'Mr', label: 'input.title_mr' },
            { id: 'Mrs', label: 'input.title_ms' },
          ],
          required: true,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
        },
        {
          type: 'input',
          name: 'firstNameEn',
          label: dynamicLabelFirstName,
          required: true,
          visible: (formData: IVariables) => formData.contactType !== 'company',
        },
        {
          type: 'input',
          name: 'middleNameEn',
          label: dynamicLabelMiddleName,
          visible: (formData: IVariables) => formData.contactType !== 'company',
        },
        {
          type: 'input',
          name: 'lastNameEn',
          required: true,
          label: dynamicLabelLastName,
          visible: (formData: IVariables) => formData.contactType !== 'company',
        },
        {
          type: 'input',
          name: 'firstNameAr',
          label: 'input.firstNameAr.label',
          required: true,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
        },
        {
          type: 'input',
          name: 'middleNameAr',
          label: 'input.middleNameAr.label',
          required: false,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
        },
        {
          type: 'input',
          name: 'lastNameAr',
          label: 'input.lastNameAr.label',
          required: true,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
        },
        {
          type: 'date',
          name: 'dateOfBirth',
          required: true,
          label: 'input.dateOfBirth',
          defaultValue: moment(),
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
          disabledDate: (currentDate: any) => {
            return moment(currentDate).isAfter(Date.now());
          },
          validate: (value: string) => {
            if (!value) {
              return { status: 'error', message: 'required_field' };
            }
            return { status: 'success', message: '' };
          },
        },
        {
          type: 'input',
          name: 'passportNumber',
          required: true,
          label: 'input.passportNumber',
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
          validate: (value: string) => {
            if (!value) {
              return { status: 'error', message: 'required_field' };
            }
            return { status: 'success', message: '' };
          },
        },
        {
          type: 'input',
          name: 'emiratesId',
          label: 'input.emiratesId.label',
          required: true,
          validate: (value: string) => {
            if (!value) {
              return {
                status: 'error',
                message: 'required_field',
              };
            }
            if (!isEmiratesId(value)) {
              return {
                status: 'error',
                message: 'invalid_emirates_id',
              };
            }
            return {
              status: 'success',
              message: '',
            };
          },
          visible: (formData: IVariables) => {
            return (
              formData.contactType !== 'company' && formData.type !== 'visitor'
            );
          },
        },
        {
          type: 'input',
          name: 'uid',
          label: 'input.uid.label',
          required: true,
          visible: (formData: IVariables) => {
            return formData.type === 'visitor';
          },
        },

        {
          type: 'input',
          name: 'licenseNumber',
          label: 'input.licenseNumber.label',
          required: true,
          visible: (formData: IVariables) => formData.contactType === 'company',
        },
        {
          type: 'input',
          name: 'businessNameEn',
          label: 'input.businessNameEn.label',
          required: true,
          visible: (formData: IVariables) => formData.contactType === 'company',
        },
        {
          type: 'input',
          name: 'businessNameAr',
          label: 'input.businessNameAr.label',
          required: true,
          visible: (formData: IVariables) => formData.contactType === 'company',
        },
        {
          type: 'select',
          name: 'nationality',
          label: 'input.nationality.label',
          required: true,
          items: getCountries,
          disabled: ({ type }: { type: string }) =>
            legalForm === 'PJSCSoleProp' || type === 'citizen',
        },
        {
          type: 'input-phone',
          name: 'phoneNumber',
          label: 'global.phone',
          required: true,
          validate: (value: string) => {
            if (!value) {
              return { status: 'error', message: 'required_field' };
            }
            if (!isMobile(value)) {
              return { status: 'error', message: 'invalid_mobile' };
            }
            return { status: 'success', message: '' };
          },
        },
        {
          type: 'input',
          name: 'email',
          label: 'global.email',
          required: true,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
          validate: (value: string) => {
            if (!value) {
              return { status: 'error', message: 'required_field' };
            }
            if (!isEmail(value)) {
              return { status: 'error', message: 'invalid_email' };
            }
            return { status: 'success', message: '' };
          },
        },
      ],
      additionals: getAdditionalFields(licenceType, legalForm),
    },
    localAgent: {
      label: 'global.localAgent',
      min: 1,
      max: 1,
      sharePercentage: {
        disabled: true,
        defaultValue: 0,
      },
      visible: () => {
        if (isBranch && branch === 'branchGCC') {
          return !isGCCSelected;
        }
        if (isBranch && branch === 'branchForeign') {
          return true;
        }

        return (
          legalForm === 'establishment' &&
          ownership.owner &&
          ownership.owner.length > 0 &&
          ownership.owner[0].nationality &&
          !isGCC(ownership.owner[0].nationality)
        );
      },
      fields: [
        {
          type: 'input',
          name: 'firstNameEn',
          label: dynamicLabelFirstName,
          required: true,
        },
        {
          type: 'input',
          name: 'middleNameEn',
          label: dynamicLabelMiddleName,
        },
        {
          type: 'input',
          name: 'lastNameEn',
          label: dynamicLabelLastName,
          required: true,
        },
        {
          type: 'input',
          name: 'emiratesId',
          label: 'input.emiratesId.label',
          required: true,
          validate: (value: string) => {
            if (!value) {
              return {
                status: 'error',
                message: 'required_field',
              };
            }
            if (!isEmiratesId(value)) {
              return {
                status: 'error',
                message: 'invalid_emirates_id',
              };
            }
            return {
              status: 'success',
              message: '',
            };
          },
        },
        {
          type: 'select',
          name: 'nationality',
          label: 'input.nationality.label',
          required: true,
          defaultValue: 'ARE',
          items: getCountries,
          disabled: true,
        },
        {
          type: 'input-phone',
          name: 'phoneNumber',
          label: 'global.phone',
          required: true,
          validate: (value: string) => {
            if (!value) {
              return { status: 'error', message: 'required_field' };
            }
            if (!isMobile(value)) {
              return { status: 'error', message: 'invalid_mobile' };
            }
            return { status: 'success', message: '' };
          },
        },
      ],
    },
    manager: {
      min: 1,
      max: 1,
      label: 'global.manager',
      visible: !includes(['establishment'], legalForm),
      sharePercentage: {
        disabled: true,
        defaultValue: 0,
      },
      fields: [
        {
          type: 'select',
          name: 'type',
          label: 'global.type',
          items: [
            { id: 'citizen', label: 'global.citizen' },
            { id: 'resident', label: 'global.resident' },
            { id: 'visitor', label: 'global.visitor' },
          ],
          required: true,
        },

        {
          type: 'select',
          name: 'title',
          label: 'input.title',
          items: [
            { id: 'Mr', label: 'input.title_mr' },
            { id: 'Mrs', label: 'input.title_ms' },
          ],
          required: true,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
        },
        {
          type: 'input',
          name: 'firstNameEn',
          label: dynamicLabelFirstName,
          required: true,
        },
        {
          type: 'input',
          name: 'middleNameEn',
          label: dynamicLabelMiddleName,
        },
        {
          type: 'input',
          name: 'lastNameEn',
          label: dynamicLabelLastName,
          required: true,
        },
        {
          type: 'input',
          name: 'firstNameAr',
          label: 'input.firstNameAr.label',
          required: true,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
        },
        {
          type: 'input',
          name: 'middleNameAr',
          label: 'input.middleNameAr.label',
          required: false,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
        },
        {
          type: 'input',
          name: 'lastNameAr',
          label: 'input.lastNameAr.label',
          required: true,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
        },
        {
          type: 'date',
          name: 'dateOfBirth',
          required: true,
          label: 'input.dateOfBirth',
          defaultValue: moment(),
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
          disabledDate: (currentDate: any) => {
            return moment(currentDate).isAfter(Date.now());
          },
          validate: (value: string) => {
            if (!value) {
              return { status: 'error', message: 'required_field' };
            }
            return { status: 'success', message: '' };
          },
        },
        {
          type: 'input',
          name: 'passportNumber',
          required: true,
          label: 'input.passportNumber',
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
          validate: (value: string) => {
            if (!value) {
              return { status: 'error', message: 'required_field' };
            }
            return { status: 'success', message: '' };
          },
        },
        {
          type: 'input',
          name: 'emiratesId',
          label: 'input.emiratesId.label',
          required: true,
          validate: (value: string) => {
            if (!value) {
              return {
                status: 'error',
                message: 'required_field',
              };
            }
            if (!isEmiratesId(value)) {
              return {
                status: 'error',
                message: 'invalid_emirates_id',
              };
            }
            return {
              status: 'success',
              message: '',
            };
          },
          visible: ({ type }: { type: string }) => {
            return type !== 'visitor';
          },
        },
        {
          type: 'input',
          name: 'uid',
          label: 'input.uid.label',
          required: true,
          visible: ({ type }: { type: string }) => {
            return type === 'visitor';
          },
        },
        {
          type: 'select',
          name: 'nationality',
          label: 'input.nationality.label',
          required: true,
          items: getCountries,
          disabled: ({ type }: { type: string }) => type === 'citizen',
        },
        {
          type: 'input-phone',
          name: 'phoneNumber',
          label: 'global.phone',
          required: true,
          validate: (value: string) => {
            if (!value) {
              return { status: 'error', message: 'required_field' };
            }
            if (!isMobile(value)) {
              return { status: 'error', message: 'invalid_mobile' };
            }
            return { status: 'success', message: '' };
          },
        },
        {
          type: 'input',
          name: 'email',
          label: 'global.email',
          required: true,
          visible: (formData: IVariables) => {
            return isMoaFieldsRequired;
          },
          validate: (value: string) => {
            if (!value) {
              return { status: 'error', message: 'required_field' };
            }
            if (!isEmail(value)) {
              return { status: 'error', message: 'invalid_email' };
            }
            return { status: 'success', message: '' };
          },
        },
      ],
      additionals: getAdditionalFields(licenceType, legalForm),
    },
    representative: {
      min: 0,
      max: 1000,
      label: 'ownership.representative',
      visible: !isMoaFieldsRequired,
      optional: true,
      sharePercentage: {
        disabled: true,
        defaultValue: 0,
      },
      fields: [
        {
          type: 'select',
          name: 'type',
          label: 'global.type',
          items: [
            { id: 'citizen', label: 'global.citizen' },
            { id: 'resident', label: 'global.resident' },
            { id: 'visitor', label: 'global.visitor' },
          ],
          required: true,
        },
        {
          type: 'input',
          name: 'firstNameEn',
          label: dynamicLabelFirstName,
          required: true,
        },
        {
          type: 'input',
          name: 'middleNameEn',
          label: dynamicLabelMiddleName,
        },
        {
          type: 'input',
          name: 'lastNameEn',
          label: dynamicLabelLastName,
          required: true,
        },
        {
          type: 'input',
          name: 'emiratesId',
          label: 'input.emiratesId.label',
          required: true,
          validate: (value: string) => {
            if (!value) {
              return {
                status: 'error',
                message: 'required_field',
              };
            }
            if (!isEmiratesId(value)) {
              return {
                status: 'error',
                message: 'invalid_emirates_id',
              };
            }
            return {
              status: 'success',
              message: '',
            };
          },
          visible: ({ type }: { type: string }) => {
            return type !== 'visitor';
          },
        },
        {
          type: 'input',
          name: 'uid',
          label: 'input.uid.label',
          visible: ({ type }: { type: string }) => {
            return type === 'visitor';
          },
          required: true,
        },
        {
          type: 'select',
          name: 'nationality',
          label: 'input.nationality.label',
          items: getCountries,
          required: true,
          disabled: ({ type }: { type: string }) => type === 'citizen',
        },
        {
          type: 'input-phone',
          name: 'phoneNumber',
          label: 'global.phone',
          required: true,
          validate: (value: string) => {
            if (!value) {
              return { status: 'error', message: 'required_field' };
            }
            if (!isMobile(value)) {
              return { status: 'error', message: 'invalid_mobile' };
            }
            return { status: 'success', message: '' };
          },
        },
        {
          type: 'file',
          name: 'ownershipAttachment',
          label: 'input.file.label',
          help: 'branchDocuments.poa',
          required: true,
        },
      ],
    },
  };
};

export { ownerFieldsVisibility, ownerValidation };

export default getRepresentatives;
