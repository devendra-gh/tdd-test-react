import { IVariables } from '@tamm/app-composer';
import moment, { Moment } from 'moment';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_CATEGORY_PROMOTIONAL_AD } from '../../utils/constants/permitCategories';
import { PERMIT_PAPER_AD } from '../../utils/constants/permits';

const paperAdPermit = {
  ...genericConfig,
  name: PERMIT_PAPER_AD,
  category: PERMIT_CATEGORY_PROMOTIONAL_AD,
  landingPage: {
    serviceDescription: {
      title: 'paperAd.serviceDescription',
      conditions: [
        'paperAd.requiredLicences',
        'paperAd.condition1',
        'paperAd.condition2',
        'paperAd.condition3',
        'paperAd.condition4',
      ],
    },
    documents: [
      'paperAd.requiredDocument1',
      'paperAd.requiredDocument2',
      'paperAd.requiredDocument3',
    ],
    fees: ['paperAd.fee1'],
  },
  permitRequirements: [
    {
      req: 'paperAd.permitDescription',
      id: '0',
      details: 'paperAd.Description',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'paperAd.requiredLicences',
    },

    {
      req: 'paperAd.requirement1',
      id: '2',
      details: 'paperAd.details1',
    },
    {
      req: 'paperAd.requirement2',
      id: '3',
      details: 'paperAd.validatiy',
    },
    {
      req: 'paperAd.requiredConditions',
      id: '4',
      details: [
        'paperAd.condition1',
        'paperAd.condition2',
        'paperAd.condition3',
        'paperAd.condition4',
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
          label: 'paperAd.fieldStartDate',
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
              'aria-label': 'paperAd.fieldPeriod',
              elementType: 'inputNumber',
              value: () => null,
              label: 'paperAd.fieldPeriod',
              name: 'period',
              min: 0,
              max: 12,
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
            },
            {
              'aria-label': 'paperAd.fieldQuantity',
              elementType: 'inputNumber',
              value: () => null,
              label: 'paperAd.fieldQuantity',
              name: 'quantity',
              min: 0,
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
          'aria-label': 'paperAd.fieldAdDetailedLetter',
          elementType: 'fileUpload',
          name: 'letterFromCompany',
          accept: ['application/pdf'],
          label: 'paperAd.fieldAdDetailedLetter',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'paperAd.fieldLeafletSample',
          elementType: 'fileUpload',
          name: 'priceListStatement',
          accept: ['application/pdf'],
          label: 'paperAd.fieldLeafletSample',
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
        const { period, quantity } = values.permitAdPapers.permitCalculation;
        return [
          {
            // title: `Permit Fees Per Leaflet (${values.perUnitFees} AED * ${period} months * ${quantity} Leaflet)`,
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

  aduServiceKey: PERMIT_PAPER_AD,

  metaTags: {
    en: {
      title: 'Request for Issuing Paper Advertisements Permit',
      description:
        "Through this service, you can obtain a permit to use paper advertisements and flyers for promoting your company's products or services.",
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/paper-ad-permit-in-abu-dhabi?lang=en',
      keywords:
        'paper ads permit, paper advertising permit, paper advertisement permit, paper permit, permit for paper ads, permit for paper advertisement, permit for paper advertising, paper abu dhabi, paper abudhabi, abudhabi paper, abudhabi paper permit, permits in abu dhabi, abu dhabi permits',
      short_description:
        "Through this service, you can obtain a permit to use paper advertisements and flyers for promoting your company's products or services.",
      meta_description:
        'Submit request for issuing paper advertisements permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح الإعلانات الورقية',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح باستخدام الإعلانات والنشرات الورقية في التروج لمنتجات أو خدمات الشركة.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/paper-ad-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح الإعلانات الورقية ابوظبي، تصريح الإعلانات الورقية، تصريح الإعلانات الورقية دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح باستخدام الإعلانات والنشرات الورقية في التروج لمنتجات أو خدمات الشركة.',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على تصريح باستخدام الإعلانات والنشرات الورقية في الترويج لمنتجات أو خدمات.',
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
      serviceName: PERMIT_PAPER_AD,
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

export const name = PERMIT_PAPER_AD;

export default paperAdPermit;
