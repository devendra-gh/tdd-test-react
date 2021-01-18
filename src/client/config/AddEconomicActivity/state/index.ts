import bpm from 'client/services/bpm';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME_ADD_ECONOMIC_ACTIVITY } from '../constants';

/**
 * fetches state from BPM
 * @param {string} instanceId
 * @returns {string}
 */
async function fetchState(instanceId: string) {
  try {
    const data: IVariables = await bpm.state(
      PROCESS_NAME_ADD_ECONOMIC_ACTIVITY,
      instanceId,
      true,
    );
    if (!data.data) return false;
    if (data.data.value) {
      return data.data.value;
    }
  } catch (e) {
    console.info('Error fetching state', e.toString());
  }
  return false;
}

export default fetchState;
