import React, { useEffect, useState } from 'react';
import FormTemplate from '@tamm/ui-lib-v2-form-template';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Sidebar from 'client/templates/Sidebar';
import Checkbox from '@tamm/ui-lib-v2-checkbox';
import Alert from '@tamm/ui-lib-v2-alert';
import Form from '@tamm/ui-lib-v2-form';
// import Button from '@tamm/ui-lib-v2-button';
// import Link from '@tamm/ui-lib-v2-link';
import Loading from '../../../../templates/Loading';
import './ServiceForm.less';

/**
 * Service Form template
 * @param       {Object} props
 * @returns     {JSX}
 */

function ServiceForm(props: IVariables) {
  const { i18n } = props;

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    telephone: '',
    transactionType: '',
    licenceNo: '',
    city: '',
    address: '',
    date: '',
    time: '',
    termAndCondition: '',
  });

  useEffect(() => {
    props.init(props);
  }, []);

  if (props.goldenService.isLoading) {
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
      <FormTemplate
        inputGroups={props.getFields(
          props,
          validationErrors,
          setValidationErrors,
        )}
      />
      <Form
        submitButton={{
          label: i18n('button.submit'),
          onClick: () => {
            props.onSubmit(props, validationErrors, setValidationErrors);
          },
        }}
        cancelLink={{
          label: i18n('button.cancel'),
          href: props.cancelLink,
        }}
      >
        <Form.Fieldset
          title={i18n('goldenServices.subTitle.termsAndConditons')}
        >
          <ul className="ServiceForm__form-tac-ui">
            <li>{i18n('goldenServices.tc.li1')}</li>
            <li>{i18n('goldenServices.tc.li2')}</li>
            <li>{i18n('goldenServices.tc.li3')}</li>
            <li>{i18n('goldenServices.tc.li4')}</li>
            <li>{i18n('goldenServices.tc.li5')}</li>
            <li>{i18n('goldenServices.tc.li6')}</li>
          </ul>
        </Form.Fieldset>

        <div style={{ height: '40px' }} />

        <Checkbox
          checked={props.goldenService.form.termAndCondition}
          id="terms"
          label={i18n('goldenServices.label.tc')}
          name="checkbox"
          onChange={e => {
            // remove validation message if checked
            if (e.target.checked) {
              setValidationErrors({
                ...validationErrors,
                termAndCondition: '',
              });
            }
            // on Change
            props.onCheckboxChange(
              props,
              e.target.checked,
              'termAndCondition',
              validationErrors,
              setValidationErrors,
            );
          }}
          validateStatus={validationErrors.termAndCondition ? 'error' : ''}
        />
        {validationErrors.termAndCondition ? (
          <div style={{ padding: 20 }}>
            <Alert message={validationErrors.termAndCondition} status="error" />
          </div>
        ) : null}
      </Form>
      <div style={{ height: '40px' }} />
      {/* <hr />
      <Button
        aria-label="submit"
        label={i18n('button.submit')}
        onClick={() => {
          props.onSubmit(props, validationErrors, setValidationErrors);
        }}
      />
      <span style={{ margin: '20px' }} />
      <Link
        aria-label="ariaLabel"
        href={props.cancelLink}
        disabled={false}
        label={i18n('button.cancel')}
        tammHref="/www.tamm.abudhabi/"
        target="_self"
        uiType="text"
      /> */}
    </Container>
  );
}

ServiceForm.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(ServiceForm);
