import React from 'react';
import {
  CheckboxInput,
  CheckboxGroupInput,
  DatePickerInput,
  TextInput,
  NumberInput,
  PasswordInput,
  TelephoneInput,
  TimePickerInput,
  RadioInput,
  InputRange,
  SelectInput,
  TextAreaInput,
  FileInput,
  Form,
  FieldGroup,
  SectionForm,
  Button,
} from './index';

describe('Html', () => {
  it('CheckboxInput', () => {
    const wrapper = CheckboxInput({
      field: {
        props: {
          label: 'label',
        },
      },
      fieldValue: {},
      fieldError: [],
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('CheckboxGroupInput', () => {
    const wrapper = CheckboxGroupInput({
      field: {
        props: {
          groupLabel: 'label',
        },
      },
      fieldValue: {},
      fieldError: [],
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('DatePickerInput', () => {
    const wrapper = DatePickerInput({
      field: {
        props: {
          label: 'label',
        },
      },
      fieldValue: {},
      fieldError: [{ message: 'This is required' }],
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('TextInput', () => {
    const wrapper = TextInput({
      field: {
        props: {
          label: 'label',
        },
      },
      fieldValue: {},
      fieldError: [{ message: 'This is required' }],
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('NumberInput', () => {
    const wrapper = NumberInput({
      field: {
        props: {
          label: 'label',
        },
      },
      fieldValue: {},
      fieldError: [{ message: 'This is required' }],
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('PasswordInput', () => {
    const wrapper = PasswordInput({
      field: {
        props: {
          label: 'label',
        },
      },
      fieldValue: {},
      fieldError: [{ message: 'This is required' }],
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('TelephoneInput', () => {
    const wrapper = TelephoneInput({
      field: {
        props: {
          label: 'label',
        },
      },
      fieldValue: {},
      fieldError: [{ message: 'This is required' }],
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('TimePickerInput', () => {
    const wrapper = TimePickerInput({
      field: {
        props: {
          label: 'label',
        },
      },
      fieldValue: {},
      fieldError: [{ message: 'This is required' }],
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('RadioInput', () => {
    const wrapper = RadioInput({
      field: {
        props: {
          groupLabel: 'label',
        },
      },
      fieldValue: {},
      fieldError: [{ message: 'This is required' }],
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('InputRange', () => {
    const wrapper = InputRange({
      field: {
        props: {
          label: 'label',
        },
      },
      fieldValue: {},
      fieldError: [{ message: 'This is required' }],
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('SelectInput', () => {
    const wrapper = SelectInput({
      field: {
        props: {
          label: 'label',
        },
      },
      fieldValue: {},
      fieldError: [{ message: 'This is required' }],
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('TextAreaInput', () => {
    const wrapper = TextAreaInput({
      field: {
        props: {
          label: 'label',
        },
      },
      fieldValue: {},
      fieldError: [{ message: 'This is required' }],
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('FileInput', () => {
    const wrapper = FileInput({
      field: {
        label: 'label',
      },
      fieldValue: {},
      fieldError: [{ message: 'This is required' }],
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('Form', () => {
    const wrapper = Form({
      children: <div />,
      handleCancel: () => {},
      handleSubmit: () => {},
      onSubmitLabel: 'SUBMIT',
      title: 'title',
      props: {},
      includeCancelButton: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('FieldGroup', () => {
    const wrapper = FieldGroup({
      field: {
        name: 'name',
      },
      children: <div />,
      width: '',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('SectionForm', () => {
    const wrapper = SectionForm({
      title: 'title',
      children: <div />,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('Button', () => {
    const wrapper = Button({
      field: {
        props: {
          label: 'label',
          onClick: () => {},
        },
      },
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });
});
