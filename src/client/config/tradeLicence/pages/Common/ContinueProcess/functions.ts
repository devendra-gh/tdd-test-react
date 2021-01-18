import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';

import { get } from 'lodash';
import { getLegalFormFromCode } from 'client/config/utils/lookup';

const qs = require('query-string');

const getContinueProcessEconomicLicenseAction = (
  props: IVariables,
  data: IVariables,
) => {
  const camundaData = data.data;
  let { economicLicense } = props;

  if (props.actions.economicLicense) {
    if (camundaData.licenceType) {
      economicLicense = {
        ...economicLicense,
        licenceType: {
          licenceType: camundaData.licenceType.value,
        },
      };
      props.actions.economicLicense.update(economicLicense);
    }

    if (camundaData.businessLegalFormCode) {
      economicLicense = {
        ...economicLicense,
        legalForm: {
          legalForm: getLegalFormFromCode(
            camundaData.businessLegalFormCode.value,
          ),
        },
      };
      props.actions.economicLicense.update(economicLicense);
    }
  }

  if (props.actions.tnNumber) {
    if (camundaData.tnNumber) {
      props.actions.tnNumber.update(camundaData.tnNumber.value);
    }
  }

  if (props.actions.cnNumber) {
    if (camundaData.cnNumber) {
      props.actions.cnNumber.update(camundaData.cnNumber.value);
    }
  }
};

const getContinueProcessCommonAction = (
  props: IVariables,
  data: IVariables,
  businessKey: any,
  instanceId: any,
) => {
  const camundaData = data.data;

  // always update businessKey and instanceId even if some other keys are there
  if (props.actions.businessKey) {
    props.actions.businessKey.update(businessKey);
  }

  if (props.actions.instanceId) {
    props.actions.instanceId.update(instanceId);
  }

  if (props.actions.partners) {
    if (camundaData.partners) {
      props.actions.partners.update(JSON.parse(camundaData.partners.value));
    }
  }

  if (props.actions.smartPassData) {
    if (camundaData.smartPassData) {
      props.actions.smartPassData.update(
        JSON.parse(camundaData.smartPassData.value),
      );
    }
  }
};

export const continueProcess = async (props: IVariables) => {
  const queryParams = qs.parse(props.history.location.search);

  const instanceId: any = get(queryParams, 'instanceId', '');
  const businessKey: any = get(queryParams, 'businessKey', '');

  const processState = {
    processName: 'economicLicence',
    variables: [
      // all required variables do not remove
      // this are some important variable that we will need to any application to continue
      'logUuid',
      'businessLegalFormCode',
      'licenceType',
      'state',

      // extra params that you can link
      'allPartnersMoaApproved',
      'partners',
      'smartPassData',
      'tnNumber',
      'cnNumber',
    ],
  };

  let data: IVariables = {};
  try {
    data = await bpm.getVariables(instanceId, processState);
  } catch (e) {
    // console.log('Error fetching state', e.toString());
  }

  if (data && data.data && data.data.logUuid) {
    const camundaData = data.data;

    getContinueProcessCommonAction(props, data, businessKey, instanceId);
    getContinueProcessEconomicLicenseAction(props, data);

    return {
      businessKey,
      instanceId,
      state:
        camundaData.state && camundaData.state.value
          ? camundaData.state.value
          : '',
    };
  }
  return false;
};

const getSyncLicenseData = (data: IVariables, props: IVariables) => {
  const camundaData = data.data;
  let { economicLicense } = props;

  if (props.actions.economicLicense) {
    if (camundaData.licenceType) {
      economicLicense = {
        ...economicLicense,
        licenceType: {
          licenceType: camundaData.licenceType.value,
        },
      };
      props.actions.economicLicense.update(economicLicense);
    }

    if (camundaData.businessLegalFormCode) {
      economicLicense = {
        ...economicLicense,
        legalForm: {
          legalForm: getLegalFormFromCode(
            camundaData.businessLegalFormCode.value,
          ),
        },
      };
      props.actions.economicLicense.update(economicLicense);
    }
  }
};

export const syncLicenseTypeAndCode = async (props: IVariables) => {
  const { instanceId, businessKey } = props;
  if (instanceId && businessKey) {
    const processState = {
      processName: 'economicLicence',
      variables: ['businessLegalFormCode', 'licenceType'],
    };

    let data: IVariables = {};
    try {
      data = await bpm.getVariables(instanceId, processState);
    } catch (e) {
      //  console.log('Error fetching state', e.toString());
    }

    if (
      data &&
      data.data &&
      data.data.licenceType &&
      data.data.licenceType.value
    ) {
      getSyncLicenseData(data, props);

      return {
        businessKey,
        instanceId,
      };
    }
  }

  return false;
};
