/* eslint-disable complexity */
import { IVariables } from '@tamm/app-composer';
import {
  PROCESS_NAME,
  TOTAL_CHUNKS_COUNT,
  fetchVariableError,
} from 'client/config/amendments/constants';
import bpm from 'client/services/bpm';
import * as functions from 'client/config/amendments/utils/functions';

import { getReduxState, updateReduxState } from '../services';

const updateReduxStoreInDB = async (props: IVariables) => {
  if (props.dbAmendmentId && props.logUuid) {
    try {
      const payload = {
        dbAmendmentId: props.dbAmendmentId,
        applicationStatus:
          props.applicationStatus || 'application not submitted',
        logUuid: props.logUuid,
        reduxState: functions.getReduxState(props),
      };
      await updateReduxState(payload);
    } catch (e) {
      // console.log('error occured', e);
    }
  }
};

const setReduxState = async (
  instanceId: string,
  businessKey: string,
  props: IVariables,
) => {
  const processState = {
    processName: PROCESS_NAME,
    variables: [
      // all required variables do not remove
      // this are some important variable that we will need to any application to continue
      'state',
      'emiratesId',
      'dbAmendmentId',
      'documents1',
      'documents2',
      'documents3',
      'documents4',
      'documents5',
    ],
  };

  let data: IVariables = {};
  try {
    data = await bpm.getVariables(instanceId, processState);
    if (data && data.message === fetchVariableError) {
      updateReduxStoreInDB({
        ...props,
        applicationStatus: 'Closed',
        logUuid: '123', // need to check for this.
      });
      return 'commundaError';
    }
    const camundaData = data.data || {};
    const state =
      camundaData.state && camundaData.state.value
        ? camundaData.state.value
        : '';
    const emiratesId =
      camundaData.emiratesId && camundaData.emiratesId.value
        ? camundaData.emiratesId.value
        : '';
    const dbAmendmentId =
      camundaData.dbAmendmentId && camundaData.dbAmendmentId.value
        ? camundaData.dbAmendmentId.value
        : '';
    if (state && emiratesId && dbAmendmentId && props.user.IDN === emiratesId) {
      // fetch redux from io
      const response = await getReduxState({
        dbAmendmentId,
      });

      const { reduxState } = response.amendmentById;

      if (reduxState) {
        props.actions.businessKey.update(businessKey);
        props.actions.instanceId.update(instanceId);

        try {
          Object.keys(reduxState).forEach((reduxKey: string) => {
            const reduxItemValue = reduxState[reduxKey];
            if (props.actions[reduxKey]) {
              props.actions[reduxKey].update(reduxItemValue);
            }
          });
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log('Error updating redux values', e.toString());
        }

        // make documents array
        let documents: IVariables[] = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i <= TOTAL_CHUNKS_COUNT; i++) {
          if (
            camundaData[`documents${i}`] &&
            camundaData[`documents${i}`].value
          ) {
            let documentChunk: IVariables[] = [];
            try {
              documentChunk = JSON.parse(camundaData[`documents${i}`].value);
            } catch (e) {
              documentChunk = [];
            }
            documents = documents.concat(documentChunk);
          }
        }
        props.actions.documents.update(documents);
        return state;
      }
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error fetching variable', e.toString());
  }
  return '';
};

export { setReduxState, updateReduxStoreInDB };
