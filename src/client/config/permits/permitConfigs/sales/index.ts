import { IVariables } from '@tamm/app-composer';
import moment, { Moment } from 'moment';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_CATEGORY_PROMOTIONAL_AD } from '../../utils/constants/permitCategories';
import { PERMIT_SALES } from '../../utils/constants/permits';

const salesPermit = {
  ...genericConfig,
  name: PERMIT_SALES,
  category: PERMIT_CATEGORY_PROMOTIONAL_AD,
  requiresUndertakingApproval: true,
  landingPage: {
    serviceDescription: {
      title: 'sales.serviceDescription',
      conditions: [
        'sales.requiredLicences',
        'sales.conditions1',
        'sales.conditions2',
        'sales.conditions3',
        'sales.conditions4',
        'sales.conditions5',
        'sales.conditions6',
        'sales.conditions7',
        'sales.conditions8',
        'sales.conditions9',
        'sales.conditions10',
        'sales.conditions11',
        'sales.conditions12',
        'sales.conditions13',
        'sales.conditions14',
        'sales.conditions15',
        'sales.conditions16',
        'sales.conditions17',
        'sales.conditions18',
        'sales.conditions19',
        'sales.conditions20',
        'sales.conditions21',
      ],
    },
    documents: [
      'sales.requiredDocument1',
      'sales.requiredDocument2',
      'sales.requiredDocument3',
    ],
    fees: ['sales.fee1', 'sales.fee2', 'sales.fee3'],
  },
  undertakings: {
    ...genericConfig.undertakings,
    conditions: [
      'sales.undertaking1',
      'sales.undertaking2',
      'sales.undertaking3',
      'sales.undertaking4',
      'sales.undertaking5',
      'sales.undertaking6',
      'sales.undertaking7',
      'sales.undertaking8',
    ],
  },
  permitRequirements: [
    {
      req: 'global.permitDescription',
      id: '0',
      details: 'sales.permitDescription',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'sales.requiredLicences',
    },
    {
      req: 'sales.fees',
      id: '2',
      details: ['sales.details1', 'sales.details2', 'sales.details3'],
    },
    {
      req: 'sales.validity',
      id: '3',
      details: 'sales.requirement1',
    },

    {
      req: 'sales.requiredConditions',
      id: '4',
      details: [
        'sales.conditions1',
        'sales.conditions2',
        'sales.conditions3',
        'sales.conditions4',
        'sales.conditions5',
        'sales.conditions6',
        'sales.conditions7',
        'sales.conditions8',
        'sales.conditions9',
        'sales.conditions10',
        'sales.conditions11',
        'sales.conditions12',
        'sales.conditions13',
        'sales.conditions14',
        'sales.conditions15',
        'sales.conditions16',
        'sales.conditions17',
        'sales.conditions18',
        'sales.conditions19',
        'sales.conditions20',
        'sales.conditions21',
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
          label: 'sales.fieldStartDate',
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
                    30 * 86400000,
                )
              : null;
          },
          name: 'endDate',
          disabled: () => true,
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
      ],
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
      customComponent: 'FileUploads',
      fields: [
        {
          'aria-label': 'sales.fieldAdCampignDetail',
          elementType: 'fileUpload',
          name: 'letterFromCompany',
          accept: ['application/pdf'],
          label: 'sales.fieldAdCampignDetail',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'sales.fieldPriceListStatement',
          elementType: 'fileUpload',
          name: 'priceListStatement',
          accept: ['application/pdf'],
          label: 'sales.fieldPriceListStatement',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'sales.fieldUdertakingLetter',
          elementType: 'fileUpload',
          accept: ['application/pdf'],
          name: 'undertakingletter',
          label: 'sales.fieldUdertakingLetter',
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
        const totalFees = values.salesBanners.map(
          (salesBanner: IVariables, index: number) => {
            const { length, width, quantity } = salesBanner;
            const totalArea = length * width;
            const totalQty = quantity * Math.ceil(totalArea / 4);
            const totalAmount = values.perUnitFees * totalQty;
            return {
              title: 'global.banner',
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
      customComponent: 'TermsConditions',
      title: '',
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

  aduServiceKey: PERMIT_SALES,

  metaTags: {
    en: {
      title: 'Request for Issuing Sales Permit',
      description:
        'Through this service, you can obtain the promotional permit that the premises undertake for the purpose of attracting customers and marketing its goods, services or economic activities ',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/sales-permit-in-abu-dhabi?lang=en',
      keywords:
        'sales permit, sales promotion permit, sales permit abu dhabi, sales permits, sales permits, sales permit abudhabi',
      short_description: 'Obtain a permit for sales permit ',
      meta_description:
        'Request for issuing sales permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح تنزيلات',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على التصريح الترويجي الذي تقوم به المنشأة بغرض جذب العملاء وتسويق سلعها أو خدماتها أو أنشطتها الاقتصادية ',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/sales-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح تنزيلات ابوظبي، تصريح تنزيلات، تصريح تنزيلات دائرة التنمية الاقتصادية - أبوظبي، تصريح تخفيضات ابوظبي، تصريح تخفيضات، تصريح تخفيضات دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح تنزيلات',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على التصريح الترويجي الذي تقوم به المنشأة بغرض جذب العملاء والتسويق',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const {
      permitDetails,
      applicantContact,
      documents,
      salesBanners,
    } = serviceDetails;

    return {
      serviceName: PERMIT_SALES,
      DEDLicenseNumber: companyDetails.licenseNo,
      contact: JSON.stringify(getContact(props)),
      advertisementDetails: permitDetails.description,
      advertisementLocation: permitDetails.location,
      advertiseStartDate: moment(permitDetails.startDate).format('DD/MM/YYYY'),
      advertiseEndDate: moment(permitDetails.startDate)
        .add(30, 'days')
        .format('DD/MM/YYYY'),
      saleBanners: JSON.stringify(
        salesBanners.map((bannerDetails: IVariables) => ({
          BranchNumber: bannerDetails.branchNumber,
          Quantity: bannerDetails.quantity,
          Length: bannerDetails.length,
          Width: bannerDetails.width,
          Note: bannerDetails.note || '',
        })),
      ),
      proName: (applicantContact.name || '').replace(/\d/, '').replace('.', ''),
      proMobileNumber: manipulatePhone(applicantContact.phone),
      proEmail: applicantContact.email,
      customerComment: '',
      documents: JSON.stringify(
        Object.values(documents).reduce(
          (fileArray: any, file: any = []) => fileArray.concat(file),
          [],
        ),
      ),
    };
  },
};

export const name = PERMIT_SALES;

export default salesPermit;
