import React from 'react';
import Button from '@tamm/ui-lib-v2-button';
// import Checkbox from '@tamm/ui-lib-v2-checkbox';
// import DatePicker from '@tamm/ui-lib-v2-date-picker';
import Form from '@tamm/ui-lib-v2-form';
import Input from '@tamm/ui-lib-v2-input';
import Label from '@tamm/ui-lib-v2-label';
import Select from '@tamm/ui-lib-v2-select';
// import moment from 'moment';
import RadioGroup from '@tamm/ui-lib-v2-radio-group';
import Container from 'client/containers';
import { SelectItemType, FieldErrorType } from '../Types';

const FieldErrorMessage = ({
  fieldErrors,
  i18n,
}: {
  fieldErrors: FieldErrorType[];
  i18n: Function;
}): any => {
  return fieldErrors
    ? fieldErrors.map((error: FieldErrorType) => (
        <span style={{ color: '#ae1f23' }}>{i18n(error.message)}</span>
      ))
    : '';
};

const CheckboxInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
  i18n,
}: any) => {
  // const { disabled } = field;

  return (
    <>
      {/* {field.label && <Label>{field.label}</Label>} */}
      {Array.isArray(field.options) &&
        field.options.map((option: any) => (
          // <BsForm.Check
          //   type="checkbox"
          //   label={option.label}
          // onChange={handleInputChange(field)}
          // name={field.name}
          // value={option.value}
          // disabled={disabled}
          // checked={fieldValue && fieldValue[option.value]}
          //   isInvalid={!!fieldError}
          // />
          // <Checkbox
          //   label={i18n(field.label)}
          //   onChange={handleInputChange(field)}
          //   name={field.name}
          //   value={option.value}
          //   disabled={disabled}
          //   checked={fieldValue && fieldValue[option.value]}
          // />
          <div>checkbox</div>
        ))}
      <FieldErrorMessage fieldErrors={fieldError} i18n={i18n} />
    </>
  );
};

const RadioInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
  i18n,
  questionnaire,
}: any) => {
  const { disabled } = field;
  const label = () => {
    if (questionnaire && field.title) {
      return <div className="questionnaire__label">{i18n(field.title)}</div>;
    }
    return field.label && <Label>{i18n(field.label)}</Label>;
  };
  return (
    <div style={{ marginBottom: questionnaire && '3rem' }}>
      {label()}
      <RadioGroup i18n={i18n} align={field.align} uiType={field.uiType}>
        {field.options.map((option: any) => (
          <RadioGroup.Radio
            label={i18n(option.label)}
            onChange={handleInputChange(field)}
            name={option.label}
            value={option.value}
            disabled={disabled}
            checked={option.value === fieldValue}
            description={option.description && i18n(option.description)}
          />
        ))}
      </RadioGroup>
      <FieldErrorMessage fieldErrors={fieldError} i18n={i18n} />
    </div>
  );
};

const SelectInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
  i18n,
}: any) => {
  const { disabled } = field;
  const items = field.options.map((option: SelectItemType) => ({
    id: option.value,
    label: i18n(option.label),
  }));

  return (
    <>
      {/* <BsForm.Control
        as={field.type}
        name={field.name}
        value={fieldValue}
        onChange={handleInputChange(field)}
        disabled={disabled}
        isInvalid={!!fieldError}
      >
        {field.options &&
          field.options.map((option: SelectItemType) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        <FieldErrorMessage fieldErrors={fieldError} />
      </BsForm.Control> */}
      <Select
        label={i18n(field.label)}
        placeholder={i18n(field.placeholder)}
        onChange={handleInputChange(field)}
        items={items}
        disabled={disabled}
      />
      <FieldErrorMessage fieldErrors={fieldError} i18n={i18n} />
    </>
  );
};

const TextAreaInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
  i18n,
}: any) => {
  // const { disabled } = field;
  return (
    <>
      <Label>{i18n(field.label)}</Label>
      <div>Text area</div>
      <FieldErrorMessage fieldErrors={fieldError} i18n={i18n} />
    </>
  );
};

const TextInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
  i18n,
  questionnaire,
}: any) => {
  const { disabled } = field;
  const questionnaireField = () => {
    return fieldError ? (
      <div className="questionnaire__field-error">
        <FieldErrorMessage fieldErrors={fieldError} i18n={i18n} />
      </div>
    ) : (
      <div style={{ marginBottom: '4rem' }} />
    );
  };
  return (
    <>
      {questionnaire && field.title && (
        <div className="questionnaire__label">{i18n(field.title)}</div>
      )}
      {/* <Label>{field.label}</Label> */}
      {/* <BsForm.Control
        as={field.type}
        placeholder={field.placeholder}
        onChange={handleInputChange(field)}
        name={field.name}
        value={fieldValue}
        disabled={!!disabled}
        isInvalid={!!fieldError}
      /> */}
      <Input
        label={i18n(field.label)}
        aria-label="input-text"
        placeholder={i18n(field.placeholder)}
        onChange={handleInputChange(field)}
        value={fieldValue}
        disabled={!!disabled}
        validateStatus={fieldError ? 'error' : undefined}
      />
      {questionnaire ? (
        questionnaireField()
      ) : (
        <FieldErrorMessage fieldErrors={fieldError} i18n={i18n} />
      )}
    </>
  );
};

const DateInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
  i18n,
}: any) => {
  // const { disabled } = field;
  return (
    <>
      {/* {field.label && <Label>{field.label}</Label>} */}
      {/* {console.log('fieldValuesCheck', field, 'value', fieldValue)} */}
      {/* <input
        type="date"
        name={field.name}
        value={fieldValue}
        onChange={handleInputChange(field)}
        // onChhange={e => console.log("BS_DATE", e)}
        disabled={!!disabled}
      /> */}
      {field.label && <Label>{i18n(field.label)}</Label>}
      {/* <DatePicker
        name={field.name}
        value={fieldValue && moment(fieldValue)}
        onChange={handleInputChange(field)}
        disabled={!!disabled}
      /> */}
      <div>Date picker</div>
      <FieldErrorMessage fieldErrors={fieldError} i18n={i18n} />
    </>
  );
};

const FileInput = ({
  field,
  fieldValue,
  fieldError,
  handleInputChange,
  i18n,
}: any) => {
  const { disabled } = field;
  return (
    <>
      {field.label && <Label>{i18n(field.label)}</Label>}
      <input
        type="file"
        name={field.name}
        value={fieldValue}
        onChange={handleInputChange(field)}
        disabled={!!disabled}
      />
      <FieldErrorMessage fieldErrors={fieldError} i18n={i18n} />
    </>
  );
};

const customForm = ({
  children,
  handleCancel,
  handleSubmit,
  handleBack,
  onSubmitLabel,
  title,
  twoColumns,
  props,
}: any) => {
  const customBack = {
    label: props.i18n('common.back'),
    onClick: () => handleBack(),
    // onClick: handleCancel ? cancel : undefined,
    uiType: 'secondary',
    alignIcon: 'start',
    withArrow: true,
  };

  return (
    <div className="p-4">
      <Form
        submitButton={{
          label: props.i18n(onSubmitLabel),
          withArrow: true,
          onClick: (e: React.FormEvent<HTMLFormElement>) => {
            handleSubmit(e, props);
          },
        }}
        backButton={handleBack && customBack}
      >
        <Form.Fieldset title={title} twoColumns={twoColumns}>
          {children}
        </Form.Fieldset>
      </Form>
      <button
        type="button"
        className={`questionnaire__cancel-button questionnaire__form-${
          handleBack ? `button` : `button-single`
        }`}
        onClick={() => handleCancel()}
      >
        {props.i18n('common.cancel')}
      </button>
    </div>
  );
};

const FieldGroup = ({ field, children, width }: any) => {
  return <div>{children}</div>;
};

const SectionForm = ({ title, twoColumns, children, i18n }: any) => {
  return (
    <Form.Fieldset title={i18n(title)} twoColumns={twoColumns}>
      {children}
    </Form.Fieldset>
  );
};

const customButton = ({ field, handleInputChange, i18n }: any) => {
  return (
    <>
      <Button
        aria-label="button-primary"
        size="small"
        label={i18n(field.label)}
        onClick={field.onClick}
      />
    </>
  );
};

export {
  Container,
  customForm as Form,
  FieldGroup,
  customButton as Button,
  CheckboxInput,
  RadioInput,
  TextAreaInput,
  TextInput,
  DateInput,
  SelectInput,
  SectionForm,
  FileInput,
  FieldErrorMessage,
};
