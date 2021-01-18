import React from 'react';
import Form from '@tamm/ui-lib-v2-form';
import { IVariables } from '@tamm/app-composer';
import FileUpload from '@tamm/ui-lib-v2-file-upload';
import InternalApi from 'client/services/InternalApi';
import { has } from 'lodash';

function FileUploads(props: IVariables) {
  const {
    inputGroups,
    handleChange,
    fileUploadData,
    i18n,
    startShowingErrors,
  } = props;
  const { documents } = fileUploadData;

  const onFileUpload = (fieldName: string) => {
    return async (files: IVariables) => {
      try {
        handleChange({
          documents: {
            ...documents,
            [fieldName]: files.map((uploadedFile: any, i: number) => ({
              id: i,
              fieldName,
              lastModifiedDate: uploadedFile.lastModifiedDate,
              name: uploadedFile.name,
              documentName: uploadedFile.name,
              type: uploadedFile.type,
              lastModified: uploadedFile.lastModified,
              size: Math.round(uploadedFile.size / 2),
              loading: true,
            })),
          },
        });

        const documentCategories: IVariables = {
          thawtheeq: 'thawtheeq',
          noc: 'noc',
        };
        const promise = files.map(async (uploadedFile: any) => {
          const res = await InternalApi.uploadDedDoc(uploadedFile);
          const payload = {
            fieldName,
            id: res.data.uploadedFileDetails.nameOfFile,
            lastModifiedDate: uploadedFile.lastModifiedDate,
            name: uploadedFile.name,
            documentName: uploadedFile.name,
            documentCategory: documentCategories[fieldName],
            documentPath: res.data.uploadedFileDetails.s3FilePath,
            type: uploadedFile.type,
            lastModified: uploadedFile.lastModified,
            size: uploadedFile.size,
            loading: false,
          };
          return payload;
        });

        const resDocuments = await Promise.all(promise);

        handleChange({
          documents: {
            ...documents,
            [fieldName]: resDocuments,
          },
        });
      } catch (err) {
        handleChange({
          documents: {
            ...documents,
            [fieldName]: null,
          },
        });
        console.info('Error while uploading document:', err);
      }
    };
  };

  const onFileRemove = (fieldName: string) => {
    return () => {
      handleChange({
        documents: {
          ...documents,
          [fieldName]: null,
        },
      });
    };
  };

  const isUploaded = (fieldName: string) => {
    const isUploadedBool = has(documents, `${fieldName}[0].documentPath`);
    return isUploadedBool;
  };

  const getFiles = (fieldName: string) => {
    return documents[fieldName] === null || documents[fieldName] === undefined
      ? []
      : documents[fieldName].map((document: IVariables) => ({
          file: document,
          status: document.loading ? 'progress' : 'success',
          uploaded: document.loading ? 2.2 : document.size,
          loading: document.loading,
        }));
  };

  return (
    inputGroups && (
      <Form name="file-upload-section">
        {inputGroups.map((formGroups: IVariables) => {
          return (
            <Form.Fieldset title={i18n(formGroups.name)}>
              {formGroups.fields.map((fileConfig: IVariables) => {
                const { name, label, help, message, ...restProps } = fileConfig;
                if (name === 'thawtheeq' && props.isTawtheeqRequired)
                  return (
                    <FileUpload
                      i18n={i18n}
                      accept={['application/pdf']}
                      disabled={false}
                      help={
                        (startShowingErrors &&
                          !isUploaded(name) &&
                          i18n(help)) ||
                        (!isUploaded(name) && i18n(message)) ||
                        ''
                      }
                      label={i18n(label)}
                      maxSize={100002200}
                      multiple={false}
                      name={name}
                      validateStatus={
                        startShowingErrors && !isUploaded(name) ? 'error' : ''
                      }
                      {...restProps}
                      files={getFiles(name)}
                      onChange={onFileUpload(name)}
                      onRemove={onFileRemove(name)}
                    />
                  );
                return null;
              })}
            </Form.Fieldset>
          );
        })}
      </Form>
    )
  );
}
export default FileUploads;
