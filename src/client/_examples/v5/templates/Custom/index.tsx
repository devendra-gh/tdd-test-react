import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { IVariables, withTemplateHooks } from '@tamm/app-composer';
import { pick } from 'lodash';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import { dlsLayouts } from 'client/utils/workbench/dls';
import formatState from 'client/utils/workbench/formatState';

import Container from 'client/containers';
import RenderDefinition from 'client/components/workbench/v5/RenderDefinition';

const DEFAULT_SHARED_PROPS = [
  'i18n',
  'locale',
  'tammUrl',
  'tammWorkbenchUrl',
  'actions',
];

/**
 * Custom template
 * @param {Object} props
 * @returns {JSX}
 */
function CustomTemplate(props: IVariables) {
  const definitions = formatState(props.definitions, props);

  // eslint-disable-next-line no-console
  console.group('------CUSTOM TEMPLATE PROPS-----');
  console.info('------props-----', props);
  console.info('------props.definitions-----', props.definitions);
  console.info('------definitions-----', definitions);
  // eslint-disable-next-line no-console
  console.groupEnd();

  const getSharedProps = useCallback(
    (sharedProps: string[]) =>
      pick(props, [...DEFAULT_SHARED_PROPS, ...(sharedProps || [])]),
    [props],
  );

  const Layout = dlsLayouts[props.layout || 'base'];

  const renderContent = (layout: string, defs: IVariables[]) => {
    return defs
      .filter((i: IVariables) => (i.layout || 'base') === layout)
      .map((definition: IVariables, index: number) => (
        <RenderDefinition
          key={String(index)}
          definition={definition}
          getSharedProps={getSharedProps}
        />
      ));
  };

  return (
    <Container locale={props.locale} classNames={props.classNames}>
      <Layout
        contentFirst={props.layout !== 'sidebarLeft'}
        showHeader={false}
        showFooter={false}
        i18n={props.i18n}
        sidebar={renderContent('sidebar', definitions)}
      >
        {renderContent('base', definitions)}
      </Layout>
    </Container>
  );
}

CustomTemplate.propTypes = {
  ...routePropTypes,
  definitions: PropTypes.arrayOf(PropTypes.shape({})),
};

CustomTemplate.defaultProps = {
  definitions: [],
};

export default withTemplateHooks(CustomTemplate);
