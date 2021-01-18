import { IVariables } from '@tamm/app-composer';
import {
  handleInputTypeChange,
  handleCategoryChange,
  handleSubCategoryChange,
  handleSearchTextChange,
  handlePageChange,
} from './changeHandlers/index';
import { initialState } from '../../config';
import { useFetchCategories } from './helpers/useFetchCategories';

const getInitialState = async (props: IVariables) => {
  const { actions } = props;
  const { formSelectActivity } = initialState;
  const updateStore = actions.formSelectActivity.update;
  updateStore(initialState.formSelectActivity);
  useFetchCategories(undefined, formSelectActivity, updateStore);
};

const onSubmit = async (props: IVariables) => {
  props.history.push('/business-licence-procedure/licence-information');
};

const onChange = async (
  type: string | number,
  value: string,
  props: IVariables,
) => {
  const { actions, formSelectActivity } = props;
  let formStateClone = {
    ...formSelectActivity,
    [type]: value,
    activities: [],
    // activity: '',
    showError: false,
    loading: false,
    showTable: false,
  };
  const updateStore = actions.formSelectActivity.update;

  switch (type) {
    case 'inputType': {
      formStateClone = handleInputTypeChange(
        value,
        formStateClone,
        updateStore,
      );
      break;
    }
    case 'category': {
      formStateClone = handleCategoryChange(value, formStateClone, updateStore);
      break;
    }
    case 'subCategory': {
      formStateClone = handleSubCategoryChange(
        value,
        formStateClone,
        updateStore,
      );
      break;
    }
    case 'searchText': {
      formStateClone = handleSearchTextChange(
        value,
        formStateClone,
        updateStore,
      );
      break;
    }
    case 'page': {
      formStateClone = handlePageChange(Number(value), formStateClone);
      break;
    }
    case 'activity': {
      formStateClone = { ...formSelectActivity, [type]: value };
      break;
    }
    default:
      break;
  }
  actions.formSelectActivity.update(formStateClone);
};

export default {
  onSubmit,
  onChange,
  getInitialState,
};
