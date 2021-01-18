import React, { memo } from 'react';
import { IVariables } from '@tamm/app-composer';
import { isArray } from 'lodash';
import RenderDefinition from 'client/components/workbench/v4/RenderDefinition';
import Tabs from '@tamm/ui-lib-v2-tabs';

function ComponentWithChildren(props: IVariables) {
  const { Component, children = [], getSharedProps } = props;

  return (
    <Component {...props}>
      {!isArray(children) && children}
      {isArray(children) &&
        children.map((child: IVariables, index: number) => {
          const { id, title, type } = child;
          if (type === 'tabsPanel')
            return (
              <Tabs.Panel id={id} label={title}>
                {(child?.props?.children || []).map(
                  (innerChild: IVariables) => {
                    return (
                      <RenderDefinition
                        key={innerChild.componentId}
                        definition={innerChild}
                        getSharedProps={getSharedProps}
                      />
                    );
                  },
                )}
              </Tabs.Panel>
            );
          return (
            <RenderDefinition
              key={child.componentId}
              definition={child}
              getSharedProps={getSharedProps}
            />
          );
        })}
    </Component>
  );
}

export default memo(ComponentWithChildren);
