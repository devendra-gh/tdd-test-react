import React from 'react';
import Container from 'client/containers';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import LoginRequired from '@tamm/ui-lib-v2-login-required';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';

/**
 * Login template
 * @param       {Object} props
 * @returns     {JSX}
 */
function LoginTemplate(props: IVariables) {
  const { i18n, locale } = props;
  const isLocal =
    window.location.href.indexOf('localhost') !== -1 ||
    window.location.href.indexOf('journeys-test.abudhabi.ae') !== -1;

  return (
    <>
      <Container locale={locale}>
        <LoginRequired
          i18n={i18n}
          smartPassProps={{
            link: `/api/smartpass/${
              isLocal ? 'demo-login' : 'login?provider=smartpass'
            }?redirectUrl=${window.location.href.replace('/login', '/')}`,
          }}
          uaePassProps={{
            link: `/api/smartpass/${
              isLocal ? 'demo-login' : 'login?provider=uaepass'
            }?redirectUrl=${window.location.href.replace('/login', '/')}`,
          }}
        />
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

LoginTemplate.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(LoginTemplate);
