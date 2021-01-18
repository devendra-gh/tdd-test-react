import React, { useState, useEffect } from 'react';
import { IVariables } from '@tamm/app-composer';
import { isArray } from 'lodash';

import FileUpload from '@tamm/ui-lib-v2-file-upload';
import { isMoaRequired } from 'client/config/pages/EconomicLicence/functions/getLegalForms';
import { getLegalFormFromCode } from 'client/config/utils/lookup';

/**
 * AttachmentsGroup component
 * @param {Object} props
 * @returns {JSX}
 */
function AttachmentsGroup(props: IVariables) {
  // const [isLoading, setIsLoading] = useState(false);
  const [fields, setFields] = useState([]);
  const { i18n, files, onFileUpload, onRemoveFile } = props;

  useEffect(() => {
    const fetchData = async () => {
      const activities = props.activities
        .map((i: IVariables) => i.activityCode)
        .join(',');
      if (activities) {
        // setIsLoading(true);

        let items: any = await props.fetchAttachments(
          activities,
          props.legalType,
        );
        // setIsLoading(false);

        // remove MOA uplaod document from DED response if license type is allinone or tajer
        if (
          isMoaRequired(
            props.licenceType || '',
            getLegalFormFromCode(props.legalType),
          )
        ) {
          if (items && items.length) {
            items = items.filter(
              (i: IVariables) =>
                i.RequirementDescEn !==
                'A copy of the memorandum of association duly certified by the Notary Public',
            );
          }
        }
        setFields(items);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {fields.map((field: IVariables, key: number) => {
        const fieldId = field.RequirementDescEn.replace(/\s/g, '');
        const filteredFiles = files.filter(
          (i: IVariables) => i.fieldName === fieldId,
        );

        return (
          <FileUpload
            key={String(key)}
            accept={['application/pdf']}
            help={`${field.RequirementDescEn} - ${field.AuthorityEn}`}
            i18n={i18n}
            files={
              isArray(filteredFiles)
                ? filteredFiles.map((i: IVariables) => ({
                    file: i,
                    status: 'success',
                    uploaded: i.size,
                  }))
                : []
            }
            onChange={onFileUpload(fieldId)}
            onRemove={onRemoveFile(fieldId)}
          />
        );
      })}
    </div>
  );
}

export default AttachmentsGroup;
