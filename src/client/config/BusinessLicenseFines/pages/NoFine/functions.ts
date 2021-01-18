import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { PROCESS_NAME_BUSINESS_LICENCE_FINE } from '../../constants';
import { redirectToErrorPage } from '../../utils/redirect';
import { getAnalyticsData } from '../../utils/common';

/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const init = async (props: IVariables) => {
  getAnalyticsData('sla', { serviceStatus: 'success' });
  props.actions.formBusinessLicenceFine.update({
    ...props.formBusinessLicenceFine,
    isLoading: false,
  });
};

/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const onClick = async (props: IVariables) => {
  try {
    props.actions.formBusinessLicenceFine.update({
      ...props.formBusinessLicenceFine,
      isLoading: true,
    });
    await bpm.message(
      PROCESS_NAME_BUSINESS_LICENCE_FINE,
      {
        businessKey: props.businessKey,
        messageName: 'goBack',
      },
      true,
    );
  } catch (e) {
    redirectToErrorPage(props);
  }
};

export default {
  onClick,
  init,
};
