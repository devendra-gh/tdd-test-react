import { get } from 'lodash';
import fetch from 'client/services/fetch';

const fetchCategories = async (natureId?: string | undefined) => {
  return fetch('/pub/proxy/getBusinessCategories', 'POST', {
    natureId: natureId || '',
  })
    .then(response => {
      const categories = get(
        response,
        'data.businessCategories.businessCategories',
        null,
      );
      if (categories && categories.length) {
        return categories;
      }
      if (categories && categories.description && categories.descriptionAr) {
        return [categories];
      }
      throw new Error('No sufficient data');
    })
    .catch(err => {
      throw err;
    });
};

export default fetchCategories;
