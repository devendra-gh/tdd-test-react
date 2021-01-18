import React, { useState } from 'react';
import { IVariables } from '@tamm/app-composer';

import Button from '@tamm/ui-lib-v2-button';
import FileUpload from '@tamm/ui-lib-v2-file-upload';
import Form from '@tamm/ui-lib-v2-form';
import Table from '@tamm/ui-lib-v2-table';

import Loading from 'client/templates/Loading';

import InternalApi from 'client/services/InternalApi';

function UploadFile(props: IVariables) {
  const {
    i18n,
    applicationReturnDocuments,
    comments,
    onUploadDocuments,
    pageLoading,
  } = props;

  const messageItems: any[] = [
    {
      id: '1',
      feedback: comments,
    },
  ];
  const [isUploading, setIsUploading] = useState(false);
  const [startShowingErrors, setStartShowingErrors] = useState(false);

  const handleFileChange = (files: IVariables[] | null) => {
    const result = applicationReturnDocuments.concat(files);
    props.actions.applicationReturnDocuments.update(result);
  };

  const onFileUpload = () => {
    return async (files: IVariables) => {
      setIsUploading(true);
      try {
        let s3Response: any;
        const promise = files.map(async (uploadedFile: any) => {
          const existingFile = applicationReturnDocuments.filter(
            (file: IVariables) => file.name === uploadedFile.name,
          );

          if (existingFile.length === 0) {
            const res = await InternalApi.uploadDedDoc(uploadedFile);
            s3Response = {
              fieldName: uploadedFile.name,
              id: res.data.uploadedFileDetails.nameOfFile,
              name: uploadedFile.name,
              documentPath: res.data.uploadedFileDetails.s3FilePath,
              type: uploadedFile.type,
              size: uploadedFile.size,
            };
          }
          return s3Response;
        });
        const result: any = await Promise.all(promise);

        if (result)
          handleFileChange(result.filter((value: any) => value !== undefined));
      } catch (err) {
        setIsUploading(false);
      } finally {
        setIsUploading(false);
      }
    };
  };

  const onFileRemove = (filename: IVariables) => {
    props.actions.applicationReturnDocuments.update(
      applicationReturnDocuments.filter(
        (file: IVariables) => file.name !== filename.name,
      ),
    );
  };

  const submitDocuments = () => {
    setStartShowingErrors(true);
    if (applicationReturnDocuments.length > 0) {
      onUploadDocuments(props);
    }
  };

  const uploadedFiles =
    applicationReturnDocuments &&
    applicationReturnDocuments.map((document: IVariables) => ({
      file: document,
      status: document.loading ? 'progress' : 'success',
      uploaded: document.loading ? 1 : document.size,
      loading: document.loading || false,
      size: document.size || '',
    }));

  const validateStatus =
    startShowingErrors && applicationReturnDocuments.length === 0
      ? 'error'
      : '';
  const helpString: string =
    validateStatus === 'error'
      ? i18n('validationMessage.fileRequired')
      : i18n('uploads.fileHelp');

  return (
    <React.Fragment>
      {pageLoading && <Loading />}
      <Form.Fieldset>
        <Table
          i18n={i18n}
          clickable={false}
          columns={[
            {
              id: 'feedback',
              title: i18n('applicationError.subTitle'),
            },
          ]}
          disabledSelectionVisible={false}
          headerHidden={false}
          items={messageItems}
          // onClick={function noRefCheck(){}}
          // onSelectionChange={function noRefCheck(){}}
          // onToggle={function noRefCheck(){}}
          selectable={false}
          size="default"
        />
      </Form.Fieldset>
      <Form.Fieldset title={i18n('global.attachment')} twoColumns />
      <Form.Fieldset>
        <FileUpload
          i18n={i18n}
          aria-label={i18n('returnPage.fileupload')}
          accept={['application/pdf']}
          files={uploadedFiles}
          label={i18n('returnPage.fileUploadLabel')}
          maxSize={4e6}
          multiple
          name="returnDocuments"
          disabled={isUploading}
          onChange={onFileUpload()}
          onRemove={onFileRemove}
          validateStatus={validateStatus}
          help={helpString}
        />
        <hr />
        <Button
          alignIcon="end"
          aria-label="button-primary"
          label={i18n('button.submit')}
          onClick={submitDocuments}
          disabled={isUploading}
          size="default"
          type="button"
          uiType="primary"
        />
      </Form.Fieldset>
    </React.Fragment>
  );
}
export default UploadFile;
