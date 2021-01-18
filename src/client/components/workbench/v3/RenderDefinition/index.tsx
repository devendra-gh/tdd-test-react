import React, { memo } from 'react';
import { IVariables } from '@tamm/app-composer';
import { includes, isFunction } from 'lodash';

import CustomComponent from 'client/components/workbench/v3/CustomComponent';
import Space from 'client/components/workbench/main/Space';
import GridComponent from 'client/components/workbench/v3/GridComponent';
import Flexbox from 'client/components/workbench/v3/Flexbox';
import Iterator from 'client/components/workbench/main/Iterator';
import Symbol from 'client/components/workbench/main/Symbol';
import FormTemplate from 'client/components/workbench/main/FormTemplate';

const componentHasChildrenList: any = {
  symbol: (props: any) => <Symbol {...props} />,
  iterator: (props: any) => <Iterator {...props} />,
  flexbox: (props: any) => <Flexbox {...props} />,
  grid: (props: any) => <GridComponent {...props} />,
  form: (props: any) => <FormTemplate {...props} />,
};

function RenderDefinition(props: IVariables) {
  const { definition, getSharedProps } = props;

  if (
    !includes(
      ['grid', 'flexbox', 'symbol', 'iterator', 'form'],
      definition.type,
    )
  )
    return (
      <CustomComponent
        {...getSharedProps(definition.sharedProps)}
        definition={definition}
      />
    );

  const { classNames, visible } = definition.props;

  if (
    isFunction(visible) &&
    visible(getSharedProps(definition.sharedProps)) === false
  )
    return <></>;

  const TargetComponent = componentHasChildrenList[definition.type];

  return (
    <Space {...definition?.props?.space} classNames={classNames}>
      <TargetComponent
        definition={definition}
        getSharedProps={getSharedProps}
      />
    </Space>
  );
}

RenderDefinition.defaultProps = {
  definition: {},
  getSharedProps: () => ({}),
};

export default memo(RenderDefinition);
