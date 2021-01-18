import React, { useState } from 'react';
import {
  withTemplateHooks,
  IVariables,
  IRouteVariables,
} from '@tamm/app-composer';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
// import './Summary.less';
import Button from '@tamm/ui-lib-v2-button';
import Notice from '@tamm/ui-lib-v2-notice';
import { AlertCircleFilled } from '@tamm/ui-lib-v2-icon/Icons';
import Table from '@tamm/ui-lib-v2-table';
import { has } from 'lodash';
import { IStep } from 'client/config/steps';
import Form from '@tamm/ui-lib-v2-form';
import FileUploads from '../FileUploads';

interface IReturnedDocuments extends IRouteVariables {
  i18n: (key: string) => string;
  title: string;
  subTitle: string;
  description: string;
  locale: string;
  currentStep: string;
  currentSubStep: string;
  steps: IStep[];
  stepsStatus: Record<string, string>;
  submitLicence: IVariables;
  onSubmit: (props: IVariables) => {};
}

const inputGroups = [
  {
    twoColumns: true,
    stateKey: 'documents',
    customComponent: 'FileUploads',
    fields: [
      {
        'aria-label': 'file upload',
        elementType: 'fileUpload',
        name: 'activitySupportingDoc',
        accept: ['application/pdf'],
        label: 'Support Document',
        maxSize: 5e6,
        help: 'addEconomicActivity.validationMessage.required',
        message: 'addEconomicActivity.addAttachment.file_type',
      },
    ],
  },
];

/**
 * Summary template
 * @param {Object} props
 * @returns {JSX}
 */

const ReturnedDocuments = (props: IVariables) => {
  const {
    i18n,
    content,
    commentsParsed,
    fileUploadData,
    actions,
    title,
    tags,
  } = props;
  const [startShowingErrors, setStartShowingErrors] = useState(false);

  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          props.currentStep ? (
            <Sidebar
              currentStep={props.currentStep}
              currentSubStep={props.currentSubStep}
              i18n={props.i18n}
              steps={props.steps}
              stepsStatus={props.stepsStatus}
            />
          ) : (
            false
          )
        }
      >
        <Notice
          content={<div>{i18n(content)}</div>}
          icon={() => <AlertCircleFilled className="ui-lib-notice__icon" />}
          status="custom"
          tags={tags}
          title={i18n(title) || ''}
        />

        <div className="summary">
          {
            <div className="summary__group">
              <Table
                i18n={i18n}
                columns={[
                  {
                    id: 'name',
                    title: 'Full name',
                  },
                ]}
                disabledSelectionVisible
                headerHidden
                items={
                  commentsParsed &&
                  commentsParsed.map &&
                  commentsParsed.map((element: IVariables) => {
                    return {
                      id: '1',
                      name: element,
                    };
                  })
                }
                size="default"
                title="Feedback"
              />
            </div>
          }
        </div>

        <div style={{ height: '4em' }} />

        {
          <>
            <Form.Fieldset
              title={i18n('addEconomicActivity.addAttachment.heading')}
              twoColumns
            >
              <p>
                {i18n('addEconomicActivity.addAttachment.feedback.content')}
              </p>
            </Form.Fieldset>
            <FileUploads
              i18n={props.i18n}
              inputGroups={inputGroups}
              fileUploadData={fileUploadData}
              handleChange={actions.fileUploadData.update}
              startShowingErrors={startShowingErrors}
            />
          </>
        }
        <div className="summary__group">
          <Button
            label={i18n(props.buttonLabel) || 'submit'}
            aria-label="next"
            icon={null}
            onClick={() => {
              const activitySupportingDocUploaded = has(
                fileUploadData,
                `documents.activitySupportingDoc[0].documentPath`,
              );
              if (!activitySupportingDocUploaded) {
                setStartShowingErrors(true);
              } else props.onSubmit(props);
            }}
            withArrow={false}
          />
        </div>
        <div style={{ height: '60px' }} />
      </Container>
    </>
  );
};

export default withTemplateHooks(ReturnedDocuments);
