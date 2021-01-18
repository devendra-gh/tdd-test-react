import React from 'react';
// import PropTypes from 'prop-types';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import Table from '@tamm/ui-lib-v2-table';
import Button from '@tamm/ui-lib-v2-button';
import Total from '@tamm/ui-lib-v2-total';

function PaymentConfirmationTemplate(props: IVariables) {
  const { i18n } = props;

  return (
    <>
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
        <div style={{ height: '20px' }} />

        {props.summaryList &&
          props.summaryList.constructor === Array &&
          props.summaryList.map((item: any) => (
            <Table
              i18n={i18n}
              columns={item.columns}
              headerHidden={item.headerHidden}
              items={item.items}
              title={item.title}
              uiType={item.uiType}
              {...item}
            />
          ))}
        <div style={{ height: 20 }} />
        <Total unit="AED" value={props.totalAmount} />
        <div style={{ height: 40 }} />
        <Button
          aria-label="button-primary"
          disabled={false}
          label={i18n('button.pay')}
          onClick={e => props.onClick(props)}
          type="button"
          uiType="primary"
          withArrow
        />
        <div style={{ height: 60 }} />
      </Container>
    </>
  );
}

PaymentConfirmationTemplate.propTypes = {
  ...routePropTypes,
  /** Title */
  // title: PropTypes.string.isRequired,
  // summaryList: PropTypes.instanceOf(Object).isRequired,
};

PaymentConfirmationTemplate.defaultProps = {
  summaryList: [],
};

export default withTemplateHooks(PaymentConfirmationTemplate);
