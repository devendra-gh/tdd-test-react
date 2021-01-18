import { IVariables } from '@tamm/app-composer';
import { getAnalyticsData } from '../../utils/common';
/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const onClick = async (props: IVariables) => {
  props.history.push('/business-licence-fine/enter-licence');
  props.actions.instanceId.update('');
  props.actions.businessKey.update('');
};

/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const init = async (props: IVariables) => {
  getAnalyticsData('sla', { serviceStatus: 'fail' });
  props.actions.formBusinessLicenceFine.update({
    licenceNo: '',
    isLoading: false,
  });
};
export default {
  onClick,
  init,
};
