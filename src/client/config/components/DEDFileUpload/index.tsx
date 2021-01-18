import React from 'react';

import { IVariables } from '@tamm/app-composer';
import FileUpload from '@tamm/ui-lib-v2-file-upload';
import Form from '@tamm/ui-lib-v2-form';
// import Button from '@tamm/ui-lib-v2-button';
import Select from '@tamm/ui-lib-v2-select';

import './dedFileUpload.less';

interface DocumentObject {
  uploadedFileName: string;
  s3FilePath: string;
}

/**
 * PrivilegesFacilitiesGroup component
 * @param {Object} props
 * @returns {JSX}
 */
function DEDFileUpload(props: IVariables) {
  const { i18n } = props;
  return (
    <div style={{ marginTop: '4rem' }}>
      <Form>
        <Form.Fieldset title={i18n('notice.uploadSection.title')}>
          {props.documentCategory && props.documentCategory.length && (
            <Select
              items={props.documentCategory}
              label={i18n('notice.documentCategory')}
              onChange={event => props.documentCategoryChange(event, props)}
              placeholder={i18n('notice.select.documentCategory')}
              showSearch
              disabled={props.disableDocumentCategorySelection}
              value={props.selectedDocumentCategory}
            />
          )}
          <FileUpload
            i18n={i18n}
            label=""
            multiple
            help=""
            disabled={!props.selectedDocumentCategory}
            accept={['application/pdf']}
            maxSize={100002200}
            files={[]}
            onChange={e => props.onFileUpload(e, props)}
            // onChange={onChange}
            // onRemove={onRemove}
            // onRemove={ e => props.onRemoveFile(e, props)}
          />
        </Form.Fieldset>
        {props.uploadDocs && props.uploadDocs.length !== 0 && (
          <Form.Fieldset title={i18n('notice.uploadedDocs.title')}>
            {props.uploadDocs.map(
              (eachDocument: DocumentObject, index: number) => (
                <div className="content-card__splitter" key={index.toString()}>
                  <dt>{eachDocument.uploadedFileName}</dt>
                  {/* <dd>
                                    <Button
                                        alignIcon="end"
                                        aria-label="delete-file"
                                        icon="delete"
                                        label=""
                                        onClick={() =>
                                            props.handleDocumentDelete(eachDocument.s3FilePath, props)}
                                        size="medium"
                                        type="button"
                                        uiType="secondary"
                                    />
                                </dd> */}
                </div>
              ),
            )}
          </Form.Fieldset>
        )}
      </Form>
    </div>
  );
}

DEDFileUpload.propTypes = {};

export default DEDFileUpload;
