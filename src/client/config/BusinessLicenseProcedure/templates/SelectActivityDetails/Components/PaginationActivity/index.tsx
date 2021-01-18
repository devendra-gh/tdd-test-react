import React from 'react';
import { IVariables } from '@tamm/app-composer';
import Pagination from '@tamm/ui-lib-v2-pagination';
import { noRefCheck } from 'client/config/BusinessLicenseProcedure/utils';

function PaginationActivity(props: IVariables) {
  const { formSelectActivity } = props;
  const {
    activitiesCurrentPage,
    activitiesRecInPage,
    activitiesTotalCount,
    showTable,
  } = formSelectActivity;
  return (
    <>
      {activitiesTotalCount / activitiesRecInPage > 1 && showTable && (
        <>
          <Pagination
            current={activitiesCurrentPage}
            disabled={false}
            i18n={noRefCheck}
            pageSize={activitiesRecInPage}
            total={activitiesTotalCount}
            onChange={(currentPage: number) => {
              props.onChange('page', currentPage, props);
            }}
          />
        </>
      )}
    </>
  );
}

export default PaginationActivity;
