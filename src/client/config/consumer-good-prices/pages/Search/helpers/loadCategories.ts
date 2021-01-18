import { IVariables } from '@tamm/app-composer';
import { fetchCategories } from '../../../services';

export const loadCategories = async (props: IVariables) => {
  const { actions, goodsList, locale } = props;
  const goodsListClone = {
    ...goodsList,
    loadedCategoriesLocale: locale,
    showSpinner: true,
    // selectedGood: '',
  };
  actions.goodsList.update(goodsListClone);
  try {
    const data = await fetchCategories(props.locale);
    const { categories } = data;
    if (categories && categories.length) {
      actions.goodsList.update({
        ...goodsListClone,
        ...{
          categories: categories.map((i: string) => ({ id: i, label: i })),
          showSpinner: false,
          showCategories: true,
        },
      });
    } else throw new Error();
  } catch (e) {
    actions.goodsList.update({
      ...goodsListClone,
      ...{
        showSpinner: false,
        showAlert: true,
        alertText: 'errorMessage.network',
        alertStatus: 'error',
      },
    });
  }
};
