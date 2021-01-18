import { IVariables } from '@tamm/app-composer';
import moment, { Moment } from 'moment';
import {
  validationTypes,
  validateStartDate,
  validateEndDate,
  validateShowDate,
} from 'client/config/utils/checkValidation';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_CATEGORY_ADDITIONAL_AD } from '../../utils/constants/permitCategories';
import { PERMIT_AIR_AD } from '../../utils/constants/permits';

const airAdPermit = {
  ...genericConfig,
  name: PERMIT_AIR_AD,
  category: PERMIT_CATEGORY_ADDITIONAL_AD,
  landingPage: {
    serviceDescription: {
      title: 'air.serviceDescription',
      conditions: ['air.requiredLicences'],
    },
    documents: [
      'air.requiredDocument1',
      'air.requiredDocument2',
      'air.requiredDocument3',
      'air.requiredDocument4',
    ],
    fees: ['air.fee1'],
  },
  permitRequirements: [
    {
      req: 'global.permitDescription',
      id: '0',
      details: 'air.permitDescription',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: ['air.requiredLicences'],
    },
    {
      req: 'air.requirement1',
      id: '2',
      details: 'air.details1',
    },
    {
      req: 'air.validity',
      id: '3',
      details: 'air.validityDate',
    },
  ],

  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      stateKey: 'permitDetails',
      twoColumns: true,
      fields: [
        {
          label: 'air.fieldStartDate',
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
            validateStartDate(currentDate, reduxState.permitDetails.endDate),
        },
        {
          'aria-label': 'draws.fieldendDate',
          label: 'draws.fieldendDate',
          elementType: 'datePicker',
          value: (values: IVariables) => {
            return values.permitDetails.endDate
              ? new Date(values.permitDetails.endDate)
              : null;
          },

          name: 'endDate',
          onChange: (data: IVariables) => ({ endDate: data.value }),
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
          customDisabledDate: (currentDate: Moment, reduxState: IVariables) =>
            validateEndDate(currentDate, reduxState.permitDetails.startDate),
        },
        {
          'aria-label': 'field.adLocation',
          label: 'field.adLocation',
          elementType: 'input',
          name: 'location',
          placeholder: '',
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
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
    airs: {
      stateKey: 'airDetails',
      customComponent: 'MultifieldForm',
      hasIncrementButton: true,
      incrementButtonLabel: 'air.addDetails',
      deleteLabel: 'button.removeShowDate',

      fields: [
        {
          name: (count: number) => `air${count}`,
          label: (count: number) => `Air Details${count}`,
          defaultValue: {
            airAdsQuantity: 1,
          },
          twoColumns: true,
          subFields: [
            {
              'aria-label': 'air.airAdsQuantity',
              elementType: 'inputNumber',
              value: () => null,
              label: 'air.airAdsQuantity',
              name: 'airAdsQuantity',
              min: 1,
              defaultValue: 1,
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
            },
            {
              label: 'air.showDates',
              elementType: 'datePicker',
              value: (values: Date) => {
                return values ? new Date(values) : null;
              },
              name: 'showDates',
              onChange: (data: IVariables) => ({ showDates: data.value }),
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
              customDisabledDate: (
                currentDate: Moment,
                reduxState: IVariables,
              ) =>
                validateShowDate(
                  currentDate,
                  reduxState.permitDetails.startDate,
                  reduxState.permitDetails.endDate,
                ),
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
          'aria-label': 'air.fieldAdDetailedLetter',
          elementType: 'fileUpload',
          name: 'advertisementDetailLetter',
          accept: ['application/pdf'],
          label: 'air.fieldAdDetailedLetter',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'air.fieldGCAAapproval',
          elementType: 'fileUpload',
          name: 'gcaaApproval',
          accept: ['application/pdf'],
          label: 'air.fieldGCAAapproval',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'air.fieldCivilDefenseApproval',
          elementType: 'fileUpload',
          name: 'civilDefenceApproval',
          accept: ['application/pdf'],
          label: 'air.fieldCivilDefenseApproval',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        // {
        //   'aria-label': 'air.fieldCopyofLicense',
        //   elementType: 'fileUpload',
        //   name: 'copyofLicense',
        //   accept: ['application/pdf'],
        //   label: 'air.fieldCopyofLicense',
        //   help: 'global.uploadHelp',
        //   maxSize: 2e6,
        //   validationConfig: {
        //     type: validationTypes.REQUIRED,
        //   },
        // },
      ],
    },
    permitEstimatedFees: {
      ...genericConfig.formFields.permitEstimatedFees,
      calculateEstimatedFees: (values: IVariables) => {
        return [
          {
            // title: `Permit Fees Per Day (${values.perUnitFees} AED * ${values.airDetails.length} Days)`,
            title: 'global.permitFees',
            amount: values.perUnitFees * values.airDetails.length,
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

  aduServiceKey: PERMIT_AIR_AD,

  metaTags: {
    en: {
      title: 'Request for Issuing Air Advertisements Permit',
      description:
        "Through this service, you can obtain a permit to promote the company's products or services using air advertisements",
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/air-ad-permit-in-abu-dhabi?lang=en',
      keywords:
        'air ads permit, air advertising permit, air advertisement permit, air permit, permit for air ads, permit for air advertisement, permit for air advertising, air abu dhabi, air abudhabi, abudhabi air, abudhabi air permit, permits in abu dhabi, abu dhabi permits, aerial ads permit, aerial advertising permit, aerial advertisement permit',
      short_description: 'Obtain an air advertisements permit',
      meta_description:
        'Request for issuing air advertisements permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح الإعلانات الجوية',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح لترويج منتجات أو خدمات الشركة باستخدام الإعلانات الجوية ',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/air-ad-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح الإعلانات الجوية ابوظبي، تصريح الإعلانات الجوية، تصريح الإعلانات الجوية دائرة التنمية الاقتصادية - أبوظبي، تصريح إعلانات الطائرة ابوظبي، تصريح إعلانات الطائرة، تصريح إعلانات الطائرة دائرة التنمية الاقتصادية - أبوظبي، إعلانات الطائرة ابوظبي، إعلانات الطائرة، إعلانات الطائرة دائرة التنمية الاقتصادية - أبوظبي، تصريح إعلانات الطائرات ابوظبي، تصريح إعلانات الطائرات، تصريح إعلانات الطائرات دائرة التنمية الاقتصادية - أبوظبي، إعلانات الطائرات ابوظبي، إعلانات الطائرات، إعلانات الطائرات دائرة التنمية الاقتصادية - أبوظبي، تصريح الإعلان على الطائرة ابوظبي، تصريح الإعلان على الطائرة، تصريح الإعلان على الطائرة دائرة التنمية الاقتصادية - أبوظبي، الإعلان على الطائرة ابوظبي، الإعلان على الطائرة، الإعلان على الطائرة دائرة التنمية الاقتصادية - أبوظبي، تصريح الإعلان على الطائرات ابوظبي، تصريح الإعلان على الطائرات، تصريح الإعلان على الطائرات دائرة التنمية الاقتصادية - أبوظبي، الإعلان على الطائرات ابوظبي، الإعلان على الطائرات، الإعلان على الطائرات دائرة التنمية الاقتصادية - أبوظبي، الإعلانات الجوية ابوظبي، الإعلانات الجوية، الإعلانات الجوية دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح إعلان جوي',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على تصريح لترويج منتجات أو خدمات الشركة باستخدام الإعلانات الجوية ',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const {
      permitDetails,
      applicantContact,
      documents,
      airDetails,
    } = serviceDetails;

    return {
      serviceName: PERMIT_AIR_AD,
      DEDLicenseNumber: companyDetails.licenseNo,
      contact: JSON.stringify(getContact(props)),
      advertisementDetails: permitDetails.description,
      advertisementLocation: permitDetails.location,
      advertiseStartDate: moment(permitDetails.startDate).format('DD/MM/YYYY'),
      advertiseEndDate: moment(permitDetails.endDate).format('DD/MM/YYYY'),
      proName: (applicantContact.name || '').replace(/\d/, '').replace('.', ''),
      proMobileNumber: manipulatePhone(applicantContact.phone),
      proEmail: applicantContact.email,
      customerComment: '',
      airs: JSON.stringify(
        airDetails.map((air: IVariables) => ({
          AirAdsQuantity: air.airAdsQuantity,
          AirADtype: '-',
          ShowDates: moment(air.showDates).format('DD/MM/YYYY'),
          Notes: '-',
          Location: '-',
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

export const name = PERMIT_AIR_AD;

export default airAdPermit;
