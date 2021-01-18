import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateStartDate,
  validateEndDate,
} from 'client/config/utils/checkValidation';
import moment, { Moment } from 'moment';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_PRIZE_DISPLAY_FORMAT } from '../../utils/constants/permits';
import { PERMIT_CATEGORY_PROMOTIONAL_AD } from '../../utils/constants/permitCategories';

const prizeDisplayPlatformPermit = {
  ...genericConfig,
  name: PERMIT_PRIZE_DISPLAY_FORMAT,
  category: PERMIT_CATEGORY_PROMOTIONAL_AD,
  landingPage: {
    serviceDescription: {
      title: 'prizeDisplay.serviceDescription',
      conditions: ['prizeDisplay.requiredLicences'],
    },
    documents: [
      'prizeDisplay.requiredDocument1',
      'prizeDisplay.requiredDocument2',
      'prizeDisplay.requiredDocument3',
    ],
    fees: ['prizeDisplay.fee1'],
  },
  permitRequirements: [
    {
      req: 'prizeDisplay.permitDescription',
      id: '1',
      details: 'prizeDisplay.Description',
    },
    {
      req: 'global.requiredLicences',
      id: '0',
      details: 'prizeDisplay.requiredLicences',
    },
    {
      req: 'prizeDisplay.requirement1',
      id: '2',
      details: 'prizeDisplay.details1',
    },
    {
      req: 'prizeDisplay.requirement2',
      id: '3',
      details: 'prizeDisplay.validatiy',
    },
  ],

  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      stateKey: 'permitDetails',
      twoColumns: true,
      fields: [
        {
          label: 'prizeDisplay.fieldStartDate',
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
          label: 'prizeDisplay.fieldendDate',
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
          'aria-label': 'Advertisement Details',
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
          'aria-label': 'prizeDisplay.fieldCampaignDetailLetter',
          elementType: 'fileUpload',
          name: 'campaignDetailLetter',
          accept: ['application/pdf'],
          label: 'prizeDisplay.fieldCampaignDetailLetter',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'prizeDisplay.fieldShoppingCenterApproval',
          elementType: 'fileUpload',
          name: 'shoppingCenterApproval',
          accept: ['application/pdf'],
          label: 'prizeDisplay.fieldShoppingCenterApproval',
          help: 'global.uploadHelp',
          maxSize: 2e6,
        },
        // {
        //   'aria-label': 'file upload',
        //   elementType: 'fileUpload',
        //   name: 'copyofLicense',
        //   accept: ['application/pdf'],
        //   label: 'prizeDisplay.fieldCopyofLicense',
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
        let monthsCnt = 1;
        const { startDate, endDate } = values.permitDetails;
        if (startDate && endDate) {
          monthsCnt = moment(endDate).diff(moment(startDate), 'months', true);
        }
        const monthsCeil = Math.ceil(monthsCnt);
        return [
          {
            // title: `Monthly Permit Fees (${
            //   values.perUnitFees
            // } AED * ${monthsCnt.toFixed(2)} ==> ${monthsCeil} Months)`,
            title: 'global.permitFees',
            amount: values.perUnitFees * monthsCeil,
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

  aduServiceKey: PERMIT_PRIZE_DISPLAY_FORMAT,

  metaTags: {
    en: {
      title: 'Request for Issuing Prize Display Platform Permit',
      description:
        'Through this service, you can obtain a permit to promote a prize campaign by displaying it in public places and commercial centres.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/prize-display-platform-permit-in-abu-dhabi?lang=en',
      keywords:
        'prize display platform permit, prize display permit, prize permit, permit for prize display, permit for prizes, permit for prizes display',
      short_description:
        'Through this service, you can obtain a permit to promote a prize campaign by displaying it in public places and commercial centres.',
      meta_description:
        'Submit request for issuing prize display platform permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح منصة عرض جوائز',
      description:
        'من خلال هذه الخدمة، يمكن الحصول على تصريح يتيح لك الترويج عن منصة عرض جوائز.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/prize-display-platform-permit-in-abu-dhabi?lang=ar',
      keywords:
        'منصة عرض جوائز ابوظبي، منصة عرض جوائز، منصة عرض جوائز دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description:
        'من خلال هذه الخدمة، يمكن الحصول على تصريح يتيح لك الترويج عن منصة عرض جوائز.',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكن الحصول على تصريح يتيح لك الترويج عن منصة عرض جوائز.',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const { permitDetails, applicantContact, documents } = serviceDetails;

    return {
      serviceName: PERMIT_PRIZE_DISPLAY_FORMAT,
      DEDLicenseNumber: companyDetails.licenseNo,
      contact: JSON.stringify(getContact(props)),
      advertisementDetails: permitDetails.description,
      advertisementLocation: permitDetails.location,
      advertiseStartDate: moment(permitDetails.startDate).format('DD/MM/YYYY'),
      advertiseEndDate: moment(permitDetails.endDate).format('DD/MM/YYYY'),
      proName: (applicantContact.name || '').replace(/\d/, '').replace('.', ''),
      proMobileNumber: manipulatePhone(applicantContact.phone),
      proEmail: applicantContact.email,
      advertisementsQuantity: 1,
      customerComment: '',
      documents: JSON.stringify(
        Object.values(documents).reduce(
          (fileArray: any, file: any) => fileArray.concat(file || []),
          [],
        ),
      ),
    };
  },
};

export const name = PERMIT_PRIZE_DISPLAY_FORMAT;

export default prizeDisplayPlatformPermit;
