import React, { useState } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';
import Sidebar from 'client/templates/PermitsSidebar';
import ServiceTemplate from '@tamm/ui-lib-v2-service-template';
import Form from '@tamm/ui-lib-v2-form';
import Checkbox from '@tamm/ui-lib-v2-checkbox';
import permitConfigs from 'client/config/permits/permitConfigs';
import FileUploads from '../PermitForm/components/FileUpload';

interface IButton {
  link?: string;
  onClick?: (props: IVariables) => void;
  variant: any;
  label: string;
  uiType: string;
}

interface Tags {
  label: string;
  value: string;
}

/**
 * Notice template
 * @param       {Object} props
 * @returns     {JSX}
 */
function EntityApprovalDocs(props: IVariables) {
  const {
    i18n,
    serviceType,
    onBackClick,
    handleToggleCheckbox,
    permitInfo,
  } = props;
  const PermitConfigs: { [key: string]: any } = permitConfigs;
  const serviceConfig = PermitConfigs[serviceType];
  const { isApproved, documents, showError } = permitInfo[
    serviceType
  ].entityApproval;
  const [validate, setValidate] = useState(false);

  const onSubmit = () => {
    setValidate(true);
    const isValid = props.validation(props);
    if (!isValid) {
      return;
    }
    props.onSubmit(props);
  };
  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          (props.currentStep || props.currentStep === '') && (
            <Sidebar
              currentStep={props.currentStep}
              currentSubStep={props.currentSubStep}
              i18n={props.i18n}
              steps={props.steps}
              stepsStatus={props.stepsStatus}
            />
          )
        }
      >
        <ServiceTemplate
          description={
            <div>
              <p>{i18n('entityApproval.sectionContent')}</p>
            </div>
          }
          title={i18n('entityApproval.sectionTitle')}
        />

        <FileUploads
          inputGroups={[
            {
              name: i18n('title.addAttachments'),
              stateKey: 'documents',
              fields: serviceConfig.entityApprovalForm.documents,
            },
          ]}
          handleChange={(value: any) => {
            props.actions.permitInfo.update({
              ...props.permitInfo,
              [serviceType]: {
                ...permitInfo[serviceType],
                entityApproval: {
                  ...props.permitInfo[serviceType].entityApproval,
                  documents: { ...value.entityApprovalDocs },
                },
              },
            });
          }}
          values={{
            entityApprovalDocs: documents,
          }}
          serviceType={serviceType}
          name="entityApprovalDocs"
          i18n={i18n}
          startShowingErrors={validate}
        />

        <Form.Fieldset title={i18n('title.termsAndConditions')}>
          <ServiceTemplate description={i18n('docs.description')} />
          <Checkbox
            checked={isApproved}
            label={i18n('global.termsAndConditions')}
            onChange={e => {
              handleToggleCheckbox(props);
            }}
            name="terms"
            validateStatus={showError && !isApproved ? 'error' : ''}
          />
          <Form
            {...props}
            backButton={{
              label: i18n('back'),
              withArrow: true,
              alignIcon: 'start',
              uiType: 'secondary',
              onClick: () => {
                onBackClick(props);
              },
            }}
            submitButton={{
              label: i18n('next'),
              withArrow: true,
              onClick: () => {
                onSubmit();
              },
            }}
          />
          <div style={{ height: 50 }} />
        </Form.Fieldset>
      </Container>
    </>
  );
}

export default withTemplateHooks(EntityApprovalDocs);
