import React from 'react';
import { IVariables } from '@tamm/app-composer';

function Typography(props: IVariables) {
  const Component = props.variant;
  const content = props.children || props.content;

  if (props.displayAsHtml) {
    return <Component dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return <Component>{content}</Component>;
}

Typography.defaultProps = {
  variant: 'p',
  content: '',
  children: null,
  displayAsHtml: false,
};

export default Typography;
