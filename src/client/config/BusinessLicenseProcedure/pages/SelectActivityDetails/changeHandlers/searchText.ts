import { IVariables } from '@tamm/app-composer';
import { useFetchActivities } from '../helpers/useFetchActivities';

const handleInputTypeChange = (
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
    { category: undefined, subCategory: undefined, searchText: value },
    newState,
    updateStore,
  );
  return newState;
};

export default handleInputTypeChange;
