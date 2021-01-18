import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import moment, { Moment } from 'moment';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_ATM_AD } from '../../utils/constants/permits';
import { PERMIT_CATEGORY_MACHINE_AD } from '../../utils/constants/permitCategories';

const ATMAdPermit = {
  ...genericConfig,
  name: PERMIT_ATM_AD,
  category: PERMIT_CATEGORY_MACHINE_AD,
  landingPage: {
    serviceDescription: {
      title: 'ATM.serviceDescription',
      conditions: ['ATM.requiredLicences'],
    },
    documents: [
      'ATM.requiredDocument1',
      'ATM.requiredDocument2',
      'ATM.requiredDocument3',
    ],
    fees: ['ATM.fee1'],
  },
  permitRequirements: [
    {
      req: 'ATM.permitDescription',
      id: '0',
      details: 'ATM.Description',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'ATM.requiredLicences',
    },
    {
      req: 'ATM.requirement1',
      id: '2',
      details: 'ATM.details1',
    },
    {
      req: 'ATM.requirement2',
      id: '3',
      details: 'ATM.validatiy',
    },
  ],

  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      stateKey: 'permitDetails',
      twoColumns: true,
      fields: [
        {
          'aria-label': 'ATM.fieldStartDate',
          label: 'ATM.fieldStartDate',
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
      incrementButtonLabel: 'ATM.machineButtonLabel',
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
              label: 'ATM.machineNumber',
              elementType: 'input',
              name: 'machineNumber',
              value: () => null,
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
            },
            {
              'aria-label': 'global.machineLocation',
              label: 'ATM.machineLocation',
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
          'aria-label': 'ATM.fieldCentralBankApproval',
          elementType: 'fileUpload',
          name: 'centralBankApproval',
          accept: ['application/pdf'],
          label: 'ATM.fieldCentralBankApproval',
          maxSize: 2e6,
          help: 'global.uploadHelp',
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'ATM.fieldCompanyLetter',
          elementType: 'fileUpload',
          name: 'companyLetter',
          accept: ['application/pdf'],
          label: 'ATM.fieldCompanyLetter',
          maxSize: 2e6,
          help: 'global.uploadHelp',
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'ATM.fieldLocationApproval',
          elementType: 'fileUpload',
          name: 'locationApproval',
          accept: ['application/pdf'],
          label: 'ATM.fieldLocationApproval',
          maxSize: 2e6,
          help: 'global.uploadHelp',
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

  aduServiceKey: PERMIT_ATM_AD,

  metaTags: {
    en: {
      title: 'Request for Issuing ATM Permit',
      description:
        'Through this service, you can get an ATM permit that allows the payments or request, or provision of any banking service without the need for human intervention',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/atm-ad-permit-in-abu-dhabi?lang=en',
      keywords:
        'atm ad permit, atm ad permit abu dhabi, abu dhabi atm machine, atm machine abu dhabi, permit for atm machine advertisement, atm ads permit in abu dhabi, atm advertising permit, atm machine advertising permit',
      short_description: 'Obtain an ATM advertisements Permit ',
      meta_description:
        'Submit request for issuing atm permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح أجهزة الصراف الآلي',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح جهاز الصراف الالي الذي يتيح الدفع أو طلب أو تقديم أي خدمة مصرفية دون حاجة لتدخل بشري',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/atm-ad-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح أجهزة الصراف الآلي ابوظبي، تصريح أجهزة الصراف الآلي، تصريح أجهزة الصراف الآلي دائرة التنمية الاقتصادية - أبوظبي، تصريح أجهزة ATM ابوظبي، تصريح أجهزة ATM، تصريح أجهزة ATM دائرة التنمية الاقتصادية - أبوظبي، تصريح جهاز ATM ابوظبي، تصريح جهاز ATM، تصريح جهاز ATM دائرة التنمية الاقتصادية - أبوظبي، تصريح ماكينة ATM ابوظبي، تصريح ماكينة ATM، تصريح ماكينة ATM دائرة التنمية الاقتصادية - أبوظبي، تصريح ماكينة صراف آلي ابوظبي، تصريح ماكينة صراف آلي، تصريح ماكينة صراف آلي دائرة التنمية الاقتصادية - أبوظبي، تصريح ماكينة صرف آلي ابوظبي، تصريح ماكينة صرف آلي، تصريح ماكينة صرف آلي دائرة التنمية الاقتصادية - أبوظبي، تصريح ماكينة خدمات بنكية ابوظبي، تصريح ماكينة خدمات بنكية، تصريح ماكينة خدمات بنكية دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح إعلانات أجهزة الصراف الآلي',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية بأبوظبي، يمكنك الحصول على تصريح جهاز الصراف الآلي الذي يتيح الدفع أو تقديم أي خدمة مصرفية آليًا',
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
      serviceName: PERMIT_ATM_AD,
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

export const name = PERMIT_ATM_AD;

export default ATMAdPermit;
