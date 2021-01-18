import { IVariables } from '@tamm/app-composer';
import {
  validateStartDate,
  validateEndDate,
  validateShowDate,
  validationTypes,
} from 'client/config/utils/checkValidation';
import moment, { Moment } from 'moment';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_CATEGORY_PROMOTIONAL_AD } from '../../utils/constants/permitCategories';
import { PERMIT_DRAWS } from '../../utils/constants/permits';

const drawsPermit = {
  ...genericConfig,
  name: PERMIT_DRAWS,
  category: PERMIT_CATEGORY_PROMOTIONAL_AD,
  requiresUndertakingApproval: true,
  landingPage: {
    serviceDescription: {
      title: 'draws.serviceDescription',
      conditions: [
        'draws.requiredLicences',
        'draws.requirement2',
        'draws.requirement3',
        'draws.requirement4',
        'draws.requirement5',
        'draws.requirement6',
        'draws.requirement7',
        'draws.requirement8',
        'draws.requirement9',
        'draws.requirement10',
        'draws.requirement11',
        'draws.requirement12',
        'draws.requirement13',
        'draws.requirement14',
      ],
    },
    documents: [
      'draws.requiredDocument1',
      'draws.requiredDocument2',
      'draws.requiredDocument3',
      'draws.requiredDocument4',
      'draws.requiredDocument5',
    ],
    fees: ['draws.fee1', 'draws.fee2'],
  },
  undertakings: {
    ...genericConfig.undertakings,
    conditions: [
      'draws.undertaking1',
      'draws.undertaking2',
      'draws.undertaking3',
      'draws.undertaking4',
      'draws.undertaking5',
      'draws.undertaking6',
      'draws.undertaking7',
      'draws.undertaking8',
      'draws.undertaking9',
    ],
  },
  permitRequirements: [
    {
      req: 'global.permitDescription',
      id: '0',
      details: 'draws.permitDescription',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'draws.requiredLicences',
    },

    {
      req: 'draws.requirement1',
      id: '2',
      details: ['draws.details1', 'draws.details2'],
    },
    {
      req: 'draws.validity',
      id: '3',
      details: 'draws.validityDate',
    },
    {
      req: 'draws.requiredConditions',
      id: '4',
      details: [
        'draws.requirement2',
        'draws.requirement3',
        'draws.requirement4',
        'draws.requirement5',
        'draws.requirement6',
        'draws.requirement7',
        'draws.requirement8',
        'draws.requirement9',
        'draws.requirement10',
        'draws.requirement11',
        'draws.requirement12',
        'draws.requirement13',
        'draws.requirement14',
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
          'aria-label': 'draws.fieldStartDate',
          label: 'draws.fieldStartDate',
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
            validateEndDate(
              currentDate,
              reduxState.permitDetails.startDate,
              60,
            ),
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
    prizes: {
      name: 'prizes',
      stateKey: 'prizes',
      customComponent: 'MultifieldForm',
      hasIncrementButton: true,
      incrementButtonLabel: 'button.addPrizes',
      deleteLabel: 'button.removePrize',
      fields: [
        {
          name: (count: number) => `Prizes${count}`,
          label: (count: number) => `Prizes${count}`,
          twoColumns: true,
          defaultValue: {
            prizeType: '',
            raffleAddress: '',
            raffleDate: null,
          },
          subFields: [
            {
              'aria-label': 'global.prizeType',
              label: 'global.prizeType',
              elementType: 'input',
              name: 'prizeType',
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
            },
            {
              'aria-label': 'global.raffleAddress',
              label: 'global.raffleAddress',
              elementType: 'input',
              name: 'raffleAddress',
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
            },
            {
              'aria-label': 'global.raffleDate',
              label: 'global.raffleDate',
              elementType: 'datePicker',
              value: (value: Date) => {
                return value ? new Date(value) : null;
              },
              name: 'raffleDate',
              onChange: (data: IVariables) => ({ raffleDate: data.value }),
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
            {
              'aria-label': 'global.raffleNote',
              label: 'global.raffleNote',
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
          'aria-label': 'draws.fieldCampaignDetailLetter',
          elementType: 'fileUpload',
          name: 'campaignDetailLetter',
          accept: ['application/pdf'],
          label: 'draws.fieldCampaignDetailLetter',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'draws.fieldPriceListStatement',
          elementType: 'fileUpload',
          name: 'priceListStatement',
          accept: ['application/pdf'],
          label: 'draws.fieldPriceListStatement',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'draws.fieldBillsOfPrizes',
          elementType: 'fileUpload',
          name: 'billsOfPrizes',
          accept: ['application/pdf'],
          label: 'draws.fieldBillsOfPrizes',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'draws.fieldUnderTakingLetter',
          elementType: 'fileUpload',
          name: 'underTakingLetter',
          accept: ['application/pdf'],
          label: 'draws.fieldUnderTakingLetter',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        // {
        //   'aria-label': 'draws.fieldCopyofLicense',
        //   elementType: 'fileUpload',
        //   name: 'copyofLicense',
        //   accept: ['application/pdf'],
        //   label: 'draws.fieldCopyofLicense',
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
        return values.salesBanners.map(
          (salesBanner: IVariables, index: number) => {
            const { length, width, quantity } = salesBanner;
            const totalArea = length * width;
            const totalQty = quantity * Math.ceil(totalArea / 4);
            const totalAmount = values.perUnitFees * totalQty;
            return {
              title: 'global.salesBanner',
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

  aduServiceKey: PERMIT_DRAWS,

  metaTags: {
    en: {
      title: 'Request for Issuing Draws Permit',
      description:
        'Through this service, you can obtain a permit to award prizes or make draws for the purpose of attracting customers and marketing goods, services or economic activities ',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/draws-permit-in-abu-dhabi?lang=en',
      keywords:
        'draws ads permit, draws advertising permit, draws advertisement permit, draws permit, permit for draws ads, permit for draws advertisement, permit for draws advertising, draws abu dhabi, draws abudhabi, abudhabi draws, abudhabi draws permit, permits in abu dhabi, abu dhabi permits, raffle permit, raffles permit, raffle draw permit, raffle draws permit, raffles draws permit',
      short_description: 'Obtain a permit for draws ',
      meta_description:
        'Submit request for issuing draws and raffles permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح سحوبات',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح بمنح الجوائز أو إجراء السحب عليها بغرض جذب العملاء وتسويق السلع أو الخدمات أو الأنشطة الاقتصادية',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/draws-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح سحوبات ابوظبي، تصريح سحوبات، تصريح سحوبات دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح سحوبات',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على تصريح بمنح الجوائز أو إجراء السحوبات بغرض جذب العملاء والتسويق',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const {
      permitDetails,
      applicantContact,
      salesBanners,
      prizes,
      documents,
    } = serviceDetails;

    return {
      serviceName: PERMIT_DRAWS,
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
      saleBanners: JSON.stringify(
        salesBanners.map((bannerDetails: IVariables) => ({
          BranchNumber: bannerDetails.branchNumber,
          Quantity: bannerDetails.quantity,
          Length: bannerDetails.length,
          Width: bannerDetails.width,
          Note: bannerDetails.note || '',
        })),
      ),
      prizes: JSON.stringify(
        prizes.map((prizesDetails: IVariables) => ({
          PrizeType: prizesDetails.prizeType,
          RaffleAddress: prizesDetails.raffleAddress,
          RaffleDate: moment(prizesDetails.raffleDate).format('DD/MM/YYYY'),
          Notes: prizesDetails.note || '',
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

export const name = PERMIT_DRAWS;

export default drawsPermit;
