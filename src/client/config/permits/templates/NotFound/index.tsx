import React from 'react';
import PageNotFoundTemplate from '@tamm/ui-lib-v2-page-not-found-template';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';

import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Container from 'client/containers';

function Page404(props: IVariables) {
  return (
    <Container>
      <PageNotFoundTemplate
        backButton={{
          label: props.i18n(props.label),
          onClick: () => props.history.push('/'),
        }}
        i18n={() => {}}
      />
    </Container>
  );
}
Page404.propTypes = {
  ...routePropTypes,
};
export default withTemplateHooks(Page404);
