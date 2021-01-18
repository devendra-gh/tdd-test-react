import React from 'react';
import Container from 'client/containers';

import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';

/**
 * Profile template
 * @param {Object} props
 * @returns {JSX}
 */
function Profile(props: IVariables) {
  const { user } = props;

  return (
    <Container locale={props.locale}>
      <h1>{props.i18n('profile')}</h1>
      <ul>
        <li>
          <img src={`data:image/png;base64,${user.Photo}`} alt={user.IDN} />
        </li>
        <li>
          Full Name - {user['First Name EN']} {user['Last Name EN']}
        </li>
        <li>IDN - {user.IDN}</li>
        <li>Gender - {user.Gender}</li>
        <li>Nationality - {user['Nationality EN']}</li>
      </ul>
    </Container>
  );
}

Profile.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Profile);
