import React, { useState } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';
import Input from '@tamm/ui-lib-v2-input';
import Grid from '@tamm/ui-lib-v2-grid';
import Form from '@tamm/ui-lib-v2-form';
import Sidebar from 'client/templates/Sidebar';
import Loading from 'client/templates/Loading';

const validateLicence = (licenceNumber: string) => {
  const patt = /CN-\d{7}$/;
  return patt.test(licenceNumber);
};

function FormTemplate(props: IVariables) {
  const { i18n } = props;
  const { Col, Row } = Grid;
  const [inValid, setInValid] = useState(true);
  const [errorText, setErrorText] = useState('');
  const [licenceNumber, setlicenceNumber] = React.useState<string>('');

  const onChange = (value: string) => {
    setlicenceNumber(value);
    props.onChange(value, props);
    if (validateLicence(value)) {
      setErrorText('');
      setInValid(false);
    } else {
      setErrorText(i18n('payfines.error.licenceNo'));
      setInValid(true);
    }
  };

  const onSubmit = () => {
    if (!inValid) {
      props.onSubmit(licenceNumber, props);
    }
  };

  if (props.formBusinessLicenceFine.isLoading) {
    return <Loading />;
  }
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
      <div className="">
        {props.subTitle && (
          <h3
            className="syb-title"
            style={{ marginBottom: '2rem', color: '#161038' }}
          >
            {props.i18n(props.subTitle)}
          </h3>
        )}
        {props.description && (
          <p style={{ color: '#3f3e45' }}>{props.i18n(props.description)}</p>
        )}
      </div>
      <div style={{ height: '40px' }} />
      <Form
        {...props}
        submitButton={{
          disabled: inValid,
          label: i18n(props.onSubmitLabel),
          onClick: () => {
            onSubmit();
          },
        }}
        cancelLink={{
          href: '/business-licence-fine',
        }}
      >
        <Form.Fieldset twoColumns>
          <Input
            aria-label="input-text"
            defaultValue=""
            disabled={false}
            help={errorText}
            label={i18n('payfines.label.licenceNo')}
            onChange={e => onChange(e)}
            placeholder=""
            readonly={false}
            textDirection="ltr"
            type="text"
            validateStatus={inValid && errorText ? 'error' : null}
            value={licenceNumber}
          />
        </Form.Fieldset>
      </Form>

      <Row>
        <Col span={6} />
      </Row>
    </Container>
  );
}

export default withTemplateHooks(FormTemplate);
