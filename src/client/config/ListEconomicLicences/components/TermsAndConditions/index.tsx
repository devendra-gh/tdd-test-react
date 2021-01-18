import React from 'react';
import { IVariables } from '@tamm/app-composer';
import Checkbox from '@tamm/ui-lib-v2-checkbox';

function TermsAndConditions(props: IVariables) {
  const { items, i18n, checked, handleClick, showErrors } = props;

  return items.map((item: IVariables, index: number) => (
    <Checkbox
      {...item}
      label={i18n(item.label)}
      checked={checked[index]}
      validateStatus={showErrors && !checked[index] ? 'error' : 'success'}
      onClick={() => handleClick(index)}
    />
  ));
}

export default TermsAndConditions;
