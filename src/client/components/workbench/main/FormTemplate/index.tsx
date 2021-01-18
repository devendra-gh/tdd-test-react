/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { has, isString } from 'lodash';

import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import DlsForm from '@tamm/ui-lib-v2-form';
import Grid from '@tamm/ui-lib-v2-grid';

import deepMap from 'client/utils/workbench/deepMap';
import RenderDefinition from 'client/components/workbench/v5/RenderDefinition';
import Space from 'client/components/workbench/main/Space';
import { validateRule, validationRules } from './validation';
import './FormTemplate.less';

import {
  CheckboxInput,
  CheckboxGroupInput,
  DatePickerInput,
  TimePickerInput,
  TextInput,
  NumberInput,
  PasswordInput,
  TelephoneInput,
  RadioInput,
  InputRange,
  Form,
  Button,
  TextAreaInput,
  FileInput,
  SelectInput,
  SliderInput,
} from './Html';

const { Row, Col } = Grid;

const inputTypes = {
  checkbox: 'checkbox',
  checkboxGroup: 'checkboxGroup',
  datePicker: 'datePicker',
  timePicker: 'timePicker',
  input: 'input',
  inputNumber: 'inputNumber',
  inputPassword: 'inputPassword',
  inputTelephone: 'inputTelephone',
  radioGroup: 'radioGroup',
  rangeInput: 'rangeInput',
  textArea: 'textArea',
  select: 'select',
  fileUpload: 'fileUpload',
  component: 'component',
  section: 'section',
  button: 'button',
  slider: 'slider',
};

const isFunction = (myVar: any): boolean => typeof myVar === 'function';

const getCustomComponentProps = (
  props: IVariables,
  definitionProps: IVariables,
) => {
  const { i18n } = props;

  const regex = /i18n\('([a-zA-Z_\-$][0-9a-zA-Z_\-$.]*)'\)/g;

  // eslint-disable-next-line complexity
  const componentProps = deepMap(definitionProps, (value: any) => {
    if (isString(value) && value.match(regex)) {
      return value.replace(regex, (matched, key) => i18n(key));
    }
    return value;
  });

  return {
    // ...props,
    ...componentProps,
    i18n,
  };
};

const isVisibleField = async (
  field: IVariables,
  formData: IVariables,
  customSharedProps: IVariables,
) => {
  const response = !!(
    !field.props?.isVisibleFunc ||
    (field.props?.isVisibleFunc &&
      (await field.props?.isVisibleFunc(formData, customSharedProps)))
  );
  return response;
};

const isDisabledField = async (
  field: IVariables,
  formData: IVariables,
  customSharedProps: IVariables,
) => {
  if (field?.props?.isDisabled) return field.props.isDisabled;

  if (field?.props?.isDisabledFunc && isFunction(field.props.isDisabledFunc)) {
    const isDiabled = await field.props.isDisabledFunc(
      formData,
      customSharedProps,
    );
    return isDiabled;
  }
  return false;
};

const getVisibleFields = async (
  fields: IVariables[],
  formData: IVariables,
  customSharedProps: IVariables,
) => {
  let visibleFields: IVariables[] = [];
  /* eslint-disable no-restricted-syntax */
  for (const [index, field] of fields.entries()) {
    /* eslint-disable no-await-in-loop */
    const isVisible = await isVisibleField(field, formData, customSharedProps);
    /* eslint-disable no-await-in-loop */
    const disabled = await isDisabledField(field, formData, customSharedProps);
    if (field.children) {
      if (isVisible) {
        /* eslint-disable no-await-in-loop */
        const visibleChildFields = await getVisibleFields(
          field.children,
          formData,
          customSharedProps,
        );
        visibleFields[index] = {
          ...field,
          children: visibleChildFields,
        };
      }
    } else if (field.props?.children) {
      if (isVisible) {
        /* eslint-disable no-await-in-loop */
        const visibleChildFields = await getVisibleFields(
          field.props?.children,
          formData,
          customSharedProps,
        );
        visibleFields[index] = {
          ...field,
          props: {
            ...field.props,
            children: visibleChildFields,
          },
        };
      }
    } else if (isVisible) {
      visibleFields = [...visibleFields, { ...field, disabled }];
    }
  }
  return visibleFields;
};

// eslint-disable-next-line complexity
const checkFieldValidationErrors = async (
  field: IVariables,
  fieldValue: any,
  formData: IVariables,
  customSharedProps: IVariables,
  i18n?: any,
) => {
  const fieldErrors: any = [];

  // Check for isRequired
  const fieldRequired = isFunction(field.props?.isRequiredFunc)
    ? !!field.props?.isRequiredFunc(formData, customSharedProps)
    : !!field.props?.isRequired;

  if (fieldRequired && !fieldValue)
    fieldErrors.push({ message: i18n('form.error.required') });

  // Check for isValid
  let fieldValidation;
  if (isFunction(field.props?.isValidFunc)) {
    fieldValidation = await field.props?.isValidFunc(
      formData,
      customSharedProps,
    );
  } else fieldValidation = field.props?.isValid;

  // const fieldValidation = isFunction(field.props?.isValidFunc)
  //   ? field.props?.isValidFunc(formData, customSharedProps)
  //   : field.props?.isValid;

  if (fieldValidation && Array.isArray(fieldValidation)) {
    fieldValidation.forEach(rule => {
      const ruleResult = validateRule(rule, fieldValue);
      if (ruleResult && ruleResult.message) {
        fieldErrors.push(ruleResult);
      }
    });
  }

  if (fieldValidation === false || fieldValidation?.valid === false)
    fieldErrors.push(
      fieldValidation || { message: i18n('form.error.invalid') },
    );

  return fieldErrors.length ? fieldErrors : false;
};

const checkFieldsValidationErrors = async (
  fields: IVariables[],
  formData: IVariables,
  customSharedProps: IVariables,
  i18n?: any,
) => {
  let fieldsErrors: any = {};
  /* eslint-disable no-restricted-syntax */
  for (const [, field] of fields.entries()) {
    const fieldValue = formData[field.props?.name] || '';
    const fieldErrors = await checkFieldValidationErrors(
      field,
      fieldValue,
      formData,
      customSharedProps,
      i18n,
    );

    if (fieldErrors) {
      fieldsErrors[field.props?.name] = fieldErrors;
    }

    if (field.children || field.props?.children) {
      const childErrors = await checkFieldsValidationErrors(
        field.children || field.props?.children,
        formData,
        customSharedProps,
        i18n,
      );
      if (childErrors) {
        fieldsErrors = {
          ...fieldsErrors,
          ...childErrors,
        };
      }
    }
  }
  return Object.keys(fieldsErrors).length ? fieldsErrors : false;
};

// eslint-disable-next-line complexity
const checkRequiredField = async (
  field: IVariables,
  formData: IVariables,
  customSharedProps: IVariables,
) => {
  // Check for isRequired
  // let fieldRequired;
  if (isFunction(field.props?.isRequiredFunc)) {
    const isRequired = await field.props.isRequiredFunc(
      formData,
      customSharedProps,
    );
    return !!isRequired;
  }
  return !!field.props?.isRequired;
  // const fieldRequired = isFunction(field.props?.isRequiredFunc)
  //   ? await !!field.props?.isRequiredFunc(formData, customSharedProps)
  //   : !!field.props?.isRequired;

  // return fieldRequired;
};

const checkRequiredFields = async (
  fields: IVariables[],
  formData: IVariables,
  customSharedProps: IVariables,
) => {
  let fieldsRequired: any = {};
  for (const [, field] of fields.entries()) {
    if (field.props?.name)
      fieldsRequired[field.props.name] = await checkRequiredField(
        field,
        formData,
        customSharedProps,
      );

    if (field.children || field.props?.children) {
      const childRequired = await checkRequiredFields(
        field.children || field.props?.children,
        formData,
        customSharedProps,
      );
      if (childRequired) {
        fieldsRequired = {
          ...fieldsRequired,
          ...childRequired,
        };
      }
    }
  }
  return Object.keys(fieldsRequired).length ? fieldsRequired : false;
};

// eslint-disable-next-line complexity
const renderInput = (
  field: IVariables,
  fieldValue: any,
  fieldError: any,
  handleInputChange: any,
  fieldRequired: boolean,
  i18n?: any,
) => {
  let component = field;
  if (!fieldRequired && component.props.label) {
    component = {
      ...component,
      props: {
        ...component.props,
        label: `${component.props.label} (${i18n('form.optional')})`,
      },
    };
  }
  if (!fieldRequired && component.props.groupLabel) {
    component = {
      ...component,
      props: {
        ...component.props,
        groupLabel: `${component.props.groupLabel} (${i18n('form.optional')})`,
      },
    };
  }
  const defaultProps = {
    field: component,
    fieldValue,
    handleInputChange,
    fieldError,
    fieldRequired,
    i18n,
  };
  switch (field.type) {
    case inputTypes.checkbox:
      return <CheckboxInput {...defaultProps} />;
    case inputTypes.checkboxGroup:
      return <CheckboxGroupInput {...defaultProps} />;
    case inputTypes.datePicker:
      return <DatePickerInput {...defaultProps} />;
    case inputTypes.timePicker:
      return <TimePickerInput {...defaultProps} />;
    case inputTypes.input:
      return <TextInput {...defaultProps} />;
    case inputTypes.inputNumber:
      return <NumberInput {...defaultProps} />;
    case inputTypes.inputPassword:
      return <PasswordInput {...defaultProps} />;
    case inputTypes.inputTelephone:
      return <TelephoneInput {...defaultProps} />;
    case inputTypes.radioGroup:
      return <RadioInput {...defaultProps} />;
    case inputTypes.rangeInput:
      return <InputRange {...defaultProps} />;
    case inputTypes.textArea:
      return <TextAreaInput {...defaultProps} />;
    case inputTypes.select:
      return <SelectInput {...defaultProps} />;
    case inputTypes.fileUpload:
      return <FileInput {...defaultProps} />;
    case inputTypes.button:
      return <Button {...defaultProps} />;
    case inputTypes.component:
      return field.component();
    case inputTypes.slider:
      return <SliderInput {...defaultProps} />;
    default:
      return (
        <div>
          {i18n('form.error.invalid')} {field.name}{' '}
        </div>
      );
  }
};

const renderField = (
  field: IVariables,
  fieldValue: any,
  fieldError: any,
  handleInputChange: any,
  props: any,
  fieldRequired: boolean,
  i18n: any,
) => {
  const componentProps: IVariables = getCustomComponentProps(
    props,
    field.props,
  );
  const fieldWithUpdatedProps = { ...field, props: componentProps };
  return (
    <Space {...field.props?.space}>
      {renderInput(
        fieldWithUpdatedProps,
        fieldValue,
        fieldError,
        handleInputChange,
        fieldRequired,
        i18n,
      )}
    </Space>
  );
};

const renderGrid = (
  field: IVariables,
  formData: any,
  handleInputChange: any,
  customSharedProps: any,
  fieldErrors?: any,
  props?: any,
  fieldsRequired?: any,
  i18n?: any,
): any => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Space {...field.props?.space} noPointerEvents={false}>
      <Row flex>
        {(field.children || []).map((def: IVariables, index: number) => {
          const fieldValue = has(formData, def?.props?.name)
            ? formData[def?.props?.name]
            : '';
          const fieldError = fieldErrors[def?.props?.name];
          const fieldRequired = fieldsRequired[def?.props?.name];
          const flexColumns = { xs: 12, ...field.props?.flexColumns };
          return (
            <Col
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...flexColumns}
              style={field?.props?.style}
            >
              {renderField(
                // { ...def, disabled },
                def,
                fieldValue,
                fieldError,
                handleInputChange,
                props,
                fieldRequired,
                i18n,
              )}
            </Col>
          );
        })}
      </Row>
    </Space>
  );
};

const renderFieldset = (
  field: IVariables,
  formData: any,
  handleInputChange: any,
  customSharedProps: any,
  fieldErrors?: any,
  getSharedProps?: any,
  props?: any,
  fieldsRequired?: any,
  i18n?: any,
): any => {
  const componentProps: IVariables = getCustomComponentProps(
    props,
    field.props,
  );
  return (
    <DlsForm.Fieldset title={componentProps?.title} gapSize="small">
      {field.props?.description && (
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: componentProps?.description }}
        />
      )}
      {/* eslint-disable-next-line no-use-before-define */}
      {renderFields(
        field.props?.children,
        formData,
        handleInputChange,
        customSharedProps,
        fieldErrors,
        getSharedProps,
        props,
        fieldsRequired,
        i18n,
      )}
    </DlsForm.Fieldset>
  );
};

const renderFields = (
  fields: IVariables[],
  formData: any,
  handleInputChange: any,
  customSharedProps: any,
  fieldErrors?: any,
  getSharedProps?: any,
  props?: any,
  fieldsRequired?: any,
  i18n?: any,
): any => {
  return (
    Array.isArray(fields) &&
    // eslint-disable-next-line complexity
    fields.map((field: IVariables) => {
      const fieldValue = has(formData, field.props?.name)
        ? formData[field.props?.name]
        : '';
      const fieldError = fieldErrors[field.props?.name];
      const fieldRequired = fieldsRequired[field.props?.name];

      if (field.type === 'fieldset')
        return renderFieldset(
          field,
          formData,
          handleInputChange,
          customSharedProps,
          fieldErrors,
          getSharedProps,
          props,
          fieldsRequired,
          i18n,
        );

      if (field.type === 'grid')
        return renderGrid(
          field,
          formData,
          handleInputChange,
          customSharedProps,
          fieldErrors,
          props,
          fieldsRequired,
          i18n,
        );

      if (field.type === 'symbol')
        return (
          <RenderDefinition
            // key={String(index)}
            definition={field}
            getSharedProps={getSharedProps}
          />
        );

      return renderField(
        // { ...field, disabled },
        field,
        fieldValue,
        fieldError,
        handleInputChange,
        props,
        fieldRequired,
        i18n,
      );
    })
  );
};

const renderForm = (
  fields: IVariables[],
  formData: any,
  handleInputChange: any,
  handleSubmit: any,
  handleCancel: any,
  fieldErrors: any,
  props: any,
  getSharedProps: any,
  handleBack: any,
  fieldsRequired: any,
  i18n: any,
  submitDisabled: any,
  customSharedProps: any,
) => {
  const {
    btnSubmitLabel,
    includeBackButton,
    btnBackLabel,
    includeCancelButton,
    btnSubmitArrow,
    btnBackArrow,
  } = props;

  const formValid =
    Object.keys(fieldsRequired).every(
      k =>
        !fieldsRequired[k] ||
        (fieldsRequired[k] && formData[k] && String(formData[k]).trim()),
    ) &&
    Object.keys(fieldErrors).every(
      k => !fieldErrors[k] || (fieldErrors[k] && fieldErrors[k].length <= 0),
    ) &&
    !submitDisabled;

  const defaultSubmitLabel = i18n('form.submit');
  const defaultBackLabel = i18n('form.back');
  const defaultCancelLabel = i18n('form.cancel');

  return (
    <Form
      handleSubmit={handleSubmit}
      onSubmitLabel={btnSubmitLabel}
      onBackLabel={btnBackLabel}
      handleCancel={handleCancel}
      handleBack={handleBack}
      includeCancelButton={includeCancelButton}
      includeBackButton={includeBackButton}
      btnSubmitArrow={btnSubmitArrow}
      btnBackArrow={btnBackArrow}
      props={props}
      formValid={formValid}
      defaultSubmitLabel={defaultSubmitLabel}
      defaultBackLabel={defaultBackLabel}
      defaultCancelLabel={defaultCancelLabel}
    >
      {renderFields(
        fields,
        formData,
        handleInputChange,
        customSharedProps,
        fieldErrors,
        getSharedProps,
        props,
        fieldsRequired,
        i18n,
      )}
    </Form>
  );
};

const getFieldsDefaultValues = (fields: any): IVariables => {
  return (
    Array.isArray(fields) &&
    fields.reduce((accumulator: IVariables, field: IVariables) => {
      if (has(field.props, 'defaultValue')) {
        accumulator[field.props?.name] = field.props?.defaultValue;
      }
      if (field.children || field.props?.children) {
        // eslint-disable-next-line no-param-reassign
        accumulator = {
          ...accumulator,
          ...getFieldsDefaultValues(field.children || field.props?.children),
        };
      }
      return accumulator;
    }, {})
  );
};

const getInputChangeHandler = (setFieldErrors: any, props: any) => (
  field: IVariables,
) => (event: IVariables) => {
  let fieldValue;
  if (['checkbox'].indexOf(field.type) >= 0)
    fieldValue = !!event.target.checked;
  else fieldValue = event?.target ? event.target.value : event;

  // eslint-disable-next-line no-unused-expressions
  props.formValues &&
    props.actions[props.formValues].update({
      ...props[props.formValues],
      [field.props?.name]: fieldValue,
    });

  setFieldErrors((data: any) => ({
    ...data,
    [field.props?.name]: null,
  }));
  if (field.props?.onChange) {
    field.props.onChange(fieldValue);
    // if (field.props.onChange.name.includes('call_')) {
    //   field.props.onChange(props)(fieldValue);
    // } else field.props.onChange(props);
  }
};

const getFormSubmithandler = (
  fields: IVariables[],
  formData: any,
  setFieldErrors: any,
  callback: any,
  customProps: any,
  customSharedProps: any,
): Function => {
  return async (event: any, props: any = {}) => {
    event.preventDefault();
    const fieldsErrors = await checkFieldsValidationErrors(
      fields,
      formData,
      customSharedProps,
      customProps?.i18n,
    );
    if (fieldsErrors) {
      setFieldErrors((data: any) => ({
        ...fieldsErrors,
      }));
    } else {
      // eslint-disable-next-line no-unused-expressions
      callback && isFunction(callback) && callback(customProps, formData);
    }
  };
};

const cancelHandler = (
  btnCancelClick: any,
  customProps: any,
  formData: any,
) => {
  return btnCancelClick ? () => btnCancelClick(customProps, formData) : false;
};

const FormTemplate = (comingProps: IVariables) => {
  let { props } = comingProps.definition;
  const { sharedProps } = comingProps.definition;
  const { getSharedProps } = comingProps;
  const DEFAULT_SHARED_PROPS = [
    'i18n',
    'locale',
    'history',
    'actions',
    'fetch',
    'bpm',
    'match',
    'analytics',
  ];
  props = {
    ...props,
    ...getSharedProps([...DEFAULT_SHARED_PROPS, ...sharedProps]),
  };
  const {
    title,
    description,
    btnSubmitClick,
    btnSubmitDisabled,
    btnCancelClick,
    btnBackClick,
    definitions,
    i18n,
  } = props;

  const customProps = getSharedProps([...DEFAULT_SHARED_PROPS, ...sharedProps]);
  const customSharedProps = getSharedProps(sharedProps);

  const [fieldErrors, setFieldErrors] = useState({});
  const [visibleFields, setVisibleFields] = useState([]);
  const [requiredFields, setRequiredFields] = useState({});
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const fields = definitions;
  const initialValues = getFieldsDefaultValues(fields);

  let formData = props[props.formValues] || {};
  formData = { ...initialValues, ...formData };

  useEffect(() => {
    async function getVisibleFieldList() {
      const fieldList: any = await getVisibleFields(
        fields,
        formData,
        customSharedProps,
      );
      setVisibleFields(fieldList);
    }
    getVisibleFieldList();
  }, [fields, props[props.formValues]]);

  useEffect(() => {
    async function getRequiredFieldList() {
      const fieldList = await checkRequiredFields(
        visibleFields,
        formData,
        customSharedProps,
      );
      setRequiredFields(fieldList);
    }
    if (visibleFields) getRequiredFieldList();
  }, [fields, props[props.formValues], visibleFields]);

  const handleSubmit = getFormSubmithandler(
    visibleFields,
    formData,
    setFieldErrors,
    btnSubmitClick,
    customProps,
    customSharedProps,
  );

  const handleCancel = cancelHandler(btnCancelClick, customProps, formData);

  const handleBack = btnBackClick
    ? () => btnBackClick(customProps, formData)
    : false;

  const handleInputChange = getInputChangeHandler(setFieldErrors, props);

  const componentProps: IVariables = getCustomComponentProps(props, props);

  useEffect(() => {
    async function checkSubmitDisabled() {
      let btnDisabled = false;
      if (!btnSubmitDisabled) btnDisabled = false;
      if (btnSubmitDisabled && isFunction(btnSubmitDisabled)) {
        btnDisabled = await btnSubmitDisabled(componentProps, formData);
      }
      setSubmitDisabled(btnDisabled);
    }
    if (visibleFields) checkSubmitDisabled();
  }, [props[props.formValues], visibleFields]);

  return (
    <div className="formTemplate">
      {title && <h3>{componentProps?.title}</h3>}
      {description && (
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: componentProps?.description }}
        />
      )}
      {renderForm(
        visibleFields,
        formData,
        handleInputChange,
        handleSubmit,
        handleCancel,
        fieldErrors,
        componentProps,
        getSharedProps,
        handleBack,
        requiredFields,
        i18n,
        submitDisabled,
        customSharedProps,
      )}
    </div>
  );
};

FormTemplate.propTypes = {
  ...routePropTypes,
  definitions: PropTypes.arrayOf(PropTypes.shape({})),
};

FormTemplate.defaultProps = {
  definitions: [],
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
  cancelHandler,
};

export { inputTypes, FormTemplate, validationRules };

export default withTemplateHooks(FormTemplate);
