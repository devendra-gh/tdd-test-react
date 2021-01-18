import React, { useState } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import Button from '@tamm/ui-lib-v2-button';
import Notice from '@tamm/ui-lib-v2-notice';
import { AlertCircleFilled } from '@tamm/ui-lib-v2-icon/Icons';
import moment from 'moment';
import FileUploads from '../FileUploads';
import NocForm from './components/NocForm';
import LeaseSummary from './components/LeaseSummary';
import { FORM_STEP_2, FORM_STEP_3 } from '../../steps';
import './index.less';

const inputGroups = [
  {
    name: 'title.addAttachments',
    twoColumns: true,
    stateKey: 'documents',
    customComponent: 'FileUploads',
    fields: [
      {
        'aria-label': 'file upload',
        elementType: 'fileUpload',
        name: 'thawtheeq',
        accept: ['application/pdf'],
        label: 'Tawtheeq',
        maxSize: 5e6,
        help: 'validationMessage.required',
        message: 'fileUploadMessage.size',
      },
    ],
  },
];

/**
 * Summary template
 * @param {Object} props
 * @returns {JSX}
 */
const UploadDocuments = (props: IVariables) => {
  const [startShowingErrors, setStartShowingErrors] = useState(false);

  const getDescription = () => {
    return 'licenceExpiry.description.common';
  };

  const {
    i18n,
    daysPendingForLicenceExpiry,
    licenceExpiryDate,
    licenceIssueDate,
    status,
    isTawtheeqRequired,
    subTitle,
    validate,
    licenceSubmitPage,
  } = props;
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
        {licenceSubmitPage === FORM_STEP_2 && (
          <>
            <Notice
              content={<div>{i18n(getDescription())}</div>}
              icon={() => <AlertCircleFilled className="ui-lib-notice__icon" />}
              status={status}
              tags={[
                {
                  label: i18n('issueDate'),
                  value: moment(licenceIssueDate).format('DD-MMM-YYYY'),
                },
                {
                  label: i18n('expiryDate'),
                  value: moment(licenceExpiryDate).format('DD-MMM-YYYY'),
                },
              ]}
              title={i18n(subTitle, { daysPendingForLicenceExpiry })}
            />
            <div style={{ height: '60px' }} />
            <LeaseSummary {...props} startShowingErrors={startShowingErrors} />
            <div className="btn-wrapper">
              <Button
                aria-label="back1"
                uiType="secondary"
                alignIcon="start"
                label={props.i18n('button.back')}
                onClick={() => {
                  props.onBack(props);
                }}
                withArrow
              />
              <span className="btn_margin_lr" />
              <Button
                aria-label="next"
                uiType="primary"
                label={props.i18n('button.next')}
                onClick={() => {
                  props.onNext(props);
                }}
                withArrow
              />
            </div>
          </>
        )}

        {licenceSubmitPage === FORM_STEP_3 && (
          <>
            <NocForm {...props} startShowingErrors={startShowingErrors} />
            {isTawtheeqRequired && (
              <FileUploads
                i18n={props.i18n}
                inputGroups={inputGroups}
                fileUploadData={props.fileUploadData}
                isTawtheeqRequired={isTawtheeqRequired}
                handleChange={props.actions.fileUploadData.update}
                startShowingErrors={startShowingErrors}
              />
            )}
            {isTawtheeqRequired && (
              <div style={{ borderTop: '1px thin solid', height: '1px' }} />
            )}
            <div className="btn-wrapper">
              <Button
                aria-label="back2"
                uiType="secondary"
                alignIcon="start"
                label={props.i18n('button.back')}
                onClick={() => {
                  props.onPrevious(props);
                  setStartShowingErrors(false);
                }}
                withArrow
              />
              <span className="btn_margin_lr" />
              <Button
                aria-label="submit"
                uiType="primary"
                label={props.i18n('button.submit')}
                onClick={() => {
                  if (validate(props)) {
                    props.onSubmit(props);
                  } else {
                    setStartShowingErrors(true);
                  }
                }}
                withArrow
              />
            </div>
          </>
        )}
        <div style={{ height: '60px' }} />
      </Container>
    </>
  );
};

export default withTemplateHooks(UploadDocuments);
