import { IVariables } from '@tamm/app-composer';
import { fetchGoodsDetail } from '../../../services';

const getDetails = async (props: IVariables, barCode: string) => {
  const data = await fetchGoodsDetail({
    barCode,
  });
  return data;
};

export default getDetails;
