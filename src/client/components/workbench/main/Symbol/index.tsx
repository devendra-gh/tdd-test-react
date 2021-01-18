import React, { memo, ReactElement } from 'react';
import { IVariables } from '@tamm/app-composer';

import RenderDefinition from 'client/components/workbench/v5/RenderDefinition';

function Symbol(props: IVariables): ReactElement {
  const { symbol } = props.definition?.props;

  const definitions = symbol?.definitions || [];

  return definitions.map((definition: IVariables) => (
    <RenderDefinition
      key={definition.componentId}
      definition={{
        ...definition,
        props: {
          ...definition.props,
          symbolProps: props.symbolProps,
        },
      }}
      getSharedProps={props.getSharedProps}
    />
  ));
}

Symbol.defaultProps = {
  symbols: [],
  symbol: null,
  symbolProps: {},
};

export default memo(Symbol);
