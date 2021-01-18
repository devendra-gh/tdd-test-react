import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import moment, { Moment } from 'moment';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_CATEGORY_MACHINE_AD } from '../../utils/constants/permitCategories';
import { PERMIT_AUTOMATIC_PAYMENT_AD } from '../../utils/constants/permits';

const automaticPaymentAdPermit = {
  ...genericConfig,
  name: PERMIT_AUTOMATIC_PAYMENT_AD,
  category: PERMIT_CATEGORY_MACHINE_AD,
  landingPage: {
    serviceDescription: {
      title: 'automaticPayment.serviceDescription',
      conditions: ['automaticPayment.requiredLicences'],
    },
    documents: [
      'automaticPayment.requiredDocument1',
      'automaticPayment.requiredDocument2',
    ],
    fees: ['automaticPayment.fee1'],
  },
  permitRequirements: [
    {
      req: 'automaticPayment.permitDescription',
      id: '0',
      details: 'automaticPayment.Description',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'automaticPayment.requiredLicences',
    },
    {
      req: 'automaticPayment.requirement1',
      id: '2',
      details: 'automaticPayment.details1',
    },
    {
      req: 'automaticPayment.requirement2',
      id: '3',
      details: 'automaticPayment.validatiy',
    },
  ],

  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      stateKey: 'permitDetails',
      twoColumns: true,
      fields: [
        {
          'aria-label': 'automaticPayment.fieldStartDate',
          label: 'automaticPayment.fieldStartDate',
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
    machineDetails: {
      name: 'title.permitLocations',
      stateKey: 'machineDetails',
      customComponent: 'MultifieldForm',
      hasIncrementButton: true,
      incrementButtonLabel: 'global.machineButtonLabel',
      deleteLabel: 'button.removeMachine',

      fields: [
        {
          name: (count: number) => `PermitLocation${count}`,
          label: (count: number) => `Permit Location ${count}`,
          twoColumns: true,
          defaultValue: {},
          subFields: [
            {
              'aria-label': 'global.machineNumber',
              label: 'global.machineNumber',
              elementType: 'input',
              value: () => null,
              name: 'machineNumber',
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
            },
            {
              'aria-label': 'global.machineLocation',
              label: 'global.machineLocation',
              elementType: 'input',
              name: 'location',
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
            },
            {
              'aria-label': 'global.comments',
              label: 'global.comments',
              elementType: 'input',
              name: 'comments',
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
          'aria-label': 'automaticPayment.fieldCompanyLetter',
          elementType: 'fileUpload',
          name: 'companyLetter',
          accept: ['application/pdf'],
          label: 'automaticPayment.fieldCompanyLetter',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'automaticPayment.fieldLocationApproval',
          elementType: 'fileUpload',
          name: 'locationApproval',
          accept: ['application/pdf'],
          label: 'automaticPayment.fieldLocationApproval',
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
        return [
          {
            // title: `Permit Fees Per Machine (${values.perUnitFees} * ${values.machineDetails.length})`,
            title: 'global.permitFees',
            amount: values.perUnitFees * values.machineDetails.length,
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

  aduServiceKey: PERMIT_AUTOMATIC_PAYMENT_AD,

  metaTags: {
    en: {
      title: 'Request for Issuing Automatic Payment Machines Permit',
      description:
        'Through this service, you can apply for an automatic payment machine permit, allowing the payment, request or provision of  any service without the need for human intervention.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/automatic-payment-ad-permit-in-abu-dhabi?lang=en',
      keywords:
        'automatic payment, auto payment, automatic payment ad permit, permit for automatic payment, permits for automatic payments, automatic payments, auto payments, auto payments in abu dhabi, auto payment permit in abu dhabi',
      short_description:
        'Obtain a permit to issue automatic payment machine permit ',
      meta_description:
        'Get automatic payments machines permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب اصدار تصريح أجهزة الدفع الآلي',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح جهاز دفع آلي حتى يسمح بالدفع أو طلب أي خدمة أو تقديمها دون حاجة لتدخل بشري.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/automatic-payment-ad-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح أجهزة الدفع الآلي ابوظبي، تصريح أجهزة الدفع الآلي، تصريح أجهزة الدفع الآلي دائرة التنمية الاقتصادية - أبوظبي، تصريح جهاز دفع آلي ابوظبي، تصريح جهاز دفع آلي، تصريح جهاز دفع آلي دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح أجهزة الدفع الآلي',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على تصريح جهاز دفع آلي حتى يسمح بالدفع أو طلب أو تقديم الخدمات دون تدخل بشري.',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const {
      permitDetails,
      machineDetails,
      applicantContact,
      documents,
    } = serviceDetails;

    return {
      serviceName: PERMIT_AUTOMATIC_PAYMENT_AD,
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
      machines: JSON.stringify(
        machineDetails.map((machine: IVariables) => ({
          MachineNumber: machine.machineNumber || '',
          MachineAddress: machine.location || '',
          Notes: machine.comments || '',
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

export const name = PERMIT_AUTOMATIC_PAYMENT_AD;

export default automaticPaymentAdPermit;
