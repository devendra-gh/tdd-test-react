import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import moment, { Moment } from 'moment';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_VEHICLES_AD } from '../../utils/constants/permits';
import { PERMIT_CATEGORY_MOBILE_AD } from '../../utils/constants/permitCategories';

const items = [
  {
    id: 'By Order',
    label: 'vehicles.Order',
  },
  {
    id: 'Poster',
    label: 'vehicles.Poster',
  },
];

const vehiclesItems = [
  {
    id: 'Medium',
    label: 'vehicles.medium',
  },
  {
    id: 'Heavy',
    label: 'vehicles.heavy',
  },
  {
    id: 'Light',
    label: 'vehicles.light',
  },
  {
    id: 'Movable Ad',
    label: 'vehicles.movable',
  },
];

const vehiclesAdPermit = {
  ...genericConfig,
  name: PERMIT_VEHICLES_AD,
  category: PERMIT_CATEGORY_MOBILE_AD,
  landingPage: {
    serviceDescription: {
      title: 'vehicles.serviceDescription',
      conditions: [
        'vehicles.requiredLicences',
        'vehicles.condition1',
        'vehicles.condition2',
        'vehicles.condition3',
        'vehicles.condition4',
        'vehicles.condition5',
      ],
    },
    documents: [
      'vehicles.requiredDocument1',
      'vehicles.requiredDocument2',
      'vehicles.requiredDocument3',
    ],
    fees: ['vehicles.fee1', 'vehicles.fee2', 'vehicles.fee3', 'vehicles.fee4'],
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
        'vehicles.condition4',
        'vehicles.condition5',
      ],
    },
  ],

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
          'aria-label': 'vehicles.adType',
          elementType: 'select',
          label: 'vehicles.adType',
          name: 'permitType',
          validate: true,
          showSearch: false,
          items,
          onChange: (data: IVariables) => ({
            permitType: data.value,
          }),
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
        },
      ],
    },
    vehicleDetails: {
      name: 'title.permitLocations',
      stateKey: 'vehicleDetails',
      customComponent: 'MultifieldForm',
      hasIncrementButton: true,
      incrementButtonLabel: 'vehicles.machineButtonLabel',
      deleteLabel: 'button.removeVehicles',

      fields: [
        {
          name: (count: number) => `vehicles${count}`,
          label: (count: number) => `vehicles ${count}`,
          twoColumns: true,
          defaultValue: {},
          subFields: [
            {
              'aria-label': 'vehicles.vehicleType',
              elementType: 'select',
              label: 'vehicles.vehicleType',
              name: 'vehicleType',
              validate: true,
              showSearch: false,
              items: vehiclesItems,
              onChange: (data: IVariables) => ({
                vehicleType: data.value,
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
          ],
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
          'aria-label': 'vehicles.fieldCertificateFromMOE',
          elementType: 'fileUpload',
          name: 'certificateFromMOE',
          accept: ['application/pdf'],
          label: 'vehicles.fieldCertificateFromMOE',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'vehicles.fieldVehicleOwnership',
          elementType: 'fileUpload',
          name: 'vehicleOwnership',
          accept: ['application/pdf'],
          label: 'vehicles.fieldVehicleOwnership',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'vehicles.fieldVehiclePhotos',
          elementType: 'fileUpload',
          name: 'vehiclePhotos',
          accept: ['application/pdf'],
          label: 'vehicles.fieldVehiclePhotos',
          help: 'global.uploadHelp',
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
        const feesDetails = values.perUnitFees.map((perUnitFee: IVariables) => {
          const countfiltered = values.vehicleDetails.filter(
            (vehicleDetail: IVariables) => {
              return vehicleDetail.vehicleType === perUnitFee.type;
            },
          ).length;
          if (countfiltered !== 0) {
            return {
              // title: `Permit Fees for ${perUnitFee.type} vehicle type (${perUnitFee.amount} * ${countfiltered})`,
              title: 'global.permitFees',
              suffix: perUnitFee.text,
              amount: perUnitFee.amount,
            };
          }
          return null;
        });
        return feesDetails.filter((feesDetail: IVariables) => {
          return feesDetail !== undefined && feesDetail !== null;
        });
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

  aduServiceKey: PERMIT_VEHICLES_AD,

  metaTags: {
    en: {
      title: 'Request for Issuing Vehicles Advertisements Permit',
      description:
        'Through this service, you can obtain a permit to display advertising posters bearing the trade name and trademark on vehicles.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/vehicles-ad-permit-in-abu-dhabi?lang=en',
      keywords:
        'vehicles ad permit, vehicles permit, advertising on vehicles, ads on vehicle, vehicles in abu dhabi, vehicle advertising permit, get vehicle ad permit, get advertising permit for vehicles',
      short_description: 'Obtain a permit for advertisements on vehicles',
      meta_description:
        'Get vehicles ad permit in Abu Dhabi via TAMM website or by simply visiting our service centers.',
    },
    ar: {
      title: 'طلب إصدار تصريح إعلانات المركبات',
      description:
        'من خلال هذه الخدمة يمكنك طلب إصدار تصريح لوضع مُلصقات إعلانية تحمل الاسم الاقتصادي والعلامة الاقتصادية  على المركبة.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/vehicles-ad-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح إعلانات المركبات ابوظبي، تصريح إعلانات المركبات، تصريح إعلانات المركبات دائرة التنمية الاقتصادية - أبوظبي، تصريح اللافتات الإعلانية الثابتة ابوظبي، تصريح اللافتات الإعلانية الثابتة، تصريح اللافتات الإعلانية الثابتة دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح لوضع إعلانات على المركبات',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية بأبوظبي، يمكنك الحصول على تصريح وضع مُلصقات إعلانية بالاسم الاقتصادي والعلامة التجارية على المركبة',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const {
      permitDetails,
      applicantContact,
      documents,
      vehicleDetails,
    } = serviceDetails;

    return {
      serviceName: PERMIT_VEHICLES_AD,
      DEDLicenseNumber: companyDetails.licenseNo,
      contact: JSON.stringify(getContact(props)),
      advertisementDetails: '-',
      advertisementLocation: '-',
      advertiseStartDate: moment(permitDetails.startDate).format('DD/MM/YYYY'),
      advertiseEndDate: moment(permitDetails.startDate)
        .add(365, 'days')
        .format('DD/MM/YYYY'),
      proName: (applicantContact.name || '').replace(/\d/, '').replace('.', ''),
      proMobileNumber: manipulatePhone(applicantContact.phone),
      proEmail: applicantContact.email,
      customerComment: '',
      permitType: permitDetails.permitType,
      vehicles: JSON.stringify(
        vehicleDetails.map((vehicle: IVariables) => ({
          PlateOrChassisNumber: vehicle.chassisNumber,
        })),
      ),
      documents: JSON.stringify(
        Object.values(documents).reduce(
          (fileArray: any, file: any = []) => fileArray.concat(file),
          [],
        ),
      ),
    };
  },
};

export const name = PERMIT_VEHICLES_AD;

export default vehiclesAdPermit;
