/* eslint-disable complexity */
import React from 'react';
import Form from '@tamm/ui-lib-v2-form';
import { IVariables } from '@tamm/app-composer';
import Grid from '@tamm/ui-lib-v2-grid';
import FileUpload from '@tamm/ui-lib-v2-file-upload';
import InternalApi from 'client/services/InternalApi';
import { AMENDMENT_CATEGORIES as categories } from 'client/config/amendments/constants/amendmentObjects';
import Alert from '@tamm/ui-lib-v2-alert';

const { Row, Col } = Grid;

function FileUploads(props: IVariables) {
  const {
    inputGroups,
    handleChange,
    values: documents,
    i18n,
    locale,
    startShowingErrors,
  } = props;

  const onFileRemove = (fieldName: string) => {
    return () => {
      handleChange(
        documents.filter((i: IVariables) => i.fieldName !== fieldName),
      );
    };
  };

  const handleFileChange = (fieldName: string, files: IVariables[] | null) => {
    if (files === null) {
      handleChange(
        documents.filter((i: IVariables) => i.fieldName !== fieldName),
      );
    } else {
      handleChange([...documents, ...files]);
    }
  };

  const onFileUpload = (fieldName: string) => {
    return async (files: IVariables) => {
      try {
        handleFileChange(
          fieldName,
          files.map((uploadedFile: any, i: number) => ({
            id: i,
            fieldName,
            name: uploadedFile.name,
            type: uploadedFile.type,
            size: Math.round(uploadedFile.size / 2),
            loading: true,
          })),
        );
        const promise = files.map(async (uploadedFile: any) => {
          const res = await InternalApi.uploadDedDoc(uploadedFile);

          const payload = {
            fieldName,
            id: res.data.uploadedFileDetails.nameOfFile,
            name: uploadedFile.name,
            documentPath: res.data.uploadedFileDetails.s3FilePath,
            type: uploadedFile.type,
            size: uploadedFile.size,
          };
          return payload;
        });

        const resDocuments: IVariables[] = await Promise.all(promise);

        handleFileChange(fieldName, resDocuments);
      } catch (err) {
        handleFileChange(fieldName, null);
        console.error('Error while uploading document:', err);
      }
    };
  };

  const getFiles = (fieldName: string) => {
    return (
      documents &&
      documents
        .filter((i: IVariables) => i.fieldName === fieldName)
        .map((document: IVariables) => ({
          file: document,
          status: document.loading ? 'progress' : 'success',
          uploaded: document.loading ? 1 : document.size,
          loading: document.loading || false,
          size: document.size || '',
        }))
    );
  };

  const fileValid = (fieldName: string) => {
    const isValueInRedux = documents.some(
      (file: IVariables) => file.fieldName === fieldName,
    );
    return isValueInRedux ? false : i18n('validationMessage.fileRequired');
  };

  const renderFileSet = (sectionName: string, formFields: IVariables) => {
    return (
      <>
        <Row gutter={20} flex>
          {formFields.map((fileConfig: IVariables) => {
            const { name, description, required, ...restProps } = fileConfig;
            const fileName = `${sectionName}.${name}`;
            const uploadedFiles = getFiles(fileName);
            const label = `${i18n(description || '')}${required ? ' *' : ''}`;

            const fileStatus =
              startShowingErrors && required && fileValid(fileName);
            let isUploading: boolean = false;
            let helpString: string = '';
            if (
              uploadedFiles &&
              uploadedFiles.length &&
              uploadedFiles[0].loading
            ) {
              isUploading = true;
              helpString = i18n('validationMessage.fileUploading');
            } else if (fileStatus) {
              helpString = fileStatus;
            } else {
              helpString = i18n('uploads.fileHelp');
            }

            return (
              <Col xs={12} xl={12} key={fileName}>
                <div id={fileName}>
                  <FileUpload
                    i18n={i18n}
                    aria-label={i18n(`uploadField.${name}`)}
                    label={label}
                    accept={['application/pdf']}
                    disabled={false}
                    maxSize={4e6}
                    // maxSize={100002200}
                    multiple={false}
                    name={fileName}
                    {...restProps}
                    validateStatus={isUploading || fileStatus ? 'error' : ''}
                    files={uploadedFiles}
                    help={helpString}
                    onChange={onFileUpload(fileName)}
                    onRemove={onFileRemove(fileName)}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="height-20" />
      </>
    );
  };

  if (!inputGroups || inputGroups.length === 0) {
    return (
      <div id="errorMessage">
        <Alert message={i18n('uploads.error.reqDocsEmpty')} status="warning" />
        <div className="height-40" />
      </div>
    );
  }

  return (
    inputGroups && (
      <div className="file-uploads-wrapper">
        {inputGroups.map((formGroups: IVariables, index: number) => (
          <div key={formGroups.name}>
            <Form.Fieldset
              title={i18n(`uploads.groupTitle.${formGroups.name}`)}
              twoColumns={false}
            >
              {formGroups.description && (
                <p className="subtitleColor">{i18n(formGroups.description)}</p>
              )}
            </Form.Fieldset>
            {index === 0 && <div className="height-20" />}
            {formGroups.name === categories.OWNERSHIP
              ? formGroups.sections.map((formSection: IVariables) => {
                  const fileName = `${formSection.name}.${formSection.referenceKey}`;
                  return (
                    <div key={formSection.name}>
                      <h6>
                        {i18n(`uploads.for.${formSection.name}`)}
                        {` - ${
                          locale === 'en'
                            ? formSection.userEn
                            : formSection.userAr
                        } `}
                        {formSection.action === 'delete' && (
                          <span>({i18n('global.removed')})</span>
                        )}
                      </h6>
                      {renderFileSet(fileName, formSection.fields)}
                    </div>
                  );
                })
              : renderFileSet(formGroups.name, formGroups.sections[0].fields)}
          </div>
        ))}
      </div>
    )
  );
}
export default FileUploads;
