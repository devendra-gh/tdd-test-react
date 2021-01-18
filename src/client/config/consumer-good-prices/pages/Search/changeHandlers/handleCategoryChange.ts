import { IVariables } from '@tamm/app-composer';
import { initialState } from 'client/config/consumer-good-prices/config';
import { fetchGoodsFromCategory } from '../../../services/goodsCategories';
import { getAlertTextAndStatus } from '../helpers/getAlertTextAndStatus';

export const handleCategoryChange = async (
  selectedCategory: string,
  props: IVariables,
) => {
  const { actions, goodsList, locale } = props;
  const goodsListClone = {
    ...goodsList,
    selectedCategory,
    showSpinner: true,
    showAlert: false,
    showTable: false,
    selectedGood: '',
  };
  actions.goodsList.update(goodsListClone);

  try {
    const list = await fetchGoodsFromCategory({
      locale,
      selectedCategory,
    });
    if (list && list.length) {
      const nonPaginatedData = list.map((i: IVariables) => ({
        id: i.id,
        enName: i.itemNameEn,
        arName: i.itemNameAr,
        value: i.barCode,
      }));
      if (sessionStorage.getItem('searchBy') === goodsList.searchBy) {
        // checking if searchBy changes during await
        actions.goodsList.update({
          ...goodsListClone,
          ...{
            nonPaginatedData,
            data: nonPaginatedData.slice(0, goodsList.recInPage),
            // selectedGood: '',
            batchDate: list[0].storeItemJob.collectionDate,
            totalCount: list.length,
            showTable: true,
            currentPage: 1,
            showSpinner: false,
            showAlert: false,
          },
        });
      }
    } else if (list && list.length === 0) {
      throw new Error('errorMessage.noData');
    } else throw new Error();
  } catch (e) {
    if (sessionStorage.getItem('searchBy') === goodsList.searchBy) {
      // checking if searchBy changes during await
      actions.goodsList.update({
        ...goodsListClone,
        ...{
          data: initialState.goodsList.data,
          batchDate: initialState.goodsList.batchDate,
          totalCount: initialState.goodsList.totalCount,
          showTable: false,
          currentPage: 1,
          showSpinner: false,
          showAlert: true,
          ...getAlertTextAndStatus(e),
        },
      });
    }
  }
};
