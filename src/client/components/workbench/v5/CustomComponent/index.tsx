import React, { useMemo, memo, Suspense } from 'react';
import { IVariables } from '@tamm/app-composer';
import { isFunction } from 'lodash';
import dls from 'client/utils/workbench/dls';
import { getCustomComponentProps } from 'client/utils/workbench/formatHelpers';

import ErrorBoundary from 'client/components/workbench/main/ErrorBoundary';
import Space from 'client/components/workbench/main/Space';
import ComponentWithChildren from 'client/components/workbench/v5/ComponentWithChildren';
import RenderDefinition from '../../v4/RenderDefinition';

function CustomComponent(props: IVariables) {
  const { definition, getSharedProps } = props;
  const definitionProps = definition?.props || {};
  const { classNames = '' } = definitionProps;
  delete definitionProps.classNames;

  let content: any;
  if (
    definitionProps &&
    isFunction(definitionProps.visible) &&
    definitionProps.visible(props) === false
  )
    return <></>;

  if (dls[definition.type]) {
    let loadComponent = dls[definition.type];
    if (isFunction(loadComponent)) loadComponent = loadComponent();
    const Component = loadComponent.component;
    const componentProps: IVariables = useMemo(
      () => getCustomComponentProps(props, definitionProps),
      [props],
    );

    const ContentComponent = componentProps.children ? (
      <ComponentWithChildren
        Component={Component}
        getSharedProps={getSharedProps}
        {...componentProps}
      />
    ) : (
      <Component {...componentProps} />
    );

    const renderNestedComponents = (obj: any) => {
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const k in obj) {
        if (
          obj[k] &&
          typeof obj[k] === 'object' &&
          obj[k].type !== 'symbol' &&
          // eslint-disable-next-line valid-typeof
          typeof obj[k].props !== undefined &&
          k !== 'children'
        ) {
          renderNestedComponents(obj[k]);
        }
        if (
          obj[k] &&
          obj[k].type === 'symbol' &&
          // eslint-disable-next-line valid-typeof
          typeof obj[k].props !== undefined
        ) {
          // eslint-disable-next-line no-param-reassign
          obj[k] = (
            <RenderDefinition
              key={obj[k].componentId}
              definition={obj[k]}
              getSharedProps={getSharedProps}
            />
          );
        }
      }
    };

    renderNestedComponents(componentProps);

    content = !loadComponent.preloaded ? (
      <Suspense fallback={<span />}>{ContentComponent}</Suspense>
    ) : (
      ContentComponent
    );
  } else {
    content = <div>{definition.type} - Preview is not supported</div>;
  }

  return (
    <ErrorBoundary
      message={`Failed render ${definition.type}`}
      definition={definition}
    >
      <Space {...definitionProps?.space} classNames={classNames}>
        {content}
      </Space>
    </ErrorBoundary>
  );
}

CustomComponent.defaultProps = {
  definition: {},
};

CustomComponent.whyDidYouRender = true;

export default memo(CustomComponent);
