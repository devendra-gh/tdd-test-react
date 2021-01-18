import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import moment, { Moment } from 'moment';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_CATEGORY_MOBILE_AD } from '../../utils/constants/permitCategories';
import { PERMIT_MOBILE_CAR } from '../../utils/constants/permits';
import { getCities, getPlateCategories } from '../../utils';

const mobileCarPermit = {
  ...genericConfig,
  name: PERMIT_MOBILE_CAR,
  category: PERMIT_CATEGORY_MOBILE_AD,
  landingPage: {
    serviceDescription: {
      title: 'mobileCar.serviceDescription',
      conditions: [
        'mobileCar.condition1',
        'mobileCar.condition2',
        'mobileCar.condition3',
        'mobileCar.condition4',
        'mobileCar.condition5',
        'mobileCar.condition6',
        'mobileCar.condition7',
        'mobileCar.condition8',
        'mobileCar.condition9',
        'mobileCar.condition10',
        'mobileCar.condition11',
        'mobileCar.condition12',
        'mobileCar.condition13',
        'mobileCar.condition14',
      ],
    },
    documents: [
      'mobileCar.desc1',
      'mobileCar.requiredDocument1',
      'mobileCar.requiredDocument2',
      'mobileCar.requiredDocument3',
      'mobileCar.desc2',
      'mobileCar.requiredDocument4',
      'mobileCar.requiredDocument5',
      'mobileCar.requiredDocument6',
      'mobileCar.desc3',
    ],
    fees: ['mobileCar.fee1'],
  },
  permitRequirements: [
    {
      req: 'vehicles.permitDescription',
      id: '0',
      details: 'vehicles.Description',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'vehicles.requiredLicences',
    },
    {
      req: 'vehicles.requirement1',
      id: '2',
      details: [
        'vehicles.details1',
        'vehicles.details2',
        'vehicles.details3',
        'vehicles.details4',
      ],
    },

    {
      req: 'vehicles.requirement2',
      id: '3',
      details: 'vehicles.validatiy',
    },
    {
      req: 'vehicles.requiredConditions',
      id: '4',
      details: [
        'vehicles.condition1',
        'vehicles.condition2',
        'vehicles.condition3',
      ],
    },
  ],
  requiresEntityApproval: true,
  entityApprovalForm: {
    documents: [
      {
        'aria-label': 'docs.adpApproval',
        elementType: 'fileUpload',
        name: 'AdpApproval',
        accept: ['application/pdf'],
        label: 'docs.adpApproval',
        help: 'global.uploadHelpPhoto',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
      },
      {
        'aria-label': 'docs.civilDefenceApproval',
        elementType: 'fileUpload',
        name: 'CivilDefenseApproval',
        accept: ['application/pdf'],
        label: 'docs.civilDefenceApproval',
        help: 'global.uploadHelpPhoto',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
      },
      {
        'aria-label': 'docs.foodControlApproval',
        elementType: 'fileUpload',
        name: 'FoodControlApproval',
        accept: ['application/pdf'],
        label: 'docs.foodControlApproval',
        help: 'global.uploadHelpPhoto',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
      },
      {
        'aria-label': 'docs.locationApproval',
        elementType: 'fileUpload',
        name: 'LocationApproval',
        accept: ['application/pdf'],
        label: 'docs.locationApproval',
        help: 'global.uploadHelpPhoto',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
      },
    ],
  },
  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      stateKey: 'permitDetails',
      twoColumns: true,
      fields: [
        {
          label: 'vehicles.fieldStartDate',
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
          },
          customDisabledDate: (currentDate: Moment, reduxState: IVariables) =>
            validateStartDate(currentDate),
        },
        {
          'aria-label': 'global.fieldEndDate',
          label: 'global.fieldEndDate',
          elementType: 'datePicker',
          value: (values: IVariables) => {
            return values.permitDetails.startDate
              ? new Date(
                  new Date(values.permitDetails.startDate).getTime() +
                    365 * 86400000,
                )
              : null;
          },
          name: 'endDate',
          disabled: () => true,
        },
        {
          'aria-label': 'mobileCar.city',
          elementType: 'select',
          label: 'mobileCar.city',
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
        },
        {
          'aria-label': 'mobileCar.plateCategory',
          elementType: 'select',
          label: 'mobileCar.plateCategory',
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
        },
      ],
    },

    applicantContact: genericConfig.formFields.applicantContact,

    documents: {
      name: 'title.addAttachments',
      twoColumns: true,
      stateKey: 'documents',
      customComponent: 'FileUploads',
      fields: [
        {
          'aria-label': 'mobileCar.sampleOfApplication',
          elementType: 'fileUpload',
          name: 'sampleOfApplication',
          accept: ['application/pdf'],
          label: 'mobileCar.sampleOfApplication',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'mobileCar.letterFromFoodTruck',
          elementType: 'fileUpload',
          name: 'letterFromFoodTruck',
          accept: ['application/pdf'],
          label: 'mobileCar.letterFromFoodTruck',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'mobileCar.photoOfVehicle',
          elementType: 'fileUpload',
          name: 'photoOfVehicle',
          accept: ['application/pdf'],
          label: 'mobileCar.photoOfVehicle',
          help: 'global.uploadHelpPhoto',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
      ],
    },
    permitEstimatedFees: {
      ...genericConfig.formFields.permitEstimatedFees,
      calculateEstimatedFees: (values: IVariables) => {
        return [
          {
            title: 'global.permitFees',
            prefix: 'annual',
            amount: values.perUnitFees,
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

  aduServiceKey: PERMIT_MOBILE_CAR,

  metaTags: {
    en: {
      title: 'Issue Mobile Car Permit (Tajer Abu Dhabi)',
      description:
        'Through this service, you can apply for a permit that allows running a mobile car to sell food as part of Tajer Abu Dhabi licence.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/mobile-car-tajer-permit-in-abu-dhabi?lang=en',
      keywords:
        'mobile car permit, tajer permit, permit for tajer, permit for mobile car, mobile cars, mobile permits in abu dhabi',
      short_description:
        'Through this service, you can apply for a permit that allows running a mobile car to sell food as part of Tajer Abu Dhabi licence.',
      meta_description:
        'Get Mobile Car Permit (Tajer) in Abu Dhabi via TAMM directly from the Department of Economic Development',
    },
    ar: {
      title: 'طلب إصدار تصريح سيارة متنقلة (تاجر أبوظبي)',
      description:
        ' من خلال هذه الخدمة، يمكنك الحصول على تصريح تشغيل سيارة متنقلة لبيع الأطعمة كجزء من رخصة تاجر أبوظبي',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/mobile-car-tajer-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح سيارة متنقلة ابوظبي، تصريح سيارة متنقلة، تصريح سيارة متنقلة دائرة التنمية الاقتصادية - أبوظبي، تصريح سيارة متنقلة (تاجر أبوظبي) ابوظبي، تصريح سيارة متنقلة (تاجر أبوظبي)، تصريح سيارة متنقلة (تاجر أبوظبي) دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description:
        ' من خلال هذه الخدمة، يمكنك الحصول على تصريح تشغيل سيارة متنقلة لبيع الأطعمة كجزء من رخصة تاجر أبوظبي',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على تصريح تشغيل سيارة متنقلة لبيع الأطعمة كجزء من رخصة تاجر أبوظبي',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const { permitDetails, applicantContact, documents } = serviceDetails;

    return {
      serviceName: PERMIT_MOBILE_CAR,
      DEDLicenseNumber: companyDetails.licenseNo,
      contact: JSON.stringify(getContact(props)),
      advertisementDetails: '-',
      advertisementLocation: '-',
      permitType: 'Annual',
      city: permitDetails.city,
      plateOrChassisNumber: permitDetails.chassisNumber,
      plateCategory: permitDetails.plateCategory,
      advertiseStartDate: moment(permitDetails.startDate).format('DD/MM/YYYY'),
      advertiseEndDate: moment(permitDetails.startDate)
        .add(365, 'days')
        .format('DD/MM/YYYY'),
      proName: (applicantContact.name || '').replace(/\d/, '').replace('.', ''),
      proMobileNumber: manipulatePhone(applicantContact.phone),
      proEmail: applicantContact.email,
      customerComment: '',
      advertisementType: '-',
      documents: JSON.stringify(
        Object.values(documents).reduce(
          (fileArray: any, file: any = []) => fileArray.concat(file),
          [],
        ),
      ),
    };
  },
};

export const name = PERMIT_MOBILE_CAR;

export default mobileCarPermit;
