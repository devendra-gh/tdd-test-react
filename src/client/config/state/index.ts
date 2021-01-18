/* eslint-disable complexity */
import bpm from 'client/services/bpm';
import { IVariables } from '@tamm/app-composer';

/**
 * fetches state from BPM
 * @param {string} instanceId
 * @returns {string}
 */
async function fetchState(instanceId: string) {
  try {
    const data: IVariables = await bpm.state('economicLicence', instanceId);
    // eslint-disable-next-line
    // console.log('DATA state -->', data);
    if (!data.data) return false;
    if (data && data.data && data.data.value) {
      return data.data.value;
    }
    // when logged out set forceRedirect to current path and redirect to login page
    if (data && data.message && data.message === 'Unauthorized') {
      if (window && localStorage) {
        localStorage.setItem('forceRedirect', window.location.href);
        window.location.reload(); // it will automatically redirect to login page and also in props user will updated as null
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (e) {
    // eslint-disable-next-line
    // console.log('Error fetching state', e.toString());
  }
  return false;
}

export default fetchState;
