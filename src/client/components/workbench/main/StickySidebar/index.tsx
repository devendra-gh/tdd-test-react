import React, { useCallback } from 'react';
import { IVariables } from '@tamm/app-composer';
import { has, noop, pickBy, isArray } from 'lodash';

import DLSStickySidebar from '@tamm/ui-lib-v2-sticky-sidebar';
import Checkbox from '@tamm/ui-lib-v2-checkbox';
import SearchInput from '@tamm/ui-lib-v2-search-input';
import DatePicker from '@tamm/ui-lib-v2-date-picker';

/* istanbul ignore file */

const FILTER_TYPES = {
  SEARCH: 'search',
  DATE_PICKER: 'datePicker',
  RANGE_PICKER: 'rangePicker',
  CHECKBOX: 'checkbox',
};

function StickySidebar(props: any) {
  const filterGroups = props?.filterProps?.filterGroups || [];

  const onChange = useCallback(
    (groupKey: string, itemKey: string) => {
      props.onChange({
        ...props.selected,
        [groupKey]: pickBy(
          {
            ...(props.selected[groupKey] || {}),
            [itemKey]: has(props.selected, groupKey)
              ? !props.selected[groupKey][itemKey]
              : true,
          },
          Boolean,
        ),
      });
    },
    [props.selected, props.onChange],
  );

  const onChangeAll = useCallback(
    (filter: IVariables) => {
      return () => {
        props.onChange({
          ...props.selected,
          [filter.key]: {},
        });
      };
    },
    [props.selected, props.onChange],
  );

  const onChangeSearch = useCallback(
    (value: string, key: string) => {
      props.onChange({
        ...props.selected,
        [key]: value,
      });
    },
    [props.selected, props.onChange],
  );

  const onSearch = useCallback(
    (name: string) => {
      return (value: string) => {
        props.onChange({
          ...props.selected,
          [name]: value,
        });
      };
    },
    [props.selected, props.onChange],
  );

  return (
    <DLSStickySidebar
      locale={props.locale}
      navigationProps={
        props.navigationProps && Object.keys(props.navigationProps).length > 0
          ? {
              ...props.navigationProps,
              onItemSelect: props.onItemSelect,
            }
          : null
      }
      filterProps={{
        filterGroups: filterGroups
          .filter((filter: IVariables) => {
            if (filter.type === 'checkbox') {
              return filter.items.length > 0;
            }
            return true;
          })
          .map((filter: IVariables) => {
            if (filter.type === FILTER_TYPES.SEARCH) {
              return {
                label: filter.label,
                items: [
                  <SearchInput
                    aria-label={filter.label}
                    placeholder={filter.placeholder}
                    value={props.selected[filter.key]}
                    name={filter.key}
                    onChange={val => onChangeSearch(val, filter.key)}
                    onSearch={onSearch(filter.key)}
                    onClear={onSearch(filter.key)}
                  />,
                ],
              };
            }

            if (filter.type === FILTER_TYPES.DATE_PICKER) {
              return {
                label: filter.label,
                items: [
                  <DatePicker
                    i18n={props.i18n}
                    id={filter.key}
                    name={filter.name}
                    value={
                      props.selected[filter.key]
                        ? new Date(props.selected[filter.key])
                        : ''
                    }
                    onChange={onSearch(filter.key)}
                    {...filter.datePickerProps}
                  />,
                ],
              };
            }

            if (filter.type === FILTER_TYPES.RANGE_PICKER) {
              return {
                label: filter.label,
                items: [
                  <DatePicker.Range
                    rangeSelection
                    i18n={props.i18n}
                    id={filter.key}
                    name={filter.name}
                    value={
                      isArray(props.selected[filter.key]) &&
                      props.selected[filter.key].length > 0
                        ? [
                            new Date(props.selected[filter.key][0]),
                            new Date(props.selected[filter.key][1]),
                          ]
                        : []
                    }
                    onChange={onSearch(filter.key)}
                    {...filter.datePickerProps}
                  />,
                ],
              };
            }

            const isAllSelected =
              !props.selected[filter.key] ||
              Object.keys(props.selected[filter.key]).length === 0;

            return {
              label: filter.label,
              items: [
                <div className="ui-lib-general-filter__checkbox">
                  <Checkbox
                    disabled={isAllSelected}
                    checked={isAllSelected}
                    label={props.i18n('all')}
                    onChange={onChangeAll(filter)}
                  />
                </div>,
                ...filter.items.map((item: IVariables) => (
                  <div className="ui-lib-general-filter__checkbox">
                    <Checkbox
                      checked={
                        !!(
                          props.selected[filter.key] &&
                          props.selected[filter.key][item.name]
                        )
                      }
                      label={item.name}
                      onChange={() => onChange(filter.key, item.name)}
                    />{' '}
                    <span>({item.count})</span>
                  </div>
                )),
              ],
            };
          }),
      }}
    />
  );
}

StickySidebar.defaultProps = {
  selected: {},
  i18n: noop,
  onChange: noop,
  onItemSelect: noop,
};

export default StickySidebar;
