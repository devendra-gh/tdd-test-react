import { IVariables } from '@tamm/app-composer';
import { useFetchCategories } from '../helpers/useFetchCategories';
import { useFetchActivities } from '../helpers/useFetchActivities';

const useFetchActivitiesHandler = (
  value: any,
  state: any,
  newState: IVariables,
  updateStore: Function,
) => {
  useFetchActivities(
    {
      category: value === 'CATEGORY' && state.category,
      subCategory: value === 'CATEGORY' && state.subCategory,
      searchText: value === 'NAME' && state.searchText,
    },
    newState,
    updateStore,
  );
};

const handleChange = (
  value: string,
  state: IVariables,
  updateStore: Function,
) => {
  const newState: IVariables = {
    ...state,
    activity: '',
  };
  if (
    (value === 'CATEGORY' && state.category && state.subCategory) ||
    (value === 'NAME' && state.searchText && state.searchText.length >= 3)
  ) {
    newState.loading = true;
    useFetchActivitiesHandler(value, state, newState, updateStore);
  } else if (value === 'CATEGORY' && !state.showCategories) {
    newState.loading = true;
    useFetchCategories(undefined, state, updateStore);
  }
  return newState;
};

export default handleChange;
