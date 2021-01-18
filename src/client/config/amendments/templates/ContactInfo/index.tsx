import React, { useState } from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Sidebar from 'client/templates/AmendmentsSidebar';
import Informational from '@tamm/ui-lib-v2-informational-template';
import FormTemplate from '@tamm/ui-lib-v2-form-template';
import Form from '@tamm/ui-lib-v2-form';
import { checkValidationField } from 'client/config/amendments/utils/checkValidation';
import getAmendmentsMade from 'client/config/amendments/utils/getAmendmentsMade';
import Alert from '@tamm/ui-lib-v2-alert';
import { PAID_CAPITAL_AND_REVENUES_SALES } from 'client/config/amendments/constants';
import ContactInfoTemplate from './ContactInfoTemplate';
import ConfirmationPopup from '../Ownership/components/ConfirmationPopup';

function ContactInfo(props: IVariables) {
  const { i18n, licenceDetails, validation, amendmentServerError } = props;
  const [validate, setValidate] = useState(false);
  const [amendmentsMadePopup, setamendmentsMadePopup] = useState(false);
  const handleFieldChange = (fieldName: string, value: any) => {
    props.actions.licenceDetails.update({
      ...licenceDetails,
      contactInfo: {
        ...licenceDetails.contactInfo,
        [fieldName]:
          fieldName === 'termsAndCondition'
            ? !licenceDetails.contactInfo[fieldName]
            : value,
      },
    });
  };
  const items = Object.values(PAID_CAPITAL_AND_REVENUES_SALES).map(
    (item: any) => ({
      id: item.id,
      label: props.locale === 'en' ? item.nameEn : item.nameAr,
    }),
  );
  const template = {
    fields: Object.values(ContactInfoTemplate).map(
      (contactFields: IVariables) => ({
        fields: contactFields.fields.map((field: IVariables) => ({
          ...field,
          'aria-label': i18n(field['aria-label']),
          label: i18n(field.label),
          ...(field.elementType === 'inputTelephone'
            ? { onSelect: (value: any) => handleFieldChange(field.name, value) }
            : {
                onChange: (value: any) => handleFieldChange(field.name, value),
              }),
          value: licenceDetails.contactInfo[field.name],
          ...(field.name === 'paidupCapital' || field.name === 'revenueApprox'
            ? { items }
            : {}),
          ...(field.name === 'termsAndCondition'
            ? { checked: licenceDetails.contactInfo[field.name] }
            : {}),
          validate: (value: any) =>
            validate &&
            checkValidationField(field.validationConfig, value, true, i18n),
        })),
        twoColumns: contactFields.twoColumns,
        name: i18n(contactFields.name),
      }),
    ),
  };

  const validateOnSubmit = () => {
    setValidate(true);
    const isValid = validation(
      props,
      props.licenceDetails.contactInfo,
      'proInfo',
    );
    if (!isValid) {
      return;
    }

    if (Object.keys(getAmendmentsMade(props)).length > 0) props.submit(props);
    else setamendmentsMadePopup(true);
  };
  const onCancelReview = () => {
    setamendmentsMadePopup(false);
  };
  const onConfirmReview = () => {
    props.history.push('/amendments/categories');
  };
  return (
    <div id="contain">
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
        {amendmentServerError && (
          <div id="errorMessage">
            <Alert message={amendmentServerError} status="error" />
            <div className="height-20" />
          </div>
        )}
        <Informational>
          <h3 className="titleColor">{i18n('contactInfo.title')}</h3>
          <p className="subtitleColor">{i18n('contactInfo.description')}</p>
        </Informational>
        <div className="height-20" />
        <FormTemplate i18n={i18n} id="contact" inputGroups={template.fields} />
        <div className="height-40" />
        <Form
          {...props}
          backButton={{
            label: i18n('button.back'),
            withArrow: true,
            uiType: 'secondary',
            alignIcon: 'start',
            onClick: () => props.onBack(props),
          }}
          submitButton={{
            label: i18n('button.submit'),
            withArrow: true,
            onClick: validateOnSubmit,
            alignIcon: 'end',
            uiType: 'primary',
          }}
        />
        <ConfirmationPopup
          showPopUp={amendmentsMadePopup}
          onCancelModal={onCancelReview}
          onConfirmModal={onConfirmReview}
          title={i18n(`noChangesMsg`)}
          cancelText={i18n('cancelApplication')}
          confirmText={i18n('reviewApplication')}
          descriptionMsg={i18n('noChangesDescription')}
          setIcon="alertCircle"
        />
        <div className="height-100" />
      </Container>
    </div>
  );
}

ContactInfo.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(ContactInfo);
