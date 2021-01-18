import React from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import PageNotFoundTemplate from '@tamm/ui-lib-v2-page-not-found-template';
import Container from 'client/containers';

function Page404(props: IVariables) {
  return (
    <Container>
      <div role="navigation" arial-label="Page Not Found">
        <PageNotFoundTemplate
          backButton={{
            'aria-label': props.i18n(props.label),
            label: props.i18n(props.label),
            onClick: () => props.history.push(props.btnBack),
          }}
          i18n={props.i18n}
        />
      </div>
    </Container>
  );
}

Page404.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Page404);
