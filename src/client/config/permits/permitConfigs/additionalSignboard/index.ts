import { IVariables } from '@tamm/app-composer';
import moment, { Moment } from 'moment';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import { PERMIT_ADDITIONAL_SIGNBOARD } from 'client/config/permits/utils/constants/permits';
import { PERMIT_CATEGORY_SIGNBOARD_AD } from 'client/config/permits/utils/constants/permitCategories';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';

const additionalSignboardPermit = {
  ...genericConfig,
  name: PERMIT_ADDITIONAL_SIGNBOARD,
  category: PERMIT_CATEGORY_SIGNBOARD_AD,
  landingPage: {
    serviceDescription: {
      title: 'additionalSignboard.serviceDescription',
      conditions: [
        'additionalSignboard.requirement2',
        'additionalSignboard.requirement3',
        'additionalSignboard.requirement4',
        'additionalSignboard.requirement5',
        'additionalSignboard.requirement6',
        'additionalSignboard.requirement7',
        'additionalSignboard.requirement8',
        'additionalSignboard.requirement9',
        'additionalSignboard.requirement10',
        'additionalSignboard.requirement11',
        'additionalSignboard.requirement12',
        'additionalSignboard.requirement13',
        'additionalSignboard.requirement14',
        'additionalSignboard.requirement15',
      ],
    },
    documents: [
      'additionalSignboard.requiredDocument1',
      'additionalSignboard.requiredDocument2',
    ],
    fees: ['additionalSignboard.fee1'],
  },
  permitRequirements: [
    {
      req: 'global.permitDescription',
      id: '0',
      details: 'additionalSignboard.permitDescription',
    },
    {
      req: 'global.requiredLicences',
      id: '4',
      details: 'additionalSignboard.requiredLicences',
    },
    {
      req: 'additionalSignboard.requirement1',
      id: '1',
      details: 'additionalSignboard.details1',
    },
    {
      req: 'additionalSignboard.validity',
      id: '2',
      details: 'additionalSignboard.validityDate',
    },
    {
      req: 'additionalSignboard.conditions',
      id: '3',
      details: [
        'additionalSignboard.requirement2',
        'additionalSignboard.requirement3',
        'additionalSignboard.requirement4',
        'additionalSignboard.requirement5',
        'additionalSignboard.requirement6',
        'additionalSignboard.requirement7',
        'additionalSignboard.requirement8',
        'additionalSignboard.requirement9',
        'additionalSignboard.requirement10',
        'additionalSignboard.requirement11',
        'additionalSignboard.requirement12',
        'additionalSignboard.requirement13',
        'additionalSignboard.requirement14',
        'additionalSignboard.requirement15',
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
          label: 'additionalSignboard.fieldStartDate',
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
                    365 * 86400000,
                )
              : null;
          },
          name: 'endDate',
          disabled: () => true,
        },
      ],
    },

    signboardDetails: {
      name: 'title.signboardDetails',
      stateKey: 'signboardDetails',
      customComponent: 'MultifieldForm',
      hasIncrementButton: true,
      incrementButtonLabel: 'button.addSignboard',
      deleteLabel: 'button.removeSignboard',
      fields: [
        {
          name: (count: number) => `Signboard${count}`,
          label: (count: number) => `Signboard ${count}`,
          twoColumns: true,
          // colType: 5.5,
          defaultValue: {
            length: 1,
            width: 1,
          },
          subFields: [
            {
              'aria-label': 'additionalSignboard.signboardDetails.length',
              label: 'additionalSignboard.signboardDetails.length',
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
              'aria-label': 'additionalSignboard.signboardDetails.width',
              label: 'additionalSignboard.signboardDetails.width',
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
          'aria-label': 'additionalSignboard.fieldLandlordApproval',
          elementType: 'fileUpload',
          name: 'landlordApproval',
          accept: ['application/pdf'],
          label: 'additionalSignboard.fieldLandlordApproval',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'additionalSignboard.fieldDesignDrawing',
          elementType: 'fileUpload',
          name: 'designDrawing',
          accept: ['application/pdf'],
          label: 'additionalSignboard.fieldDesignDrawing',
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
        const totalFees = values.signboardDetails.map(
          (signboardDetail: IVariables, index: number) => {
            const bannerAreaInSqMts =
              signboardDetail.length * signboardDetail.width;
            const totalAmt = values.perUnitFees * bannerAreaInSqMts;
            return {
              // title: `Signboard ${index + 1} - (${
              //   signboardDetail.length
              // } Metre * ${
              //   signboardDetail.width
              // } Metre = ${bannerAreaInSqMts} Sq. Metres) (${bannerAreaInSqMts} Sq. Metres * ${
              //   values.perUnitFees
              // } AED)`,
              title: 'global.signboard',
              suffix: index + 1,
              amount: totalAmt.toFixed(2),
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

  aduServiceKey: PERMIT_ADDITIONAL_SIGNBOARD,

  metaTags: {
    en: {
      title: 'Request for Issuing Additional Signboard Permit',
      description:
        'Through this service, you can obtain a permit to install an additional signboard for the company’s brand name or trademark.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/additional-signboard-permit-in-abu-dhabi?lang=en',
      keywords:
        'additional signboard permit, signboard permit, signboards permit, signboard permits, additional signboards, signboards in abu dhabi',
      short_description: 'Obtain a permit to install additional signboard',
      meta_description:
        'Request for issuing additional signboard permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح لافتات إضافية',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح بتركيب لافتة إضافية للاسم التجاري أو العلامة التجارية للشركة. ',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/additional-signboard-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح لافتات إضافية ابوظبي، تصريح لافتات إضافية، تصريح لافتات إضافية دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description:
        'احصل على تصريح لتركيب لافتة اضافية للاسم التجاري أو العلامة التجارية',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على تصريح بتركيب لافتة إضافية للاسم التجاري أو العلامة التجارية للشركة. ',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const {
      permitDetails,
      applicantContact,
      signboardDetails,
      documents,
    } = serviceDetails;
    return {
      serviceName: PERMIT_ADDITIONAL_SIGNBOARD,
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
        signboardDetails.map((signboard: IVariables) => ({
          Length: signboard.length,
          Width: signboard.width,
          Note: signboard.note,
          Status: 'Active',
        })),
      ),
      documents: JSON.stringify(
        Object.values(documents).reduce(
          (fileArray: any, file: any = []) => fileArray.concat(file),
          [],
        ),
      ),
    };
  },
};

export const name = PERMIT_ADDITIONAL_SIGNBOARD;

export default additionalSignboardPermit;
