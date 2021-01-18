import React from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import PageNotFoundTemplate from '@tamm/ui-lib-v2-page-not-found-template';
import Container from 'client/containers';

function Page404Template(props: IVariables) {
  return (
    <Container>
      <PageNotFoundTemplate
        backButton={{
          label: props.i18n(props.label),
          onClick: () => props.history.push(props.btnBack),
        }}
        i18n={props.i18n}
      />
    </Container>
  );
}

Page404Template.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Page404Template);
