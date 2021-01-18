import { IVariables } from '@tamm/app-composer';
import { handleClientPagination } from '../helpers/handleClientPagination';
import { handleSearchTextChange } from './handleSearchTextChange';

export const handlePageChange = async (
  currentPage: number,
  props: IVariables,
) => {
  const { goodsList } = props;
  const { searchText, searchBy } = goodsList;
  const list = document.getElementById('goods-list');
  // eslint-disable-next-line no-unused-expressions
  list && list.scrollIntoView({ behavior: 'smooth' });
  if (searchBy === 'product') {
    await handleSearchTextChange(searchText, props, currentPage);
  } else if (searchBy === 'category') {
    handleClientPagination(props, currentPage);
  }
};
