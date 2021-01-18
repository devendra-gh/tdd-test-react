import React from 'react';
// import PropTypes from 'prop-types';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import Notice from '@tamm/ui-lib-v2-notice';

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
              <p>{i18n('goldenServices.subTitle.desc.submitted')}</p>
            </div>
          }
          status="success"
          title={i18n('goldenServices.subTitle.submitted')}
        />
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
