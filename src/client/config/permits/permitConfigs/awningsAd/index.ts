import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import moment, { Moment } from 'moment';
import { PERMIT_CATEGORY_SIGNBOARD_AD } from 'client/config/permits/utils/constants/permitCategories';
import { PERMIT_AWNINGS_AD } from 'client/config/permits/utils/constants/permits';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';

const awningsAdPermit = {
  ...genericConfig,
  name: PERMIT_AWNINGS_AD,
  category: PERMIT_CATEGORY_SIGNBOARD_AD,
  landingPage: {
    serviceDescription: {
      title: 'awning.serviceDescription',
      conditions: ['awning.requiredLicences'],
    },
    documents: [
      'awning.requiredDocument1',
      'awning.requiredDocument2',
      'awning.requiredDocument3',
      'awning.requiredDocument4',
      'awning.requiredDocument5',
    ],
    fees: ['awning.fee1'],
  },
  permitRequirements: [
    {
      req: 'global.permitDescription',
      id: '0',
      details: 'awning.permitDescription',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'awning.requiredLicences',
    },
    {
      req: 'awning.requirement1',
      id: '2',
      details: 'awning.details1',
    },
    {
      req: 'awning.validity',
      id: '3',
      details: 'awning.validityDate',
    },
  ],

  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      twoColumns: true,
      stateKey: 'permitDetails',
      defaultValue: {
        quantity: 1,
      },
      fields: [
        {
          label: 'awning.fieldStartDate',
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
          'aria-label': 'awning.umbrellaDetails.quantity',
          label: 'awning.umbrellaDetails.quantity',
          elementType: 'inputNumber',
          name: 'quantity',
          value: () => null,
          min: 1,
          defaultValue: 1,
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
        },
        {
          'aria-label': 'field.adDetails',
          label: 'field.adDetails',
          elementType: 'input',
          name: 'note',
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
      customComponent: 'FileUploads',
      stateKey: 'documents',
      fields: [
        {
          'aria-label': 'awning.fieldAdDetailedLetter',
          elementType: 'fileUpload',
          name: 'advertisementDetailLetter',
          accept: ['application/pdf'],
          label: 'awning.fieldAdDetailedLetter',
          maxSize: 2e6,
          help: 'global.uploadHelp',
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'awning.fieldMOETradeMarkDoc',
          elementType: 'fileUpload',
          name: 'MOEtradeMarkDoc',
          accept: ['application/pdf'],
          label: 'awning.fieldMOETradeMarkDoc',
          maxSize: 2e6,
          help: 'global.uploadHelp',
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'awning.field.noc',
          elementType: 'fileUpload',
          name: 'LocationApprovalDMAT',
          accept: ['application/pdf'],
          label: 'awning.field.noc',
          maxSize: 2e6,
          help: 'global.uploadHelp',
        },
        // {
        //   'aria-label': 'awning.fieldCopyofLicense',
        //   elementType: 'fileUpload',
        //   name: 'copyofLicense',
        //   accept: ['application/pdf'],
        //   label: 'awning.fieldCopyofLicense',
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
        const { quantity } = values.permitDetails;
        return [
          {
            // title: `Permit Fees Per Umbrella (${values.perUnitFees} AED * ${quantity} Umbrellas)`,
            title: 'global.permitFees',
            amount: values.perUnitFees * quantity,
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

  aduServiceKey: PERMIT_AWNINGS_AD,

  metaTags: {
    en: {
      title: 'Request for Issuing Sunshade Advertisement Permit',
      description:
        "Through this service, you can obtain a permit for sunshades' trademark advertisement",
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/awnings-ad-permit-in-abu-dhabi?lang=en',
      keywords:
        'sunshade ads permit, sunshade advertising permit, sunshade advertisement permit, sunshade permit, permit for sunshade ads, permit for sunshade advertisement, permit for sunshade advertising, sunshade abu dhabi, sunshade abudhabi, abudhabi sunshade, abudhabi sunshade permit, permits in abu dhabi, abu dhabi permits',
      short_description: 'Obtain a permit for Sunshades advertisement',
      meta_description:
        'Request for issuing sunshade advertisement permits in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح إعلانات المظلات',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح لإعلانات المظلات التي توضع بها العلامة التجارية.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/awnings-ad-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح إعلانات المظلات ابوظبي، تصريح إعلانات المظلات، تصريح إعلانات المظلات دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح إعلانات المظلات',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على تصريح لإعلانات المظلات التي توضع بها العلامة التجارية.',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const { permitDetails, applicantContact, documents } = serviceDetails;
    return {
      serviceName: PERMIT_AWNINGS_AD,
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
      umbrellas: JSON.stringify([
        {
          QuantityOfUmbrellas: permitDetails.quantity,
          UmbrellaType: '-',
          Note: permitDetails.note,
          Status: 'Active',
        },
      ]),
      documents: JSON.stringify(
        Object.values(documents).reduce(
          (fileArray: any, file: any = []) => fileArray.concat(file),
          [],
        ),
      ),
    };
  },
};

export const name = PERMIT_AWNINGS_AD;

export default awningsAdPermit;
