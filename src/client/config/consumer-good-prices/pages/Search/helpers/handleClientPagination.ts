import { IVariables } from '@tamm/app-composer';

export const handleClientPagination = (
  props: IVariables,
  currentPage: number,
) => {
  const { actions, goodsList } = props;
  const { nonPaginatedData, recInPage } = goodsList;
  const data = nonPaginatedData.slice(
    (currentPage - 1) * recInPage,
    currentPage * recInPage,
  );
  actions.goodsList.update({
    ...goodsList,
    currentPage,
    // selectedGood: data[0].id,
    data,
  });
};
