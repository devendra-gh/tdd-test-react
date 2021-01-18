import React, { useEffect } from 'react';
import Form from '@tamm/ui-lib-v2-form';
import Tooltip from '@tamm/ui-lib-v2-tooltip';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Sidebar from 'client/templates/Sidebar';
import Input from '@tamm/ui-lib-v2-input';
import Loading from '../../../../templates/Loading';

/**
 * Status template
 * @param       {Object} props
 * @returns     {JSX}
 */
function StatusForm(props: IVariables) {
  useEffect(() => {
    props.init(props);
  }, []);

  const { i18n, tooltipTitle, onChange, validate } = props;

  const getInputField = () => {
    const validateResponse = validate(props);
    if (validateResponse) {
      return (
        <>
          {/* Enter key DLS bug workaround */}
          <div style={{ display: 'none' }}>
            <Input // for bug fix
              aria-label="input-text"
            />
          </div>
          <Input
            name="input-text"
            type="text"
            label={i18n('checkApplicationStatus.form.inputLabel')}
            placeholder=""
            help={i18n('checkApplicationStatus.message.invalidTxNumber')}
            onChange={value => {
              onChange(props, value, 'applicationNumber');
            }}
            aria-label={i18n('checkApplicationStatus.form.inputLabel')}
            validateStatus="error"
          />
        </>
      );
    }
    return (
      <>
        {/* Enter key DLS bug workaround */}
        <div style={{ display: 'none' }}>
          <Input // for bug fix
            aria-label="input-text"
          />
        </div>
        <Input
          name="input-text"
          type="text"
          aria-label={i18n('checkApplicationStatus.form.inputLabel')}
          label={i18n('checkApplicationStatus.form.inputLabel')}
          placeholder=""
          help={i18n('checkApplicationStatus.form.help')}
          onChange={value => {
            onChange(props, value, 'applicationNumber');
          }}
        />
      </>
    );
  };

  if (props.formApplicationNumber.isSubmitted) {
    return <Loading />;
  }
  return (
    <Container
      locale={props.locale}
      sidebar={
        <Sidebar
          currentStep={props.currentStep}
          currentSubStep={props.currentSubStep}
          i18n={props.i18n}
          steps={props.steps}
          stepsStatus={props.stepsStatus}
        />
      }
    >
      <div className="">
        <h3
          className="syb-title"
          style={{ marginBottom: '2rem', color: '#161038' }}
        >
          {i18n(props.subTitle)}
        </h3>
        <div className="">
          <span style={{ color: '#3f3e45', fontSize: '16px' }}>
            {i18n('checkApplicationStatus.form.description.1')}
          </span>
          <Tooltip position="bottom" title={i18n(tooltipTitle)} trigger="hover">
            <span style={{ color: '#3f51b5', fontSize: '16px' }}>
              {i18n('checkApplicationStatus.form.description.2')}
            </span>
          </Tooltip>
        </div>
      </div>
      <div style={{ margin: '40px' }} />
      <Form
        name="applicationStatusForm"
        submitButton={{
          label: i18n('button.submit'),
          onClick: () => props.onSubmit(props),
          disabled: !props.isTransactionNumber(
            props.formApplicationNumber.applicationNumber,
          ),
        }}
        cancelLink={{
          href: props.cancelLink,
        }}
      >
        <Form.Fieldset twoColumns>{getInputField()}</Form.Fieldset>
      </Form>
    </Container>
  );
}

StatusForm.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(StatusForm);
