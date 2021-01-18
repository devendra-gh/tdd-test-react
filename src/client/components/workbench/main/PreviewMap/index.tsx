import React, { memo } from 'react';
import { IVariables } from '@tamm/app-composer';
import DLSMap from '@tamm/ui-lib-v2-map';

function PreviewMap(props: IVariables) {
  const { i18n, ...rest } = props;

  return (
    <div style={{ height: '50rem' }}>
      <DLSMap i18n={i18n} {...rest} />
    </div>
  );
}

export default memo(PreviewMap);
