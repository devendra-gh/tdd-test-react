import fetch from 'client/services/fetch';
import { IVariables } from '@tamm/app-composer';

export const fetchGoodsFromSearchText = async ({
  currentPage,
  recInPage,
  searchText,
}: IVariables) => {
  return fetch('/pub/proxy/goodsInquiry/searchStoreItems', 'POST', {
    searchText,
    offSet: recInPage * (currentPage - 1),
    size: recInPage,
    language: 'en',
  })
    .then(response => response.data)
    .catch(() => {
      throw new Error();
    });
};

export default fetchGoodsFromSearchText;
