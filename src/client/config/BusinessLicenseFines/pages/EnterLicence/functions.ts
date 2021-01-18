import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { PROCESS_NAME_BUSINESS_LICENCE_FINE } from '../../constants';
import { redirectToErrorPage } from '../../utils/redirect';
import { getAnalyticsData } from '../../utils/common';

const init = async (props: IVariables) => {
  props.actions.formBusinessLicenceFine.update({
    licenceNo: '',
    isLoading: false,
  });
};

const onSubmitHandlerStartBPM = async (
  licenceNumber: string,
  props: IVariables,
) => {
  try {
    props.actions.formBusinessLicenceFine.update({
      ...props.formBusinessLicenceFine,
      isLoading: true,
    });
    getAnalyticsData('tra');
    const data = await bpm.start(PROCESS_NAME_BUSINESS_LICENCE_FINE, {}, true);

    if (data.success && data.data && data.data.businessKey && data.data.id) {
      props.actions.instanceId.update(data.data.id);
      props.actions.businessKey.update(data.data.businessKey);
      await bpm.message(
        PROCESS_NAME_BUSINESS_LICENCE_FINE,
        {
          businessKey: data.data.businessKey,
          messageName: 'addLicenceNumber',
          variables: {
            tradeLicenseNumber: licenceNumber,
          },
        },
        true,
      );
    } else {
      props.actions.formBusinessLicenceFine.update({
        ...props.formBusinessLicenceFine,
        isLoading: false,
      });
      redirectToErrorPage(props);
    }
  } catch (e) {
    props.actions.formBusinessLicenceFine.update({
      ...props.formBusinessLicenceFine,
      isLoading: false,
    });
    redirectToErrorPage(props);
  }
};

const onSubmit = async (licenceNumber: string, props: IVariables) => {
  props.actions.formBusinessLicenceFine.update({ licenceNo: licenceNumber });

  if (!props.instanceId || !props.businessKey) {
    onSubmitHandlerStartBPM(licenceNumber, props);
  } else if (
    props.instanceId &&
    props.businessKey &&
    typeof props.businessKey === 'string'
  ) {
    props.actions.formBusinessLicenceFine.update({
      ...props.formBusinessLicenceFine,
      isLoading: true,
    });
    await bpm.message(
      PROCESS_NAME_BUSINESS_LICENCE_FINE,
      {
        businessKey: props.businessKey,
        messageName: 'addLicenceNumber',
        variables: {
          tradeLicenseNumber: licenceNumber,
        },
      },
      true,
    );
  }
};

const onChange = (licenceNumber: string, props: IVariables) => {
  props.actions.formBusinessLicenceFine.update({
    ...props.formBusinessLicenceFine,
    licenceNo: licenceNumber,
  });
};

export default {
  onSubmit,
  init,
  onChange,
};
