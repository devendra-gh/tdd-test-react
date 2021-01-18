import React from 'react';
import Container from 'client/containers';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import LoginRequired from '@tamm/ui-lib-v2-login-required';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';

const querystring = require('query-string');

/**
 * Login template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Login(props: IVariables) {
  const { i18n, locale } = props;
  const isLocal =
    window.location.href.indexOf('localhost') !== -1 ||
    window.location.href.indexOf('journeys-test.abudhabi.ae') !== -1;
  const queries = querystring.parse(window.location.search);

  return (
    <>
      <Container locale={locale}>
        <LoginRequired
          i18n={i18n}
          smartPassProps={{
            link: `/api/smartpass/${
              isLocal ? 'demo-login' : 'login'
            }?provider=smartpass&redirectUrl=${
              queries.redirectUrl ? queries.redirectUrl : window.location.href
            }`,
          }}
          uaePassProps={{
            link: `/api/smartpass/${
              isLocal ? 'demo-login' : 'login'
            }?provider=uaepass&redirectUrl=${
              queries.redirectUrl ? queries.redirectUrl : window.location.href
            }`,
          }}
        />
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

Login.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Login);
