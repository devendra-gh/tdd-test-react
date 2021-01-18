import React, { useState } from 'react';
import Form from '@tamm/ui-lib-v2-form';
import { IVariables } from '@tamm/app-composer';
import FileUpload from '@tamm/ui-lib-v2-file-upload';
import InternalApi from 'client/services/InternalApi';
import './template.less';

/* istanbul ignore file */

const MAX_FILE_SIZE = 1024 * 1024 * 4;

function FileUploads(props: IVariables) {
  const {
    inputGroups,
    handleChange,
    values,
    i18n,
    startShowingError,
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
      // 4MB validation
      if (files[0].size > MAX_FILE_SIZE) {
        console.info(i18n('validationMessage.file.size'));
        return;
      }
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
  const fileValid = (fieldName: string, validationConfig: string) => {
    if (
      validationConfig === 'required' &&
      startShowingError &&
      (!values.documents[fieldName] || values.documents[fieldName].length === 0)
    ) {
      return true;
    }
    return false;
  };
  return (
    <div className="investor-form">
      {inputGroups && (
        <Form name={props.name} id={props.name}>
          {inputGroups.map((formGroups: IVariables) => (
            <Form.Fieldset
              title={i18n(formGroups.name)}
              key={`${props.groupKey}.${props.stateKey}`}
            >
              {formGroups.fields.map((fileConfig: IVariables) => {
                const {
                  name,
                  label,
                  help,
                  validationConfig,
                  ...restProps
                } = fileConfig;
                const files = getFiles(name);
                const helpString = i18n(help);

                /* if (
                  values.documents[name] && !(values.documents[name].length === 0)
                ) {
                  helpString = '';
                } */

                return (
                  <FileUpload
                    i18n={i18n}
                    accept={['application/pdf']}
                    multiple={props.multiple || false}
                    label={i18n(label)}
                    maxSize={4194304}
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
                );
              })}
            </Form.Fieldset>
          ))}
        </Form>
      )}
    </div>
  );
}

export default FileUploads;
