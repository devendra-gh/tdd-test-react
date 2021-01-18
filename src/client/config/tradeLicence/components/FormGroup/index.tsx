import React, { useCallback, useState } from 'react';
import { IVariables } from '@tamm/app-composer';
import Form from '@tamm/ui-lib-v2-form';
import AccordionItem from '@tamm/ui-lib-v2-accordion/AccordionItem/AccordionItem';
import useMedia from 'use-media';

function FormGroup(props: IVariables) {
  const [expended, setExpended] = useState(false);
  const isWide = useMedia({ minWidth: '768px' });

  const onToggle = useCallback(() => {
    setExpended(!expended);
  }, [expended]);

  if (!props.visible) {
    return null;
  }

  const x: any = {
    name: props.name,
  };

  const content = (
    <div>
      <a {...x}> </a>
      {props.children}
    </div>
  );

  if (isWide) {
    return <Form.Fieldset title={props.title}>{content}</Form.Fieldset>;
  }

  return (
    <AccordionItem
      id={props.name}
      title={props.title}
      boldTitle
      expanded={expended}
      onClick={onToggle}
    >
      {content}
    </AccordionItem>
  );
}

FormGroup.defaultProps = {
  visible: true,
};

export default FormGroup;
