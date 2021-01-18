/* eslint-disable complexity */
import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import scrollToElement from 'client/config/utils/permitsScrollToElement';
import permitConfigs from 'client/config/permits/permitConfigs';
import fetchLicenseDetails from './functions/fetchLicenseDetails';
import validation from './functions/validation';
import fetchPermitFees from './functions/fetchPermitFees';
import { errorMsgMap } from '../../constants';
import { fetchRequirementsInquiry } from '../../services';
import {
  PATH_UNDERTAKING,
  PATH_APPLICATION_WAITING,
} from '../../utils/constants/pageRoutes';

const getPermitCompanyTypes = async (serviceName: string) => {
  try {
    const permitRequirements = await fetchRequirementsInquiry(serviceName);
    let permitCompanyTypes = ['DED', 'ADGE', 'FZ', 'NL', 'FC'];
    // We need to explicitly check for "false" from DED API to reduce companyType list
    // Please dont change this
    if (permitRequirements.data.result.AllowedForContactType === false) {
      permitCompanyTypes = ['DED'];
    }
    return permitCompanyTypes;
  } catch (e) {
    return ['DED', 'ADGE', 'FZ', 'NL', 'FC'];
  }
};

const init = async (props: IVariables) => {
  props.actions.permitSubmitting.update(false);
  props.actions.permitServerError.update('');
  props.actions.companyType.update('DED');

  const { serviceName } = props.match.params;

  const PermitConfigs: { [key: string]: any } = permitConfigs;

  const { serviceType } = props;

  const serviceConfig: any = serviceName
    ? PermitConfigs[serviceName]
    : PermitConfigs[serviceType];

  if ((serviceName || serviceType) && serviceConfig) {
    const { name, category, requiresUndertakingApproval } = serviceConfig;
    const { permitInfo } = props;
    const { undertaking } = permitInfo[name];
    const { isApproved } = undertaking;
    const permitFeesDetails = await fetchPermitFees(name);
    const permitCompanyTypes = await getPermitCompanyTypes(name);
    props.actions.permitCompanyTypes.update(permitCompanyTypes);

    if (name !== serviceType) {
      props.actions.serviceType.update(name);
      props.actions.permitType.update(category);
    }

    if (requiresUndertakingApproval && !isApproved) {
      props.actions.permitInfo.update({
        ...permitInfo,
        [name]: {
          ...permitInfo[name],
          undertaking: {
            ...permitInfo[name].undertaking,
            showError: true,
          },
        },
      });
      props.history.push(`/${name}${PATH_UNDERTAKING}`);
    } else {
      props.actions.urlServiceName.update(true);
      props.actions.serviceType.update(name);
      props.actions.permitType.update(category);

      // const { permitInfo } = props;
      const Info = {
        name: props.user['First Name EN'],
        email: props.user['User Email'],
        phone: props.user.Mobile,
      };

      props.actions.permitInfo.update({
        ...permitInfo,
        [name]: {
          ...permitInfo[name],
          applicantContact: {
            ...Info,
          },
          ...permitFeesDetails,
        },
      });
    }
  } else {
    props.actions.urlServiceName.update(false);
  }
};

const onSubmit = (bpmUrl: string) => async (props: IVariables) => {
  const { serviceType, permitInfo, instanceId, user } = props;

  let permitServerError: string = '';
  props.actions.permitSubmitting.update(true);
  props.actions.permitServerError.update(permitServerError);

  const serviceDetails = permitInfo[serviceType];
  const PermitConfigs: { [key: string]: any } = permitConfigs;
  const permitConfig = PermitConfigs[serviceType];
  const { aduServiceKey, formSubmitDetails } = permitConfig;

  const submitData = formSubmitDetails(serviceDetails, props);
  let { businessKey } = props;

  if (!businessKey || !instanceId) {
    try {
      const data = await bpm.start(bpmUrl, {
        serviceName: aduServiceKey,
        emiratesId: user.IDN,
      });
      if (data.success && data.data && data.data.businessKey && data.data.id) {
        props.actions.instanceId.update(data.data.id);
        props.actions.businessKey.update(data.data.businessKey);
        businessKey = data.data.businessKey;
      } else {
        permitServerError = 'something_went_wrong';
      }
    } catch (e) {
      permitServerError = 'something_went_wrong';
    }
  }

  if (businessKey) {
    try {
      const response = await bpm.message(bpmUrl, {
        businessKey,
        messageName: 'onSubmitPermitDetails',
        variables: submitData,
      });
      if (response.success && response.message === 'Success') {
        props.history.push(`/${serviceType}${PATH_APPLICATION_WAITING}`);
      } else if (response.success && response.message) {
        permitServerError = errorMsgMap[response.message]
          ? errorMsgMap[response.message]
          : 'something_went_wrong';
      } else {
        permitServerError = 'something_went_wrong';
      }
    } catch (e) {
      permitServerError = 'something_went_wrong';
    }
  }

  props.actions.permitServerError.update(permitServerError);
  props.actions.permitSubmitting.update(false);
  if (permitServerError) {
    scrollToElement('error-message-div', 'id');
  }
};

const getPermitFormChangeHandler = (state: any) => (
  props: IVariables,
  serviceName: string,
  fieldValues: IVariables,
) => {
  const formValues = state.permitInfo[serviceName];
  props.actions.permitInfo.update({
    ...state.permitInfo,
    [serviceName]: {
      ...formValues,
      ...fieldValues,
    },
  });
};

const handlePermitFormChange = (state: any) => (
  props: IVariables,
  value: any,
) => {
  const { permitInfo } = props;
  const { serviceType } = state;
  props.actions.permitInfo.update({
    ...permitInfo,
    [serviceType]: {
      ...permitInfo[serviceType],
      ...value,
    },
  });
};

const handleCategoryChange = (props: IVariables, cat: string) => {
  props.actions.permitType.update(cat);
  props.actions.serviceType.update('');
  props.actions.companyType.update('DED');
};

const handleServiceTypeChange = (props: IVariables, permit: string) => {
  props.actions.serviceType.update(permit);
  props.actions.companyType.update('DED');
  const { permitInfo } = props;
  if (props.user) {
    const Info = {
      name: props.user['First Name EN'],
      email: props.user['User Email'],
      phone: props.user.Mobile,
    };

    props.actions.permitInfo.update({
      ...permitInfo,
      [permit]: {
        ...permitInfo[permit],
        applicantContact: {
          ...Info,
        },
      },
    });
  }
};

const handleCompanyTypeChange = (props: IVariables, companyId: string) => {
  props.actions.companyType.update(companyId);
  props.actions.companyDetails.reset();
};

const handleCompanyDetailsChange = (props: IVariables, value: any) => {
  const { companyDetails } = props;
  props.actions.companyDetails.update({
    ...companyDetails,
    ...value,
  });
};

const handleRepresentativeTypeChange = (props: IVariables, value: any) => {
  const { companyDetails } = props;
  const { representativeType } = value;
  if (representativeType === '1') {
    props.actions.companyDetails.update({
      ...companyDetails,
      ...value,
      partnerSharePercentage: '100',
    });
  } else if (representativeType === '2') {
    props.actions.companyDetails.update({
      ...companyDetails,
      ...value,
      partnerSharePercentage: '1',
    });
  } else {
    props.actions.companyDetails.update({
      ...companyDetails,
      ...value,
      partnerSharePercentage: '0',
    });
  }
};

const handleValidityPeriodChange = (props: IVariables, value: any) => {
  const { validityPeriod } = props;
  props.actions.validityPeriod.update({
    ...validityPeriod,
    ...value,
  });
};
const getFormFields = (state: any) => () => {
  const { serviceType } = state;
  const PermitConfigs: { [key: string]: any } = permitConfigs;
  const permitConfig = PermitConfigs[serviceType];

  const { formFields }: { formFields: IVariables } = permitConfig;

  return formFields;
};

export default {
  init,
  onSubmit,
  handlePermitFormChange,
  handleCategoryChange,
  handleCompanyTypeChange,
  handleCompanyDetailsChange,
  handleRepresentativeTypeChange,
  handleServiceTypeChange,
  getPermitFormChangeHandler,
  getFormFields,
  validation,
  fetchLicenseDetails,
  handleValidityPeriodChange,
};
