import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';

import moment, { Moment } from 'moment';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { getCities, getPermitTypes, getPlateCategories } from '../../utils';
import {
  PERMIT_TYPE_EVENT,
  DEFAULT_PERMIT_TYPE,
  PERMIT_TYPE_ANNUAL,
} from '../../utils/getPermitTypes';
import { PERMIT_FOOD_TRUCK } from '../../utils/constants/permits';
import { PERMIT_CATEGORY_MOBILE_AD } from '../../utils/constants/permitCategories';
import documents from './documents';

const getEndDate = (permitDetails: IVariables) => {
  if (permitDetails.startDate) {
    let daysCnt = 365;
    if (permitDetails.permitType === PERMIT_TYPE_EVENT) daysCnt = 30;
    return moment(permitDetails.startDate).add(daysCnt, 'days');
  }
  return '';
};
const foodTruckPermit = {
  ...genericConfig,
  name: PERMIT_FOOD_TRUCK,
  category: PERMIT_CATEGORY_MOBILE_AD,
  landingPage: {
    serviceDescription: {
      title: 'foodTruck.serviceDescription',
      conditions: [
        'foodTruck.condition1',
        'foodTruck.condition2',
        'foodTruck.condition3',
        'foodTruck.condition4',
        'foodTruck.condition5',
        'foodTruck.othercondition1',
        'foodTruck.othercondition2',
        'foodTruck.othercondition3',
        'foodTruck.othercondition4',
        'foodTruck.othercondition5',
        'foodTruck.othercondition6',
        'foodTruck.othercondition7',
        'foodTruck.othercondition8',
        'foodTruck.othercondition9',
        'foodTruck.othercondition10',
        'foodTruck.othercondition11',
        'foodTruck.othercondition12',
        'foodTruck.othercondition13',
        'foodTruck.othercondition14',
        'foodTruck.othercondition15',
        'foodTruck.othercondition16',
        'foodTruck.othercondition17',
        'foodTruck.othercondition18',
        'foodTruck.othercondition19',
        'foodTruck.othercondition20',
        'foodTruck.othercondition21',
        'foodTruck.othercondition22',
        'foodTruck.othercondition23',
        'foodTruck.othercondition24',
        'foodTruck.othercondition25',
        'foodTruck.othercondition26',
        'foodTruck.othercondition27',
        'foodTruck.othercondition28',
        'foodTruck.othercondition29',
        'foodTruck.othercondition30',
        'foodTruck.othercondition31',
        'foodTruck.othercondition32',
        'foodTruck.othercondition33',
        'foodTruck.othercondition34',
        'foodTruck.othercondition35',
        'foodTruck.othercondition36',
        'foodTruck.othercondition37',
      ],
    },
    documents,
    // documents: [
    //   'foodTruck.desc1',
    //   'foodTruck.requiredDocument1',
    //   'foodTruck.requiredDocument2',
    //   'foodTruck.requiredDocument3',
    //   'foodTruck.requiredDocument4',m
    //   'foodTruck.desc2',
    //   'foodTruck.requiredDocument5',
    //   'foodTruck.requiredDocument6',
    //   'foodTruck.requiredDocument7',
    //   'foodTruck.requiredDocument8',
    //   'foodTruck.desc3',
    //   'foodTruck.requiredDocument9',
    //   'foodTruck.requiredDocument10',
    //   'foodTruck.requiredDocument11',
    //   'foodTruck.requiredDocument12',
    //   'foodTruck.requiredDocument13',
    // ],
    fees: ['foodTruck.fee1', 'foodTruck.fee2'],
  },
  requiresEntityApproval: true,
  entityApprovalForm: {
    documents: documents.entityApprovalForm.collection,
  },
  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      stateKey: 'permitDetails',
      twoColumns: true,
      fields: [
        {
          label: 'field.permitType',
          elementType: 'radio',
          name: 'permitType',
          align: 'horizontal',
          defaultValue: DEFAULT_PERMIT_TYPE,
          value: (values: IVariables) => {
            return values.permitDetails.permitType;
          },
          items: getPermitTypes(),
          onChange: (data: IVariables) => ({
            permitType: data.value.target.value,
          }),
        },
      ],
    },
    permitDetails1: {
      stateKey: 'permitDetails',
      twoColumns: true,
      fields: [
        {
          label: 'cafe.fieldStartDate',
          elementType: 'datePicker',
          value: (values: IVariables) => {
            return values.permitDetails.startDate
              ? new Date(values.permitDetails.startDate)
              : null;
          },
          name: 'startDate',
          onChange: (data: IVariables) => ({ startDate: data.value }),
          validationConfig: {
            type: validationTypes.REQUIRED,
            label: 'cafe.fieldStartDate',
          },
          customDisabledDate: (currentDate: Moment, reduxState: IVariables) =>
            validateStartDate(currentDate),
        },
        {
          'aria-label': 'global.fieldEndDate',
          label: 'global.fieldEndDate',
          elementType: 'datePicker',
          value: (values: IVariables) => {
            const endDate = getEndDate(values.permitDetails);
            return endDate !== '' ? new Date(endDate.toString()) : null;
          },
          name: 'endDate',
          onChange: (data: IVariables) => ({ endDate: data.value }),
          disabled: () => true,
        },
        {
          'aria-label': 'field.adDetails',
          elementType: 'textarea',
          label: 'field.adDetails',
          placeholder: '',
          name: 'description',
          size: 'small',
          onChange: (data: IVariables) => ({
            description: data.value.target.value,
          }),
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
        },
      ],
    },
    permitDetails2: {
      stateKey: 'permitDetails',
      twoColumns: true,
      rootCustomComponent: 'FormTemplate',
      customComponent: 'ConditionalFieldsComponent',
      fields: [
        {
          'aria-label': 'field.city',
          elementType: 'select',
          label: 'field.city',
          name: 'city',
          validate: true,
          showSearch: false,
          items: getCities(),
          onChange: (data: IVariables) => ({
            city: data.value,
          }),
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
          conditionalBehaviour: () => true,
        },
        {
          'aria-label': 'global.machineLocation',
          label: 'global.machineLocation',
          elementType: 'input',
          name: 'location',
          placeholder: '',
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
          conditionalBehaviour: () => true,
        },

        {
          'aria-label': 'field.chassisNumber',
          label: 'field.chassisNumber',
          elementType: 'input',
          name: 'chassisNumber',
          placeholder: '',
          validationConfig: {
            type: validationTypes.CHASSIS_NUMBER,
          },
          conditionalBehaviour: () => true,
        },
        {
          'aria-label': 'field.plateCategory',
          elementType: 'select',
          label: 'field.plateCategory',
          name: 'plateCategory',
          validate: true,
          showSearch: false,
          items: getPlateCategories(),
          onChange: (data: IVariables) => ({
            plateCategory: data.value,
          }),
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
          conditionalBehaviour: () => true,
        },
        {
          'aria-label': 'global.salesBannersNote',
          elementType: 'textarea',
          label: 'global.salesBannersNote',
          placeholder: '',
          name: 'note',
          size: 'small',
          onChange: (data: IVariables) => ({
            notes: data.value.target.value,
          }),
          conditionalBehaviour: (values: IVariables) => {
            const { permitType } = values.permitDetails;
            return permitType === PERMIT_TYPE_EVENT;
          },
        },
      ],
    },
    applicantContact: genericConfig.formFields.applicantContact,
    documents: {
      name: 'title.addAttachments',
      twoColumns: false,
      stateKey: 'documents',
      rootCustomComponent: 'FileUploads',
      customComponent: 'ConditionalFieldsComponent',
      fields: documents[PERMIT_TYPE_ANNUAL].collection.concat(
        documents[PERMIT_TYPE_EVENT].collection,
      ),
    },
    permitEstimatedFees: {
      ...genericConfig.formFields.permitEstimatedFees,
      calculateEstimatedFees: (values: IVariables) => {
        return [
          {
            title: 'global.permitFees',
            prefix: values.permitDetails.permitType,
            ...values.perUnitFees[values.permitDetails.permitType],
          },
        ];
      },
    },
    termsConditions: {
      name: 'title.termsAndConditions',
      stateKey: 'termsConditions',
      customComponent: 'TermsConditions',
      fields: [
        {
          'aria-label': 'global.termsAndConditions',
          elementType: 'checkBox',
          name: 'approve',
          label: 'global.termsAndConditions',
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
        },
      ],
    },
  },

  aduServiceKey: PERMIT_FOOD_TRUCK,

  metaTags: {
    en: {
      title: 'Request Issuing Food Truck Permit',
      description:
        'Through this service, you can obtain a permit for mobile vehicles ad or trucks offering the food-selling service in public places or during festivals and events.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/food-truck-permit-in-abu-dhabi?lang=en',
      keywords:
        'food truck permit, permit for food truck, foodtruck permits, get food truck permit, apply for food truck permit, permit for food trucks, food trucks, foodtrucks',
      short_description: 'Obtain a permit for food truck permit',
      meta_description:
        'This permit enables you sell and promote food in Abu Dhabi.',
    },
    ar: {
      title: 'طلب إصدار تصريح إعلانات مركبات بيع الأطعمة',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح إعلان للعربات أو المقطورات المتنقلة التي تقدم خدمة بيع الأطعمة في الأماكن العامة أو في المهرجانات والفعاليات.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/food-truck-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح إعلانات مركبات بيع الأطعمة ابوظبي، تصريح إعلانات مركبات بيع الأطعمة، تصريح إعلانات مركبات بيع الأطعمة دائرة التنمية الاقتصادية - أبوظبي، تصريح إعلانات مركبات بيع الطعام ابوظبي، تصريح إعلانات مركبات بيع الطعام، تصريح إعلانات مركبات بيع الطعام دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح إعلانات مركبات بيع الأطعمة',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية بأبوظبي، يمكنك الحصول على تصريح إعلان لعربات الأطعمة (المتنقلة) في الأماكن العامة أو الفعاليات.',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const {
      permitDetails,
      applicantContact,
      documents: uploadedDocs,
    } = serviceDetails;

    return {
      DEDLicenseNumber: companyDetails.licenseNo,
      contact: JSON.stringify(getContact(props)),
      permitType: permitDetails.permitType,
      advertisementDetails: permitDetails.description,
      advertisementLocation: permitDetails.city,
      advertiseStartDate: moment(permitDetails.startDate).format('DD/MM/YYYY'),
      advertiseEndDate: moment(getEndDate(permitDetails)).format('DD/MM/YYYY'),
      comments: permitDetails.description,
      plateOrChassisNumber: permitDetails.chassisNumber,
      plateCategory: permitDetails.plateCategory,
      advertisementType: 'Food serving trolleys',
      proName: (applicantContact.name || '').replace(/\d/, '').replace('.', ''),
      proMobileNumber: manipulatePhone(applicantContact.phone),
      proEmail: applicantContact.email,
      documents: JSON.stringify(
        Object.values(uploadedDocs)
          .filter(uploadedDoc => uploadedDoc !== null)
          .reduce(
            (fileArray: any, file: any = []) =>
              uploadedDocs !== null ? fileArray.concat(file) : [],
            [],
          ),
      ),
    };
  },
};

export const name = PERMIT_FOOD_TRUCK;

export default foodTruckPermit;
