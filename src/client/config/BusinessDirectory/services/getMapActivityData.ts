import fetch from 'client/services/crossOriginFetch';

/* istanbul ignore file */

const arcgisHost = 'https://arcgis.sdi.abudhabi.ae';

/**
 * @param {Object} jsonData
 * @returns {Promise}
 */
const getMapActivityData = (jsonData: any = {}) => {
  const d = new Date();
  const url = `${arcgisHost}/agshost/rest/services/TAMM/CF_Commerce_And_Industry/MapServer/3/query?token=${
    jsonData.token
  }&where=NATURE_ACTIVITYEN+%3D+%27${
    jsonData.activities
  }%27&outFields=ACTIVITY_ID&returnDistinctValues=true&f=json&time=${d.getTime()}`;
  return fetch(url, 'GET')
    .then(resp => {
      return resp;
    })
    .catch(error => {
      console.error('arcgis.sdi.abudhabi.ae Error:', error);
      // throw error;
    });
};

export default getMapActivityData;
