import { IVariables } from '@tamm/app-composer';
import { getAnalyticsData } from '../../utils/common';
/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const onClick = async (props: IVariables) => {
  props.history.push('/pay-application-fees/check-application');
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
  props.actions.form.update({
    licenceNo: '',
    isLoading: false,
  });
};
export default {
  onClick,
  init,
};
