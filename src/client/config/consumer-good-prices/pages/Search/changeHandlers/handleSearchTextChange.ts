import { IVariables } from '@tamm/app-composer';
import { initialState } from 'client/config/consumer-good-prices/config';
import { fetchGoodsFromSearchText } from '../../../services';
import { getAlertTextAndStatus } from '../helpers/getAlertTextAndStatus';

export const handleSearchTextChange = async (
  searchText: string,
  props: IVariables,
  currentPage: number,
) => {
  const { actions, goodsList } = props;
  const { totalPages, recInPage, searchBy } = goodsList;
  const goodsListClone = {
    ...goodsList,
    searchText,
    showSpinner: true,
    showAlert: false,
    showTable: false,
    selectedGood: '',
    currentPage,
  };
  actions.goodsList.update(goodsListClone);

  try {
    const data = await fetchGoodsFromSearchText({
      currentPage,
      totalPages,
      recInPage,
      searchText,
    });

    const { batchDate, totalCount, list } = data;
    if (list && list.length) {
      // eslint-disable-next-line no-shadow
      const data = list.map((i: IVariables) => ({
        id: i.id,
        enName: i.itemNameEn,
        arName: i.itemNameAr,
        value: i.barCode,
      }));
      if (sessionStorage.getItem('searchBy') === searchBy) {
        // checking if searchBy changes during await
        actions.goodsList.update({
          ...goodsListClone,
          ...{
            // selectedGood: '',
            data,
            batchDate,
            totalCount,
            showTable: true,
            showSpinner: false,
            showAlert: false,
          },
        });
      }
    } else if (totalCount === 0) {
      throw new Error('errorMessage.noData');
    } else throw new Error();
  } catch (e) {
    if (sessionStorage.getItem('searchBy') === searchBy) {
      // checking if searchBy changes during await
      actions.goodsList.update({
        ...goodsListClone,
        ...{
          data: initialState.goodsList.data,
          batchDate: initialState.goodsList.batchDate,
          totalCount: initialState.goodsList.totalCount,
          showTable: false,
          showSpinner: false,
          showAlert: true,
          ...getAlertTextAndStatus(e),
        },
      });
    }
  }
};
