import fetch from 'client/services/fetch';

export const fetchCategories = async (locale: string) => {
  return fetch('/pub/proxy/goodsInquiry/getCategories', 'POST', {
    uuid: '',
    eid: '',
    language: locale,
  })
    .then(response => response.data)
    .catch(() => {
      throw new Error();
    });
};

export default fetchCategories;
