import React from "react";
import {
  Form,
  SectionForm,
  Button,
  CheckboxInput,
  FieldGroup,
  RadioInput,
  TextAreaInput,
  TextInput,
  FileInput,
  DateInput,
  SelectInput
} from "./Html";
import { has } from "lodash";
import { withTemplateHooks, IVariables } from "@tamm/app-composer";
import routePropTypes from "@tamm/app-composer";
import { IFormFieldType } from "./Types";
import { validateRule, validationRules } from "./validation";
import { useState, useEffect } from "react";

const FIELD_WIDTH = {
  full: 12,
  half: 6
};

const inputTypes = {
  radio: "radio",
  checkbox: "checkbox",
  input: "input",
  textarea: "textarea",
  date: "date",
  select: "select",
  file: "file",
  component: "component",
  section: "section",
  button: "button"
};

const isVisibleField = (field: IFormFieldType, formData: IVariables) =>
  (!field.visible && !field.hidden) ||
  (field.hidden && !field.hidden(formData)) ||
  (field.visible && field.visible(formData))
    ? true
    : false;

const getVisibleFields = (
  fields: Array<IFormFieldType>,
  formData: IVariables
) => {
  let visibleFields: Array<IFormFieldType> = [];

  Array.isArray(fields) &&
    fields.forEach((field, index) => {
      if (field.fields) {
        if (isVisibleField(field, formData)) {
          visibleFields[index] = {
            ...field,
            fields: formActions.getVisibleFields(field.fields, formData)
          };
        }
      } else if (formActions.isVisibleField(field, formData)) {
        visibleFields = [...visibleFields, field];
      }
    });
  return visibleFields;
};

/**
 * isObject
 * @param {Object} myVar
 * @returns {boolean}
 */
const isFunction = (myVar: any): boolean => typeof myVar === "function";

const checkFieldValidationErrors = (field: IFormFieldType, fieldValue: any) => {
  const fieldValidation = isFunction(field.validation)
    ? field.validation(fieldValue)
    : field.validation;

  const fieldErrors: any = [];

  if (fieldValidation && Array.isArray(fieldValidation)) {
    fieldValidation.forEach(rule => {
      const ruleResult = formActions.validateRule(rule, fieldValue);
      if (ruleResult && ruleResult.message) {
        fieldErrors.push(ruleResult);
      }
    });
  }

  return fieldErrors.length ? fieldErrors : false;
};

const checkFieldsValidationErrors = (
  fields: Array<IFormFieldType>,
  formData: IVariables
) => {
  let fieldsErrors: any = {};

  fields.forEach((field: IFormFieldType) => {
    const fieldValue = formData[field.name] || "";
    const fieldErrors = formActions.checkFieldValidationErrors(
      field,
      fieldValue
    );

    if (fieldErrors) {
      fieldsErrors[field.name] = fieldErrors;
    }

    if (field.fields) {
      const childErrors = formActions.checkFieldsValidationErrors(
        field.fields,
        formData
      );
      if (childErrors) {
        fieldsErrors = {
          ...fieldsErrors,
          ...childErrors
        };
      }
    }
  });
  return Object.keys(fieldsErrors).length ? fieldsErrors : false;
};

const renderInput = (
  field: IFormFieldType,
  fieldValue: any,
  fieldError: any,
  handleInputChange: any,
  i18n: any,
  questionnaire?: boolean
) => {
  const defaultProps = {
    field,
    fieldValue,
    handleInputChange,
    fieldError,
    questionnaire,
    i18n
  };

  switch (field.type) {
    case inputTypes.radio:
      return <RadioInput {...defaultProps} />;
    case inputTypes.checkbox:
      return <CheckboxInput {...defaultProps} />;
    case inputTypes.input:
      return <TextInput {...defaultProps} />;
    case inputTypes.textarea:
      return <TextAreaInput {...defaultProps} />;
    case inputTypes.date:
      return <DateInput {...defaultProps} />;
    case inputTypes.select:
      return <SelectInput {...defaultProps} />;
    case inputTypes.file:
      return <FileInput {...defaultProps} />;
    case inputTypes.button:
      return <Button {...defaultProps} />;
    case inputTypes.component:
      return field.component();
    default:
      return <div>wrong input type {field.name} </div>;
  }
};

const renderField = (
  field: IFormFieldType,
  fieldValue: any,
  fieldError: any,
  handleInputChange: any,
  i18n: any,
  questionnaire?: boolean
) => {
  const width =
    field.type === inputTypes.textarea
      ? FIELD_WIDTH["full"]
      : FIELD_WIDTH["half"];

  return (
    <FieldGroup
      width={width}
      field={field}
      key={field.name}
      controlId={field.name}
    >
      {formActions.renderInput(
        field,
        fieldValue,
        fieldError,
        handleInputChange,
        i18n,
        questionnaire
      )}
    </FieldGroup>
  );
};

const renderFields = (
  fields: Array<IFormFieldType>,
  formData: any,
  handleInputChange: any,
  i18n: any,
  fieldErrors?: any,
  questionnaire?: boolean
) => {
  return (
    Array.isArray(fields) &&
    fields.map((field: IFormFieldType) => {
      const fieldValue = has(formData, field.name) ? formData[field.name] : "";
      const fieldError = fieldErrors[field.name];
      const disabled: any =
        field.disabled && isFunction(field.disabled)
          ? field.disabled(formData)
          : false;

      return field.fields ? (
        <SectionForm title={field.label} i18n={i18n} twoColumns={field.twoColumns}>
          {formActions.renderFields(
            field.fields,
            formData,
            handleInputChange,
            i18n,
            fieldErrors,
            questionnaire
          )}
        </SectionForm>
      ) : (
        formActions.renderField(
          { ...field, disabled },
          fieldValue,
          fieldError,
          handleInputChange,
          i18n,
          questionnaire
        )
      );
    })
  );
};

/**
 * FormTemplate
 * @param {Array} fields
 * @param {Object} formData
 * @param {Function} handleInputChange
 * @param {Function} handleSubmit
 * @param {Functions} handleCancel
 * @param {Object} fieldErrors
 * @param {Object} props
 * @returns {JSX}
 */
const renderForm = (
  fields: Array<IFormFieldType>,
  formData: any,
  handleInputChange: any,
  handleSubmit: any,
  handleCancel: any,
  handleBack: any,
  fieldErrors: any,
  title: string,
  twoColumns: boolean,
  props: any
) => {
  return (
    <Form
      handleSubmit={handleSubmit}
      onSubmitLabel={props.onSubmitLabel}
      handleCancel={handleCancel}
      handleBack={handleBack}
      title={title}
      twoColumns={twoColumns}
      props={props}
    >
      {formActions.renderFields(
        fields,
        formData,
        handleInputChange,
        props.i18n,
        fieldErrors,
        props.questionnaire
      )}
    </Form>
  );
};

/**
 * @param {Event} event
 * @param {Object} props
 * @returns {Function}
 */
const getFormSubmithandler = (
  fields: Array<IFormFieldType>,
  formData: any,
  setFieldErrors: any,
  callback: any
): Function => {
  return (event: any, props: any = {}) => {
    if (event) event.preventDefault();
    const fieldsErrors = formActions.checkFieldsValidationErrors(
      fields,
      formData
    );

    if (fieldsErrors) {
      setFieldErrors((data: any) => ({
        ...fieldsErrors
      }));
    } else {
      callback(formData, props);
    }
  };
};

/**
 * FormTemplate
 * @param {Object} fields
 * @returns {Object}
 */
const getFieldsDefaultValues = (fields: any): IVariables => {
  return (
    Array.isArray(fields) &&
    fields.reduce((accumulator: IVariables, field: IFormFieldType) => {
      if (has(field, "defaultValue")) {
        accumulator[field.name] = field.defaultValue;
      }
      if (field.fields) {
        accumulator = {
          ...accumulator,
          ...formActions.getFieldsDefaultValues(field.fields)
        };
      }
      return accumulator;
    }, {})
  );
};

/**
 * getInputChangeHandler
 * @param {Object} form
 * @param {Object} formData
 * @param {Function} setFieldErrors
 * @param {Object} props
 * @returns {void}
 */
const getInputChangeHandler = (
  form: IVariables,
  formData: IVariables,
  setFieldErrors: any,
  props: any
) => (field: IFormFieldType) => (event: IVariables) => {
  // event.persist();
  let fieldValue;
  // for multiselection
  if (["checkbox"].indexOf(field.type) >= 0) {
    fieldValue = {
      ...(formData[field.name] ? formData[field.name] : {}),
      [event.target.value]: !!event.target.checked
    };
  } else {
    fieldValue = event.target ? event.target.value : event;
  }

  setFieldErrors((data: any) => ({
    ...data,
    [field.name]: null
  }));

  if (field.onChange) {
    field.onChange(props, fieldValue);
  } else if (form.onChange) {
    form.onChange(props, { [field.name]: fieldValue });
  }
};

const setFieldsDefaultValues = (
  initialValues: any,
  onChangeForm: any,
  props: any
) => {
  onChangeForm && onChangeForm(props, initialValues);
};

/**
 * FormTemplate
 * @param {Object} props
 * @returns {JSX}
 */
const FormTemplate = (props: IVariables) => {
  try {
    const [fieldErrors, setFieldErrors] = useState({});
    const { form } = props;
    const { fields, formData = {} } = form;

    const visibleFields = formActions.getVisibleFields(fields, formData);
    const handleSubmit = formActions.getFormSubmithandler(
      visibleFields,
      formData,
      setFieldErrors,
      props.onSubmit
    );
    const title = props.formTitle;
    const twoColumns = props.twoColumns;
    const handleCancel = props.onCancel ? () => props.onCancel(props) : false;
    const handleBack = props.onBack ? () => props.onBack(props) : false;
    const handleInputChange = formActions.getInputChangeHandler(
      form,
      formData,
      setFieldErrors,
      props
    );

    useEffect(() => {
      const initialValues = formActions.getFieldsDefaultValues(fields);
      setFieldsDefaultValues(initialValues, form.onChange, props);
    }, []);

    return formActions.renderForm(
      visibleFields,
      formData,
      handleInputChange,
      handleSubmit,
      handleCancel,
      handleBack,
      fieldErrors,
      title,
      twoColumns,
      props
    );
  } catch (e) {
    console.log("[FormTemplate]", e);
    return "Error while loading the form, check the browser log.";
  }
};

FormTemplate.propTypes = {
  ...routePropTypes
};

export const formActions = {
  validateRule,
  isVisibleField,
  getVisibleFields,
  isFunction,
  checkFieldValidationErrors,
  checkFieldsValidationErrors,
  renderInput,
  renderField,
  renderFields,
  renderForm,
  getFormSubmithandler,
  getFieldsDefaultValues,
  getInputChangeHandler,
  setFieldsDefaultValues
};

export { inputTypes, FormTemplate, validationRules };

export default withTemplateHooks(FormTemplate);
// export default FormTemplate;
