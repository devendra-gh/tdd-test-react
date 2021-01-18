import { IVariables } from '@tamm/app-composer';
import moment, { Moment } from 'moment';
import {
  validationTypes,
  validateStartDate,
  validateEndDate,
} from 'client/config/utils/checkValidation';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_CATEGORY_PROMOTIONAL_AD } from '../../utils/constants/permitCategories';
import { PERMIT_TEMP_KIOSK_AD } from '../../utils/constants/permits';

const temporaryKioskAdPermit = {
  ...genericConfig,
  name: PERMIT_TEMP_KIOSK_AD,
  category: PERMIT_CATEGORY_PROMOTIONAL_AD,
  landingPage: {
    serviceDescription: {
      title: 'temporaryKiosk.serviceDescription',
      conditions: ['temporaryKiosk.requiredLicences'],
    },
    documents: [
      'temporaryKiosk.requiredDocument1',
      'temporaryKiosk.requiredDocument2',
      'temporaryKiosk.requiredDocument3',
    ],
    fees: ['temporaryKiosk.fee1'],
  },
  permitRequirements: [
    {
      req: 'temporaryKiosk.permitDescription',
      id: '0',
      details: 'temporaryKiosk.Description',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'temporaryKiosk.requiredLicences',
    },
    {
      req: 'temporaryKiosk.requirement1',
      id: '2',
      details: 'temporaryKiosk.details1',
    },
    {
      req: 'temporaryKiosk.requirement2',
      id: '3',
      details: 'temporaryKiosk.validatiy',
    },
  ],

  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      stateKey: 'permitDetails',
      twoColumns: true,
      fields: [
        {
          label: 'temporaryKiosk.fieldStartDate',
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
          label: 'temporaryKiosk.fieldEndDate',
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
      ],
    },

    permitKiosks: {
      name: 'title.permitLocations',
      stateKey: 'permitKiosks',
      customComponent: 'MultifieldForm',
      hasIncrementButton: true,
      incrementButtonLabel: 'temporaryKiosk.machineButtonLabelKiosk',
      deleteLabel: 'button.removeMachine',

      fields: [
        {
          name: (count: number) => `PermitLocation${count}`,
          label: (count: number) => `Permit Location ${count}`,
          twoColumns: true,
          subFields: [
            {
              'aria-label': 'temporaryKiosk.kioskNumber',
              label: 'temporaryKiosk.kioskNumber',
              elementType: 'input',
              name: 'kioskNumber',
              placeholder: '',
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
            },
            {
              'aria-label': 'temporaryKiosk.kioskLocation',
              label: 'temporaryKiosk.kioskLocation',
              elementType: 'input',
              name: 'location',
              placeholder: '',
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
            },
            {
              'aria-label': 'temporaryKiosk.kioskComments',
              label: 'temporaryKiosk.kioskComments',
              elementType: 'input',
              name: 'comments',
              placeholder: '',
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
          'aria-label': 'temporaryKiosk.fieldCompanyLetter',
          elementType: 'fileUpload',
          name: 'companyLetter',
          accept: ['application/pdf'],
          label: 'temporaryKiosk.fieldCompanyLetter',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'temporaryKiosk.fieldNoObjectionCertificate',
          elementType: 'fileUpload',
          name: 'noObjectionCertificate',
          accept: ['application/pdf'],
          label: 'temporaryKiosk.fieldNoObjectionCertificate',
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
        //   label: 'temporaryKiosk.fieldCopyofLicense',
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
        let monthsCnt = 0;
        const { startDate, endDate } = values.permitDetails;
        if (startDate && endDate) {
          monthsCnt = moment(endDate).diff(moment(startDate), 'months', true);
        }
        return [
          {
            // title: `Fees Per Kiosk Per Month(${values.perUnitFees} AED * ${monthsCnt} Months * ${values.permitKiosks.length} Machines)`,
            title: 'global.permitFees',
            amount:
              values.permitKiosks.length *
              values.perUnitFees *
              Math.ceil(monthsCnt),
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

  aduServiceKey: PERMIT_TEMP_KIOSK_AD,

  metaTags: {
    en: {
      title: 'Request for Issuing Temporary Kiosk Permit',
      description:
        'Through this service, you can obtain a permit to display a product or provide a service through a temporary Kiosk.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/temporary-kiosk-ad-permit-in-abu-dhabi?lang=en',
      keywords:
        'temporary kiosk ads permit, temporary kiosk advertising permit, temporary kiosk advertisement permit, temporary kiosk permit, permit for temporary kiosk ads, permit for temporary kiosk advertisement, permit for temporary kiosk advertising, temporary kiosk abu dhabi, temporary kiosk abudhabi, abudhabi temporary kiosk, abudhabi temporary kiosk permit, permits in abu dhabi, abu dhabi permits',
      short_description:
        'Through this service, you can obtain a permit to display a product or provide a service through a temporary Kiosk.',
      meta_description:
        'Request for issuing temporary kiosk permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح كشك مؤقت',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح لعرض منتج أو تقديم خدمة من خلال كشك مؤقت.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/temporary-kiosk-ad-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح كشك مؤقت ابوظبي، تصريح كشك مؤقت، تصريح كشك مؤقت دائرة التنمية الاقتصادية - أبوظبي، تصريح منصة عرض مؤقت ابوظبي، تصريح منصة عرض مؤقت، تصريح منصة عرض مؤقت دائرة التنمية الاقتصادية - أبوظبي، تصريح كشك عرض مؤقت ابوظبي، تصريح كشك عرض مؤقت، تصريح كشك عرض مؤقت دائرة التنمية الاقتصادية - أبوظبي، تصريح معرض مؤقت ابوظبي، تصريح معرض مؤقت، تصريح معرض مؤقت دائرة التنمية الاقتصادية - أبوظبي، تصريح منفذ مؤقت ابوظبي، تصريح منفذ مؤقت، تصريح منفذ مؤقت دائرة التنمية الاقتصادية - أبوظبي، تصريح منفذ بيع مؤقت ابوظبي، تصريح منفذ بيع مؤقت، تصريح منفذ بيع مؤقت دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح لعرض منتج أو تقديم خدمة من خلال كشك مؤقت.',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على تصريح لعرض منتج أو تقديم خدمة من خلال كشك مؤقت.',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const {
      permitDetails,
      permitKiosks,
      applicantContact,
      documents,
    } = serviceDetails;

    return {
      serviceName: PERMIT_TEMP_KIOSK_AD,
      DEDLicenseNumber: companyDetails.licenseNo,
      contact: JSON.stringify(getContact(props)),
      advertisementDetails: permitDetails.description,
      advertisementLocation: '-',
      advertiseStartDate: moment(permitDetails.startDate).format('DD/MM/YYYY'),
      advertiseEndDate: moment(permitDetails.endDate).format('DD/MM/YYYY'),
      proName: (applicantContact.name || '').replace(/\d/, '').replace('.', ''),
      proMobileNumber: manipulatePhone(applicantContact.phone),
      proEmail: applicantContact.email,
      customerComment: '',
      kiosks: JSON.stringify(
        permitKiosks.map((kiosk: IVariables) => ({
          KioskNumber: kiosk.kioskNumber || '',
          KioskAddress: kiosk.location || '',
          Notes: kiosk.comments || '',
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

export const name = PERMIT_TEMP_KIOSK_AD;

export default temporaryKioskAdPermit;
