import bpm from 'client/services/bpm';
import { IVariables } from '@tamm/app-composer';

/**
 * fetches state from BPM
 * @param {string} instanceId
 * @returns {string}
 */
async function fetchState(instanceId: string) {
  try {
    const data: IVariables = await bpm.state(
      'business-licence-fine',
      instanceId,
      true,
    );
    if (!data.data) return false;
    if (data.data.value) {
      return data.data.value;
    }
  } catch (e) {
    // console.log('Error fetching state', e.toString());
  }
  return false;
}

export default fetchState;
