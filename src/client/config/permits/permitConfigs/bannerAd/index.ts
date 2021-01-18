import { IVariables } from '@tamm/app-composer';
import moment, { Moment } from 'moment';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import { PERMIT_CATEGORY_SIGNBOARD_AD } from 'client/config/permits/utils/constants/permitCategories';
import { PERMIT_BANNER_AD } from 'client/config/permits/utils/constants/permits';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';

const bannerAdPermit = {
  ...genericConfig,
  name: PERMIT_BANNER_AD,
  category: PERMIT_CATEGORY_SIGNBOARD_AD,
  landingPage: {
    serviceDescription: {
      title: 'banner.serviceDescription',
      conditions: ['banner.requiredLicences'],
    },
    documents: [
      'banner.requiredDocument1',
      'banner.requiredDocument2',
      'banner.requiredDocument3',
      'banner.requiredDocument4',
      'banner.requiredDocument5',
    ],
    fees: ['banner.fee1'],
  },
  permitRequirements: [
    {
      req: 'global.permitDescription',
      id: '0',
      details: 'banner.permitDescription',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'banner.requiredLicences',
    },
    {
      req: 'banner.permitFeesTitle',
      id: '2',
      details: 'banner.permitFees',
    },
    {
      req: 'banner.permitValidity',
      id: '3',
      details: 'banner.permitValidityDate',
    },
  ],

  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      twoColumns: true,
      stateKey: 'permitDetails',
      fields: [
        {
          label: 'banner.fieldStartDate',
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
          'aria-label': 'banner.adQuantity',
          elementType: 'inputNumber',
          value: () => null,
          label: 'banner.adQuantity',
          name: 'numberOfQuantity',
          min: 1,
          defaultValue: 1,
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

    applicantContact: genericConfig.formFields.applicantContact,

    documents: {
      name: 'title.addAttachments',
      twoColumns: true,
      stateKey: 'documents',
      customComponent: 'FileUploads',
      fields: [
        {
          'aria-label': 'banner.fieldAdDetailedLetter',
          elementType: 'fileUpload',
          name: 'advertisementDetailLetter',
          accept: ['application/pdf'],
          label: 'banner.fieldAdDetailedLetter',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'banner.fieldApprovedSample',
          elementType: 'fileUpload',
          name: 'sampleApproved',
          accept: ['application/pdf'],
          label: 'banner.fieldApprovedSample',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'banner.fieldMOETradeMarkDoc',
          elementType: 'fileUpload',
          name: 'MOEtradeMarkDoc',
          accept: ['application/pdf'],
          label: 'banner.fieldMOETradeMarkDoc',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'banner.fieldLocationApprovalDMAT',
          elementType: 'fileUpload',
          name: 'LocationApprovalDMAT',
          accept: ['application/pdf'],
          label: 'banner.fieldLocationApprovalDMAT',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        // {
        //   'aria-label': 'file upload',
        //   elementType: 'fileUpload',
        //   name: 'copyofLicense',
        //   accept: ['application/pdf'],
        //   label: 'banner.fieldCopyofLicense',
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
            // title: `Permit Fees Per Flag (${values.perUnitFees} AED * ${values.permitDetails.numberOfQuantity} Flags)`,
            title: 'global.permitFees',
            amount: values.perUnitFees * values.permitDetails.numberOfQuantity,
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

  aduServiceKey: PERMIT_BANNER_AD,

  metaTags: {
    en: {
      title: 'Request for Issuing Banner Advertisement Permit',
      description:
        "Through this service, you can obtain a permit for banners or flags placed on the sidewalk in front of the company's premise being the flag of the company or the flag of the UAE/another country.",
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/banner-ad-permit-in-abu-dhabi?lang=en',
      keywords:
        'banner ads permit, banner ad permit, outdoor ad permit, outdoor ad permit abu dhabi, advertising permit, advertising permit abu dhabi, banner advertisement abu dhabi, banner advertisements permit, banner advertisement permit abu dhabi',
      short_description:
        "Obtain a permit for banners or flags to be placed on the sidewalk in front of the company's premise",
      meta_description:
        'Request for issuing banner advertisement permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح إعلانات الأعلام',
      description:
        'من خلال هذه الخدمة، يمكن الحصول على تصريح للأعلام أو الرايات التي توضع على الرصيف المقابل للشركة، سواءً كان شعار الشركة أو علم الإمارات أو أي دولة أخرى.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/banner-ad-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح إعلانات الأعلام ابوظبي، تصريح إعلانات الأعلام، تصريح إعلانات الأعلام دائرة التنمية الاقتصادية - أبوظبي، تصريح إعلانات الرايات ابوظبي، تصريح إعلانات الرايات، تصريح إعلانات الرايات دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description:
        'احصل على تصريح للأعلام أو الرايات التي توضع على الرصيف المقابل للشركة',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكن الحصول على تصريح للأعلام أو الرايات التي توضع على الرصيف، سواءً كان شعار أو علم.',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const { permitDetails, applicantContact, documents } = serviceDetails;
    return {
      serviceName: PERMIT_BANNER_AD,
      DEDLicenseNumber: companyDetails.licenseNo,
      contact: JSON.stringify(getContact(props)),
      advertisementDetails: `${permitDetails.description} (${permitDetails.numberOfQuantity})`,
      advertisementLocation: '-',
      advertiseStartDate: moment(permitDetails.startDate).format('DD/MM/YYYY'),
      advertiseEndDate: moment(permitDetails.startDate)
        .add(365, 'days')
        .format('DD/MM/YYYY'),
      proName: (applicantContact.name || '').replace(/\d/, '').replace('.', ''),
      proMobileNumber: manipulatePhone(applicantContact.phone),
      proEmail: applicantContact.email,
      customerComment: '',
      quantity: permitDetails.numberOfQuantity,
      documents: JSON.stringify(
        Object.values(documents).reduce(
          (fileArray: any, file: any = []) => fileArray.concat(file),
          [],
        ),
      ),
    };
  },
};

export const name = PERMIT_BANNER_AD;

export default bannerAdPermit;
