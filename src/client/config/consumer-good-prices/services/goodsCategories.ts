import fetch from 'client/services/fetch';
import { IVariables } from '@tamm/app-composer';

export const fetchGoodsFromCategory = async ({
  locale,
  selectedCategory,
}: IVariables) => {
  return fetch('/pub/proxy/goodsInquiry/getStoreItemByCategory', 'POST', {
    uuid: '',
    eid: '',
    language: locale,
    categoryName: selectedCategory,
  })
    .then(response => response.data)
    .catch(() => {
      throw new Error();
    });
};

export default fetchGoodsFromCategory;
