import React, { useState } from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Sidebar from 'client/templates/AmendmentsSidebar';
import FormTemplate from '@tamm/ui-lib-v2-form-template';
// import Form from '@tamm/ui-lib-v2-form';
import Alert from '@tamm/ui-lib-v2-alert';
import Informational from '@tamm/ui-lib-v2-informational-template';
import Form from '@tamm/ui-lib-v2-form';

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */

function Financial(props: IVariables) {
  const {
    i18n,
    licenceDetails,
    handleCapitalAmountChange,
    dedErrorMessage,
    amendmentServerError,
    onSubmitAmendment,
  } = props;
  const [error, setError] = useState(false);
  const [validate, setValidate] = useState(false);

  const fieldValidation = (value: string) => {
    const pattern = /^[0-9.]+$/;
    if (value.length !== 0) {
      return !value.match(pattern);
    }
    return false;
  };
  const handleChange = (value: string) => {
    setValidate(false);
    setError(fieldValidation(value));
    handleCapitalAmountChange(props, value);
  };
  const financialtemplate = [
    {
      name: i18n('financial.amendCapital'),
      fields: [
        {
          'aria-label': i18n('financial.capitalAmount'),
          elementType: 'input',
          key: 'financial.capitalAmount',
          label: i18n('financial.capitalAmount'),
          name: 'capitalAmount',
          value: licenceDetails.paidUpCapital.amendedCapital,
          onChange: (value: any) => {
            handleChange(value);
          },
          validate: () =>
            validate ? i18n('validationMessage.required') : false,
        },
      ],
      twoColumns: true,
    },
  ];

  const currentCapital = new Intl.NumberFormat().format(
    licenceDetails.paidUpCapital.paidUpCapital,
  );

  const validateOnSubmit = async () => {
    if (!props.licenceDetails.paidUpCapital.amendedCapital) {
      setValidate(true);
    } else {
      const isError = fieldValidation(
        props.licenceDetails.paidUpCapital.amendedCapital,
      );
      if (isError) {
        setError(true);
      } else {
        onSubmitAmendment(props);
      }
    }
  };
  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          <Sidebar
            currentStep={props.currentStep}
            currentSubStep={props.currentSubStep}
            i18n={props.i18n}
            steps={props.steps}
            stepsStatus={props.stepsStatus}
            showSidebar={props.showSidebar}
          />
        }
      >
        {(amendmentServerError || dedErrorMessage) && (
          <div id="errorMessage">
            <Alert
              message={amendmentServerError || dedErrorMessage}
              status="error"
            />
            <div className="height-20" />
          </div>
        )}
        <Informational>
          <h3 className="titleColor">{props.i18n(props.subTitle)}</h3>
          {props.description && (
            <p className="subtitleColor">{props.i18n(props.description)}</p>
          )}
        </Informational>
        <div className="height-20" />
        <div>
          <p className="subtitleColor">{i18n(props.currentCapital)}</p>
          <p className="subtitleColor font-weight-900">AED {currentCapital}</p>
        </div>
        <div className="height-20" />
        <div>
          <FormTemplate
            formData={{}}
            i18n={i18n}
            id="representativeType"
            inputGroups={financialtemplate}
          />
        </div>
        <div>
          {error ? (
            <div>
              <Alert message={i18n('financial.invalid')} status="error" />
              <div className="height-20" />
            </div>
          ) : (
            ''
          )}
        </div>

        <Form
          backButton={{
            label: i18n('button.back'),
            withArrow: true,
            alignIcon: 'start',
            uiType: 'secondary',
            onClick: () => props.onBack(props),
          }}
          submitButton={{
            label: i18n('button.next'),
            withArrow: true,
            alignIcon: 'end',
            uiType: 'primary',
            onClick: validateOnSubmit,
          }}
        />

        <div className="height-100" />
      </Container>
    </>
  );
}

export default withTemplateHooks(Financial);
