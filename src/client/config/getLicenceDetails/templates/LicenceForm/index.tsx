import React, { useState } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';
import Input from '@tamm/ui-lib-v2-input';
import Button from '@tamm/ui-lib-v2-button';
import Grid from '@tamm/ui-lib-v2-grid';
import Form from '@tamm/ui-lib-v2-form';
import Sidebar from 'client/templates/Sidebar';
import Spinner from '@tamm/ui-lib-v2-spinner';
import Table from '@tamm/ui-lib-v2-table';
import './index.less';

const getErrorText = (licenceNumber: string) => {
  if (!licenceNumber) return 'getLicenceDetails.error.required';
  if (!/CN-\d{7}$/.test(licenceNumber)) {
    return 'getLicenceDetails.error.licenceNumber';
  }
  return false;
};

function renderTable(props: IVariables) {
  return (
    <div>
      <div className="table-col-width-50">
        {props.tradeLicence.summaryList &&
          props.tradeLicence.summaryList.constructor === Array &&
          props.tradeLicence.summaryList.map((item: any) => (
            <Table
              i18n={props.i18n}
              columns={item.columns}
              headerHidden={item.headerHidden}
              items={item.items}
              title={item.title}
              size={item.uiType}
              selectable={false}
              {...item}
            />
          ))}
      </div>
      {props.tradeLicence.summaryList ? <div style={{ height: 60 }} /> : null}
      {props.tradeLicence.activitiesList &&
        props.tradeLicence.activitiesList.constructor === Array &&
        props.tradeLicence.activitiesList.map((item: any) => (
          <Table
            i18n={props.i18n}
            columns={item.columns}
            headerHidden={item.headerHidden}
            items={item.items}
            title={item.title}
            size={item.uiType}
            selectable={false}
            {...item}
          />
        ))}
    </div>
  );
}

function renderForm(props: IVariables) {
  const { i18n } = props;
  const { Col, Row } = Grid;
  const [startShowingError, setStartShowingError] = useState(false);
  const [licenceNumber, setlicenceNumber] = React.useState<string>('');
  const errorText = getErrorText(licenceNumber);
  const onChange = (value: string) => {
    setlicenceNumber(value);
    props.onChange(value, props);
  };

  const onSubmit = () => {
    if (!errorText) {
      props.onSubmit(licenceNumber, props);
    } else {
      setStartShowingError(true);
    }
  };

  return (
    <Form
      {...props}
      backButton={{
        label: props.i18n('button.back'),
        withArrow: true,
        alignIcon: 'start',
        uiType: 'secondary',
        onClick: () => props.onBack(props),
      }}
    >
      <Row flex>
        <Col md={6} xs={12}>
          <Input
            help={startShowingError && errorText ? i18n(errorText) : ''}
            aria-label="input-text"
            defaultValue=""
            disabled={false}
            name="licenceNumber"
            label={i18n('getLicenceDetails.label.licenceNumber')}
            onChange={e => onChange(e)}
            type="text"
            placeholder=""
            readonly={false}
            validateStatus={startShowingError && errorText ? 'error' : null}
            value={licenceNumber}
          />
        </Col>
        <Col md={6} xs={12} className="col-padding col-padding-trade-name">
          <div className="ui-lib-button-story" style={{ marginTop: '20px' }}>
            <Button
              aria-label="button-primary"
              label={i18n(props.onSubmitLabel)}
              name={undefined}
              onClick={() => onSubmit()}
              size="medium"
              type="button"
              uiType="primary"
              withArrow={false}
              disabled={props.tradeLicence.isLoading}
            />
          </div>
        </Col>
      </Row>
      <div style={{ height: 48 }} />
      {props.tradeLicence.isLoading && (
        <Row>
          <Col md={6} xs={12} className="spinner-wrapper">
            {<Spinner type="circle" />}
          </Col>
        </Row>
      )}
      {renderTable(props)}
    </Form>
  );
}

function FormTemplate(props: IVariables) {
  const { i18n } = props;

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
      {renderForm(props)}
      {props.tradeLicence.summaryList && <div style={{ height: 60 }} />}
    </Container>
  );
}

export default withTemplateHooks(FormTemplate);
// export default FormTemplate;
