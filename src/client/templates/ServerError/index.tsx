import React from 'react';
import { IVariables } from '@tamm/app-composer';
import Alert from '@tamm/ui-lib-v2-alert';

const ServerError = (props: IVariables) => {
  const { amendmentServerError, dedErrorMessage } = props;
  return (
    ((amendmentServerError || dedErrorMessage) && (
      <div id="errorMessage">
        <Alert
          message={
            amendmentServerError || dedErrorMessage.replace(/<[^>]+>/g, ' ')
          }
          status="error"
        />
      </div>
    )) ||
    ''
  );
};

export default ServerError;
