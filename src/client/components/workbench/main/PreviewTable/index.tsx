import React, { memo } from 'react';
import { IVariables } from '@tamm/app-composer';
import Table from '@tamm/ui-lib-v2-table';
import Symbol from 'client/components/workbench/main/Symbol';

import isDate from 'lodash/isDate';
import deepMap from 'client/utils/workbench/deepMap';

const ID_FIELD = '_id';

function PreviewTable(props: IVariables) {
  const {
    i18n,
    columns,
    items,
    symbolActions,
    filterable,
    filterValue,
    selectedItems,
    ...rest
  } = props;

  const cols: IVariables[] = [
    ...symbolActions.filter((i: IVariables) => i.position === 'start'),
    ...columns,
    ...symbolActions.filter((i: IVariables) => i.position !== 'start'),
  ].map((column: IVariables) => ({
    ...column,
    id: column.id || column.name,
    title: column.title || column.label,
  }));

  let tableProps: any = {
    items: items.map((i: IVariables) => ({
      ...deepMap(i, (value: any) => {
        if (isDate(value)) {
          return value.toLocaleDateString();
        }
        return value;
      }),
      id: String(i[ID_FIELD]),
      selected: selectedItems && selectedItems.includes(String(i[ID_FIELD])),
    })),
  };

  if (filterable) {
    tableProps = {
      ...tableProps,
      filter: {
        value: filterValue,
        items: cols.map(i => ({
          id: i.id,
          label: i.title,
        })),
      },
    };
  }

  return (
    <Table
      {...rest}
      {...tableProps}
      i18n={i18n}
      columns={cols.map((column: any) => {
        if (column.renderType === 'symbol' && column.symbolId) {
          return {
            ...column,
            render: (_: any, recordId: string) => {
              const record = items.find(
                (i: IVariables) => i[ID_FIELD] === recordId,
              );
              return (
                <Symbol
                  definition={{
                    props: {
                      symbol: column.symbolId,
                    },
                  }}
                  symbolProps={{
                    recordId,
                    record,
                  }}
                  getSharedProps={props.getSharedProps}
                />
              );
            },
          };
        }

        return column;
      })}
    />
  );
}

PreviewTable.defaultProps = {
  items: [],
  columns: [],
  symbolActions: [],
  selectedItems: [],
};

export default memo(PreviewTable);
