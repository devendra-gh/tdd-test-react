import fetch from 'client/services/fetch';
import { IVariables } from '@tamm/app-composer';

const fetchGoodsDetail = async ({ barCode }: IVariables) => {
  return fetch('/pub/proxy/goodsInquiry/getItem', 'POST', {
    barCode,
  })
    .then(response => response.data)
    .catch(err => err);
};

export default fetchGoodsDetail;
