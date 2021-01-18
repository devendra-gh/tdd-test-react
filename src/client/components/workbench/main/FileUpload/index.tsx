import React, { useState, useEffect, useCallback } from 'react';
import { noop } from 'lodash';
import fetch from 'client/services/fetch';

import DLSFileUpload from '@tamm/ui-lib-v2-file-upload';

/* istanbul ignore file */

const FILE_UPLOAD_URL = '/api/file/upload';

function FileUpload(props: any) {
  const [files, setFiles] = useState<any[]>(props.files);

  useEffect(() => {
    setFiles(props.files);
  }, [props.files]);

  const onChange = useCallback(
    (payload: File[]) => {
      const loadedFiles: any[] = payload.map(file => ({
        file,
        name: file.name,
        status: 'progress',
      }));

      setFiles(loadedFiles);

      loadedFiles
        .reduce((prev, data) => {
          return prev.then(async (result: any[]) => {
            return new Promise(resolve => {
              const reader = new FileReader();

              reader.readAsDataURL(data.file as File);
              reader.onload = event => {
                fetch(FILE_UPLOAD_URL, 'POST', {
                  file: reader.result,
                  filename: data.file.name,
                })
                  .then(({ fileId }) => {
                    result.push({
                      ...data,
                      status: 'success',
                      fileId,
                    });
                  })
                  .catch(() => {
                    result.push({
                      ...data,
                      status: 'error',
                    });
                  })
                  .finally(() => resolve(result));
              };
            });
          }) as Promise<any[]>;
        }, Promise.resolve([]))
        .then((result: any[]) => {
          props.onChange(
            result.map(item => ({
              ...item,
              file: {
                name: item.file.name,
                size: item.file.size,
                lastModified: item.file.lastModified,
              },
            })),
          );
        });
    },
    [props.onChange],
  );

  const onRemoveFile = useCallback(
    (removedFile: any) => {
      props.onRemove(
        files.filter(({ file }) => removedFile.name !== file.name),
      );
    },
    [files, props.onRemove],
  );

  return (
    <DLSFileUpload
      {...props}
      files={files}
      onChange={onChange}
      onRemove={onRemoveFile}
    />
  );
}

FileUpload.defaultProps = {
  files: [],
  onChange: noop,
  onRemove: noop,
};

export default FileUpload;
