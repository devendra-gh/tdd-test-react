import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import moment, { Moment } from 'moment';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_CATEGORY_MACHINE_AD } from '../../utils/constants/permitCategories';
import { PERMIT_VENDING_MACHINE } from '../../utils/constants/permits';

const vendingMachineAdPermit = {
  ...genericConfig,
  name: PERMIT_VENDING_MACHINE,
  category: PERMIT_CATEGORY_MACHINE_AD,
  landingPage: {
    serviceDescription: {
      title: 'vendingMachine.serviceDescription',
      conditions: ['vendingMachine.requiredLicences'],
    },
    documents: [
      'vendingMachine.requiredDocument1',
      'vendingMachine.requiredDocument2',
    ],
    fees: ['vendingMachine.fee1'],
  },
  permitRequirements: [
    {
      req: 'vendingMachine.permitDescription',
      id: '0',
      details: 'vendingMachine.Description',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'vendingMachine.requiredLicences',
    },
    {
      req: 'vendingMachine.requirement1',
      id: '2',
      details: 'vendingMachine.details1',
    },
    {
      req: 'vendingMachine.requirement2',
      id: '3',
      details: 'vendingMachine.validatiy',
    },
  ],

  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      stateKey: 'permitDetails',
      twoColumns: true,
      fields: [
        {
          label: 'vendingMachine.fieldStartDate',
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
          'aria-label': 'vendingMachine.fieldCompanyLetter',
          elementType: 'fileUpload',
          name: 'companyLetter',
          accept: ['application/pdf'],
          label: 'vendingMachine.fieldCompanyLetter',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'vendingMachine.fieldLocationApproval',
          elementType: 'fileUpload',
          name: 'locationApproval',
          accept: ['application/pdf'],
          label: 'vendingMachine.fieldLocationApproval',
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
            // title: `Fees Per Machine (${values.perUnitFees} AED * ${values.machineDetails.length} Machines)`,
            title: 'global.permitFees',
            amount: values.machineDetails.length * values.perUnitFees,
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

  aduServiceKey: PERMIT_VENDING_MACHINE,

  metaTags: {
    en: {
      title: 'Request for Issuing Vending Machine Permit',
      description:
        "Through this service, you can obtain a permit for an automatic vending machine that allows the purchase of the company's products by paying, ordering or providing any service without the need for human intervention.",
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/vending-machine-ad-permit-in-abu-dhabi?lang=en',
      keywords:
        'vending machine licence, vending machine permit, vending machines, vending machine business, vending machines abu dhabi, vending machines permit abu dhabi, ded permit for vending machines, kiosk license in abu dhabi, commercial permit of vending machines, vending machines in uae',
      short_description:
        "Through this service, you can obtain a permit for an automatic vending machine that allows the purchase of the company's products by paying, ordering or providing any service without the need for human intervention.",
      meta_description:
        'Request for issuing vending machines permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح ثلاجات البيع بالعملة',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح ماكينة البيع الآلي التي تتيح شراء منتجات الشركة عن طريق الدفع أو طلب أو تقديم أي خدمة دون حاجة لتدخل بشري',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/vending-machine-ad-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح ثلاجات بيع بالعملة ابوظبي، تصريح ثلاجات بيع بالعملة، تصريح ثلاجات بيع بالعملة دائرة التنمية الاقتصادية - أبوظبي، تصريح ثلاجة بيع بالعملة ابوظبي، تصريح ثلاجة بيع بالعملة، تصريح ثلاجة بيع بالعملة دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح ماكينة البيع الآلي التي تتيح شراء منتجات الشركة عن طريق الدفع أو طلب أو تقديم أي خدمة دون حاجة لتدخل بشري',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية بأبوظبي، يمكنك الحصول على تصريح ماكينة البيع الآلي التي تتيح شراء منتجات أو تقديم الخدمات آليًا',
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
      serviceName: PERMIT_VENDING_MACHINE,
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

export const name = PERMIT_VENDING_MACHINE;

export default vendingMachineAdPermit;
