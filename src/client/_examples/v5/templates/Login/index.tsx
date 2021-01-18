import React from 'react';
import Button from '@tamm/ui-lib-v2-button';
import { Link } from 'react-router-dom';
import Container from 'client/containers';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';

/**
 * Login template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Login(props: IVariables) {
  const { i18n } = props;
  // console.log('Store login', props);
  return (
    <>
      <Container>
        {!props.loggedIn ? (
          <div>
            <p>{i18n('pleaseLogIn')}</p>
            <Link
              to={`/api/smartpass/${
                window.location.href.indexOf('http://localhost') === 0
                  ? 'demo-login'
                  : 'login'
              }?redirectUrl=${window.location.href.replace('/login', '/')}`}
            >
              <Button
                alignIcon="end"
                aria-label="button-primary"
                disabled={false}
                label={i18n('logIn')}
                size="default"
                type="button"
                uiType="primary"
                withArrow
              />
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/submit-licence">
              <Button label={i18n('getLicence')} />
            </Link>
          </div>
        )}
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

Login.propTypes = {
  ...routePropTypes,
};

export { Login };

export default withTemplateHooks(Login);
