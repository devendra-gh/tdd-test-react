import React from 'react';
import DLSRequiredDocuments from '@tamm/ui-lib-v2-required-documents';

function RequiredDocuments(props: any) {
  return (
    <DLSRequiredDocuments
      {...props}
      items={props.items.map((item: any) => ({
        ...item,
        description: (
          <div dangerouslySetInnerHTML={{ __html: item.description }} />
        ),
      }))}
    />
  );
}

RequiredDocuments.defaultProps = {
  items: [],
};

export default RequiredDocuments;
