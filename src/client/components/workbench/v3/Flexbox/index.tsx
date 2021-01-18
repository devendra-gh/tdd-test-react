import React, { ReactElement, memo } from 'react';
import { IVariables } from '@tamm/app-composer';

import Grid from '@tamm/ui-lib-v2-grid';
import Container from 'client/containers';
import RenderDefinition from 'client/components/workbench/v3/RenderDefinition';
import Space from 'client/components/workbench/main/Space';

const { Col, Row } = Grid;
/**
 * Flexbox component
 * @param {IVariables} props
 * @returns {ReactElement}
 */
function Flexbox(props: IVariables): ReactElement {
  const { definition, getSharedProps } = props;
  return (
    <Space
      {...definition?.props?.space}
      classNames={definition?.props?.classNames}
    >
      <Row flex>
        <Col xs={12}>
          <Container>
            <div style={{ display: 'flex', ...definition.props }}>
              {definition.children &&
                definition.children.map((def: IVariables) => (
                  <div key={def.componentId}>
                    <RenderDefinition
                      key={def.componentId}
                      definition={def}
                      getSharedProps={getSharedProps}
                    />
                  </div>
                ))}
            </div>
          </Container>
        </Col>
      </Row>
    </Space>
  );
}

export default memo(Flexbox);
