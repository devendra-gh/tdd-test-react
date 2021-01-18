import React, { useState } from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Sidebar from 'client/templates/AmendmentsSidebar';
import Informational from '@tamm/ui-lib-v2-informational-template';
import Alert from '@tamm/ui-lib-v2-alert';
import Form from '@tamm/ui-lib-v2-form';
import FileUploads from './FileUploads';

/**
 * Upload template
 * @param       {Object} props
 * @returns     {JSX}
 */

function Upload(props: IVariables) {
  const { i18n, locale, amendmentServerError } = props;
  // const inputGroups: IVariables[] = props.getRequiredDocuments(props);

  const [inputGroups] = useState(props.getRequiredDocuments(props));
  const [startShowingErrors, setStartShowingErrors] = useState(false);

  const onNext = () => {
    setStartShowingErrors(true);
    if (props.validation(inputGroups, props.documents)) {
      props.onSubmitFiles(props);
    }
  };

  return (
    <Container
      locale={locale}
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
        <h3 className="titleColor"> {i18n('uploads.title')}</h3>
        <p className="subtitleColor">{i18n('uploads.description')}</p>
      </Informational>
      <div className="height-20" />
      <FileUploads
        inputGroups={inputGroups}
        handleChange={(docs: IVariables[]) => {
          props.actions.documents.update(docs);
        }}
        values={props.documents}
        i18n={i18n}
        startShowingErrors={startShowingErrors}
        name="documents"
        locale={locale}
      />

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
          onClick: onNext,
        }}
      />
      <div className="height-100" />
    </Container>
  );
}

export default withTemplateHooks(Upload);
