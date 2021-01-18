import fetch from 'client/services/fetch';

/* istanbul ignore file */

// eslint-disable-next-line no-var
var userEsriToken = '';

const getToken = async () => {
  if (window.location.href.indexOf('http://localhost') === 0) {
    return 'LJ1iDPd5-QZmswEupgmpKWeZvqKEhq5uXk76EataLIuhISH2FNzkivsS32i4oWFoo47Pg9P4kWFVUlW3W3xc5vdKFBrJvAMQ40IqXegY6RnTtZ8oJePvreHfQzie8BpRoRh039ZnXXFl87LhX436wUhN5YWIfbLkqImxaWA10MI.';
  }
  if (window.location.hostname === 'stage.tamm.abudhabi') {
    if (userEsriToken) {
      console.info('Using cached user ESRI token...');
      return userEsriToken;
    }
    console.info('Asking the user for the ESRI token...');
    let token: string | null = '';
    while (!token) {
      // eslint-disable-next-line no-alert
      token = window.prompt('Please, supply the ESRI token...');
    }
    userEsriToken = token;
    return token;
  }
  console.info('Getting the ESRI token from internal API...');
  return fetch('/pub/esri/getToken', 'GET')
    .then(response => {
      if (response.status === 'success') {
        return response.data;
      }
      return '';
    })
    .catch(err => err);
};

export default getToken;
