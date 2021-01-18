import { get } from 'lodash';
import fetch from 'client/services/fetch';

const fetchLegalForms = async () => {
  return fetch('/pub/proxy/getLegalTypes', 'POST', {})
    .then(response => {
      const legalform = get(response, 'data.legalform.legalform', null);
      if (legalform && legalform.length) {
        return legalform;
      }
      throw new Error('No sufficient data');
    })
    .catch(err => {
      throw err;
    });
};

export default fetchLegalForms;
