import React from 'react';
import { IVariables } from '@tamm/app-composer';
import FormTemplate from '@tamm/ui-lib-v2-form-template';
import TermsConditions from '../TermsConditionsList';
import Undertaking from '../Undertaking';

/* istanbul ignore file */

const CustomComponents: { [key: string]: any } = {
  TermsConditions,
  FormTemplate,
  Undertaking,
};

function ConditionalComponent(props: IVariables) {
  const { inputGroups, ...restProps } = props;
  const { values } = restProps;
  return inputGroups
    .filter(
      (group: IVariables) =>
        group.conditionalBehaviour && group.conditionalBehaviour(values),
      [],
    )
    .map((group: IVariables) => {
      const Component = CustomComponents[group.rootCustomComponent];
      return (
        <div className="">
          <Component inputGroups={[group]} {...restProps} />
        </div>
      );
    });
}

export default ConditionalComponent;
