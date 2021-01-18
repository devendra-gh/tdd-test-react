import React, { useState, useEffect } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';
import Grid from '@tamm/ui-lib-v2-grid';
import Button from '@tamm/ui-lib-v2-button';
import Filter from '@tamm/ui-lib-v2-filter';
import CheckboxGroup from '@tamm/ui-lib-v2-checkbox-group';
import Checkbox from '@tamm/ui-lib-v2-checkbox';
import Table from '@tamm/ui-lib-v2-table';
import Dropdown from '@tamm/ui-lib-v2-dropdown';
import { orderBy, uniqBy, drop } from 'lodash';
import Spinner from '@tamm/ui-lib-v2-spinner';
import Pagination from '@tamm/ui-lib-v2-pagination';
import { spacer } from '../../utils';

import './override.less';

// const transformString = (phrase: string, text: object) => {
//   return <div style={{ height: phrase }} />;
// };
interface ICheckboxes {
  id: number;
  En: string;
  Ar: string;
  value: string;
  checked: boolean;
  label: string;
}
interface IResponse {
  id: string;
  itemNameEn: string;
  itemNameAr: string;
  storeEn: string;
  storeAr: string;
  barcode: string;
  barcodeType: string;
  storeItemJobId: string;
  locationEn: string;
  locationAr: string;
  price: number;
  collectionDate: string;
  mainCategoryEn: string;
  mainCategoryAr: string;
  subCategoryEn: string;
  subCategoryAr: string;
  detailedCategoryEn: string;
  detailedCategoryAr: string;
  storeItemJob: {
    id: string;
    startDate: string;
    endDate: null;
    active: true;
    status: 1;
    collectionDate: string;
  };
}
function Details(props: IVariables) {
  const { i18n, description, locale, currentGoods } = props;
  const [subTitle, setSubTitle] = useState();
  const [retailers, setRetailers] = useState<ICheckboxes[]>([]);
  const [locations, setLocations] = useState<ICheckboxes[]>([]);
  const [list, setList] = useState<IResponse[]>([]);
  const [paginatelist, setPaginatelist] = useState<IResponse[]>([]);
  const [sortOrder, setSortOrder] = useState<boolean | 'asc' | 'desc'>(false);
  const [page, setPage] = useState(1);
  // const [response] = useState(props.currentGoods);
  const pageSize = 10;
  const { Col, Row } = Grid;

  const handlePagination = (pageNumber: number, data: IResponse[]) => {
    setPage(pageNumber);
    const pg = pageNumber;
    const pgSize = pageSize;
    const offset = (pg - 1) * pgSize;
    const pagedItems = drop(data, offset).slice(0, pgSize);
    setPaginatelist(pagedItems);
  };

  useEffect(() => {
    if (currentGoods.constructor === Array && currentGoods[0]) {
      setSubTitle(
        locale === 'en'
          ? currentGoods[0].itemNameEn
          : currentGoods[0].itemNameAr,
      );
    }
  }, [currentGoods]);
  // Only runs for first time to populate filters.
  const setFilterItems = () => {
    if (currentGoods) {
      const types = ['location', 'store'];
      types.forEach(type => {
        const items: ICheckboxes[] = currentGoods.map((x: any) => {
          return {
            id: x[`${type}En`],
            label: locale === 'en' ? x[`${type}En`] : x[`${type}Ar`],
            ar: x[`${type}Ar`],
            en: x[`${type}En`],
            value: locale === 'en' ? x[`${type}En`] : x[`${type}Ar`],
            checked: false,
          };
        });

        if (type === 'location') setLocations(uniqBy(items, locale));
        else setRetailers(uniqBy(items, 'en'));
      });
      setList(currentGoods);
      handlePagination(1, currentGoods);
    }
  };

  useEffect(() => {
    setFilterItems();
  }, [currentGoods]);

  const sortData = (data: IResponse[], e: boolean | 'asc' | 'desc') => {
    setSortOrder(e);
    return orderBy(data, ['price'], [e]);
  };

  const sortAndApplyPagination = (
    data: IResponse[],
    e: boolean | 'asc' | 'desc',
  ) => {
    const sorted = sortData(data, e);
    setList(sorted);
    handlePagination(page, sorted);
  };

  // reset listing.
  const resetFilter = () => {
    const resetLocations = locations.map((x: ICheckboxes) => {
      return {
        ...x,
        checked: false,
      };
    });

    const resetRetailers = retailers.map((x: ICheckboxes) => {
      return {
        ...x,
        checked: false,
      };
    });

    setRetailers(resetRetailers);
    setLocations(resetLocations);
    sortAndApplyPagination(currentGoods, sortOrder);
    handlePagination(1, currentGoods);
  };

  // filter data based on location and retailer
  const filterData = () => {
    let tempData = [...currentGoods];

    const checkedRetailers = retailers
      .filter((x: ICheckboxes) => x.checked)
      .map((x: ICheckboxes) => {
        return x.label;
      });

    const checkedLocations = locations
      .filter((x: ICheckboxes) => x.checked)
      .map((x: ICheckboxes) => {
        return x.label;
      });
    tempData = tempData.filter(x => {
      return (
        (checkedRetailers.length ? checkedRetailers.includes(x.store) : true) &&
        (checkedLocations.length ? checkedLocations.includes(x.location) : true)
      );
    });

    const sorted = sortData(tempData, sortOrder);
    setList(sorted);
    handlePagination(1, sorted);
  };

  // Calls on locations filter change
  const locationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newArray = locations.map((x: ICheckboxes) => {
      return x.value === event.target.value ? { ...x, checked: !x.checked } : x;
    });
    setLocations(newArray);
  };

  // Calls on Retailer filter change
  const retailerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newArray = retailers.map((x: ICheckboxes) => {
      return x.value === event.target.value ? { ...x, checked: !x.checked } : x;
    });
    setRetailers(newArray);
  };

  const paginatelistItems: any[] = paginatelist;

  return (
    <Container locale={props.locale}>
      {/* {!response.length && (
        <div
          style={{ margin: '6rem', display: 'flex', justifyContent: 'center' }}
        >
          <Spinner type="logo" />
        </div>
      )} */}
      {currentGoods.length ? (
        <React.Fragment>
          <div className="">
            {subTitle && (
              <h3 className="syb-title" style={{ marginBottom: '2rem' }}>
                {i18n(subTitle)}
              </h3>
            )}
            {description && (
              <p style={{ color: '#3f3e45' }}>{i18n(description)}</p>
            )}
          </div>

          <Row flex style={{ justifyContent: 'flex-end' }}>
            <Col sm={12}>
              <div style={{ float: 'right' }}>
                <Dropdown
                  onChange={(e: any) => {
                    sortAndApplyPagination(list, e);
                  }}
                  disabled={false}
                  isOpen={false}
                  items={props.sortByItems.map((item: IVariables) => ({
                    id: item.id,
                    label: i18n(item.label),
                  }))}
                  label={i18n('global.sortBy')}
                  aria-label="sort by"
                  name="sory-by"
                  popupAlign="start"
                  size="small"
                  uiType="ghost"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <Filter
                applyButtonLabel=""
                filterGroups={[
                  {
                    content: (
                      <div style={{ padding: '0' }}>
                        <CheckboxGroup align="vertical" items={[]} i18n={i18n}>
                          {retailers.map((x: ICheckboxes) => (
                            <Checkbox
                              checked={x.checked}
                              id={x.value.replace(/\s/g, '')}
                              label={x.label}
                              name={x.value}
                              onChange={retailerChange}
                            />
                          ))}
                        </CheckboxGroup>
                      </div>
                    ),
                    expanded: true,
                    id: 'filter.1',
                    title: i18n('global.retailers'),
                  },
                  {
                    content: (
                      <div style={{ padding: '0' }}>
                        <CheckboxGroup align="vertical" items={[]} i18n={i18n}>
                          {locations.map((x: ICheckboxes) => (
                            <Checkbox
                              checked={x.checked}
                              id={x.value.replace(/\s/g, '')}
                              label={x.label}
                              name={x.value}
                              onChange={locationChange}
                            />
                          ))}
                        </CheckboxGroup>
                      </div>
                    ),
                    expanded: true,
                    id: 'filter.2',
                    title: i18n('global.location'),
                  },
                ]}
                i18n={i18n}
                onFilter={() => {
                  filterData();
                }}
                onReset={() => {
                  resetFilter();
                }}
                resetButtonLabel=""
                rootHeightUpdateDelay={50}
                uiType="vertical"
              />
            </Col>

            <Col sm={12} md={9} className="override-container">
              <Table
                i18n={i18n}
                clickable={false}
                columns={[
                  {
                    id: 'store',
                    title: i18n('global.retailer'),
                  },
                  {
                    id: 'location',
                    title: i18n('global.location'),
                  },
                  {
                    id: 'price',
                    title: i18n('global.price'),
                    align: 'end',
                  },
                  {
                    id: 'collectionDate',
                    title: i18n('global.priceDate'),
                  },
                ]}
                headerHidden={false}
                items={paginatelistItems}
                selectable={false}
                size="default"
              />
              {spacer('40px')}
              {currentGoods.length > pageSize && (
                <Pagination
                  current={page}
                  disabled={false}
                  i18n={i18n}
                  pageSize={pageSize}
                  total={list.length}
                  onChange={(currentPage: number) =>
                    handlePagination(currentPage, list)
                  }
                />
              )}
              {spacer('40px')}
              <hr />
              {spacer('40px')}
              {props.buttons.map((btn: IVariables) => (
                <span style={{ paddingRight: '20px' }}>
                  <Button
                    aria-label={btn.label}
                    label={props.i18n(btn.label)}
                    onClick={() => btn.onClick(props)}
                    uiType={btn.uiType}
                    withArrow={btn.withArrow}
                    alignIcon={btn.alignIcon}
                  />
                </span>
              ))}
            </Col>
          </Row>
        </React.Fragment>
      ) : (
        <div
          style={{ margin: '6rem', display: 'flex', justifyContent: 'center' }}
        >
          <Spinner type="logo" />
        </div>
      )}
      {spacer('80px')}
    </Container>
  );
}

export default withTemplateHooks(Details);
// export default FormTemplate;
