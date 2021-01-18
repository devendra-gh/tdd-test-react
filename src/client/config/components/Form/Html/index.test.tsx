import {
  Form,
  CheckboxInput,
  RadioInput,
  TextAreaInput,
  TextInput,
  DateInput,
  SelectInput,
  FieldErrorMessage,
  FileInput,
} from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Html', () => {
  it('FieldErrorMessage', () => {
    const wrapper = FieldErrorMessage({
      fieldErrors: [{ message: 'error' }],
      i18n: jest.fn(i => i),
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('FieldErrorMessage empty fieldErrors', () => {
    const wrapper = FieldErrorMessage({
      // @ts-ignore
      fieldErrors: undefined,
      i18n: jest.fn(i => i),
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('CheckboxInput', () => {
    const wrapper = CheckboxInput({
      field: {
        label: 'label',
        options: [
          {
            label: 'label',
            value: 'value',
          },
        ],
      },
      fieldValue: {},
      fieldError: {},
      handleInputChange: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('SelectInput', () => {
    const wrapper = SelectInput({
      field: {
        label: 'label',
        options: [
          {
            label: 'label',
            value: 'value',
          },
        ],
      },
      fieldValue: {},
      fieldError: {},
      handleInputChange: () => {},
      i18n: jest.fn(),
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('RadioInput', () => {
    const wrapper = RadioInput({
      field: {
        label: 'label',
        title: 'title',
        options: [
          {
            label: 'label',
            value: 'value',
            description: 'description',
          },
        ],
      },
      fieldValue: {},
      fieldError: {},
      handleInputChange: () => {},
      i18n: jest.fn(),
      questionnaire: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('RadioInput else', () => {
    const wrapper = RadioInput({
      field: {
        label: 'label',
        options: [
          {
            label: 'label',
            value: 'value',
            description: 'description',
          },
        ],
      },
      fieldValue: {},
      fieldError: {},
      handleInputChange: () => {},
      i18n: jest.fn(),
      questionnaire: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('TextAreaInput', () => {
    const wrapper = TextAreaInput({
      field: {
        label: 'label',
      },
      fieldValue: {},
      fieldError: {},
      handleInputChange: () => {},
      i18n: jest.fn(),
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('DateInput', () => {
    const wrapper = DateInput({
      field: {
        label: 'label',
      },
      fieldValue: {},
      fieldError: {},
      handleInputChange: () => {},
      i18n: jest.fn(),
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should properly call TextInput', () => {
    const wrapper = TextInput({
      field: {
        label: 'label',
        title: 'title',
        options: [
          {
            label: 'label',
            value: 'value',
            description: 'description',
          },
        ],
      },
      fieldValue: {},
      fieldError: true,
      handleInputChange: () => {},
      i18n: jest.fn(),
      questionnaire: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should properly call TextInput questionnaire false', () => {
    const wrapper = TextInput({
      field: {
        label: 'label',
        options: [
          {
            label: 'label',
            value: 'value',
            description: 'description',
          },
        ],
      },
      fieldValue: {},
      fieldError: false,
      handleInputChange: () => {},
      i18n: jest.fn(),
      questionnaire: false,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should properly call TextInput fieldError false', () => {
    const wrapper = TextInput({
      field: {
        label: 'label',
        options: [
          {
            label: 'label',
            value: 'value',
            description: 'description',
          },
        ],
      },
      fieldValue: {},
      fieldError: false,
      handleInputChange: () => {},
      i18n: jest.fn(),
      questionnaire: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should properly call FileInput', () => {
    const wrapper = FileInput({
      field: {
        label: 'label',
        options: [
          {
            label: 'label',
            value: 'value',
            description: 'description',
          },
        ],
      },
      fieldValue: {},
      fieldError: false,
      handleInputChange: () => {},
      i18n: jest.fn(),
      questionnaire: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should properly call Form', () => {
    const wrapper = Form({
      handleBack: true,
      props: { i18n: jest.fn() },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should properly call Form handleBack false', () => {
    const wrapper = Form({
      handleBack: false,
      props: { i18n: jest.fn() },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
