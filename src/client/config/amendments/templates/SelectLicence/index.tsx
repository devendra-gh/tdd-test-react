import React, { useState, useEffect } from 'react';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';
import PropTypes from 'prop-types';
import { drop } from 'lodash';

import Alert from '@tamm/ui-lib-v2-alert';
import Button from '@tamm/ui-lib-v2-button';
import Form from '@tamm/ui-lib-v2-form';
import Informational from '@tamm/ui-lib-v2-informational-template';
import Pagination from '@tamm/ui-lib-v2-pagination';
import SearchInput from '@tamm/ui-lib-v2-search-input';
import Select from '@tamm/ui-lib-v2-select';
import Table from '@tamm/ui-lib-v2-table';

import Loading from 'client/templates/Loading';
import ServerError from 'client/templates/ServerError';
import Sidebar from 'client/templates/Sidebar';

/**
 * Select License template
 * @param       {Object} props
 * @returns     {JSX}
 */
function SelectLicense(props: IVariables) {
  const {
    i18n,
    locale,
    amendmentServerError,
    backLink,
    commundaError,
    currentStep,
    currentSubStep,
    filterSearchTradeLicenseList,
    pageLoading,
    // showSidebar,
    steps,
    stepsStatus,
    tradeLicenceList,
  } = props;
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [filteredList, setFilteredList] = useState<IVariables[]>(
    filterSearchTradeLicenseList(filter, search, props),
  );
  useEffect(() => {
    setFilteredList(filterSearchTradeLicenseList(filter, search, props));
  }, [tradeLicenceList, filter, search]);

  const pageSize = 5;
  const [page, setPage] = useState(1);
  const [paginatelist, setPaginatelist] = useState<IVariables[]>([]);
  const handlePagination = (pageNumber: number, data: IVariables[]) => {
    setPage(pageNumber);
    const pg = pageNumber;
    const pgSize = pageSize;
    const offset = (pg - 1) * pgSize;
    const pagedItems = drop(data, offset).slice(0, pgSize);
    setPaginatelist(pagedItems);
  };
  useEffect(() => {
    handlePagination(1, filteredList);
  }, [filteredList]);

  const getButtonForTable = (licenseNo: string, status: string) => {
    return (
      <Button
        active={false}
        alignIcon="end"
        aria-label="button-secondary"
        name="selectLicenceActionBtn"
        disabled={false}
        hidden={false}
        // iconTooltip=""
        label={
          status === 'Continue'
            ? i18n('amendments.selectLicense.table.continue')
            : i18n('amendments.selectLicense.table.start')
        }
        //label={i18n('amendments.selectLicense.table.start')}
        // link="#"
        onClick={() => {
          props.selectLicense(licenseNo, props);
        }}
        size="small"
        type="button"
        uiType="secondary"
        withArrow
      />
    );
  };

  getButtonForTable.propTypes = {
    selectLicense: PropTypes.func.isRequired,
  };

  const paginatelistItems: any[] = paginatelist.map((item: any, index: any) => {
    return {
      id: item.tradeLicenseNumber,
      tradeLicenseNumber: item.tradeLicenseNumber,
      companyName:
        locale === 'en' ? item.businessNameEng : item.businessNameArb,
      status: item.status,
      dbAmendmentId: item.dbAmendmentId,
      index,
    };
  });

  return (
    <React.Fragment>
      {pageLoading && <Loading />}

      {tradeLicenceList.data !== undefined && (
        <Container
          locale={locale}
          sidebar={
            <Sidebar
              currentStep={currentStep}
              currentSubStep={currentSubStep}
              i18n={i18n}
              steps={steps}
              stepsStatus={stepsStatus}
              // showSidebar={showSidebar}
            />
          }
        >
          <Form
            {...props}
            backButton={{
              label: i18n('button.back'),
              withArrow: true,
              alignIcon: 'start',
              uiType: 'secondary',
              onClick: () => props.history.push(backLink),
            }}
          >
            <Form.Fieldset>
              <Informational>
                <ServerError amendmentServerError={amendmentServerError} />
                <h3>{i18n('amendments.selectLicense.Title')}</h3>
                {!!tradeLicenceList.data.length && (
                  <p>{i18n('amendments.selectLicense.subTitle')}</p>
                )}
              </Informational>
            </Form.Fieldset>
            {!!tradeLicenceList.data.length && (
              <Form.Fieldset twoColumns gapSize="small">
                <Select
                  isOpen={false}
                  items={[
                    {
                      id: 'all',
                      label: i18n('global.all'),
                    },
                    {
                      id: 'Continue',
                      label: i18n('global.inProgress'),
                    },
                    {
                      id: 'Start',
                      label: i18n('global.new'),
                    },
                  ]}
                  label={i18n('amendments.selectLicense.filterBy')}
                  onChange={(value: string) => setFilter(value)}
                  showSearch={false}
                  value={filter}
                />
                <SearchInput
                  aria-label="search input"
                  value={search}
                  onSearch={(value: string) => setSearch(value)}
                  onChange={(value: string) => setSearch(value)}
                  onClear={() => setSearch('')}
                  validateStatus={null}
                  name="search"
                  size="default"
                  label={i18n('amendments.selectLicense.searchLicences')}
                />
              </Form.Fieldset>
            )}
            {commundaError && (
              <Alert message={i18n('applicationError.server')} status="error" />
            )}
            {!!tradeLicenceList.data.length && (
              <Form.Fieldset>
                <Table
                  i18n={i18n}
                  columns={[
                    {
                      id: 'tradeLicenseNumber',
                      title: i18n('amendments.selectLicense.table.licenses'),
                    },
                    {
                      hideFor: ['sm'],
                      id: 'companyName',
                      title: i18n('amendments.selectLicense.table.companyName'),
                    },
                    {
                      id: 'status',
                      title: i18n('amendments.selectLicense.table.actions'),
                      render: (content: string, licenseNo: string) => {
                        return getButtonForTable(licenseNo, content);
                      },
                      align: 'end',
                    },
                  ]}
                  disabledSelectionVisible={false}
                  headerHidden={false}
                  items={paginatelistItems}
                  selectable={false}
                  size="default"
                />

                {paginatelist.length === 0 && <p>{i18n('notFound.record')}</p>}
                {filteredList && (
                  <div className="pagination-wrapper">
                    <Pagination
                      current={page}
                      disabled={false}
                      i18n={() => {}}
                      pageSize={pageSize}
                      size="default"
                      total={filteredList.length}
                      onChange={(currentPage: number) =>
                        handlePagination(currentPage, filteredList)
                      }
                    />
                  </div>
                )}
              </Form.Fieldset>
            )}
            {!tradeLicenceList.data.length && (
              <Alert
                message={i18n('amendments.selectLicense.alertMessage')}
                status="info"
              />
            )}
          </Form>
        </Container>
      )}
    </React.Fragment>
  );
}

SelectLicense.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(SelectLicense);
