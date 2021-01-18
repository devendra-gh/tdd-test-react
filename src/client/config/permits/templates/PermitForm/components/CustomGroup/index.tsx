import React, { useState } from 'react';
import Button from '@tamm/ui-lib-v2-button';
import { IVariables } from '@tamm/app-composer';
import FormTemplate from '@tamm/ui-lib-v2-form-template';
import { Moment } from 'moment';
import FileUploads from '../FileUpload';
import MultifieldForm from '../MultifieldForm';
import TermsConditions from '../TermsConditionsList';
import ConditionalFieldsComponent from '../ConditionalFieldsComponent';
import EstimatedFees from '../EstimatedFees';
import ConditionalComponent from '../ConditionalComponent';

/* istanbul ignore file */

const CustomComponents: { [key: string]: any } = {
  FileUploads,
  MultifieldForm,
  TermsConditions,
  ConditionalFieldsComponent,
  EstimatedFees,
  ConditionalComponent,
};

const FormGroup = (props: IVariables) => {
  const {
    hasIncrementButton,
    incrementButtonLabel,
    stateKey,
    values,
    handleChange,
    i18n,
    validate,
    component,
    customDisabledDate,
    startShowingErrors,
    ...rest
  } = props;
  const { fields } = rest;
  const { handleChange: handleFormChange, values: formValues } = props;

  const initExtraFieldLength = 0;

  const [extraFieldLength, setExtraFieldLength] = useState(
    initExtraFieldLength,
  );

  // extra fields will have the same properties but different labels
  const fieldProperties = fields[0];
  const extraFields = [...Array(extraFieldLength)].map((_, index) => ({
    ...fieldProperties,
  }));

  let completeFields = fields.concat(extraFields);
  completeFields = completeFields.map((field: IVariables, index: number) => {
    const { value: fieldValue } = field;
    let computedProps;
    if (field.computedProps && fieldValue) {
      computedProps = field.computedProps.reduce(
        (acc: IVariables, prop: IVariables) => ({
          ...acc,
          [prop.name]: prop.compute(
            ...prop.dependencies.map(
              (dependency: string) => values[dependency],
            ),
          ),
        }),
        {},
      );
    }
    return {
      ...field,
      ...(field.items
        ? {
            items: field.items.map((item: IVariables) => ({
              ...item,
              label: i18n(item.label),
            })),
          }
        : {}),
      label: i18n(field.label),
      value: field.value
        ? field.value(values)
        : values[stateKey][field.name] || null,
      // change handler updates the permit from e.g aerial[name] = {...oldstate, newstate}
      onSelect: (value: any) => {
        const computedValue = field.onChange
          ? field.onChange({ value })
          : { [field.name]: value };

        handleChange({
          [stateKey]: {
            ...values[stateKey],
            ...computedValue,
          },
        });
      },
      onChange: (value: any) => {
        const computedValue = field.onChange
          ? field.onChange({ value })
          : { [field.name]: value };

        handleChange({
          [stateKey]: {
            ...values[stateKey],
            ...computedValue,
          },
        });
      },
      validate: () => validate(field, stateKey),
      defaultValue: values[stateKey][field.name]
        ? values[stateKey][field.name]
        : field.defaultValue,
      disabledDate: (currentDate: Moment) =>
        customDisabledDate(currentDate, field),
      ...computedProps,
    };
  });

  let IncrementButton = null;
  if (hasIncrementButton) {
    const stateValuesLength = values[stateKey].length;
    const currentFieldLength = fields.length + extraFieldLength;

    // Get length of extra fields from state
    if (stateValuesLength > currentFieldLength) {
      setExtraFieldLength(stateValuesLength - fields.length);
    }

    IncrementButton = (
      <div className="ui-lib-form__fieldset-content ui-lib-form__fieldset marginB20">
        <Button
          uiType="secondary"
          label={i18n(incrementButtonLabel)}
          onClick={() => {
            const currentValues = [...values[stateKey]];
            if (fieldProperties.defaultValue) {
              currentValues[stateValuesLength] = fieldProperties.defaultValue;
              return handleChange({
                [stateKey]: currentValues,
              });
            }
            return setExtraFieldLength(extraFieldLength + 1);
          }}
          size="medium"
        />
      </div>
    );

    completeFields = completeFields.map((field: IVariables, index: number) => ({
      ...field,
      ...(field.items
        ? {
            items: field.items.map((item: IVariables) => ({
              ...item,
              label: i18n(item.label),
            })),
          }
        : {}),
      label: i18n(field.label(index + 1)),
      name: field.name(index + 1),
      value: fieldProperties.value
        ? fieldProperties.value(values, index)
        : values[stateKey][index],
      onSelect: (value: any) => {
        const fieldName = field.name(index + 1);
        let computedValue = field.onChange
          ? field.onChange({ value })
          : { [fieldName]: value };

        computedValue = computedValue[fieldName];

        const currentValues = [...values[stateKey]] || [];
        currentValues[index] = computedValue;

        currentValues[index] = computedValue[fieldName];
        handleChange({
          [stateKey]: currentValues,
        });
      },
      onChange: (value: any) => {
        const fieldName = field.name(index + 1);
        const defaultHandleChange = fieldProperties.onChange;
        const computedValue = defaultHandleChange
          ? defaultHandleChange({ value, index })
          : { [fieldName]: value };

        const currentValues = [...values[stateKey]];

        currentValues[index] = computedValue[fieldName];
        handleChange({
          [stateKey]: currentValues,
        });
      },
      isExtraField: index + 1 > fields.length,
      defaultValue: values[stateKey][index]
        ? values[stateKey][index]
        : field.defaultValue,
      handleItemDelete: () => {
        if (extraFieldLength > 0) {
          const currentValues = [...values[stateKey]];
          currentValues.splice(index, 1);
          handleChange({
            [stateKey]: currentValues,
          });
          setExtraFieldLength(extraFieldLength - 1);
        }
      },
    }));
  }

  const completeInputGroup = [
    { ...props, name: i18n(rest.name), fields: completeFields },
  ];

  const Component = component;

  return (
    <div>
      <Component
        name={stateKey}
        inputGroups={completeInputGroup}
        i18n={i18n}
        handleChange={handleFormChange}
        values={formValues}
        startShowingErrors={startShowingErrors}
        groupKey={rest.groupKey}
        hasExtraField={extraFieldLength > 0}
      />
      {extraFieldLength > 0 && <hr style={{ marginBottom: 40 }} />}

      {IncrementButton}
    </div>
  );
};

function CustomFormGroup(props: IVariables) {
  const {
    inputGroups,
    values,
    handleChange,
    i18n,
    validate,
    customDisabledDate,
    startShowingErrors,
  } = props;
  return inputGroups.map((group: IVariables) => {
    const {
      hasIncrementButton,
      fields,
      stateKey,
      customComponent,
      ...rest
    } = group;

    let Component = FormTemplate;
    if (customComponent) {
      Component = CustomComponents[customComponent];
    }
    return (
      <FormGroup
        fields={fields}
        values={values}
        handleChange={handleChange}
        hasIncrementButton={hasIncrementButton}
        i18n={i18n}
        stateKey={stateKey}
        key={stateKey}
        groupKey={props.groupKey}
        validate={validate}
        component={Component}
        formProps={props}
        customDisabledDate={customDisabledDate}
        startShowingErrors={startShowingErrors}
        {...rest}
      />
    );
  });
}

export default CustomFormGroup;
