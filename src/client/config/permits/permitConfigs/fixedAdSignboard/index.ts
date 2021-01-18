import { IVariables } from '@tamm/app-composer';
import moment, { Moment } from 'moment';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import { PERMIT_CATEGORY_SIGNBOARD_AD } from 'client/config/permits/utils/constants/permitCategories';
import { PERMIT_FIXED_AD_SIGNBOARD } from 'client/config/permits/utils/constants/permits';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';

const fixedAdSignboardPermit = {
  ...genericConfig,
  name: PERMIT_FIXED_AD_SIGNBOARD,
  category: PERMIT_CATEGORY_SIGNBOARD_AD,
  landingPage: {
    serviceDescription: {
      title: 'propaganda.serviceDescription',
      conditions: [
        'fixedAdSignboard.requiredLicences',
        'fixedAdSignboard.requirement2',
        'fixedAdSignboard.requirement3',
        'fixedAdSignboard.requirement4',
        'fixedAdSignboard.requirement5',
        'fixedAdSignboard.requirement6',
        'fixedAdSignboard.requirement7',
        'fixedAdSignboard.requirement8',
        'fixedAdSignboard.requirement9',
        'fixedAdSignboard.requirement10',
        'fixedAdSignboard.requirement11',
        'fixedAdSignboard.requirement12',
        'fixedAdSignboard.requirement13',
        'fixedAdSignboard.requirement14',
        'fixedAdSignboard.requirement15',
      ],
    },
    documents: [
      'fixedAdSignboard.requiredDocument1',
      'fixedAdSignboard.requiredDocument2',
    ],
    fees: ['fixedAdSignboard.fee1', 'fixedAdSignboard.fee2'],
  },
  permitRequirements: [
    {
      req: 'global.permitDescription',
      id: '0',
      details: 'fixedAdSignboard.permitDescription',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'fixedAdSignboard.requiredLicences',
    },
    {
      req: 'fixedAdSignboard.requirement1',
      id: '2',
      details: ['fixedAdSignboard.details1', 'fixedAdSignboard.details2'],
    },

    {
      req: 'fixedAdSignboard.validity',
      id: '3',
      details: 'fixedAdSignboard.validityDate',
    },
    {
      req: 'fixedAdSignboard.conditions',
      id: '4',
      details: [
        'fixedAdSignboard.requirement2',
        'fixedAdSignboard.requirement3',
        'fixedAdSignboard.requirement4',
        'fixedAdSignboard.requirement5',
        'fixedAdSignboard.requirement6',
        'fixedAdSignboard.requirement7',
        'fixedAdSignboard.requirement8',
        'fixedAdSignboard.requirement9',
        'fixedAdSignboard.requirement10',
        'fixedAdSignboard.requirement11',
        'fixedAdSignboard.requirement12',
        'fixedAdSignboard.requirement13',
        'fixedAdSignboard.requirement14',
        'fixedAdSignboard.requirement15',
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
          label: 'fixedAdSignboard.fieldStartDate',
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
      ],
    },
    signBoards: {
      name: 'signBoards',
      stateKey: 'signBoards',
      customComponent: 'MultifieldForm',
      hasIncrementButton: true,
      incrementButtonLabel: 'button.addSignBoards',
      deleteLabel: 'button.removeSignBoard',

      fields: [
        {
          name: (count: number) => `SignBoards${count}`,
          label: (count: number) => `SignBoards ${count}`,
          twoColumns: true,
          // colType: 5.5,
          defaultValue: {
            length: 1,
            width: 1,
          },
          subFields: [
            {
              'aria-label': 'global.signBoardsLength',
              label: 'global.signBoardsLength',
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
              'aria-label': 'global.signBoardsWidth',
              label: 'global.signBoardsWidth',
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
          'aria-label': 'fixedAdSignboard.fieldLandlordApproval',
          elementType: 'fileUpload',
          name: 'landlordApproval',
          accept: ['application/pdf'],
          label: 'fixedAdSignboard.fieldLandlordApproval',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'fixedAdSignboard.fieldApprovedSample',
          elementType: 'fileUpload',
          name: 'approvedSample',
          accept: ['application/pdf'],
          label: 'fixedAdSignboard.fieldApprovedSample',
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
        const FIRST_FREE_AREA = 4;
        const totalFees = values.signBoards.map(
          (signBoard: IVariables, index: number) => {
            const bannerAreaInSqMts = signBoard.length * signBoard.width;
            return {
              // title: `Signboard ${index + 1} - (${signBoard.length} Metre * ${
              //   signBoard.width
              // } Metre = ${bannerAreaInSqMts} Sq. Metres) (${chargeableArea} Sq. Metres * ${chargeableFees} AED)`,
              title: 'global.signboard',
              suffix: index + 1,
              amount:
                values.perUnitFees.fixed +
                Math.max(Math.ceil(bannerAreaInSqMts - FIRST_FREE_AREA), 0) *
                  values.perUnitFees.variable,
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

  aduServiceKey: PERMIT_FIXED_AD_SIGNBOARD,

  metaTags: {
    en: {
      title: 'Request for Issuing Fixed Ad Signboard Permit',
      description:
        'Through this service, you can get a permit to install a fixed signboard of the company’s trade name or trademark above the building or in front of the building',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/fixed-ad-signboard-permit-in-abu-dhabi?lang=en',
      keywords:
        'fixed ad signboard, request for issuing fixed ad signboard permit, fixed advertisement signboard permit, fixed advertising signboard permit, sigboard permits, fixed signboards permit, fixed signboard permit, signboard advertisement, signboard ads, get signboard permit',
      short_description:
        'Obtain a permit to install fixed advertisement signboard',
      meta_description:
        'Request for issuing fixed advertising signboard permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح اللافتات الإعلانية الثابتة',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح بتركيب لافتة ثابتة للاسم التجاري أو العلامة التجارية للشركة أعلى المبنى أو أمام المبنى',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/fixed-ad-signboard-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح لافتات إعلانية ثابتة ابوظبي، تصريح لافتات إعلانية ثابتة، تصريح لافتات إعلانية ثابتة دائرة التنمية الاقتصادية - أبوظبي، تصريح اللافتات الإعلانية الثابتة ابوظبي، تصريح اللافتات الإعلانية الثابتة، تصريح اللافتات الإعلانية الثابتة دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح اللافتات الإعلانية الثابتة',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية بأبوظبي، يمكنك الحصول على تصريح بتركيب لافتة ثابتة للاسم أو العلامة التجارية أعلى أو أمام المبنى',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const {
      permitDetails,
      applicantContact,
      signBoards,
      documents,
    } = serviceDetails;

    return {
      serviceName: PERMIT_FIXED_AD_SIGNBOARD,
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
      signBoards: JSON.stringify(
        signBoards.map((signBoardsDetails: IVariables) => ({
          Length: signBoardsDetails.length,
          Width: signBoardsDetails.width,
          Status: 'Active',
          Note: signBoardsDetails.note,
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

export const name = PERMIT_FIXED_AD_SIGNBOARD;

export default fixedAdSignboardPermit;
