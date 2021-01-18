import React from 'react';
import Select from '@tamm/ui-lib-v2-select';
import { IVariables } from '@tamm/app-composer';

function SelectDropdown(props: IVariables) {
  const { i18n, field, type, onChange, value, help, validateStatus } = props;
  return (
    <Select
      i18n={i18n}
      showSearch
      placeholder={i18n('select')}
      items={(typeof field.items === 'function'
        ? field.items({ type })
        : field.items
      ).map((item: any) => ({
        id: item.id,
        label: field.name !== 'nationality' ? i18n(item.label) : item.label,
      }))}
      disabled={
        typeof field.disabled === 'function'
          ? field.disabled({ type })
          : field.disabled
      }
      label={field.label && `${i18n(field.label)}${field.required ? '*' : ''}`}
      value={value}
      onChange={onChange(field.name)}
      help={help}
      validateStatus={validateStatus}
    />
  );
}

export default SelectDropdown;
