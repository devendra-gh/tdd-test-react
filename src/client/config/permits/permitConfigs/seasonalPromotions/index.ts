import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateStartDate,
  validateEndDate,
} from 'client/config/utils/checkValidation';
import moment, { Moment } from 'moment';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_CATEGORY_PROMOTIONAL_AD } from '../../utils/constants/permitCategories';
import { PERMIT_SEASONAL_PROMOTION } from '../../utils/constants/permits';

const promotionType = [
  {
    id: 'Autumn Sale',
    label: 'seasonalPromotions.promotionType.autumnSale',
  },
  {
    id: 'Back to School',
    label: 'seasonalPromotions.promotionType.backToSchool',
  },
  {
    id: 'End of Season Sale',
    label: 'seasonalPromotions.promotionType.endOfSeasonSale',
  },
  {
    id: 'Ramadan Sale',
    label: 'seasonalPromotions.promotionType.ramadanSale',
  },
  {
    id: 'Sale',
    label: 'seasonalPromotions.promotionType.sale',
  },
  {
    id: 'Scratch and Win',
    label: 'seasonalPromotions.promotionType.scratchAndWin',
  },
  {
    id: 'Special Offer',
    label: 'seasonalPromotions.promotionType.specialOffer',
  },
  {
    id: 'Spring Sale',
    label: 'seasonalPromotions.promotionType.springSale',
  },
  {
    id: 'Summer Sale',
    label: 'seasonalPromotions.promotionType.summerSale',
  },
  {
    id: 'Winter Sale',
    label: 'seasonalPromotions.promotionType.winterSale',
  },
  {
    id: 'Cafe Permit',
    label: 'seasonalPromotions.promotionType.cafePermit',
  },
  {
    id: 'Events Permit',
    label: 'seasonalPromotions.promotionType.eventsPermit',
  },
  {
    id: 'Offer Discounts',
    label: 'seasonalPromotions.promotionType.offerDiscounts',
  },
  {
    id: 'Offer Loyalty Programs',
    label: 'seasonalPromotions.promotionType.offerLoyaltyPrograms',
  },
  {
    id: 'Offer Opening Occasion',
    label: 'seasonalPromotions.promotionType.offerOpeningOccasion',
  },
  {
    id: 'Offer Tasting Campaign',
    label: 'seasonalPromotions.promotionType.offerTastingCampaing',
  },
  {
    id: 'Warehouse Permit',
    label: 'seasonalPromotions.promotionType.warehousePermit',
  },
];

const seasonalPromotionsPermit = {
  ...genericConfig,
  name: PERMIT_SEASONAL_PROMOTION,
  category: PERMIT_CATEGORY_PROMOTIONAL_AD,
  landingPage: {
    serviceDescription: {
      title: 'seasonalPromotions.serviceDescription',
      conditions: ['seasonalPromotions.requiredLicences'],
    },
    documents: [
      'seasonalPromotions.requiredDocument1',
      'seasonalPromotions.requiredDocument2',
      'seasonalPromotions.requiredDocument3',
      'seasonalPromotions.requiredDocument4',
      'seasonalPromotions.requiredDocument5',
      'seasonalPromotions.requiredDocument6',
    ],
    fees: ['seasonalPromotions.fee1', 'seasonalPromotions.fee2'],
  },
  permitRequirements: [
    {
      req: 'global.permitDescription',
      id: '0',
      details: 'seasonalPromotions.permitDescription',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'seasonalPromotions.requiredLicences',
    },
    {
      req: 'seasonalPromotions.requirement1',
      id: '2',
      details: ['seasonalPromotions.fees1', 'seasonalPromotions.fees2'],
    },
    {
      req: 'seasonalPromotions.validity',
      id: '3',
      details: 'seasonalPromotions.validityDate',
    },
  ],

  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      stateKey: 'permitDetails',
      twoColumns: true,
      fields: [
        {
          label: 'seasonalPromotions.fieldStartDate',
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
          label: 'seasonalPromotions.fieldEndDate',
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
            validateEndDate(
              currentDate,
              reduxState.permitDetails.startDate,
              30,
            ),
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
        {
          'aria-label': 'seasonalPromotions.fieldPromotionType',
          label: 'seasonalPromotions.fieldPromotionType',
          elementType: 'select',
          name: 'promotionType',
          showSearch: false,
          items: promotionType,
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
        },
      ],
    },
    undertaking: {
      name: 'title.termsAndConditions',
      stateKey: 'undertakings',
      title: 'undertaking.agree',
      rootCustomComponent: 'Undertaking',
      customComponent: 'ConditionalComponent',
      conditions: [
        'seasonalPromotions.undertaking1',
        'seasonalPromotions.undertaking2',
        'seasonalPromotions.undertaking3',
        'seasonalPromotions.undertaking4',
        'seasonalPromotions.undertaking5',
        'seasonalPromotions.undertaking6',
      ],
      fields: [
        {
          'aria-label': 'undertakings.bulletsTitle',
          elementType: 'checkBox',
          name: 'approve',
          label: 'undertakings.bulletsTitle',
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
        },
      ],
      conditionalBehaviour: (values: any) => {
        const { promotionType: val } = values.permitDetails;
        return val === 'Scratch and Win';
      },
    },
    salesBanners: {
      name: 'salesBanners',
      stateKey: 'salesBanners',
      customComponent: 'MultifieldForm',
      hasIncrementButton: true,
      incrementButtonLabel: 'button.addBanners',
      deleteLabel: 'button.removeBanner',
      fields: [
        {
          name: (count: number) => `Banners${count}`,
          label: (count: number) => `Banners ${count}`,
          defaultValue: {
            quantity: 1,
            length: 1,
            width: 1,
          },
          twoColumns: true,
          subFields: [
            {
              'aria-label': 'global.salesBranchNumber',
              label: 'global.salesBranchNumber',
              elementType: 'input',
              name: 'branchNumber',
              validationConfig: {
                type: validationTypes.CN_NUMBER,
              },
            },
            {
              'aria-label': 'global.salesBannersQuantity',
              label: 'global.salesBannersQuantity',
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
              'aria-label': 'global.salesBannersLength',
              label: 'global.salesBannersLength',
              elementType: 'inputNumber',
              name: 'length',
              value: () => null,
              precision: 2,
              min: 1,
              max: 9999999,
              defaultValue: 1,
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
            },
            {
              'aria-label': 'global.salesBannersWidth',
              label: 'global.salesBannersWidth',
              elementType: 'inputNumber',
              name: 'width',
              value: () => null,
              precision: 2,
              min: 1,
              max: 9999999,
              defaultValue: 1,
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
            },
            {
              'aria-label': 'global.salesBannersNote',
              label: 'global.salesBannersNote',
              elementType: 'input',
              name: 'note',
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
      rootCustomComponent: 'FileUploads',
      customComponent: 'ConditionalFieldsComponent',
      fields: [
        {
          'aria-label': 'seasonalPromotions.fieldAdDetailedLetter',
          elementType: 'fileUpload',
          name: 'letterFromCompany',
          accept: ['application/pdf'],
          label: 'seasonalPromotions.fieldAdDetailedLetter',
          maxSize: 2e6,
          help: 'global.uploadHelp',
          conditionalBehaviour: () => true,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'seasonalPromotions.priceListStatement',
          elementType: 'fileUpload',
          name: 'priceListStatement',
          accept: ['application/pdf'],
          label: 'seasonalPromotions.priceListStatement',
          maxSize: 2e6,
          help: 'global.uploadHelp',
          conditionalBehaviour: () => true,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'seasonalPromotions.fieldPrizeReceipts',
          elementType: 'fileUpload',
          name: 'prizeReceipts',
          accept: ['application/pdf'],
          label: 'seasonalPromotions.fieldPrizeReceipts',
          help: 'global.uploadHelp',
          conditionalBehaviour: (values: any) => {
            const { promotionType: val } = values.permitDetails;
            return val === 'Scratch and Win';
          },
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'seasonalPromotions.fieldSampleofCoupon',
          elementType: 'fileUpload',
          name: 'sampleofCoupon',
          accept: ['application/pdf'],
          label: 'seasonalPromotions.fieldSampleofCoupon',
          help: 'global.uploadHelp',
          conditionalBehaviour: (values: any) => {
            const { promotionType: val } = values.permitDetails;
            return val === 'Scratch and Win';
          },
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'seasonalPromotions.fieldUndertakingCampaigns',
          elementType: 'fileUpload',
          name: 'undertakingCampaigns',
          accept: ['application/pdf'],
          label: 'seasonalPromotions.fieldUndertakingCampaigns',
          help: 'global.uploadHelp',
          conditionalBehaviour: (values: any) => {
            const { promotionType: val } = values.permitDetails;
            return val === 'Scratch and Win';
          },
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
        const totalFees = values.salesBanners.map(
          (salesBanner: IVariables, index: number) => {
            const { length, width, quantity } = salesBanner;
            const totalArea = length * width;
            const totalQty = quantity * Math.ceil(totalArea / 4);
            const totalAmount = values.perUnitFees * totalQty;
            return {
              title: 'global.signboard',
              suffix: index + 1,
              amount: totalAmount,
            };
          },
        );
        return totalFees;
      },
    },
    termsConditions: {
      name: 'title.termsAndConditions',
      stateKey: 'termsConditions',
      title: '',
      customComponent: 'TermsConditions',
      fields: [
        {
          'aria-label': 'terms.conditions.bulletsLabel',
          elementType: 'checkBox',
          name: 'approve',
          label: 'terms.conditions.bulletsLabel',
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
        },
      ],
    },
  },

  aduServiceKey: PERMIT_SEASONAL_PROMOTION,

  metaTags: {
    en: {
      title: 'Request for Issuing Seasonal Promotions Permit',
      description:
        'Through this service, you can obtain permits to provide special offers, distribution of samples, granting tickets, incentives or discount vouchers,  to promote for a artistic event or commercial activity or to advertise by any other means',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/seasonal-promotions-permit-in-abu-dhabi?lang=en',
      keywords:
        'seasonal promotions permit, seasonal promotion permit, seasonal sale permit, seasonal sales permit, seasonal promotional permit, seasonal offers permit',
      short_description: 'Obtain a permit for seasonal promotions  ',
      meta_description:
        'Submit request for issuing seasonal promotions permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح عروض موسمية',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح لتنفيذ عروض ترويجية خاصة أو توزيع عينات أو منح تذاكر أو حوافز أو قسائم تخفيض أسعار أو الترويج لمناسبة فنية أو فعالية تجارية أو بأي وسيلة أخرى بغرض جذب العملاء وتسويق السلع أو الخدمات أو الأنشطة الاقتصادية ',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/seasonal-promotions-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح عروض موسمية ابوظبي، تصريح عروض موسمية، تصريح عروض موسمية دائرة التنمية الاقتصادية - أبوظبي، تصريح تنزيلات موسمية ابوظبي، تصريح تنزيلات موسمية، تصريح تنزيلات موسمية دائرة التنمية الاقتصادية - أبوظبي، تصريح تخفيضات موسمية ابوظبي، تصريح تخفيضات موسمية، تصريح تخفيضات موسمية دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح عروض موسمية',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية بأبوظبي، يمكنك الحصول على تصريح لتنفيذ عروض ترويجية خاصة أو توزيع عينات أو حوافز أو قسائم تخفيض أسعار',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const {
      permitDetails,
      applicantContact,
      salesBanners,
      documents: uploadedDocs,
    } = serviceDetails;

    return {
      serviceName: PERMIT_SEASONAL_PROMOTION,
      DEDLicenseNumber: companyDetails.licenseNo,
      contact: JSON.stringify(getContact(props)),
      seasonalPromotions: permitDetails.promotionType,
      promotionDetails: permitDetails.description,
      promotionLocation: permitDetails.location,
      advertisementDetails: permitDetails.description,
      advertisementLocation: permitDetails.location,
      advertiseStartDate: moment(permitDetails.startDate).format('DD/MM/YYYY'),
      advertiseEndDate: moment(permitDetails.endDate).format('DD/MM/YYYY'),
      proName: (applicantContact.name || '').replace(/\d/, '').replace('.', ''),
      proMobileNumber: manipulatePhone(applicantContact.phone),
      proEmail: applicantContact.email,
      customerComment: '',
      saleBanners: JSON.stringify(
        salesBanners.map((bannerDetails: IVariables) => ({
          BranchNumber: bannerDetails.branchNumber,
          Quantity: bannerDetails.quantity,
          Length: bannerDetails.length,
          Width: bannerDetails.width,
          Note: bannerDetails.note || '',
        })),
      ),
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

export const name = PERMIT_SEASONAL_PROMOTION;

export default seasonalPromotionsPermit;
