import React, { useEffect } from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Grid from '@tamm/ui-lib-v2-grid';
import SearchBox from '@tamm/ui-lib-v2-search-box';
import RadioGroup from '@tamm/ui-lib-v2-radio-group';
import Spinner from '@tamm/ui-lib-v2-spinner';
import Filter from '@tamm/ui-lib-v2-filter';
// import Accordion from '@tamm/ui-lib-v2-accordion';
import Alert from '@tamm/ui-lib-v2-alert';
import Pagination from '@tamm/ui-lib-v2-pagination';
import Form from '@tamm/ui-lib-v2-form';
import Card from '@tamm/ui-lib-v2-card';

const pageSize = 10;
/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
const Search = (props: IVariables) => {
  const { i18n, showNotFoundAlert, showErrorAlert } = props;

  const { Col, Row } = Grid;

  // DED API returns a array for multiple records but object for one record
  const getCommercialPromoList = () => {
    const commercialPromoList = props.commercialPromotions.data
      .commercialPromotions
      ? props.commercialPromotions.data.commercialPromotions
      : null;
    if (!commercialPromoList) {
      return null;
    }
    if (commercialPromoList.constructor.name === 'Object') {
      return [commercialPromoList];
    }
    return commercialPromoList;
  };

  const getAlert = () => {
    if (showNotFoundAlert) {
      return (
        <Alert
          message={i18n('commercialPromotions.search.notFound')}
          status="info"
        />
      );
    }
    if (showErrorAlert) {
      return (
        <Alert
          message={i18n('commercialPromotions.search.errorMessage')}
          status="error"
        />
      );
    }
    return null;
  };

  const commercialPromoList = getCommercialPromoList();

  const getItems = () => {
    return [
      {
        id: '0',
        label: i18n('commercialPromotions.filter.all'),
      },
      {
        id: '1',
        label: i18n('commercialPromotions.filter.specialOffer'),
      },
      {
        id: '2',
        label: i18n('commercialPromotions.filter.sales'),
      },
      {
        id: '3',
        label: i18n('commercialPromotions.filter.backToSchool'),
      },
      {
        id: '4',
        label: i18n('commercialPromotions.filter.scratchAndWin'),
      },
      {
        id: '5',
        label: i18n('commercialPromotions.filter.draws'),
      },
    ];
  };

  useEffect(() => {
    try {
      // disabling autocomplete
      const searchInputElement = document.getElementsByClassName(
        'ui-lib-input-wrapper__content-input',
      )[0] as HTMLInputElement;
      if (searchInputElement) {
        searchInputElement.autocomplete = 'off';
      }
    } catch (e) {
      console.error('Cannot disable autocomplete');
    }
  });

  const getListCard = (item: any, index: any, locale: string) => {
    return (
      <Col
        key={index.toString()}
        style={{ padding: '1rem' }}
        xs={12}
        sm={6}
        md={6}
        lg={4}
      >
        <Card selected={false}>
          <Card.Header.SmallImageHeaderGrey
            imageType="company"
            title={locale === 'en' ? item.tradeNameEn : item.tradeNameAr}
          />
          <Card.Body.Data
            uiType={Card.Body.Data.UiType.VERTICAL}
            items={[
              {
                label: i18n('commercialPromotions.promotion_details'),
                content: (
                  <div>
                    {`${i18n('commercialPromotions.date_from')} ${new Date(
                      item.promotionStartDate,
                    ).toLocaleDateString()}`}
                    <br />
                    {`${i18n('commercialPromotions.date_to')} ${new Date(
                      item.promotionEndDate,
                    ).toLocaleDateString()}`}
                  </div>
                ),
              },
              {
                label: i18n('commercialPromotions.location'),
                content: item.address,
              },
            ]}
          />
        </Card>
      </Col>
    );
  };

  return (
    <Container locale={props.locale} sidebar={false}>
      <div style={{ marginBottom: '60px' }}>
        <h4 style={{ color: '#161038' }}>{props.i18n(props.subTitle)}</h4>
        <p style={{ color: '#161038' }}>
          {props.i18n(props.subTitleDescription)}
        </p>
      </div>
      <SearchBox
        aria-label="search-input"
        name="commercialSearch"
        onChange={(value: string) => props.getValidation(value, props)}
        onSearch={(value: string) => {
          props.actions.promotionType.update({
            id: '0',
            value: '',
          });
          props.getCommercialPromotions(value, 1, {
            ...props,
            promotionType: { id: '0', value: '' },
          });
        }}
        showSuggestions={false}
        placeholder={i18n('commercialPromotions.placeholder.search')}
        suggestions={[]}
      />
      {props.displayErrorFlag ? (
        <p style={{ color: '#fc532e', marginTop: '10px' }}>
          {i18n('commercialPromotions.search.validationErrorMessage')}
        </p>
      ) : null}
      <div style={{ margin: '20px' }} />
      {getAlert()}
      {props.displaySpinner ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}
        >
          <Spinner type="logo" />
        </div>
      ) : null}
      {props.displayAccordian &&
      commercialPromoList &&
      commercialPromoList.length !== 0 ? (
        <>
          <Row style={{ marginTop: '40px', marginBottom: '40px' }}>
            <Col xs={24} sm={24} md={24} lg={3} xl={3}>
              <p>
                {i18n('tradeNameSearch.search.displaying', {
                  numberOfRecords: commercialPromoList.length,
                  totalRecords: props.commercialPromotions.totalCount,
                })}
              </p>
              <Filter
                filterGroups={[
                  {
                    content: (
                      <div style={{ padding: '0' }}>
                        <div>
                          <RadioGroup
                            i18n={i18n}
                            align="vertical"
                            defaultValue={props.promotionType.id}
                            disabled={false}
                            items={getItems()}
                            onChange={e => {
                              props.onRadioSelect(e.target.id, props);
                            }}
                          />
                        </div>
                      </div>
                    ),
                    expanded: true,
                    id: 'filter.1',
                    title: i18n('commercialPromotions.search.promotionType'),
                  },
                ]}
                i18n={i18n}
                onFilter={(e: any) => {
                  props.getCommercialPromotions(
                    props.commercialPromotions.value,
                    1,
                    props,
                  );
                }}
                onReset={(e: any) => {
                  props.onRadioSelect('0', props);
                }}
                rootHeightUpdateDelay={50}
                uiType="vertical"
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={9} xl={9}>
              <div style={{ marginTop: '4.3rem' }}>
                <Row>
                  {commercialPromoList &&
                    commercialPromoList.length &&
                    commercialPromoList.map((item: any, index: any) =>
                      getListCard(item, index, props.locale),
                    )}
                </Row>
                {/* <Accordion
                  items={commercialPromoList.map((item: any, index: any) => {
                    return {
                      boldTitle: true,
                      content: (
                        <div>
                          <p>
                            {i18n(
                              'commercialPromotions.search.promotionDetails',
                              {
                                propmotionStartDate: new Date(
                                  item.promotionStartDate,
                                ).toLocaleDateString(),
                                promotionEndDate: new Date(
                                  item.promotionEndDate,
                                ).toLocaleDateString(),
                              },
                            )}
                          </p>
                          <p>
                            {i18n('commercialPromotions.search.address', {
                              address: item.address,
                            })}
                          </p>
                        </div>
                      ),
                      id: `${index + 1}`,
                      title:
                        props.locale === 'en'
                          ? item.tradeNameEn
                          : item.tradeNameAr,
                    };
                  })}
                  multiple={false}
                  uiType="default"
                  withNoSidePaddings={false}
                /> */}
              </div>
              {props.commercialPromotions.totalCount > pageSize && (
                <div style={{ marginTop: '40px' }}>
                  <Pagination
                    current={props.commercialPromotions.currentPage}
                    disabled={false}
                    i18n={i18n}
                    onChange={(currentPage: number) =>
                      props.changePage(currentPage, props)
                    }
                    pageSize={pageSize}
                    total={props.commercialPromotions.totalCount}
                  />
                </div>
              )}
            </Col>
          </Row>
        </>
      ) : null}
      <div style={{ marginBottom: '40px' }}>
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
