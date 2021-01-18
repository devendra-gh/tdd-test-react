import React from 'react';

import { noop, isFunction } from 'lodash';

import Checkbox from '@tamm/ui-lib-v2-checkbox';
import CheckboxGroup from '@tamm/ui-lib-v2-checkbox-group';
import DatePicker from '@tamm/ui-lib-v2-date-picker';
import Input from '@tamm/ui-lib-v2-input';
import InputNumber from '@tamm/ui-lib-v2-input-number';
import InputPassword from '@tamm/ui-lib-v2-input-password';
import InputTelephone from '@tamm/ui-lib-v2-input-telephone';
import RadioGroup from '@tamm/ui-lib-v2-radio-group';
import RangeInput from '@tamm/ui-lib-v2-range-input';
import DlsButton from '@tamm/ui-lib-v2-button';
import DlsForm from '@tamm/ui-lib-v2-form';
import Select from '@tamm/ui-lib-v2-select';
import Slider from '@tamm/ui-lib-v2-slider';
import TextArea from '@tamm/ui-lib-v2-text-area';
import TimePicker from '@tamm/ui-lib-v2-time-picker';
import Grid from '@tamm/ui-lib-v2-grid';
import { IVariables } from '@tamm/app-composer';

import FileUpload from '../../FileUpload';
import { FieldErrorType } from '../Types';

const CheckboxInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
}: any) => {
  const { disabled } = field;
  return (
    <>
      <Checkbox
        {...field.props}
        onChange={handleInputChange(field)}
        checked={fieldValue}
        validateStatus={fieldError ? 'error' : undefined}
        disabled={disabled}
      />
    </>
  );
};

const CheckboxGroupInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
}: any) => {
  const { disabled } = field;
  return (
    <>
      <CheckboxGroup
        {...field.props}
        onChange={handleInputChange(field)}
        i18n={noop}
        disabled={disabled}
      />
    </>
  );
};

const DatePickerInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
}: any) => {
  const { disabled } = field;
  return (
    <DatePicker
      {...field.props}
      i18n={noop}
      onChange={handleInputChange(field)}
      validateStatus={fieldError ? 'error' : undefined}
      help={
        (fieldError || [])
          .map((error: FieldErrorType) => error.message)
          .join('. ') || field.props.help
      }
      disabled={disabled}
      value={fieldValue}
    />
  );
};

const TextInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
}: any) => {
  const { disabled } = field;
  return (
    <>
      <Input
        {...field.props}
        onChange={handleInputChange(field)}
        value={fieldValue}
        validateStatus={fieldError ? 'error' : undefined}
        disabled={disabled}
        help={
          (fieldError || [])
            .map((error: FieldErrorType) => error.message)
            .join('. ') || field.props.help
        }
      />
    </>
  );
};

const NumberInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
}: any) => {
  const { disabled } = field;
  return (
    <>
      <InputNumber
        {...field.props}
        onChange={handleInputChange(field)}
        value={fieldValue}
        validateStatus={fieldError ? 'error' : undefined}
        disabled={disabled}
        help={
          (fieldError || [])
            .map((error: FieldErrorType) => error.message)
            .join('. ') || field.props.help
        }
      />
    </>
  );
};

const PasswordInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
}: any) => {
  const { disabled } = field;
  return (
    <>
      <InputPassword
        {...field.props}
        onChange={handleInputChange(field)}
        value={fieldValue}
        validateStatus={fieldError ? 'error' : undefined}
        disabled={disabled}
        help={
          (fieldError || [])
            .map((error: FieldErrorType) => error.message)
            .join('. ') || field.props.help
        }
      />
    </>
  );
};

const TelephoneInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
}: any) => {
  const { disabled } = field;
  return (
    <>
      <InputTelephone
        {...field.props}
        onSelect={handleInputChange(field)}
        value={fieldValue}
        validateStatus={fieldError ? 'error' : undefined}
        disabled={disabled}
        help={
          (fieldError || [])
            .map((error: FieldErrorType) => error.message)
            .join('. ') || field.props.help
        }
      />
    </>
  );
};

const TimePickerInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
}: any) => {
  const { disabled } = field;
  return (
    <>
      <TimePicker
        {...field.props}
        value={fieldValue}
        onChange={handleInputChange(field)}
        validateStatus={fieldError ? 'error' : undefined}
        help={
          (fieldError || [])
            .map((error: FieldErrorType) => error.message)
            .join('. ') || field.props.help
        }
        disabled={disabled}
      />
    </>
  );
};

const RadioInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
}: any) => {
  const { disabled } = field;
  const items = (field.props.items || []).map((item: IVariables) => {
    if (fieldValue) {
      if (item.label === fieldValue) return { ...item, checked: true };
      return { ...item, checked: false };
    }
    return item;
  });
  return (
    <RadioGroup
      {...field.props}
      items={items}
      onChange={handleInputChange(field)}
      value={fieldValue}
      validateStatus={fieldError ? 'error' : undefined}
      disabled={disabled}
      help={
        (fieldError || [])
          .map((error: FieldErrorType) => error.message)
          .join('. ') || field.props.help
      }
    />
  );
};

const InputRange = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
}: any) => {
  const { disabled } = field;
  return (
    <RangeInput
      {...field.props}
      onChange={handleInputChange(field)}
      value={fieldValue}
      validateStatus={fieldError ? 'error' : undefined}
      disabled={disabled}
      help={
        (fieldError || [])
          .map((error: FieldErrorType) => error.message)
          .join('. ') || field.props.help
      }
    />
  );
};

const SelectInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
}: any) => {
  const { disabled } = field;

  return (
    <Select
      {...field.props}
      onChange={handleInputChange(field)}
      value={fieldValue}
      multi={field.multi || false}
      disabled={disabled}
      validateStatus={fieldError ? 'error' : undefined}
      help={
        (fieldError || [])
          .map((error: FieldErrorType) => error.message)
          .join('. ') || field.props.help
      }
    />
  );
};

const TextAreaInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
}: any) => {
  const { disabled } = field;
  return (
    <TextArea
      {...field.props}
      onChange={handleInputChange(field)}
      value={fieldValue}
      disabled={disabled}
      validateStatus={fieldError ? 'error' : undefined}
      help={
        (fieldError || [])
          .map((error: FieldErrorType) => error.message)
          .join('. ') || field.props.help
      }
    />
  );
};

const FileInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
}: any) => {
  const { disabled } = field;
  return (
    <FileUpload
      {...field.props}
      i18n={noop}
      disabled={disabled}
      validateStatus={fieldError ? 'error' : undefined}
      validationMessage={
        (fieldError || [])
          .map((error: FieldErrorType) => error.message)
          .join('. ') || field.props.validationMessage
      }
      files={fieldValue || []}
      onChange={handleInputChange(field)}
      onRemove={handleInputChange(field)}
    />
  );
};

const SliderInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
}: any) => {
  const { disabled } = field;
  return (
    <>
      <Slider
        {...field.props}
        onChange={handleInputChange(field)}
        value={fieldValue}
        validateStatus={fieldError ? 'error' : undefined}
        disabled={disabled}
        help={
          (fieldError || [])
            .map((error: FieldErrorType) => error.message)
            .join('. ') || field.props.help
        }
      />
    </>
  );
};

const Form = ({
  children,
  handleCancel,
  handleSubmit,
  handleBack,
  onSubmitLabel,
  onBackLabel,
  title,
  props,
  includeCancelButton,
  includeBackButton,
  btnSubmitArrow,
  btnBackArrow,
  formValid,
  defaultSubmitLabel,
  defaultBackLabel,
  defaultCancelLabel,
}: any) => {
  return (
    <div>
      <DlsForm
        backButton={
          includeBackButton
            ? {
                label: onBackLabel || defaultBackLabel,
                onClick: (e: React.FormEvent<HTMLFormElement>) => {
                  // eslint-disable-next-line no-unused-expressions
                  handleBack && isFunction(handleBack) && handleBack(e, props);
                },
                withArrow: btnBackArrow,
                alignIcon: btnBackArrow,
              }
            : undefined
        }
        submitButton={{
          label: onSubmitLabel || defaultSubmitLabel,
          onClick: (e: React.FormEvent<HTMLFormElement>) => {
            handleSubmit(e, props);
          },
          withArrow: btnSubmitArrow,
          alignIcon: btnSubmitArrow,
          disabled: !formValid,
        }}
        cancelLink={
          includeCancelButton
            ? {
                label: defaultCancelLabel,
                href: '',
                onClick: (e: React.FormEvent<HTMLFormElement>) => {
                  // eslint-disable-next-line no-unused-expressions
                  handleCancel &&
                    isFunction(handleCancel) &&
                    handleCancel(e, props);
                },
              }
            : undefined
        }
      >
        {children}
      </DlsForm>
    </div>
  );
};

const FieldGroup = ({ field, children, width }: any) => {
  return <div key={field.name}>{children}</div>;
};

const SectionForm = ({ title, children }: any) => {
  return null;
};

const Button = ({ field, handleInputChange }: any) => {
  return (
    <DlsButton {...field.props} aria-label="button-primary" size="small" />
  );
};

export {
  Button,
  CheckboxInput,
  CheckboxGroupInput,
  DatePickerInput,
  FieldGroup,
  FileInput,
  Form,
  Grid,
  InputRange,
  NumberInput,
  PasswordInput,
  RadioInput,
  SelectInput,
  SectionForm,
  TextInput,
  TelephoneInput,
  TextAreaInput,
  TimePickerInput,
  SliderInput,
};
