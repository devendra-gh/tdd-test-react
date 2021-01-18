import React from 'react';
import { IVariables } from '@tamm/app-composer';
import SearchBox from '@tamm/ui-lib-v2-search-box';
import Input from '@tamm/ui-lib-v2-input';

const inputTypes = {
  CATEGORY: 'CATEGORY',
  NAME: 'NAME',
};

function SearchInput(props: IVariables) {
  const { i18n, formSelectActivity } = props;
  const { inputType, searchText } = formSelectActivity;

  const onChange = (type: string, value: string) =>
    props.onChange(type, value, props);

  return (
    <>
      {inputType === inputTypes.NAME && (
        <>
          <div style={{ display: 'none' }}>
            <Input aria-label="dummy" />
          </div>
          <SearchBox
            aria-label="Search input"
            name={undefined}
            onChange={value => {
              props.actions.formSelectActivity.update({
                ...formSelectActivity,
                searchText: value || '',
              });
            }}
            onSearch={value =>
              value.length >= 3 && onChange('searchText', value)
            }
            showSuggestions={false}
            placeholder={i18n('placeholder.search')}
            value={searchText}
          />
          {searchText && searchText.length < 3 && inputType === 'NAME' && (
            <p style={{ color: '#fc532e', marginTop: '10px' }}>
              {i18n('validationMessage.min3char')}
            </p>
          )}
        </>
      )}
    </>
  );
}

export default SearchInput;
