import bpm from 'client/services/bpm';
import { IVariables } from '@tamm/app-composer';
import { PROCESS_NAME_WORKBENCH } from '../constants';

let unauthorizedCount = 0;
function setUnAuthorizedCount() {
  if (window && localStorage) {
    if (unauthorizedCount >= 5) {
      localStorage.setItem('forceRedirect', window.location.href);
      window.location.href = '/login';
    } else {
      unauthorizedCount += 1;
    }
  }
}
/**
 * fetches state from BPM
 * @param {string} instanceId
 * @returns {string}
 */
async function fetchState(instanceId: string) {
  try {
    const data: IVariables = await bpm.state(
      PROCESS_NAME_WORKBENCH,
      instanceId,
    );
    if (!data.data) return false;
    if (data && data.data && data.data.value) {
      unauthorizedCount = 0;
      return data.data.value;
    }
    // when logged out set forceRedirect to current path and redirect to login page
    if (data && data.message && data.message === 'Unauthorized') {
      setUnAuthorizedCount();
    }
  } catch (e) {
    // eslint-disable-next-line
    console.log('Error fetching state', e.toString());
  }
  return false;
}

export default fetchState;
