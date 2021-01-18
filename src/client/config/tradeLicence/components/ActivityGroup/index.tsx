import React, { useCallback, useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { IVariables } from '@tamm/app-composer';
import classNames from 'classnames';
import { find, findIndex } from 'lodash';
import {
  getCategories,
  getSubcategories,
} from 'client/config/utils/activityCategories';
import useDebounce from 'client/config/hooks/useDebounce';
import useUpdate from 'client/config/hooks/useUpdate';

import Grid from '@tamm/ui-lib-v2-grid';
import Select from '@tamm/ui-lib-v2-select';
import SearchInput from '@tamm/ui-lib-v2-search-input';
import Tabs from '@tamm/ui-lib-v2-tabs';
import Checkbox from '@tamm/ui-lib-v2-checkbox';
import CheckboxGroup from '@tamm/ui-lib-v2-checkbox-group';
import Spinner from '@tamm/ui-lib-v2-spinner';
import Pagination from '@tamm/ui-lib-v2-pagination';

import './ActivityGroup.less';

const { Row, Col } = Grid;

const pageSize = 12;

/**
 * ActivityGroup component
 * @param {Object} props
 * @returns {JSX}
 */
function ActivityGroup(props: IVariables) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 200);
  const [activeTab, setActiveTab] = useState('');

  const {
    i18n,
    showTabs,
    selected,
    activities,
    categories,
    onItemClick,
    locale,
    updateSearchData,
    showCategories,
    disableCategories,
    activityCategory,
    activitySubCategory,
  } = props;

  useUpdate(() => {
    const category = categories.find((i: IVariables) => i.value === activeTab);
    props.getActivities(
      category ? category.nameEn : null,
      1,
      debouncedSearchTerm,
    );
  }, [debouncedSearchTerm]);

  useEffect(() => {
    props.getActivities(null);
  }, [activityCategory, activitySubCategory]);

  const onSearch = (value: string) => {
    setSearchTerm(value);
  };

  const onChangeTab = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
    const category = categories.find((i: IVariables) => i.value === tab);
    if (category) {
      props.getActivities(category.nameEn);
      props.actions.currentCategory.update(category);
    }
  };

  const onChange = (field: string) => {
    return (value: string) => {
      const searchableField = field !== 'all' ? field : '';
      const searchableValue = value !== 'all' ? value : '';
      updateSearchData(searchableField, searchableValue);
    };
  };

  const onChangePage = useCallback(
    page => {
      setCurrentPage(page);
      const category = categories.find(
        (i: IVariables) => i.value === activeTab,
      );
      props.getActivities(category ? category.nameEn : null, page);
    },
    [currentPage],
  );

  const renderContent = () => {
    return (
      <div
        className={classNames('ui-lib-margin-t_md', 'ActivityGroup__content', {
          fullHeight: activities.isLoading || activities.items.length > 0,
        })}
      >
        {activities.isLoading && (
          <div className="ActivityGroup__content-loading">
            <Spinner type="circle" />
          </div>
        )}
        {!activities.isLoading && activities.items.length === 0 && (
          <h6>{i18n('noAvailableActivities')}</h6>
        )}
        <Row gutter={20}>
          {activities.items.map((activity: any) => {
            const index = findIndex(
              selected,
              (i: IVariables) => i.activityCode === activity.activityCode,
            );
            return (
              <Col key={activity.activityCode} xs={6}>
                <div className="ui-lib-margin-b_md">
                  <Checkbox
                    checked={index !== -1}
                    label={
                      locale === 'en'
                        ? activity.activityNameEn
                        : activity.activityNameAr
                    }
                    name="checkbox"
                    onChange={() => {
                      onItemClick(activity);
                    }}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  };

  return (
    <div className="ActivityGroup">
      <div className="ui-lib-margin-b_md">
        <SearchInput
          aria-label="search"
          name="search"
          onChange={onSearch}
          onClear={() => {
            // console.log('--clear---');
          }}
        />
      </div>
      {showCategories && (
        <Row gutter={20} flex>
          <Col xs={12} sm={6} className="ActivityGroup__mt-1">
            <div className="ui-lib-margin-b_md">
              <Select
                i18n={i18n}
                items={[
                  {
                    id: 'all',
                    label: i18n('global.all'),
                  },
                  ...getCategories(locale),
                ]}
                label={i18n('activity.category')}
                onChange={onChange('activityCategory')}
                showSearch
                value={activityCategory || 'all'}
                disabled={disableCategories}
              />
            </div>
          </Col>
          <Col xs={12} sm={6} className="ActivityGroup__mt-1">
            <div className="ui-lib-margin-b_md">
              <Select
                i18n={i18n}
                items={[
                  {
                    id: 'all',
                    label: i18n('global.all'),
                  },
                  ...getSubcategories(locale, activityCategory),
                ]}
                label={i18n('activity.sub-category')}
                onChange={onChange('activitySubCategory')}
                showSearch
                disabled={disableCategories}
                value={activitySubCategory || 'all'}
              />
            </div>
          </Col>
        </Row>
      )}
      {showTabs && (
        <Tabs
          activeTabId={activeTab || props.categories[0].value}
          onChange={onChangeTab}
        >
          {categories.map((item: IVariables) => (
            <Tabs.Panel
              key={item.value}
              id={item.value}
              label={locale === 'en' ? item.nameEn : item.nameAr}
            >
              {renderContent()}
            </Tabs.Panel>
          ))}
        </Tabs>
      )}
      {!showTabs && renderContent()}
      {!activities.isLoading && activities.totalItems > pageSize && (
        <div className="ActivityGroup__pagination">
          <Pagination
            current={currentPage}
            i18n={i18n}
            onChange={onChangePage}
            pageSize={pageSize}
            total={activities.totalItems}
          />
        </div>
      )}
      <h6 className="ActivityGroup__selected-title ui-lib-margin-t_md">
        {i18n('activities.selectedActivities')} ({selected.length})
      </h6>
      <CheckboxGroup
        align="vertical"
        i18n={i18n}
        items={selected.map((activity: IVariables) => {
          return {
            checked: true,
            label:
              locale === 'en'
                ? activity.activityNameEn
                : activity.activityNameAr,
            name: activity.activityCode,
          };
        })}
        onChange={e => {
          const activity = find(
            selected,
            (i: IVariables) => i.activityCode === e.target.name,
          );

          onItemClick(activity);
        }}
      />
    </div>
  );
}

ActivityGroup.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activities: PropTypes.shape({
    isLoading: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ActivityGroup;
