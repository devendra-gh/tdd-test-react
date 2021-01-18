import React from 'react';
// import PropTypes from 'prop-types';
import moment from 'moment';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import Table from '@tamm/ui-lib-v2-table';
import Notice from '@tamm/ui-lib-v2-notice';
import Button from '@tamm/ui-lib-v2-button';

/**
 * Payment Confirmation template
 * @param       {Object} props
 * @returns     {JSX}
 */
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
        <Notice
          content={
            <div>
              <p>{i18n('goldenServices.notice.desc.appointmentSummary')}</p>
            </div>
          }
          tags={[
            {
              label: i18n('goldenServices.label.referenceNo'),
              value: props.altId,
            },
            {
              label: i18n('goldenServices.label.submittedOn'),
              value: moment(props.submitDate).format('Do MMMM, YYYY'),
            },
          ]}
          status="success"
          title={i18n('goldenServices.notice.appointmentSummary')}
        />
        <div style={{ height: 50 }} />

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
        <div style={{ height: 60 }} />
        <div style={{ height: '40px' }} />
        <div style={{ height: '40px' }} />
        <Button
          label={i18n('button.dashboard')}
          uiType="secondary"
          onClick={() => {
            props.onSubmit(props);
          }}
        />
        <span style={{ margin: '20px' }} />
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
