import React from 'react';
// import PropTypes from 'prop-types';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import Notice from '@tamm/ui-lib-v2-notice';
import moment from 'moment';

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
              <p>{i18n('goldenServices.subTitle.desc.paymentInProgress')}</p>
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
          status="inProgress"
          title={i18n('goldenServices.subTitle.paymentInProgress')}
        />
        {props.additionalTextWithLink && props.link && (
          <div>
            <p>
              {i18n(props.text1)}{' '}
              <a href={props.link} rel="noopener noreferrer" target="_blank">
                {i18n(props.text2)}
              </a>{' '}
              {i18n(props.text3)}
            </p>
          </div>
        )}
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
