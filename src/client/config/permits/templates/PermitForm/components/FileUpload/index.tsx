import React, { useState } from 'react';
import Form from '@tamm/ui-lib-v2-form';
import PropTypes from 'prop-types';
import { IVariables } from '@tamm/app-composer';
import Grid from '@tamm/ui-lib-v2-grid';
import FileUpload from '@tamm/ui-lib-v2-file-upload';
import InternalApi from 'client/services/InternalApi';
import { checkValidationField } from 'client/config/utils/checkValidation';

const { Row, Col } = Grid;

function FileUploads(props: IVariables) {
  const {
    inputGroups,
    handleChange,
    values,
    i18n,
    startShowingErrors,
    name: stateKey,
  } = props;

  const { [stateKey]: documents } = values;
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (fieldName: string, files: IVariables[] | null) =>
    handleChange({
      [stateKey]: {
        ...documents,
        [fieldName]: files,
      },
    });

  const onFileUpload = (fieldName: string) => {
    const previousFiles = documents[fieldName] || [];
    return async (files: IVariables) => {
      setIsUploading(true);
      try {
        handleFileChange(
          fieldName,
          previousFiles
            .concat(
              files.map((uploadedFile: any) => ({
                fieldName,
                lastModifiedDate: uploadedFile.lastModifiedDate,
                name: uploadedFile.name,
                documentName: uploadedFile.name,
                type: uploadedFile.type,
                lastModified: uploadedFile.lastModified,
                size: Math.round(uploadedFile.size / 2),
                loading: true,
              })),
            )
            .map((file: IVariables, index: number) => ({
              ...file,
              id: index,
            })),
        );

        const promise = files.map(async (uploadedFile: any) => {
          const res = await InternalApi.uploadDedDoc(uploadedFile);

          const payload = {
            fieldName,
            id: res.data.uploadedFileDetails.nameOfFile,
            lastModifiedDate: uploadedFile.lastModifiedDate,
            name: uploadedFile.name,
            documentName: uploadedFile.name,
            documentPath: res.data.uploadedFileDetails.s3FilePath,
            type: uploadedFile.type,
            lastModified: uploadedFile.lastModified,
            size: uploadedFile.size,
            loading: false,
          };
          return payload;
        });

        const result = await Promise.all(promise);
        const currentDocuments = documents[fieldName] || [];
        const mergedArray = [...result, ...currentDocuments];
        // mergedArray have duplicates, lets remove the duplicates using Set
        const set = new Set();
        const finalDocuments = mergedArray.filter(item => {
          if (!set.has(item.name)) {
            set.add(item.name);
            return true;
          }
          return false;
        }, set);
        handleFileChange(fieldName, finalDocuments);
      } catch (err) {
        console.error('Error while uploading document:', err);
      } finally {
        setIsUploading(false);
      }
    };
  };

  const onFileRemove = (fieldName: string) => {
    return (file: IVariables) => {
      const updatedFiles: any = documents[fieldName].filter(
        (stateFile: IVariables) => stateFile.id !== file.id,
      );
      handleFileChange(fieldName, updatedFiles);
    };
  };

  const getFiles = (fieldName: string) => {
    const documentList = documents[fieldName];

    return documentList === null || documentList === undefined
      ? []
      : documentList.map((document: IVariables) => ({
          ...document,
          file: { ...document, type: 'custom' },
          status: document.loading ? 'progress' : 'success',
          uploaded: document.loading ? 2.2 : document.size,
          loading: document.loading,
          type: 'custom',
          size: document.size || '',
        }));
  };

  const fileValid = (fieldName: string, validationConfig: IVariables) => {
    return checkValidationField(
      validationConfig,
      documents[fieldName],
      startShowingErrors,
      i18n,
    );
  };

  return (
    inputGroups && (
      <Form name={props.name} id={props.name}>
        {inputGroups.map((formGroups: IVariables) => (
          <Form.Fieldset
            title={i18n(formGroups.name)}
            key={`${props.groupKey}.${props.stateKey}`}
          >
            <Row gutter={20} flex>
              {formGroups.fields.map((fileConfig: IVariables) => {
                const {
                  name,
                  label,
                  help,
                  validationConfig,
                  ...restProps
                } = fileConfig;

                const files = getFiles(name);

                let helpString = i18n(help);

                if (getFiles(name)) {
                  helpString = '';
                }

                if (fileValid(name, validationConfig)) {
                  helpString = fileValid(name, validationConfig);
                }

                return (
                  <Col
                    xs={12}
                    md={props.colSpan}
                    xl={props.colSpan}
                    key={`${name}.${props.groupKey}`}
                  >
                    <FileUpload
                      i18n={i18n}
                      accept={['application/pdf']}
                      maxSize={100002200}
                      multiple={props.multiple || false}
                      label={i18n(label)}
                      name={name}
                      {...restProps}
                      validateStatus={
                        fileValid(name, validationConfig) ? 'error' : ''
                      }
                      files={files}
                      help={helpString}
                      disabled={isUploading}
                      onChange={onFileUpload(name)}
                      onRemove={onFileRemove(name)}
                    />
                  </Col>
                );
              })}
            </Row>
          </Form.Fieldset>
        ))}
      </Form>
    )
  );
}
FileUploads.propTypes = {
  colSpan: PropTypes.string.isRequired,
};

FileUploads.defaultProps = {
  colSpan: 4,
};
export default FileUploads;
