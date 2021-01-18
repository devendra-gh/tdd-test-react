import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { PROCESS_NAME_RENEW_LICENCE } from '../../constants';
import { PATH_ERROR } from '../../routes';
import { getAnalyticsData } from '../../utils/common';

const onSubmit = async (
  licenceNumber: string,
  stateHandlers: IVariables,
  props: IVariables,
) => {
  const {
    instanceId,
    businessKey,
    actions,
    form,
    currentStep,
    stepsStatus,
  } = props;
  getAnalyticsData('tra');
  if (!instanceId && !businessKey) {
    // If instanceId and businessKey present camunda will redirect to the correct route
    stateHandlers.setLoading(true);
    stateHandlers.setNetworkError('');
    actions.form.update({ ...form, licenceNo: licenceNumber });

    const getStartBPM = async () => {
      try {
        const data = await bpm.start(PROCESS_NAME_RENEW_LICENCE, {
          emiratesId: '{{IDN}}',
        });
        if (
          data.success &&
          data.data &&
          data.data.businessKey &&
          data.data.id
        ) {
          actions.instanceId.update(data.data.id);
          actions.businessKey.update(data.data.businessKey);
          const msgResponse = await bpm.message(PROCESS_NAME_RENEW_LICENCE, {
            businessKey: data.data.businessKey,
            messageName: 'msgEnterLicenceNumber',
            variables: {
              cnNumber: licenceNumber,
            },
          });
          if (msgResponse.success) {
            actions.stepsStatus.update({
              ...stepsStatus,
              [`${currentStep}`]: 'finish',
            });
          } else {
            throw Error('error');
          }
        } else {
          throw Error('error');
        }
      } catch (error) {
        if (error.message === 'error') {
          stateHandlers.setLoading(false);
        }
        props.history.push(PATH_ERROR);
      }
    };
    getStartBPM();
  } else if (instanceId && businessKey && typeof businessKey !== 'object') {
    const getMessageBPM = async () => {
      try {
        stateHandlers.setLoading(true);
        stateHandlers.setNetworkError('');
        const msgResponse = await bpm.message(PROCESS_NAME_RENEW_LICENCE, {
          businessKey,
          messageName: 'msgEnterLicenceNumber',
          variables: {
            cnNumber: licenceNumber,
          },
        });
        if (msgResponse.success) {
          actions.stepsStatus.update({
            ...stepsStatus,
            [`${currentStep}`]: 'finish',
          });
        } else {
          throw Error('error');
        }
      } catch (error) {
        if (error.message === 'error') {
          stateHandlers.setLoading(false);
        }
        props.history.push(PATH_ERROR);
      }
    };
    getMessageBPM();
  } else {
    stateHandlers.setLoading(false);
    props.history.push(PATH_ERROR);
  }
};

export default {
  onSubmit,
};
