/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import Input from '@tamm/ui-lib-v2-input';
import Grid from '@tamm/ui-lib-v2-grid';
import Form from '@tamm/ui-lib-v2-form';
import Button from '@tamm/ui-lib-v2-button';
import Table from '@tamm/ui-lib-v2-table';
import './form.less';
import Tooltip from '@tamm/ui-lib-v2-tooltip';
import Link from '@tamm/ui-lib-v2-link';
import Alert from '@tamm/ui-lib-v2-alert';
import Spinner from '@tamm/ui-lib-v2-spinner';
import Loading from 'client/templates/Loading';
import { Common } from 'client/config/payApplicationFees/utils';
import { BASE_PATH } from '../../routes';

/* eslint complexity: ["error", 11] */

function FormTemplate(props: IVariables) {
  const { i18n, subTitle, validateTransactionNumber } = props;
  const { Col, Row } = Grid;
  const [inValid, setInValid] = useState(0);
  const [errorText, setErrorText] = useState('');
  const [transactionNumber, settransactionNumber] = React.useState<string>('');

  const items: any[] = [
    {
      id: '1',
      nameEn: props.form.businessNameEng,
      nameAr: props.form.businessNameArb,
    },
  ];
  /* eslint-disable no-shadow */
  const onChange = (value: string, props: IVariables) => {
    settransactionNumber(value);
    props.onChange(value, props);
  };
  /* eslint-disable no-shadow */
  const onShowTradeName = (props: IVariables) => {
    if (validateTransactionNumber(props)) {
      setErrorText('');
      setInValid(0);
      props.onShowTradeName(props);
    } else {
      setErrorText(props.i18n('errorMsg.invalid.transactionNumber'));
      setInValid(1);
    }
  };

  if (props.showLoader) {
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
        {subTitle && (
          <h3 className="syb-title" style={{ marginBottom: '2rem' }}>
            {i18n(subTitle)}
          </h3>
        )}
      </div>
      <div className="">
        <span style={{ color: '#3f3e45', fontSize: '16px' }}>
          {i18n('toolTip.desc1')}
        </span>
        <Tooltip
          position="bottom"
          title={i18n('toolTip.title')}
          trigger="hover"
          width="auto"
        >
          <span style={{ color: '#3f51b5', fontSize: '16px' }}>
            {i18n('tooltip.target')}
          </span>
        </Tooltip>
      </div>

      <div style={{ height: '40px' }} />
      <Form {...props}>
        <Form.Fieldset twoColumns>
          <Input
            aria-label="input-text"
            defaultValue=""
            disabled={false}
            help={errorText}
            label={i18n('form.transactionNumber')}
            onChange={e => onChange(e, props)}
            placeholder=""
            readonly={false}
            //  size="default"
            textDirection="ltr"
            type="text"
            validateStatus={inValid && errorText ? 'error' : null}
            value={props.form.transactionNumber}
          />
          <div className="ui-lib-button-story" style={{ marginTop: '20px' }}>
            <Button
              aria-label="showTradeName"
              uiType="secondary"
              label={i18n('button.showTradeName')}
              size="medium"
              onClick={e => onShowTradeName(props)}
            />
          </div>
          <p className="Note">{i18n('input.information')}</p>
        </Form.Fieldset>
        {props.form.showTradeName && props.form.businessNameArb !== '' ? (
          <div>
            <Table
              i18n={i18n}
              clickable={false}
              columns={[
                {
                  id: 'nameEn',
                  title: i18n('form.table.column1'),
                },
                {
                  id: 'nameAr',
                  title: i18n('form.table.column2'),
                },
              ]}
              headerHidden={false}
              items={items}
              selectable={false}
              size="small"
              title={i18n('tradeName.title')}
            />
            <br />
            <br />
          </div>
        ) : (
          ''
        )}
        {props.showError ? (
          <Alert message="form.alert.error" status="error" />
        ) : (
          ''
        )}
        {props.form.showTradeName && props.form.businessNameArb === '' ? (
          <Alert message={i18n('form.alert.info')} status="info" />
        ) : (
          ''
        )}
        {props.showSpinner ? (
          <div style={{ marginTop: '1rem', marginLeft: '38rem' }}>
            <Spinner type="logo" />
          </div>
        ) : (
          ''
        )}
      </Form>
      <div className="buttons-container ui-lib-form__controls">
        <Button
          aria-label="Next"
          label={i18n('button.next')}
          withArrow
          onClick={() => props.onSubmit(transactionNumber, props)}
          disabled={props.buttonDisabled}
        />
        <div className="link-container">
          <Link
            aria-label="cancel"
            href=""
            label={i18n('button.cancel')}
            onClick={() => {
              Common.reset(props);
              props.history.push(BASE_PATH);
            }}
            uiType="text"
          />
        </div>
      </div>
      <Row>
        <Col span={6} />
      </Row>
    </Container>
  );
}

export default withTemplateHooks(FormTemplate);
