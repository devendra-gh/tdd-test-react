import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import moment, { Moment } from 'moment';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_CATEGORY_MACHINE_AD } from '../../utils/constants/permitCategories';
import { PERMIT_VARIOUS_MACHINES_AD } from '../../utils/constants/permits';
import getMachineTypes, { machineTypes } from '../../utils/getMachineTypes';
import { slugify } from '../../utils/common';

const variousMachinesAdPermit = {
  ...genericConfig,
  name: PERMIT_VARIOUS_MACHINES_AD,
  category: PERMIT_CATEGORY_MACHINE_AD,
  landingPage: {
    serviceDescription: {
      title: 'variousMachines.serviceDescription',
      conditions: ['variousMachines.requiredLicences'],
    },
    documents: [
      'variousMachines.requiredDocument1',
      'variousMachines.requiredDocument2',
    ],
    fees: [
      'variousMachines.fee1',
      'variousMachines.fee2',
      'variousMachines.fee3',
      'variousMachines.fee4',
      'variousMachines.fee5',
    ],
  },
  permitRequirements: [
    {
      req: 'variousMachines.permitDescription',
      id: '0',
      details: 'variousMachines.Description',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'variousMachines.requiredLicences',
    },
    {
      req: 'variousMachines.requirement1',
      id: '2',
      details: [
        'variousMachines.details1',
        'variousMachines.price2',
        'variousMachines.price3',
        'variousMachines.price4',
        'variousMachines.price5',
      ],
    },
    {
      req: 'variousMachines.requirement2',
      id: '4',
      details: 'variousMachines.validatiy',
    },
  ],

  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      stateKey: 'permitDetails',
      twoColumns: true,
      fields: [
        {
          label: 'variousMachines.fieldStartDate',
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
          // colType: 5.5,
          defaultValue: {},
          subFields: [
            {
              'aria-label': 'global.machineNumber',
              label: 'global.machineNumber',
              elementType: 'input',
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
              'aria-label': 'global.machineType',
              label: 'global.machineType',
              elementType: 'select',
              name: 'machineType',
              showSearch: false,
              items: getMachineTypes(),
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
          'aria-label': 'variousMachines.fieldCompanyLetter',
          elementType: 'fileUpload',
          name: 'companyLetter',
          accept: ['application/pdf'],
          label: 'variousMachines.fieldCompanyLetter',
          help: 'global.uploadHelp',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'variousMachines.fieldLocationApproval',
          elementType: 'fileUpload',
          name: 'locationApproval',
          accept: ['application/pdf'],
          label: 'variousMachines.fieldLocationApproval',
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
        const feesDetails = values.machineDetails.map(
          (machineDetail: IVariables) => {
            if (machineDetail.machineType) {
              const selectedMachine =
                machineTypes[slugify(machineDetail.machineType)];
              return {
                title: 'global.permitFees',
                suffix: selectedMachine ? selectedMachine.label : '',
                amount: selectedMachine
                  ? values.perUnitFees[selectedMachine.value].amount
                  : 0.0,
              };
            }
            return null;
          },
        );
        return feesDetails.filter((feesDetail: IVariables) => {
          return feesDetail !== undefined && feesDetail !== null;
        });
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

  aduServiceKey: PERMIT_VARIOUS_MACHINES_AD,

  metaTags: {
    en: {
      title: 'Request for Issuing Various Machines Permit',
      description:
        'Through this service, you can obtain a permit to have automated vending machines for the purchase, payment, order or provision of any service without the need for human intervention.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/various-machines-ad-permit-in-abu-dhabi?lang=en',
      keywords:
        'various machines permit, machine permit, permit for machines, pickup doll machine permit, various machines permit, machine permit abu dhabi, machine permit abudhabi, abu dhabi permits, get permit, get machine permit, get machines permit',
      short_description: 'Obtain a permit for various machines',
      meta_description:
        'Get various machines permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب اصدار تصريح الأجهزة المتنوعة',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح ماكينة بيع آلي تتيح الشراء أو الدفع أو طلب أو تقديم أي خدمة دون حاجة لتدخل بشري.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/various-machines-ad-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح الأجهزة المتنوعة ابوظبي، تصريح الأجهزة المتنوعة، تصريح الأجهزة المتنوعة دائرة التنمية الاقتصادية - أبوظبي، تصريح ماكينة بيع آلي ابوظبي، تصريح ماكينة بيع آلي، تصريح ماكينة بيع آلي دائرة التنمية الاقتصادية - أبوظبي، تصريح ماكينة بيع ذاتية ابوظبي، تصريح ماكينة بيع ذاتية، تصريح ماكينة بيع ذاتية دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي،  تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح الأجهزة المتنوعة',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على تصريح ماكينة بيع آلي تتيح الشراء أو الدفع أو تقديم أي خدمة دون تدخل بشري.',
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
      serviceName: PERMIT_VARIOUS_MACHINES_AD,
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
          MachineType: machine.machineType,
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

export const name = PERMIT_VARIOUS_MACHINES_AD;

export default variousMachinesAdPermit;
