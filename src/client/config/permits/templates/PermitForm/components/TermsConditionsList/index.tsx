import React from 'react';
import { IVariables } from '@tamm/app-composer';
import Form from '@tamm/ui-lib-v2-form';
import Checkbox from '@tamm/ui-lib-v2-checkbox';
import './TermsConditionsList.less';

/**
 * TermsConditionsList component
 * @param {Object} props
 * @returns {JSX}
 */
function TermsConditionsList(props: IVariables) {
  const {
    inputGroups,
    handleChange,
    values,
    i18n,
    startShowingErrors,
    name: stateKey,
  } = props;
  const { [stateKey]: termsConditions } = values;

  const handleToggleCheckbox = (fieldName: string) => {
    return () => {
      handleChange({
        [stateKey]: {
          ...termsConditions,
          [fieldName]: !termsConditions[fieldName],
        },
      });
    };
  };

  return (
    inputGroups && (
      <Form name={props.name} id={props.name}>
        {inputGroups.map((formGroups: IVariables) => (
          <Form.Fieldset key={`${formGroups.groupKey}.${formGroups.stateKey}`}>
            <div className="marginT40">
              {formGroups.title && (
                <p className="termsTitle">{i18n(formGroups.title)}</p>
              )}
              {formGroups.conditions && formGroups.conditions.length > 0 && (
                <ul className="PermitForm__form-tac-ui">
                  {formGroups.conditions.map(
                    (condition: string, key: number) => (
                      <li key={String(key)}>{i18n(condition)}</li>
                    ),
                  )}
                </ul>
              )}
            </div>
            {formGroups.fields.map((fileConfig: IVariables) => {
              const {
                name,
                label,
                validationConfig,
                ...restProps
              } = fileConfig;

              return (
                <React.Fragment key={`${name}.${formGroups.groupKey}`}>
                  <Checkbox
                    {...restProps}
                    checked={termsConditions[name]}
                    label={label}
                    name={name}
                    onChange={handleToggleCheckbox(name)}
                    validateStatus={
                      startShowingErrors &&
                      validationConfig &&
                      !termsConditions[name]
                        ? 'error'
                        : ''
                    }
                  />
                </React.Fragment>
              );
            })}
          </Form.Fieldset>
        ))}
      </Form>
    )
  );
}

export default TermsConditionsList;
