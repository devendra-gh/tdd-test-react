import React, { useState, useEffect } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import Input from '@tamm/ui-lib-v2-input';
import Grid from '@tamm/ui-lib-v2-grid';
import Form from '@tamm/ui-lib-v2-form';
import { BASE_PATH as RENEW_LICENCE_BASE_PATH } from 'client/config/renewLicence/routes';
import Loading from '../../components/Loading';

/* istanbul ignore file */

const querystring = require('query-string');

const isLicenceNumberValid = (licenceNumber: string) => {
  const patt = /CN-\d{7}$/i;
  return patt.test(licenceNumber);
};

function CheckValidity(props: IVariables) {
  const { i18n, subTitle, description, history } = props;
  const { Col, Row } = Grid;

  const [loading, setLoading] = useState(false);
  const [startShowingErrors, setStartShowingErrors] = useState(false);
  const [licenceNumber, setLicenceNumber] = React.useState<string>('');
  const [networkError, setNetworkError] = React.useState<string>('');

  const stateHandlers = {
    setLoading,
    setNetworkError,
  };

  const onSubmit = () => {
    if (isLicenceNumberValid(licenceNumber)) {
      props.onSubmit(licenceNumber, stateHandlers, props);
    } else {
      setStartShowingErrors(true);
    }
  };

  const onWizardSubmit = (wizardRenewLicense: string) => {
    if (isLicenceNumberValid(wizardRenewLicense)) {
      props.onSubmit(wizardRenewLicense, stateHandlers, props);
    } else {
      setStartShowingErrors(true);
    }
  };

  useEffect(() => {
    const queries = querystring.parse(window.location.search);
    const { wizardRenewLicense } = queries;
    if (wizardRenewLicense) {
      setLicenceNumber(wizardRenewLicense);
      onWizardSubmit(wizardRenewLicense);
    }
  }, []);
  return (
    <Container
      locale={props.locale}
      sidebar={
        <Sidebar
          currentStep={props.currentStep}
          currentSubStep={props.currentSubStep}
          i18n={i18n}
          stepsStatus={props.stepsStatus}
          steps={props.steps}
        />
      }
    >
      {networkError && networkError}
      {loading && <Loading />}
      {!loading && (
        <>
          <div className="">
            {subTitle && (
              <h3 className="syb-title" style={{ marginBottom: '2rem' }}>
                {i18n(subTitle)}
              </h3>
            )}
            {description && (
              <p style={{ color: '#000' }}>{i18n(description)}</p>
            )}
          </div>
          <div style={{ height: '40px' }} />
          <Form
            {...props}
            cancelLink={{
              href: RENEW_LICENCE_BASE_PATH,
              onClick: () => history.push(RENEW_LICENCE_BASE_PATH),
            }}
            submitButton={{
              label: i18n('button.check'),
              onClick: () => onSubmit(),
            }}
          >
            <Form.Fieldset twoColumns>
              <Input
                aria-label="licence number input area"
                help={
                  startShowingErrors &&
                  !isLicenceNumberValid(licenceNumber) &&
                  props.i18n('validationMessage.invalidLicenceNo')
                }
                label={i18n('label.licenceNumber')}
                onChange={value => setLicenceNumber(value)}
                validateStatus={
                  startShowingErrors && !isLicenceNumberValid(licenceNumber)
                    ? 'error'
                    : null
                }
                value={licenceNumber}
              />
            </Form.Fieldset>
          </Form>
          <Row>
            <Col span={6} />
          </Row>
        </>
      )}
    </Container>
  );
}

export default withTemplateHooks(CheckValidity);
