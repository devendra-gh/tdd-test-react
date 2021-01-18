import React, { ReactElement } from 'react';
import { IVariables } from '@tamm/app-composer';

import Grid from '@tamm/ui-lib-v2-grid';
import RenderDefinition from 'client/components/workbench/v5/RenderDefinition';

const { Col, Row } = Grid;
/**
 * Iterator component
 * @param {IVariables} props
 * @returns {ReactElement}
 */
function Iterator(props: IVariables): ReactElement {
  const {
    items,
    screensWidth,
    dlsComponent,
    wrapInGrid,
  } = props.definition?.props;
  if (wrapInGrid)
    return (
      <Row type="flex">
        {items.map((item: any, index: number) => (
          <Col {...screensWidth}>
            <RenderDefinition
              key={item.id}
              definition={{
                type: dlsComponent,
                props: { ...item },
                sharedProps: props.definition?.sharedProps,
              }}
              getSharedProps={props.getSharedProps}
            />
          </Col>
        ))}
      </Row>
    );
  return items.map((item: any) => (
    <RenderDefinition
      key={item.id}
      definition={{
        type: dlsComponent,
        props: { ...item },
        sharedProps: props.definition?.sharedProps,
      }}
      getSharedProps={props.getSharedProps}
    />
  ));
}

export default Iterator;
