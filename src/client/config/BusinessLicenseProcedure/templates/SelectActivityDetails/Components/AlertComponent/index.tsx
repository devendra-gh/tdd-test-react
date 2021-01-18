import React, { useEffect } from 'react';
import Alert from '@tamm/ui-lib-v2-alert';
import { IVariables } from '@tamm/app-composer';

function AlertComponent(props: IVariables) {
  const { i18n, formSelectActivity } = props;
  const { showError, alertText, alertStatus, inputType } = formSelectActivity;

  useEffect(() => {
    if (alertStatus === 'error') {
      props.history.push('/business-licence-procedure/error-page');
    }
  }, [alertStatus]);

  const getAlert = () => {
    if (inputType === 'CATEGORY' && alertText === 'errorMessage.noData')
      return i18n('errorMessage.noData.category');
    return i18n(alertText);
  };
  return (
    <div className="alert-container">
      {showError && <Alert message={getAlert()} status={alertStatus} />}
    </div>
  );
}

export default AlertComponent;
