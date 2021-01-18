import { IVariables } from '@tamm/app-composer';
import moment, { Moment } from 'moment';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_CATEGORY_PROMOTIONAL_AD } from '../../utils/constants/permitCategories';
import { PERMIT_PAPER_PUBLISHING_AD } from '../../utils/constants/permits';

const paperPublishingAdPermit = {
  ...genericConfig,
  name: PERMIT_PAPER_PUBLISHING_AD,
  category: PERMIT_CATEGORY_PROMOTIONAL_AD,
  landingPage: {
    serviceDescription: {
      title: 'paperPublishingAd.serviceDescription',
      conditions: [
        'paperPublishingAd.requiredLicences',
        'paperPublishingAd.condition1',
        'paperPublishingAd.condition2',
        'paperPublishingAd.condition3',
        'paperPublishingAd.condition4',
      ],
    },
    documents: [
      'paperPublishingAd.requiredDocument1',
      'paperPublishingAd.requiredDocument2',
      'paperPublishingAd.requiredDocument3',
    ],
    fees: ['paperAd.fee1'],
  },
  permitRequirements: [
    {
      req: 'paperPublishingAd.permitDescription',
      id: '0',
      details: 'paperPublishingAd.Description',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'paperPublishingAd.requiredLicences',
    },
    {
      req: 'paperPublishingAd.requirement1',
      id: '2',
      details: 'paperPublishingAd.details1',
    },
    {
      req: 'paperPublishingAd.requirement2',
      id: '3',
      details: 'paperPublishingAd.validatiy',
    },
    {
      req: 'paperPublishingAd.requiredConditions',
      id: '4',
      details: [
        'paperPublishingAd.condition1',
        'paperPublishingAd.condition2',
        'paperPublishingAd.condition3',
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
          label: 'paperPublishingAd.fieldStartDate',
          elementType: 'datePicker',
          value: (values: IVariables) => {
            return values.permitDetails.startDate
              ? new Date(values.permitDetails.startDate)
              : null;
          },
          name: 'startDate',
          onChange: (data: IVariables) => ({ startDate: data.value }),
          customDisabledDate: (currentDate: Moment, reduxState: IVariables) =>
            validateStartDate(currentDate),
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
        },
      ],
    },
    permitAdPapers: {
      stateKey: 'permitAdPapers',
      customComponent: 'MultifieldForm',
      hasIncrementButton: false,
      fields: [
        {
          name: 'permitCalculation',
          twoColumns: true,
          defaultValue: {
            period: 0,
            quantity: 0,
          },
          subFields: [
            {
              'aria-label': 'paperPublishingAd.fieldPeriod',
              elementType: 'inputNumber',
              value: () => null,
              label: 'paperPublishingAd.fieldPeriod',
              name: 'period',
              min: 0,
              max: 12,
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
            },
            {
              'aria-label': 'paperPublishingAd.fieldQuantity',
              elementType: 'inputNumber',
              value: () => null,
              label: 'paperPublishingAd.fieldQuantity',
              name: 'quantity',
              min: 0,
              max: 500,
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
            },
            {
              'aria-label': 'global.paperTotal',
              computedProps: [
                {
                  name: 'value',
                  dependencies: ['period', 'quantity'],
                  compute: (period = 0, quantity = 0) =>
                    `${Number(period) * Number(quantity)}`,
                },
              ],

              elementType: 'input',
              name: 'total',
              label: 'global.paperTotal',
              readonly: true,
              disabled: () => true,
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
          'aria-label': 'paperPublishingAd.fieldAdDetailedLetter',
          elementType: 'fileUpload',
          name: 'letterFromCompany',
          accept: ['application/pdf'],
          label: 'paperPublishingAd.fieldAdDetailedLetter',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'paperPublishingAd.fieldLeafletSample',
          elementType: 'fileUpload',
          name: 'priceListStatement',
          accept: ['application/pdf'],
          label: 'paperPublishingAd.fieldLeafletSample',
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
        //   label: 'paperPublishingAd.fieldCopyofLicense',
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
        const { period, quantity } = values.permitAdPapers.permitCalculation;
        return [
          {
            // title: `Permit Fees Per Leaflet (${values.perUnitFees} AED * ${period} Month * ${quantity} Leaflet)`,
            title: 'global.permitFees',
            amount: values.perUnitFees * period * quantity,
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

  aduServiceKey: PERMIT_PAPER_PUBLISHING_AD,

  metaTags: {
    en: {
      title: 'Request for Issuing Pamphlet Advertisements Permit',
      description:
        "Through this service, you can obtain a permit for paper and flyer advertisements that promote the company's products or services",
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/paper-publishing-ad-permit-in-abu-dhabi?lang=en',
      keywords:
        'pamphlet ads permit, pamphlet advertising permit, pamphlet advertisement permit, pamphlets advertising, pamphlet permit, pamphlets permit',
      short_description: 'Obtain a permit for pamphlet advertisements',
      meta_description:
        'Request for issuing pamphlet advertisements permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح إعلانات النشرات الورقية',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح الإعلانات والنشرات الورقية التي تروج بها لمنتجات او خدمات الشركة',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/paper-publishing-ad-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح إعلانات النشرات الورقية ابوظبي، تصريح إعلانات النشرات الورقية، تصريح إعلانات النشرات الورقية دائرة التنمية الاقتصادية - أبوظبي، تصريح إعلانات الكتيبات ابوظبي، تصريح إعلانات الكتيبات، تصريح إعلانات الكتيبات دائرة التنمية الاقتصادية - أبوظبي، تصريح إعلانات الفلاير ابوظبي، تصريح إعلانات الفلاير، تصريح إعلانات الفلاير دائرة التنمية الاقتصادية - أبوظبي، تصريح إعلانات ال flyer ابوظبي، تصريح إعلانات ال flyer، تصريح إعلانات ال flyer دائرة التنمية الاقتصادية - أبوظبي، تصريح إعلانات البروشور ابوظبي، تصريح إعلانات البروشور، تصريح إعلانات البروشور دائرة التنمية الاقتصادية - أبوظبي، تصريح إعلانات ال brochure ابوظبي، تصريح إعلانات ال brochure، تصريح إعلانات ال brochure دائرة التنمية الاقتصادية - أبوظبي، تصريح إعلانات ال broshure ابوظبي، تصريح إعلانات ال broshure، تصريح إعلانات ال broshure دائرة التنمية الاقتصادية - أبوظبي، تصريح إعلانات ال pamphlet ابوظبي، تصريح إعلانات ال pamphlet، تصريح إعلانات ال pamphlet دائرة التنمية الاقتصادية - أبوظبي، تصريح إعلانات ال leaflet ابوظبي، تصريح إعلانات ال leaflet، تصريح إعلانات ال leaflet دائرة التنمية الاقتصادية - أبوظبي، تصريح إعلانات ال booklet ابوظبي، تصريح إعلانات ال booklet، تصريح إعلانات ال booklet دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح إعلانات النشرات الورقية',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على تصريح الإعلانات والنشرات الورقية التي تروج بها لمنتجات او خدمات الشركة',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const {
      permitDetails,
      applicantContact,
      permitAdPapers,
      documents,
    } = serviceDetails;

    return {
      serviceName: PERMIT_PAPER_PUBLISHING_AD,
      DEDLicenseNumber: companyDetails.licenseNo,
      contact: JSON.stringify(getContact(props)),
      advertisementDetails: '-',
      advertisementLocation: '-',
      advertiseStartDate: moment(permitDetails.startDate).format('DD/MM/YYYY'),
      advertiseEndDate: moment(permitDetails.startDate)
        .add(permitAdPapers.permitCalculation.period, 'months')
        .format('DD/MM/YYYY'),
      proName: (applicantContact.name || '').replace(/\d/, '').replace('.', ''),
      proMobileNumber: manipulatePhone(applicantContact.phone),
      proEmail: applicantContact.email,
      customerComment: '',
      advertisementsQuantity: permitAdPapers.permitCalculation.quantity,
      documents: JSON.stringify(
        Object.values(documents).reduce(
          (fileArray: any, file: any = []) => fileArray.concat(file),
          [],
        ),
      ),
    };
  },
};

export const name = PERMIT_PAPER_PUBLISHING_AD;

export default paperPublishingAdPermit;
