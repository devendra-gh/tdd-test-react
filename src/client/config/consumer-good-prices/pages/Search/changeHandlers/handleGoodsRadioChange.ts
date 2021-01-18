import { IVariables } from '@tamm/app-composer';
import { find } from 'lodash';

export const handleGoodsRadioChange = (label: string, props: IVariables) => {
  const { actions, goodsList } = props;
  actions.goodsList.update({ ...goodsList, selectedGood: label });
  const item = find(props.goodsList.data, { id: label });
  props.actions.itemId.update(item.value);
};
