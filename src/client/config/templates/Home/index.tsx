import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@tamm/ui-lib-v2-button';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Home(props: IVariables) {
  const { i18n } = props;
  return (
    <>
      {!props.loggedIn ? (
        <div>
          <p>{i18n('pleaseLogIn')}</p>
          <Link to="/login">
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
          <Link to="/economic-licence">
            <Button
              alignIcon="end"
              aria-label="button-primary"
              disabled={false}
              size="default"
              type="button"
              uiType="primary"
              withArrow
              label={i18n('getLicence')}
            />
          </Link>
        </div>
      )}
      <div style={{ height: 200 }} />
    </>
  );
}

Home.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Home);
