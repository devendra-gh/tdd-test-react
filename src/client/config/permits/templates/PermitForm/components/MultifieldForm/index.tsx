import React from 'react';
import { IVariables } from '@tamm/app-composer';
import FormTemplate from '@tamm/ui-lib-v2-form-template';
import Button from '@tamm/ui-lib-v2-button';
import Badge from '@tamm/ui-lib-v2-badge';
import Select from '@tamm/ui-lib-v2-select';
import InputNumber from '@tamm/ui-lib-v2-input-number';
import DatePicker from '@tamm/ui-lib-v2-date-picker';
import { Moment } from 'moment';
import { checkValidationField } from 'client/config/utils/checkValidation';

type InputTypes = { [key: string]: any };
const InputTypes = {
  inputNumber: InputNumber,
  badge: Badge,
  select: Select,
  datePicker: DatePicker,
} as InputTypes;

const MultiFieldForm = (props: IVariables) => {
  const {
    inputGroups,
    i18n,
    startShowingErrors,
    values,
    hasExtraField,
  } = props;
  let deleteLabel: string;

  const renderField = (field: IVariables, onChange: any) => {
    const { value: fieldValue, defaultValue } = field;

    const subFields = field.subFields.map((subField: IVariables) => {
      let computedProps;
      const {
        validationConfig,
        name,
        defaultValue: subFieldDefaultValue,
      } = subField;
      if (subField.computedProps && fieldValue) {
        computedProps = subField.computedProps.reduce(
          (acc: IVariables, prop: IVariables) => ({
            ...acc,
            [prop.name]: prop.compute(
              ...prop.dependencies.map(
                (dependency: string) => fieldValue[dependency],
              ),
            ),
          }),
          {},
        );
      }
      let subFieldDefault = defaultValue ? defaultValue[name] : null;

      let subFieldValue = fieldValue && fieldValue[name];
      subFieldValue = subField.value
        ? subField.value(subFieldValue)
        : subFieldValue;

      if (subFieldDefaultValue) {
        subFieldDefault =
          (fieldValue && fieldValue[name]) || subFieldDefaultValue;
      }

      // checking validation for the field
      const validation = () =>
        checkValidationField(
          validationConfig,
          (fieldValue && fieldValue[name]) || '',
          startShowingErrors,
          i18n,
        );

      const fieldWithChangeHandler = {
        ...subField,
        ...(subField.items
          ? {
              items: subField.items.map((item: IVariables) => ({
                ...item,
                label: i18n(item.label),
              })),
            }
          : {}),
        key: subField.name,
        label: i18n(subField.label),
        defaultValue: subFieldDefault,
        value: subFieldValue,
        onChange: (value: any) => {
          onChange({
            ...fieldValue,
            [name]: value,
          });
        },
        validate: validation,
        disabledDate: (currentDate: Moment) =>
          subField.customDisabledDate(currentDate, values),
        ...computedProps,
      };

      return fieldWithChangeHandler;
    });

    const SubFieldFormTemplate = (
      <FormTemplate
        inputGroups={[
          {
            ...field,
            name: '',
            fields: subFields,
          },
        ]}
      />
    );

    let deleteIcon = null;

    if (hasExtraField) {
      deleteIcon = (
        <Button
          aria-label={i18n(deleteLabel)}
          icon={undefined}
          label={i18n(deleteLabel)}
          link={undefined}
          name="remove-button"
          onClick={field.handleItemDelete}
          size="medium"
          target={undefined}
          type="button"
          uiType="secondary"
        />
        // <Button
        //   size="default"
        //   uiType="ghost"
        //   onClick={field.handleItemDelete}
        //   icon={() => <Icon source={Bin1Outline} />}
        // />
      );
    }
    return (
      <React.Fragment>
        <div style={{ display: 'flex', marginBottom: 40 }}>
          <div style={{ flexGrow: 15 }}>
            {hasExtraField && <hr style={{ marginBottom: 40 }} />}
            {SubFieldFormTemplate}
            {deleteIcon && <div style={{ marginTop: 40 }}>{deleteIcon}</div>}
          </div>
        </div>
      </React.Fragment>
    );
  };

  const renderFields = (fields: IVariables[]) => {
    return fields.map(field => renderField(field, field.onChange));
  };

  const renderGroup = (group: IVariables) => {
    const { title, stateKey, fields, deleteLabel: buttonLabel } = group;
    deleteLabel = buttonLabel;
    const inputGroup = (
      <form name={stateKey}>
        <p>{i18n(title)}</p>
        {renderFields(fields)}
        <div className="marginT40" />
      </form>
    );
    return inputGroup;
  };

  return inputGroups.map((group: IVariables) => {
    return renderGroup(group);
  });
};

export default MultiFieldForm;
