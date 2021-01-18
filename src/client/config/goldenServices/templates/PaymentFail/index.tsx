import React from 'react';
// import PropTypes from 'prop-types';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import Notice from '@tamm/ui-lib-v2-notice';
import Button from '@tamm/ui-lib-v2-button';

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
              <p>{i18n('goldenServices.subTitle.desc.paymentFail')}</p>
            </div>
          }
          tags={[
            {
              label: i18n('goldenServices.label.referenceNo'),
              value: props.altId,
            },
            {
              label: i18n('goldenServices.label.submittedOn'),
              value: new Date(props.submitDate).toDateString(),
            },
          ]}
          status="failure"
          title={i18n('goldenServices.subTitle.paymentFail')}
        />
        <div style={{ height: '40px' }} />
        <hr />
        <div style={{ height: '40px' }} />
        <Button
          label={i18n('button.retryPayment')}
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
};

export default withTemplateHooks(PaymentConfirmationTemplate);
