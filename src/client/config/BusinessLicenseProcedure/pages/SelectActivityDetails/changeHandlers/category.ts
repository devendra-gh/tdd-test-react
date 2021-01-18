import { IVariables } from '@tamm/app-composer';
import { useFetchCategories } from '../helpers/useFetchCategories';

const handleChange = (
  value: string,
  state: IVariables,
  updateStore: Function,
) => {
  const newState = {
    ...state,
    subCategories: [],
    subCategory: '',
    loading: true,
    activity: '',
  };
  useFetchCategories(value, newState, updateStore);
  return newState;
};

export default handleChange;
