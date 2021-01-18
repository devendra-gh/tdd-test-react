import React from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import SearchBox from '@tamm/ui-lib-v2-search-box';
import Table from '@tamm/ui-lib-v2-table';
import Pagination from '@tamm/ui-lib-v2-pagination';
import Sidebar from 'client/templates/Sidebar';
import Spinner from '@tamm/ui-lib-v2-spinner';
import Alert from '@tamm/ui-lib-v2-alert';
import Form from '@tamm/ui-lib-v2-form';

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
const Search = (props: IVariables) => {
  const { showNotFoundAlert, showErrorAlert, i18n, locale } = props;

  // DED API returns a array for multiple records but object for one record
  const getTradeNameList = () => {
    const tradeNameList = props.tradeName.data.data
      ? props.tradeName.data.data.tradename.tradename
      : null;
    if (!tradeNameList) {
      return null;
    }
    if (tradeNameList.constructor.name === 'Object') {
      return [tradeNameList];
    }
    return tradeNameList;
  };

  const tradeNameList = getTradeNameList();

  const getAlert = () => {
    if (showNotFoundAlert) {
      return (
        <Alert
          message={i18n('tradeNameSearch.search.notFound')}
          status="info"
        />
      );
    }
    if (showErrorAlert) {
      return (
        <Alert
          message={i18n('tradeNameSearch.search.errorMessage')}
          status="error"
        />
      );
    }
    return null;
  };

  const getColumns = () => {
    if (locale === 'en') {
      return [
        {
          id: 'nameEn',
          title: i18n('tradeNameSearch.table.title.englishName'),
        },
        {
          id: 'nameAr',
          title: i18n('tradeNameSearch.table.title.arabicName'),
          align: 'end',
        },
      ];
    }
    return [
      {
        id: 'nameEn',
        title: i18n('tradeNameSearch.table.title.englishName'),
      },
      {
        id: 'nameAr',
        title: i18n('tradeNameSearch.table.title.arabicName'),
      },
    ];
  };
  return (
    <Container
      locale={props.locale}
      sidebar={
        <Sidebar
          showRelatedJourneyCard={false}
          currentStep={props.currentStep}
          currentSubStep={props.currentSubStep}
          i18n={props.i18n}
          steps={props.steps}
          stepsStatus={props.stepsStatus}
        />
      }
    >
      <h4 style={{ color: '#161038' }}>
        {i18n('tradeNameSearch.search.subTitle')}
      </h4>
      <p style={{ color: '#161038' }}>
        {i18n('tradeNameSearch.search.description')}
      </p>
      <br />
      <br />
      <SearchBox
        aria-label="Search input"
        name={undefined}
        onChange={(value: string) => props.getValidation(value, props)}
        onSearch={(value: string) => props.getTradeName(value, 1, props)}
        showSuggestions={false}
        placeholder={i18n('tradeNameSearch.search.placeholder')}
        suggestions={[]}
      />
      <br />
      {props.displayErrorFlag ? (
        <p style={{ color: '#fc532e' }}>
          {i18n('tradeNameSearch.search.fieldValidationMessage')}
        </p>
      ) : null}
      <div style={{ marginBottom: '20px' }} />
      {getAlert()}
      {props.displaySpinner === true ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}
        >
          <Spinner type="logo" />
        </div>
      ) : null}
      {props.displayTable && tradeNameList && tradeNameList.length !== 0 ? (
        <div
          className="ui-lib-story-container"
          style={{
            background: '#fff',
            padding: '2rem',
          }}
        >
          <p>
            {i18n('tradeNameSearch.search.displaying', {
              numberOfRecords: tradeNameList.length,
              totalRecords: props.tradeName.totalRecords,
            })}
          </p>
          <Table
            i18n={i18n}
            columns={getColumns()}
            headerHidden={false}
            items={tradeNameList.map((item: any, index: any) => {
              return {
                id: index + 1,
                nameEn: item.tnEnglishName,
                nameAr: item.tnArabicName,
              };
            })}
            selectable={false}
            title={props.i18n('tradeNameSearch.table.title')}
          />
          <br />
          <div>
            <Pagination
              current={props.tradeName.currentPage}
              disabled={false}
              i18n={i18n}
              onChange={(currentPage: number) =>
                props.changePage(currentPage, props)
              }
              pageSize={props.tradeName.recInPage}
              total={props.tradeName.totalRecords}
            />
          </div>
        </div>
      ) : (
        ''
      )}
      <div style={{ marginBottom: '4rem' }}>
        <Form
          backButton={{
            label: props.i18n('button.back'),
            withArrow: true,
            alignIcon: 'start',
            uiType: 'secondary',
            onClick: () => props.onBack(props),
          }}
        />
      </div>
    </Container>
  );
};

Search.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Search);
