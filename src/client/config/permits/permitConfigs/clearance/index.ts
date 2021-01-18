import { IVariables } from '@tamm/app-composer';
import moment, { Moment } from 'moment';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_CATEGORY_PROMOTIONAL_AD } from '../../utils/constants/permitCategories';
import { PERMIT_CLEARANCE } from '../../utils/constants/permits';

const { customDisabledDate } = genericConfig;

const clearancePermit = {
  ...genericConfig,
  name: PERMIT_CLEARANCE,
  category: PERMIT_CATEGORY_PROMOTIONAL_AD,
  requiresUndertakingApproval: true,
  landingPage: {
    serviceDescription: {
      title: 'clearance.serviceDescription',
      conditions: [
        'clearance.requiredLicences',
        'clearance.conditions1',
        'clearance.conditions2',
        'clearance.conditions3',
        'clearance.conditions4',
        'clearance.conditions5',
        'clearance.conditions6',
        'clearance.conditions7',
        'clearance.conditions8',
        'clearance.conditions9',
        'clearance.conditions10',
        'clearance.conditions11',
        'clearance.conditions12',
        'clearance.conditions13',
        'clearance.conditions14',
        'clearance.conditions15',
        'clearance.conditions16',
        'clearance.conditions17',
        'clearance.conditions18',
        'clearance.conditions19',
        'clearance.conditions20',
      ],
    },
    documents: [
      'clearance.requiredDocument1',
      'clearance.requiredDocument2',
      'clearance.requiredDocument3',
    ],
    fees: ['clearance.fee1', 'clearance.fee2', 'clearance.fee3'],
  },
  undertakings: {
    ...genericConfig.undertakings,
    conditions: [
      'clearance.undertaking1',
      'clearance.undertaking2',
      'clearance.undertaking3',
      'clearance.undertaking4',
      'clearance.undertaking5',
      'clearance.undertaking6',
      'clearance.undertaking7',
      'clearance.undertaking8',
    ],
  },

  permitRequirements: [
    {
      req: 'global.permitDescription',
      id: '0',
      details: 'clearance.permitDescription',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'clearance.requiredLicences',
    },
    {
      req: 'clearance.requirement1',
      id: '2',
      details: 'clearance.details1',
    },
    {
      req: 'clearance.requirement2',
      id: '3',
      details: ['clearance.details2', 'clearance.details3'],
    },

    {
      req: 'clearance.validity',
      id: '4',
      details: 'clearance.validityDate',
    },
    {
      req: 'clearance.conditions',
      id: '5',
      details: [
        'clearance.conditions1',
        'clearance.conditions2',
        'clearance.conditions3',
        'clearance.conditions4',
        'clearance.conditions5',
        'clearance.conditions6',
        'clearance.conditions7',
        'clearance.conditions8',
        'clearance.conditions9',
        'clearance.conditions10',
        'clearance.conditions11',
        'clearance.conditions12',
        'clearance.conditions13',
        'clearance.conditions14',
        'clearance.conditions15',
        'clearance.conditions16',
        'clearance.conditions17',
        'clearance.conditions18',
        'clearance.conditions19',
        'clearance.conditions20',
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
          label: 'clearance.fieldStartDate',
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
                    30 * 86400000,
                )
              : null;
          },
          name: 'endDate',
          disabled: () => true,
        },
        {
          'aria-label': 'inpfield.adLocationut',
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
          customDisabledDate,
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
          'aria-label': 'clearance.fieldAdCampignDetail',
          elementType: 'fileUpload',
          name: 'letterFromCompany',
          accept: ['application/pdf'],
          label: 'clearance.fieldAdCampignDetail',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'clearance.fieldPriceListStatement',
          elementType: 'fileUpload',
          name: 'priceListStatement',
          accept: ['application/pdf'],
          label: 'clearance.fieldPriceListStatement',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'clearance.fieldUdertakingLetter',
          elementType: 'fileUpload',
          name: 'undertakingletter',
          accept: ['application/pdf'],
          label: 'clearance.fieldUdertakingLetter',
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
        return values.salesBanners.map(
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

  aduServiceKey: PERMIT_CLEARANCE,

  metaTags: {
    en: {
      title: 'Request for Issuing Clearance Permit',
      description:
        'Through this service, you can obtain a permit allowing the establishment to have clearance sale of its products for the purpose of attracting customers and marketing its goods, services or economic activities',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/clearance-permit-in-abu-dhabi?lang=en',
      keywords:
        'clearance permit, clearence permit, stock clearance permit, stock clearance sale permit, permit for clearance sale, clearence sale permit, stock clearence permit',
      short_description: 'Obtain a permit for clearance sale ',
      meta_description:
        'Request for issuing clearance permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح تصفية',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح يسمح للمنشأة ببيع منتجاتها بالتصفية بغرض جذب العملاء وتسويق سلعها أو خدماتها أو أنشطتها الاقتصادية',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/clearance-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح تصفية ابوظبي، تصريح تصفية، تصريح تصفية دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح تصفية',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على تصريح يسمح ببيع المنتجات بالتصفية بغرض جذب العملاء والتسويق',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const {
      permitDetails,
      applicantContact,
      salesBanners,
      documents,
    } = serviceDetails;

    return {
      serviceName: PERMIT_CLEARANCE,
      DEDLicenseNumber: companyDetails.licenseNo,
      contact: JSON.stringify(getContact(props)),
      advertisementDetails: permitDetails.description,
      advertisementLocation: permitDetails.location,
      advertiseStartDate: moment(permitDetails.startDate).format('DD/MM/YYYY'),
      advertiseEndDate: moment(permitDetails.startDate)
        .add(30, 'days')
        .format('DD/MM/YYYY'),
      proName: (applicantContact.name || '').replace(/\d/, '').replace('.', ''),
      proMobileNumber: manipulatePhone(applicantContact.phone),
      proEmail: applicantContact.email,
      customerComment: '',
      employeeComment: '',
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
        Object.values(documents).reduce(
          (fileArray: any, file: any) => fileArray.concat(file || []),
          [],
        ),
      ),
    };
  },
};

export const name = PERMIT_CLEARANCE;

export default clearancePermit;
