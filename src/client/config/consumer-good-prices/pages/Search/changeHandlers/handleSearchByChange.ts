import { IVariables } from '@tamm/app-composer';
import { handleSearchTextChange } from './handleSearchTextChange';
import { loadCategories } from '../helpers/loadCategories';
import { handleCategoryChange } from './handleCategoryChange';

export const handleSearchByChange = async (
  searchBy: string,
  props: IVariables,
) => {
  const { actions, goodsList, locale } = props;
  const {
    searchText,
    categories,
    selectedCategory,
    loadedCategoriesLocale,
  } = goodsList;

  const goodsListClone = {
    ...goodsList,
    searchBy,
    showTable: false,
    showAlert: false,
    showSpinner: false,
    selectedGood: '',
  };

  actions.goodsList.update(goodsListClone);
  const propsClone = { ...props, goodsList: goodsListClone };
  sessionStorage.setItem('searchBy', searchBy); // for checking searchBy in handleSearchTextChange, handleCategoryChange
  if (searchBy === 'category') {
    if (!categories.length || loadedCategoriesLocale !== locale) {
      loadCategories(propsClone);
    } else if (selectedCategory) {
      handleCategoryChange(selectedCategory, propsClone);
    }
  } else if (searchBy === 'product') {
    if (searchText.length >= 3) {
      handleSearchTextChange(searchText, propsClone, 1);
    }
  }
};
