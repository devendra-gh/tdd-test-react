import permitConfigs from 'client/config/permits/permitConfigs';
import { IVariables } from '@tamm/app-composer';
import { PERMIT_FOOD_TRUCK } from './constants/permits';
import { PERMIT_TYPE_EVENT } from './getPermitTypes';

const PermitConfigs: { [key: string]: any } = permitConfigs;

const checkIfMultiStepPermit = (props: IVariables) => {
  try {
    const { serviceType, permitInfo } = props;
    const serviceConfig = PermitConfigs[serviceType];
    if (serviceConfig) {
      const { permitDetails } = permitInfo[serviceType];
      if (
        serviceType === PERMIT_FOOD_TRUCK &&
        permitDetails.permitType === PERMIT_TYPE_EVENT
      ) {
        return false;
      }
      return serviceConfig.requiresEntityApproval;
    }
    return false;
  } catch (e) {
    return false;
  }
};
export default checkIfMultiStepPermit;
