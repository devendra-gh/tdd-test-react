import React, { useMemo, memo, Suspense } from 'react';
import { IVariables } from '@tamm/app-composer';
import { isFunction } from 'lodash';
import dls from 'client/utils/workbench/dls';
import { getCustomComponentProps } from 'client/utils/workbench/formatHelpers';

import ErrorBoundary from 'client/components/workbench/main/ErrorBoundary';
import Space from 'client/components/workbench/main/Space';

function CustomComponent(props: IVariables) {
  const { definition } = props;
  const definitionProps = definition?.props || {};
  const { classNames = '' } = definitionProps;
  delete definitionProps.classNames;
  // eslint-disable-next-line no-console
  // console.group(`--definition ${definition.type}--`);
  // console.info('--props--', props);
  // console.info('--value--', value);
  // console.info('--definition--', definition);
  // eslint-disable-next-line no-console
  // console.groupEnd();

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
    // console.log(
    //   'LOADED COMPONENT',
    //   loadComponent,
    //   definition.type,
    //   loadComponent.preloaded,
    // );
    const Component = loadComponent.component;

    const componentProps = useMemo(
      () => getCustomComponentProps(props, definitionProps),
      [props],
    );

    content = !loadComponent.preloaded ? (
      <Suspense fallback={<span />}>
        <Component {...componentProps} />
      </Suspense>
    ) : (
      <Component {...componentProps} />
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
