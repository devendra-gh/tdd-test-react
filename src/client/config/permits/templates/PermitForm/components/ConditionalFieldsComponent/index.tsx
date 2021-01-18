import React from 'react';
import { IVariables } from '@tamm/app-composer';
import FormTemplate from '@tamm/ui-lib-v2-form-template';

import FileUploads from '../FileUpload';
import MultifieldForm from '../MultifieldForm';
import TermsConditions from '../TermsConditionsList';

const CustomComponents: { [key: string]: any } = {
  FileUploads,
  MultifieldForm,
  TermsConditions,
  FormTemplate,
};

function ConditionalFieldsComponent(props: IVariables) {
  const { inputGroups, ...restProps } = props;
  const { values } = restProps;
  return inputGroups
    .reduce((modifiedGroups: [], group: IVariables) => {
      const fieldsToRender = group.fields.filter((field: IVariables) =>
        field.conditionalBehaviour(values),
      );
      const modifiedGroup = { ...group, fields: fieldsToRender };
      return [...modifiedGroups, modifiedGroup];
    }, [])
    .map((group: IVariables) => {
      const Component = CustomComponents[group.rootCustomComponent];
      return (
        <div className="marginT30 marginB30">
          <Component inputGroups={[group]} {...restProps} />
        </div>
      );
    });
}

export default ConditionalFieldsComponent;
