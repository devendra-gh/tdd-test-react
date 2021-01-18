import React from 'react';

import { IVariables } from '@tamm/app-composer';
import FileUpload from '@tamm/ui-lib-v2-file-upload';
import Form from '@tamm/ui-lib-v2-form';
// import Button from '@tamm/ui-lib-v2-button';
import Table from '@tamm/ui-lib-v2-table';
import Select from '@tamm/ui-lib-v2-select';

import './dedFileUpload.less';

interface DocumentObject {
  uploadedFileName: string;
  s3FilePath: string;
}
interface IDoc {
  id: string;
  label: string;
  labelAr: string;
}
/**
 * PrivilegesFacilitiesGroup component
 * @param {Object} props
 * @returns {JSX}
 */
function DEDFileUpload(props: IVariables) {
  const { i18n, locale } = props;
  const items = props.documentCategory.map((doc: IDoc) => ({
    id: doc.id,
    label: locale === 'en' ? doc.label : doc.labelAr,
  }));

  return (
    <div className="ded-file-upload">
      <div className="ded-file-upload__feedback">
        <Table
          i18n={i18n}
          columns={[
            {
              id: 'message',
              title: props.message || '',
            },
          ]}
          items={[]}
          title={i18n('global.feedback')}
        />
      </div>
      <Form>
        <Form.Fieldset title={i18n('notice.uploadSection.title')}>
          {props.documentCategory && props.documentCategory.length && (
            <Select
              items={items}
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
            {props.uploadDocs.map((eachDocument: DocumentObject) => (
              <div className="content-card__splitter">
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
            ))}
          </Form.Fieldset>
        )}
      </Form>
    </div>
  );
}

DEDFileUpload.propTypes = {};

export default DEDFileUpload;
