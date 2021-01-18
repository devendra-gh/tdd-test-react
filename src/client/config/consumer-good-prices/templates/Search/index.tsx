import React, { useEffect } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Button from '@tamm/ui-lib-v2-button';
import Container from 'client/containers';
import SearchBox from '@tamm/ui-lib-v2-search-box';
import RadioGroup from '@tamm/ui-lib-v2-radio-group';
import Sidebar from 'client/templates/Sidebar';
import Select from '@tamm/ui-lib-v2-select';
import Alert from '@tamm/ui-lib-v2-alert';
import Spinner from '@tamm/ui-lib-v2-spinner';
import Form from '@tamm/ui-lib-v2-form';
import Link from '@tamm/ui-lib-v2-link';
import { spacer } from '../../utils';
import SearchTable from './components/SearchTable/index';

function Search(props: IVariables) {
  const {
    locale,
    i18n,
    subTitle,
    description,
    goodsList,
    actions,
    radioGroups,
    handleSearchTextChange,
  } = props;

  useEffect(() => {
    sessionStorage.setItem('searchBy', 'product'); // for checking searchBy in handleSearchTextChange, handleCategoryChange
    // actions.goodsList.update({ ...goodsList, showSpinner: false });
    actions.goodsList.reset();
    return () => actions.goodsList.reset();
  }, []);

  // const [searchText, setSearchText] = useState();

  const onSearch = () => {
    if (
      goodsList.searchText &&
      goodsList.searchText.length >= 3 &&
      goodsList.searchBy === 'product'
    ) {
      handleSearchTextChange(goodsList.searchText, props, 1);
    }
  };

  // useEffect(() => {
  //   // setting the searchtext from store to state
  //   if (goodsList.searchBy === 'product') setSearchText(searchText);
  // }, [goodsList.searchBy]);

  useEffect(() => {
    // getCategories,getStoreItemByCategory apis depends on locale,
    // clearing the store and re-fetching categories when locale changes
    if (goodsList.searchBy === 'category') {
      const propsClone = Object.assign({}, props);
      propsClone.goodsList.categories = [];
      propsClone.goodsList.selectedCategory = '';
      props.handleSearchByChange('category', propsClone);
    }
  }, [locale]);

  return (
    <Container
      locale={props.locale}
      sidebar={
        <Sidebar
          i18n={props.i18n}
          steps={[]}
          currentStep=""
          stepsStatus={props.stepsStatus}
        />
      }
    >
      <div className="">
        {subTitle && (
          <h3 className="syb-title" style={{ marginBottom: '2rem' }}>
            {i18n(subTitle)}
          </h3>
        )}
        {!!description && <p style={{ color: '#000' }}>{i18n(description)}</p>}
      </div>
      {spacer('20px')}
      <RadioGroup
        i18n={i18n}
        defaultValue=""
        align="horizontal"
        items={[]}
        labelStyle="h5"
        uiType="default"
      >
        {radioGroups.map((radioGroup: any) => (
          <RadioGroup.Radio
            key={radioGroup.id}
            autoFocus={false}
            checked={radioGroup.id === goodsList.searchBy}
            description=""
            id={radioGroup.id}
            index={0}
            label={i18n(radioGroup.label)}
            labelStyle="default"
            name="searchBy"
            readOnly={false}
            tabIndex={0}
            textAsSingleLine={false}
            uiType="default"
            value={radioGroup.id}
            onChange={(e: any) => {
              props.handleSearchByChange(e.target.value, props);
            }}
          />
        ))}
      </RadioGroup>
      <div id="goods-list" />
      {spacer('40px')}
      {goodsList.searchBy === 'product' && (
        <>
          <SearchBox
            aria-label="Search"
            name="search goods"
            onSearch={() => onSearch()}
            onChange={value =>
              actions.goodsList.update({
                ...goodsList,
                searchText: value || '',
              })
            }
            showSuggestions={false}
            placeholder={i18n('global.search')}
            value={goodsList.searchText}
          />
          {goodsList.searchText && goodsList.searchText.length < 3 && (
            <>
              {spacer('10px')}
              <span style={{ color: '#fc532e' }}>
                {i18n('cgp_enter_atleast')}
              </span>
            </>
          )}
          {spacer('40px')}
        </>
      )}
      {goodsList.searchBy === 'category' && goodsList.showCategories && (
        <>
          <Form.Fieldset twoColumns>
            <Select
              value={goodsList.selectedCategory}
              onChange={value => props.handleCategoryChange(value, props)}
              isOpen={false}
              isStatic={false}
              items={goodsList.categories}
              label={i18n('label.goodsCategories')}
              multi={false}
              placeholder={i18n('placeholder.select')}
              showSearch
              size="default"
            />
          </Form.Fieldset>
        </>
      )}
      {goodsList.showAlert && (
        <>
          <Alert
            message={i18n(goodsList.alertText)}
            status={goodsList.alertStatus}
          />
          {spacer('40px')}
        </>
      )}
      {goodsList.showSpinner && (
        <div
          style={{ margin: '4rem', display: 'flex', justifyContent: 'center' }}
        >
          <Spinner type="logo" />
        </div>
      )}
      <SearchTable {...props} />
      {spacer('35px')}
      <hr />
      {spacer('35px')}
      {props.buttons.map((btn: IVariables) => (
        <Button
          aria-label={btn.label}
          // disabled={!goodsList.selectedGood}
          label={i18n(btn.label)}
          onClick={() => {
            if (goodsList.selectedGood) {
              btn.onClick(props);
            } else {
              window.scrollTo(0, 500);
              actions.goodsList.update({
                ...goodsList,
                showAlert: true,
                alertStatus: 'info',
                alertText: 'cgp.nothingSelected',
              });
            }
          }}
          uiType={btn.uiType}
          withArrow={btn.withArrow}
          alignIcon={btn.alignIcon}
        />
      ))}
      <span style={{ marginRight: '20px', marginLeft: '20px' }}>
        <Link
          aria-label="cancel button"
          disabled={false}
          href="/consumer-good-prices/"
          label={i18n('global.cancel')}
          onClick={() => props.onCancel(props)}
          tammHref="/consumer-good-prices/"
          target="_self"
          uiType="text"
        />
      </span>
      {spacer('60px')}
    </Container>
  );
}

export default withTemplateHooks(Search);
