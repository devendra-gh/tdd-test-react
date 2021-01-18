import React from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IRouteVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import SmartPassButton from '@tamm/ui-lib-v2-smart-pass-button';
import UAEPassButton from '@tamm/ui-lib-v2-uaepass-button';
import './SmartpassLogin.less';

interface LoginInterface extends IRouteVariables {
  i18n: (key: string) => string;
  description: string;
  smartpassText: string;
  uaepassText: string;
  smartpassOnClick: () => {};
  uaepassOnClick: () => {};
  smartpassLink: string;
  uaepassLink: string;
}

/**
 * Login template
 * @param       {Object} props
 * @returns     {JSX}
 */
const Login = (props: LoginInterface) => {
  const {
    i18n,
    description,
    smartpassText,
    uaepassText,
    smartpassLink,
    uaepassLink,
  } = props;

  return (
    <Container>
      <div className="login-container">
        {i18n(description)}
        <div className="login-container__section">
          <SmartPassButton
            aria-label="smartpass button"
            // @ts-ignore
            // disabled={false}
            link={smartpassLink}
            linkTarget="_self"
            onClick={props.smartpassOnClick}
            // text="Start a New Journey"
          />
        </div>
        {i18n(smartpassText)}
        <h4 className="login-container__text-line login-container__section">
          {i18n('or')}
        </h4>
        <div className="login-container__section">
          <UAEPassButton
            aria-label="uaepass button"
            disabled={false}
            link={uaepassLink}
            linkTarget="_self"
            onClick={props.uaepassOnClick}
          />
        </div>
        {i18n(uaepassText)}
      </div>
      <div style={{ height: 100 }} />
    </Container>
  );
};

Login.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Login);
