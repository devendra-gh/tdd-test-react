import { IVariables } from '@tamm/app-composer';
import moment, { Moment } from 'moment';
import {
  validateStartDate,
  validationTypes,
} from 'client/config/utils/checkValidation';
import { PERMIT_CATEGORY_SIGNBOARD_AD } from 'client/config/permits/utils/constants/permitCategories';
import { PERMIT_ELECTRONIC_SIGNBOARD } from 'client/config/permits/utils/constants/permits';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';

const electronicSignboardPermit = {
  ...genericConfig,
  name: PERMIT_ELECTRONIC_SIGNBOARD,
  category: PERMIT_CATEGORY_SIGNBOARD_AD,
  permitRequirements: [
    {
      req: 'global.permitDescription',
      id: '0',
      details: 'electronicSignboard.permitDescription',
    },
    {
      req: 'electronicSignboard.requirement1',
      id: '1',
      details: 'electronicSignboard.details1',
    },
    {
      req: '',
      id: '2',
      details: 'electronicSignboard.details2',
    },
    {
      req: 'global.requiredLicences',
      id: '3',
      details: 'electronicSignboard.requiredLicences',
    },
    {
      req: 'global.requiredLicences',
      id: '4',
      details: 'electronicSignboard.requirement2',
    },
    {
      req: 'global.requiredLicences',
      id: '5',
      details: 'electronicSignboard.requirement3',
    },
    {
      req: 'global.requiredLicences',
      id: '6',
      details: 'electronicSignboard.requirement4',
    },
    {
      req: 'global.requiredLicences',
      id: '7',
      details: 'electronicSignboard.requirement5',
    },
  ],

  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      stateKey: 'permitDetails',
      twoColumns: true,
      fields: [
        {
          label: 'electronicSignboard.fieldStartDate',
          elementType: 'datePicker',
          value: (values: IVariables) => {
            return values.permitDetails.startDate
              ? new Date(values.permitDetails.startDate)
              : null;
          },
          name: 'startDate',
          onChange: (data: IVariables) => ({ startDate: data.value }),
          customDisabledDate: (currentDate: Moment, reduxState: IVariables) =>
            validateStartDate(currentDate),
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

    applicantContact: genericConfig.formFields.applicantContact,

    documents: {
      name: 'title.addAttachments',
      twoColumns: true,
      stateKey: 'documents',
      customComponent: 'FileUploads',
      fields: [
        {
          'aria-label': 'electronicSignboard.fieldCampaignLetter',
          elementType: 'fileUpload',
          name: 'campaignLetter',
          accept: ['application/pdf'],
          label: 'electronicSignboard.fieldCampaignLetter',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'electronicSignboard.fieldElectronicBoardSample',
          elementType: 'fileUpload',
          name: 'designDrawing',
          accept: ['application/pdf'],
          label: 'electronicSignboard.fieldElectronicBoardSample',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'electronicSignboard.fieldLandlordApproval',
          elementType: 'fileUpload',
          name: 'landlordApproval',
          accept: ['application/pdf'],
          label: 'electronicSignboard.fieldLandlordApproval',
          maxSize: 2e6,
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
      ],
    },
    permitEstimatedFees: genericConfig.formFields.permitEstimatedFees,
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

  aduServiceKey: PERMIT_ELECTRONIC_SIGNBOARD,

  metaTags: {
    en: {
      title: '',
      description: '',
      url: '',
      keywords: '',
      short_description: '',
      meta_description: '',
    },
    ar: {
      title: '',
      description: '',
      url: '',
      keywords: '',
      short_description: '',
      meta_description: '',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const { permitDetails, applicantContact, documents } = serviceDetails;

    return {
      serviceName: PERMIT_ELECTRONIC_SIGNBOARD,
      DEDLicenseNumber: companyDetails.licenseNo,
      contact: JSON.stringify(getContact(props)),
      advertisementDetails: permitDetails.description,
      advertisementLocation: permitDetails.location,
      advertiseStartDate: moment(permitDetails.startDate).format('DD/MM/YYYY'),
      advertiseEndDate: moment(permitDetails.startDate)
        .add(365, 'days')
        .format('DD/MM/YYYY'),
      proName: (applicantContact.name || '').replace(/\d/, '').replace('.', ''),
      proMobileNumber: manipulatePhone(applicantContact.phone),
      proEmail: applicantContact.email,
      customerComment: '',
      signBoards: JSON.stringify([]),
      documents: JSON.stringify(
        Object.values(documents).reduce(
          (fileArray: any, file: any) => fileArray.concat(file || []),
          [],
        ),
      ),
    };
  },
};

export const name = PERMIT_ELECTRONIC_SIGNBOARD;

export default electronicSignboardPermit;
