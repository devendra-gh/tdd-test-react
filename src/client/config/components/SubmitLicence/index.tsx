import React, { useState } from 'react';

import { IVariables } from '@tamm/app-composer';
import Form from '@tamm/ui-lib-v2-form';
import Checkbox from '@tamm/ui-lib-v2-checkbox';
import Button from '@tamm/ui-lib-v2-button';

import AttachmentsGroup from 'client/config/components/AttachmentsGroup';

import './SubmitLicence.less';
import Input from '@tamm/ui-lib-v2-input';

/**
 * PrivilegesFacilitiesGroup component
 * @param {Object} props
 * @returns {JSX}
 */
function SubmitLicence(props: IVariables) {
  const [
    termsAndConditionsChecked,
    onChangeOfTermsAndConditionsCheck,
  ] = useState(false);
  const { i18n, inputField } = props;
  const onCheckboxChange = () => {
    onChangeOfTermsAndConditionsCheck(!termsAndConditionsChecked);
  };
  return (
    <div style={{ marginTop: '4rem' }}>
      {props.subTitle && (
        <h2 className="continue-and-submit">{i18n(props.subTitle)}</h2>
      )}
      <Form>
        <Form.Fieldset title={i18n(inputField.title)} twoColumns>
          <Input
            aria-label="tawtheeq number"
            textDirection={props.locale === 'en' ? 'ltr' : 'rtl'}
            defaultValue={i18n(inputField.defaultValue)}
            help={i18n(inputField.help)}
            label={i18n(inputField.label)}
            name="tawtheeq-number"
            onBlur={e => props.inputOnBlur(e.target.value, props.actions)}
            onChange={e => props.inputOnChange(e, props.actions)}
            // onChange={props.inputOnChange}
            // onFocus={function noRefCheck() {}}
            placeholder={i18n(inputField.placeholder)}
            type="text"
            validateStatus={props.validateStatus}
            value={i18n(inputField.value)}
          />
        </Form.Fieldset>
        <Form.Fieldset title={i18n('notice.uploadSection.title')}>
          {props.showMultipleDocumentUpload && (
            <AttachmentsGroup
              i18n={i18n}
              files={props.files}
              activities={props.activities}
              legalType={props.legalType}
              onFileUpload={props.onFileUpload(props)}
              onRemoveFile={props.onRemoveFile(props)}
              fetchAttachments={props.fetchAttachments}
              actions={props.actions}
            />
          )}
        </Form.Fieldset>
        {props.termsAndConditions && (
          <Form.Fieldset title={i18n(props.termsAndConditions.title)}>
            {props.conditions.length > 0 ? (
              <ul>
                {props.conditions.map((eachConditions: IVariables) => (
                  <li>
                    {props.locale === 'ar'
                      ? eachConditions.labelAr
                      : eachConditions.labelEn}
                  </li>
                ))}
              </ul>
            ) : (
              <ul />
            )}
            <div className="margin-top">
              <Checkbox
                checked={termsAndConditionsChecked}
                id="terms-and-conditions"
                label={i18n(props.termsAndConditions.label)}
                name="terms-and-conditions-checkbox"
                onClick={onCheckboxChange}
                tabIndex={0}
              />
            </div>
          </Form.Fieldset>
        )}
        {props.licenceButton && (
          <Button
            aria-label="button-primary"
            disabled={
              !termsAndConditionsChecked || props.validateStatus !== 'success'
            }
            label={i18n(props.licenceButton.label)}
            name="licence-button"
            onClick={() => {
              props.licenceButton.onClick(props);
            }}
            size="default"
            type="button"
            uiType={props.licenceButton.uiType}
          />
        )}
      </Form>
    </div>
  );
}

SubmitLicence.propTypes = {};

export default SubmitLicence;
