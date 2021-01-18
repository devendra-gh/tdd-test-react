import React from 'react';
import DLSProcess from '@tamm/ui-lib-v2-process';

function Process(props: any) {
  return (
    <DLSProcess
      {...props}
      steps={props.steps.map((item: any) => ({
        ...item,
        description: (
          <div dangerouslySetInnerHTML={{ __html: item.description }} />
        ),
      }))}
    />
  );
}

Process.defaultProps = {
  steps: [],
};

export default Process;
