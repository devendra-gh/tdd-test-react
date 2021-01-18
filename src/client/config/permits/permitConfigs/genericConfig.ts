import { IVariables } from '@tamm/app-composer';
import { Moment } from 'moment';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';
import steps from '../steps';

export default {
  bpmUrl: 'permits',
  name: 'serviceName',
  category: 'permitTypeName',
  baseFees: 0,
  baseFeesText: '',
  requiresUndertakingApproval: false,
  undertakings: {
    title: 'undertaking.title',
    subTitle: 'undertaking.description',
    conditions: [],
  },
  landingPage: {
    serviceDescription: {
      title: '',
      conditions: [],
    },
    steps,
    documents: [],
    fees: [],
  },
  requiresEntityApproval: false,
  entityApprovalForm: {
    documents: [],
  },
  formFields: {
    applicantContact: {
      name: 'title.applicantContactInfo',
      stateKey: 'applicantContact',
      twoColumns: true,
      fields: [
        {
          'aria-label': 'applicantContact.name',
          elementType: 'input',
          key: 'applicantContactName',
          label: 'applicantContact.name',
          name: 'name',
          placeholder: '',
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
        },
        {
          'aria-label': 'applicantContact.email',
          elementType: 'input',
          key: 'applicantContactEmail',
          label: 'applicantContact.email',
          name: 'email',
          placeholder: '',
          validationConfig: {
            type: validationTypes.EMAIL,
          },
        },
        {
          'aria-label': 'applicantContact.phone',
          code: 971,
          countries: [
            {
              code: 971,
              name: 'UAE',
            },
          ],
          elementType: 'inputTelephone',
          key: 'applicantContactPhone',
          label: 'applicantContact.phone',
          name: 'phone',
          placeholder: '',
          changeFunctionName: 'onSelect',
          validationConfig: {
            type: validationTypes.PHONE,
          },
        },
      ],
    },
    documents: {},
    permitEstimatedFees: {
      name: 'title.estimatedFees',
      stateKey: 'estimatedFees',
      customComponent: 'EstimatedFees',
      columns: [
        { id: 'title', title: 'global.description' },
        { id: 'amount', title: 'global.price', align: 'end' },
      ],
      fields: [],
      calculateBaseEstimatedPrice: (values: IVariables) => {
        const feesDetails = [];
        if (values.baseFees !== 0) {
          feesDetails.push({
            title: values.baseFeesText
              ? values.baseFeesText
              : 'fees.applicationSubmission',
            amount: values.baseFees,
          });
        }
        if (values.otherFees !== undefined) {
          return feesDetails.concat(values.otherFees);
        }
        return feesDetails;
      },
    },
  },
  customDisabledDate: (currentDate: Moment, reduxState: IVariables) =>
    validateStartDate(currentDate, reduxState.permitDetails.endDate),
  // customDisabledEndDate: (currentDate: Moment, reduxState: IVariables) => validateEndDate(currentDate, reduxState.permitDetails.startDate, 60),
};
