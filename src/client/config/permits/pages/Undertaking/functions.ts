import { IVariables } from '@tamm/app-composer';
import PermitConfigs from 'client/config/permits/permitConfigs';
import baseUrl from 'client/utils/baseUrl';
import { PATH_APPLICATION_DETAILS } from '../../utils/constants/pageRoutes';

const permitConfigs: { [key: string]: any } = PermitConfigs;

interface IServiceConfig {
  name: string;
  category: string;
  requiresUndertakingApproval: boolean;
}

const onInit = (props: IVariables) => {
  const { serviceName } = props.match.params;
  const { serviceType, permitType } = props;
  if (serviceName === '' && serviceType === '') {
    window.location.href = baseUrl;
  } else {
    const serviceConfig =
      serviceName === ''
        ? permitConfigs[serviceType]
        : permitConfigs[serviceName];
    if (serviceConfig) {
      const {
        category,
        requiresUndertakingApproval,
        name: serviceNameConfig,
      } = serviceConfig;
      if (permitType !== category) props.actions.permitType.update(category);
      if (serviceType !== serviceNameConfig)
        props.actions.serviceType.update(serviceNameConfig);
      if (!requiresUndertakingApproval)
        props.history.push(`/${serviceNameConfig}${PATH_APPLICATION_DETAILS}`);
    } else window.location.href = baseUrl;
  }
};

const handleToggleCheckbox = (props: IVariables) => {
  const { serviceType, permitInfo } = props;
  props.actions.permitInfo.update({
    ...permitInfo,
    [serviceType]: {
      ...permitInfo[serviceType],
      undertaking: {
        ...permitInfo[serviceType].undertaking,
        isApproved: !permitInfo[serviceType].undertaking.isApproved,
      },
    },
  });
};
const onCancelClick = (e: Event, props: IVariables) => {
  const { serviceType, permitInfo } = props;
  props.actions.permitInfo.update({
    ...permitInfo,
    [serviceType]: {
      ...permitInfo[serviceType],
      undertaking: {
        ...permitInfo[serviceType].undertaking,
        isApproved: false,
      },
    },
  });
};
const onSubmit = (e: Event, props: IVariables) => {
  const { serviceType, permitInfo } = props;
  const { requiresUndertakingApproval } = permitConfigs[serviceType];
  const { undertaking } = permitInfo[serviceType];
  props.actions.permitInfo.update({
    ...permitInfo,
    [serviceType]: {
      ...permitInfo[serviceType],
      undertaking: {
        ...permitInfo[serviceType].undertaking,
        showError: !undertaking.isApproved,
      },
    },
  });

  if (requiresUndertakingApproval && undertaking.isApproved) {
    props.history.push(`/${serviceType}${PATH_APPLICATION_DETAILS}`);
  }
};
export default { onInit, handleToggleCheckbox, onSubmit, onCancelClick };
