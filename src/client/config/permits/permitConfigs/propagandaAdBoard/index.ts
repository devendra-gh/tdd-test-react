import { IVariables } from '@tamm/app-composer';
import moment, { Moment } from 'moment';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import { PERMIT_CATEGORY_SIGNBOARD_AD } from 'client/config/permits/utils/constants/permitCategories';
import { PERMIT_PROPAGANDA_AD_BOARD } from 'client/config/permits/utils/constants/permits';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';

const propagandaAdBoardPermit = {
  ...genericConfig,
  name: PERMIT_PROPAGANDA_AD_BOARD,
  category: PERMIT_CATEGORY_SIGNBOARD_AD,
  landingPage: {
    serviceDescription: {
      title: 'propaganda.serviceDescription',
      conditions: [
        'propaganda.requirement2',
        'propaganda.requirement3',
        'propaganda.requirement4',
        'propaganda.requirement5',
        'propaganda.requirement6',
        'propaganda.requirement7',
        'propaganda.requirement8',
        'propaganda.requirement9',
        'propaganda.requirement10',
        'propaganda.requirement11',
        'propaganda.requirement12',
        'propaganda.requirement13',
        'propaganda.requirement14',
        'propaganda.requirement15',
      ],
    },
    documents: [
      'propaganda.requiredDocument1',
      'propaganda.requiredDocument2',
      'propaganda.requiredDocument4',
    ],
    fees: ['propaganda.fee1'],
  },
  permitRequirements: [
    {
      req: 'global.permitDescription',
      id: '0',
      details: 'propaganda.permitDescription',
    },
    {
      req: 'global.requiredLicences',
      id: '4',
      details: 'propaganda.requiredLicences',
    },
    {
      req: 'propaganda.requirement1',
      id: '1',
      details: 'propaganda.details1',
    },
    {
      req: 'propaganda.validity',
      id: '2',
      details: 'propaganda.validityDate',
    },
    {
      req: 'propaganda.conditions',
      id: '5',
      details: [
        'propaganda.requirement2',
        'propaganda.requirement3',
        'propaganda.requirement4',
        'propaganda.requirement5',
        'propaganda.requirement6',
        'propaganda.requirement7',
        'propaganda.requirement8',
        'propaganda.requirement9',
        'propaganda.requirement10',
        'propaganda.requirement11',
        'propaganda.requirement12',
        'propaganda.requirement13',
        'propaganda.requirement14',
        'propaganda.requirement15',
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
          label: 'propaganda.fieldStartDate',
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
          'aria-label': 'field.brandName',
          label: 'field.brandName',
          elementType: 'input',
          name: 'brandName',
          placeholder: '',
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
        },
      ],
    },
    propagandaAdvertisingBoards: {
      name: 'propagandaAdvertisingBoards',
      stateKey: 'propagandaAdvertisingBoards',
      customComponent: 'MultifieldForm',
      hasIncrementButton: true,
      incrementButtonLabel: 'button.addAdvertisingBoards',
      deleteLabel: 'button.removeAdvertisingBoard',

      fields: [
        {
          name: (count: number) => `AdvertisingBoards${count}`,
          label: (count: number) => `AdvertisingBoards ${count}`,
          twoColumns: true,
          // colType: 5.5,
          defaultValue: {
            length: 1,
            width: 1,
          },
          subFields: [
            {
              'aria-label': 'global.advertisingBoardsLength',
              label: 'global.advertisingBoardsLength',
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
              'aria-label': 'global.advertisingBoardsWidth',
              label: 'global.advertisingBoardsWidth',
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
          'aria-label': 'propaganda.fieldApprovedSample',
          elementType: 'fileUpload',
          name: 'approvedSample',
          accept: ['application/pdf'],
          label: 'propaganda.fieldApprovedSample',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'propaganda.fieldNOCTrademark',
          elementType: 'fileUpload',
          name: 'NOCTrademark',
          accept: ['application/pdf'],
          label: 'propaganda.fieldNOCTrademark',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'propaganda.fieldMOETradeMarkDoc',
          elementType: 'fileUpload',
          name: 'MOETradeMarkDoc',
          accept: ['application/pdf'],
          label: 'propaganda.fieldMOETradeMarkDoc',
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
        const totalFees = values.propagandaAdvertisingBoards.map(
          (propagandaAdvertisingBoard: IVariables, index: number) => {
            const bannerAreaInSqMts =
              propagandaAdvertisingBoard.length *
              propagandaAdvertisingBoard.width;
            const totalAmt = values.perUnitFees * Math.ceil(bannerAreaInSqMts);
            return {
              // title: `Banner ${index + 1} - (${
              //   propagandaAdvertisingBoard.length
              // } Metre * ${
              //   propagandaAdvertisingBoard.width
              // } Metre = ${bannerAreaInSqMts} Sq. Metres) (${bannerAreaInSqMts} Sq. Metres * ${
              //   values.perUnitFees
              // } AED)`,
              title: 'global.banner',
              suffix: index + 1,
              amount: totalAmt,
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

  aduServiceKey: PERMIT_PROPAGANDA_AD_BOARD,

  metaTags: {
    en: {
      title: 'Request for Issuing Advertisement Board Permit',
      description:
        'Through this service, you can obtain a permit to install advertisement signboard for a trademark or a trade name.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/propaganda-ad-board-permit-in-abu-dhabi?lang=en',
      keywords:
        'advertisement board permit, ads board permit, advertising board permit, request for issuing advertisement board permit, request ads board permit, ads permit, advertising permit, board permit, ads board, advertising board, advertisement board',
      short_description:
        'Obtain a permit for issuing advertisement board permit ',
      meta_description:
        'Request for issuing advertisement board permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح اللافتات الإعلانية الدعائية',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح بتركيب لافتة دعائية لعلامة تجارية أو اسم تجاري.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/propaganda-ad-board-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح لافتات دعائية ابوظبي، تصريح لافتات دعائية، تصريح لافتات دعائية دائرة التنمية الاقتصادية - أبوظبي، تصريح اللافتات الدعائية ابوظبي، تصريح اللافتات الدعائية، تصريح اللافتات الدعائية دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح اللافتات الإعلانية الدعائية',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على تصريح بتركيب لافتة دعائية لعلامة تجارية أو اسم تجاري.',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const {
      permitDetails,
      applicantContact,
      propagandaAdvertisingBoards,
      documents,
    } = serviceDetails;

    return {
      serviceName: PERMIT_PROPAGANDA_AD_BOARD,
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
      propagandaAdvertisingBoards: JSON.stringify(
        propagandaAdvertisingBoards.map(
          (advertisingBoardsDetails: IVariables) => ({
            Length: advertisingBoardsDetails.length,
            Width: advertisingBoardsDetails.width,
            Note: `${advertisingBoardsDetails.note} (${permitDetails.brandName})`,
          }),
        ),
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

export const name = PERMIT_PROPAGANDA_AD_BOARD;

export default propagandaAdBoardPermit;
