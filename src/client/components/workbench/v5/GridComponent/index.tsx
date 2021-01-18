import React, { ReactElement, memo } from 'react';
import { IVariables } from '@tamm/app-composer';
import Grid from '@tamm/ui-lib-v2-grid';

import formatGrid from 'client/utils/workbench/formatGrid';
import { groupBy, range } from 'lodash';
import Space from 'client/components/workbench/main/Space';
import RenderDefinition from 'client/components/workbench/v5/RenderDefinition';

const { Col, Row } = Grid;

/**
 * GridComponent
 * @param {IVariables} props
 * @returns {ReactElement}
 */
function GridComponent(props: IVariables): ReactElement {
  const { definition, getSharedProps } = props;
  const { columns, sizes } = formatGrid(definition.props);
  const defs = groupBy(definition.children, i => i.columnIndex);

  return (
    <Space
      {...definition?.props?.space}
      classNames={definition?.props?.classNames}
    >
      <Row flex>
        {range(columns).map(i => (
          <Col key={i} {...sizes}>
            {defs[i] &&
              defs[i].map(def => (
                <RenderDefinition
                  key={def.componentId}
                  definition={def}
                  getSharedProps={getSharedProps}
                />
              ))}
          </Col>
        ))}
      </Row>
    </Space>
  );
}

export default memo(GridComponent);
