import { IVariables } from '@tamm/app-composer';
import { useFetchActivities } from '../helpers/useFetchActivities';

const handleChange = (
  value: string,
  state: IVariables,
  updateStore: Function,
) => {
  const newState = {
    ...state,
    loading: true,
    activity: '',
  };
  useFetchActivities(
    { category: state.category, subCategory: value, searchText: undefined },
    newState,
    updateStore,
  );
  return newState;
};

export default handleChange;
