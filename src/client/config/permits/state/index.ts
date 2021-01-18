import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import steps, { IStep } from '../steps';
import permits from '../permitConfigs';

const Permits: string[] = Object.keys(permits);

interface ApplicationForm {
  [key: string]: any;
}

interface IState {
  permits: IVariables;
  stepsStatus: IVariables;
  steps: IStep[];
}

const getDefaultValue = (field: IVariables) => field.defaultValue;

export const initialState: IVariables = Permits.reduce(
  (acc, permit: string) => {
    const permitConfig: { [key: string]: any } = permits;
    const customProps = permitConfig[permit];
    const {
      formFields,
      name: permitType,
      baseFees,
      baseFeesText,
      otherFees,
      perUnitFees,
      requiresUndertakingApproval,
    } = customProps;

    const customState: { [key: string]: any } = {};

    Object.keys(formFields).forEach((formField: string) => {
      const group: IVariables = formFields[formField];
      const { fields, hasIncrementButton, stateKey: groupName } = group;
      if (hasIncrementButton) {
        const defaultValues = fields.reduce(
          (values: any, field: IVariables) => {
            const defaultValue = getDefaultValue(field);
            if (defaultValue) {
              return values.concat(getDefaultValue(field));
            }
            return values;
          },
          [],
        );
        customState[groupName] = defaultValues;
      } else {
        fields.forEach((field: IVariables) => {
          const { name, defaultValue } = field;

          customState[groupName] = {
            ...customState[groupName],
            [name]: defaultValue || null,
          };
        });
      }
    });
    const permitForm = {
      ...customState,
      baseFees,
      baseFeesText,
      otherFees,
      perUnitFees,
      requiresUndertakingApproval,
      undertaking: { isApproved: false, showError: false },
      entityApproval: { isApproved: false, showError: false, documents: [] },
    };

    return {
      ...acc,
      permitInfo: {
        ...acc.permitInfo,
        [permitType]: permitForm,
      },
    };
  },
  {
    permitType: '',
    serviceType: '',
    companyType: '',
    permitCompanyTypes: [],
    pageTitle: '',
    companyDetails: {
      formValidated: false,
      partnerSharePercentage: '0',
    },
    returnPage: { documents: [] },
    permitInfo: {},
    businessKey: '',
    instanceId: '',
    stepsStatus: {},
    currentStep: '',
    steps,
    permitSubmitting: false,
    permitServerError: '',
    processComplete: false,
    urlServiceName: '',
    getPermits: [],
  },
);

async function fetchState(instanceId: string) {
  try {
    const data: IVariables = await bpm.state(`permits`, instanceId);

    // eslint-disable-next-line
    if (!data.data) return false;
    if (data.data.value) {
      return data.data.value;
    }
  } catch (e) {
    // eslint-disable-next-line
    console.log('Error fetching state', e.toString());
  }
  return false;
}

export default fetchState;
