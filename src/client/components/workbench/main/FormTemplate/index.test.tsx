import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import * as formTest from './index';

const Form = formTest.FormTemplate;

describe('client/components/workbench/FormTemplate', () => {
  let props: any;

  beforeEach(() => {
    props = {
      definition: {
        props: { definitions: [], i18n: jest.fn(i => i) },
        sharedProps: [],
        i18n: jest.fn(i => i),
      },
      getSharedProps: () => ({}),
      match: {},
      location: {},
      i18n: jest.fn(i => i),
      description:
        '<p><strong>Hi there!</strong> We are always up for a chat</p>',
      title: 'Contact Us',
      formValues: 'formState',
      btnSubmitLabel: 'SUBMIT',
      includeCancelButton: true,
      btnCancelClick: jest.fn(),
      btnBackClick: jest.fn(),
      space: {
        marginBottom: 'xl',
      },
    };

    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener() {},
          removeListener() {},
        };
      };
  });

  it('renders with props', () => {
    const definitions: IVariables[] = [
      {
        componentId: 'vfY91y-ODkE340vZVyT4p',
        symbolTitle: 'Symbol 1',
        type: 'symbol',
        props: {
          symbol: 'JgpBHxD4m5CiRJUubYAiU',
        },
        layout: 'base',
      },
      {
        type: 'fieldset',
        props: {
          title: "i18n('basicInfo')",
          description:
            '<p>Please provide some basic information about yourself.</p>',
          children: [
            {
              rowTitle: 'Name',
              type: 'grid',
              props: {
                columns: 2,
                flexColumns: {
                  xl: 2,
                  lg: 2,
                  md: 1,
                },
              },
              children: [
                {
                  fieldTitle: 'First Name',
                  type: 'input',
                  props: {
                    label: 'First Name',
                    name: 'firstName',
                    isRequired: true,
                  },
                  layout: 'base',
                  columnIndex: 0,
                },
                {
                  fieldTitle: 'Last Name',
                  type: 'input',
                  props: {
                    label: 'Last Name',
                    name: 'lastName',
                  },
                  layout: 'base',
                  columnIndex: 1,
                },
              ],
            },
          ],
        },
        layout: 'base',
      },
      {
        rowTitle: 'Email & Phone',
        type: 'grid',
        props: {
          columns: 2,
          flexColumns: {
            xl: 2,
            lg: 2,
            md: 1,
          },
        },
        children: [
          {
            fieldTitle: 'Email',
            type: 'input',
            props: {
              label: 'Email Address',
              value: '',
              name: 'emailAddress',
              type: 'text',
              isRequiredFunc: () => true,
            },
            columnIndex: 0,
          },
          {
            fieldTitle: 'Phone',
            componentId: 'OE4E_FcfMXN-1uOCMnFjA',
            type: 'inputTelephone',
            props: {
              i18n: '',
              label: 'Phone',
              disabled: false,
              value: '',
              countries: [],
              defaultValue: {},
              name: 'phoneNumber',
            },
            layout: 'base',
            columnIndex: 1,
          },
        ],
      },
      {
        type: 'fieldset',
        props: {
          title: 'Personal Information',
          description:
            '<p>Please provide some personal information about yourself.</p>',
          children: [
            {
              rowTitle: 'Date of Birth and Age',
              type: 'grid',
              props: {
                columns: 2,
                flexColumns: {
                  xl: 2,
                  lg: 2,
                  md: 1,
                },
              },
              children: [
                {
                  fieldTitle: 'Date of Birth',
                  type: 'datePicker',
                  props: {
                    i18n: '',
                    value: '',
                    defaultValue: '',
                    label: 'Date of Birth',
                    name: 'dateOfBirth',
                    placeholder: 'Date of Birth',
                  },
                  columnIndex: 0,
                },
                {
                  fieldTitle: 'Age',
                  type: 'inputNumber',
                  props: {
                    uiType: 'horizontal',
                    label: 'Age',
                    max: 100,
                    min: 0,
                    step: 1,
                    precision: 0,
                    value: '',
                    name: 'age',
                  },
                  columnIndex: 1,
                },
              ],
            },
            {
              rowTitle: 'Gender & Country',
              type: 'grid',
              props: {
                columns: 2,
                flexColumns: {
                  xl: 2,
                  lg: 2,
                  md: 1,
                },
              },
              children: [
                {
                  fieldTitle: 'Gender',
                  type: 'radioGroup',
                  props: {
                    i18n: '',
                    items: [
                      {
                        name: 'Male',
                        id: 'Male',
                        label: 'Male',
                      },
                      {
                        name: 'Female',
                        id: 'Female',
                        label: 'Female',
                      },
                    ],
                    align: 'vertical',
                    groupLabel: 'Gender',
                  },
                  columnIndex: 0,
                },
                {
                  fieldTitle: 'Country',
                  type: 'select',
                  props: {
                    placeholder: '',
                    label: 'Country of Residence',
                    items: [
                      {
                        id: 'UAE',
                        label: 'UAE',
                        disabled: '',
                      },
                      {
                        id: 'USA',
                        label: 'USA',
                        disabled: '',
                      },
                      {
                        id: 'CANADA',
                        label: 'CANADA',
                        disabled: '',
                      },
                      {
                        id: 'AUSTRALIA',
                        label: 'AUSTRALIA',
                        disabled: '',
                      },
                      {
                        id: 'SINGAPORE',
                        label: 'SINGAPORE',
                        disabled: '',
                      },
                    ],
                    onChange: () => {},
                  },
                  columnIndex: 1,
                },
              ],
            },
          ],
        },
        layout: 'base',
      },
      {
        type: 'fieldset',
        props: {
          title: 'Company Information',
          description:
            '<p>Please provide some information about your company.</p>',
          children: [
            {
              rowTitle: 'Company Info',
              type: 'grid',
              props: {
                columns: 2,
                flexColumns: {
                  xl: 2,
                  lg: 2,
                  md: 1,
                },
              },
              layout: 'base',
              children: [
                {
                  fieldTitle: 'Company Name',
                  componentId: '6NBsLckVTJNOsMnFCElHz',
                  type: 'input',
                  props: {
                    label: 'Company Name',
                    name: 'companyName',
                  },
                  layout: 'base',
                  columnIndex: 0,
                },
                {
                  fieldTitle: 'Website',
                  type: 'input',
                  props: {
                    label: 'Website',
                    name: 'companyWebsite',
                  },
                  layout: 'base',
                  columnIndex: 1,
                },
              ],
            },
          ],
        },
        layout: 'base',
      },
      {
        type: 'fieldset',
        props: {
          title: 'Register with us',
          description:
            '<p>If you wish to register with us, please provide below information.</p>',
          children: [],
        },
        layout: 'base',
      },
      {
        rowTitle: 'Create Account Chk',
        type: 'grid',
        props: {
          columns: 2,
          flexColumns: {
            xl: 2,
            lg: 2,
            md: 1,
          },
        },
        layout: 'base',
        children: [
          {
            fieldTitle: 'Create Account Chk',
            type: 'checkbox',
            props: {
              name: 'chkCreateAccount',
              label: 'Do you want to create account with us ?',
              checked: false,
              space: {
                marginTop: '',
                marginBottom: 'md',
              },
            },
            layout: 'base',
            columnIndex: 0,
          },
        ],
      },
      {
        rowTitle: 'Account Details',
        type: 'grid',
        props: {
          columns: 2,
          flexColumns: {
            xl: 2,
            lg: 2,
            md: 1,
          },
        },
        layout: 'base',
        children: [
          {
            fieldTitle: 'Username',
            type: 'input',
            props: {
              label: 'User Name',
              name: 'userName',
              space: {
                marginTop: 'md',
                marginBottom: 'lg',
              },
              isVisibleFunc: () => true,
            },
            layout: 'base',
            columnIndex: 0,
          },
          {
            fieldTitle: 'Password',
            type: 'inputPassword',
            props: {
              label: 'Password',
              value: '',
              name: 'password',
              space: {
                marginTop: 'md',
              },
              isVisibleFunc: () => true,
            },
            layout: 'base',
            columnIndex: 1,
          },
          {
            fieldTitle: 'Age',
            type: 'inputNumber',
            props: {
              uiType: 'horizontal',
              label: 'Age',
              max: 100,
              min: 0,
              step: 1,
              precision: 0,
              value: '',
              name: 'age',
            },
            columnIndex: 1,
          },
        ],
      },
      {
        type: 'fieldset',
        props: {
          title: 'Other Information',
          description: '',
          children: [
            {
              rowTitle: 'Other Info',
              type: 'grid',
              props: {
                columns: 2,
                flexColumns: {
                  xl: 2,
                  lg: 2,
                  md: 1,
                },
              },
              layout: 'base',
              children: [
                {
                  fieldTitle: 'Description',
                  type: 'textArea',
                  props: {
                    label: 'What we can do for you ?',
                    value: '',
                    name: 'description',
                  },
                  layout: 'base',
                  columnIndex: 0,
                },
                {
                  fieldTitle: 'Some Time',
                  type: 'timePicker',
                  props: {
                    label: 'Time to contact',
                    placeholder: 'Time to Contact',
                    dateFormat: 'hh:mm a',
                  },
                  layout: 'base',
                  columnIndex: 1,
                },
              ],
            },
          ],
        },
        layout: 'base',
      },
      {
        name: 'noType2',
        label: 'Some text',
        type: 'component',
        component: () => {},
      },
      {
        name: 'noType3',
        label: 'Some text',
        type: 'section',
        fields: [
          {
            type: 'button',
            props: {
              name: 'noType4',
              label: 'Some text',
              type: 'button',
            },
          },
        ],
      },
      {
        type: 'button',
        props: {
          name: 'noType4',
          label: 'Some text',
          type: 'button',
        },
      },
      {
        name: 'noType4',
        label: 'Some text',
        type: 'wrong',
      },
      {
        type: 'checkboxGroup',
        props: {
          i18n: '',
          showMoreLabels: [],
          expanded: false,
          disabled: false,
          items: [
            {
              name: 'Item1',
              id: 'Item1',
              label: 'Item1',
            },
            {
              name: 'Item2',
              id: 'Item2',
              label: 'Item2',
            },
          ],
          align: 'vertical',
          groupLabel: '',
        },
      },
      {
        type: 'rangeInput',
        props: {
          value: [],
          label: '',
          disabled: false,
          size: 'default',
          validateStatus: null,
          help: '',
          from: '',
          to: '',
        },
      },
      {
        type: 'fileUpload',
        props: {
          multiple: false,
          validateStatus: '',
          validationMessage: '',
          help: '',
          disabled: false,
          label: '',
          accept: [],
          files: [],
          removeAriaLabel: 'file-remove-button',
          uploadAriaLabel: 'file-upload',
          removeAcceptForIOS: false,
          i18n: '',
        },
      },
      {
        type: 'button',
        props: {
          locale: 'en',
          label: 'ddd',
          type: 'button',
          uiType: 'primary',
          disabled: false,
          'aria-label': 'button',
          size: 'default',
          icon: null,
          alignIcon: 'end',
          withArrow: false,
          active: false,
          hidden: false,
          iconTooltip: '',
          applyAutoWidth: false,
        },
      },
    ];

    props = {
      ...props,
      definition: {
        ...props.definition,
        i18n: jest.fn(i => i),
        props: {
          ...props.definition.props,
          definitions: [...props.definition.props.definitions, ...definitions],
          i18n: jest.fn(i => i),
        },
      },
      i18n: jest.fn(i => i),
    };

    const wrapper = mount(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Form {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with btnSubmit', () => {
    const definitions: IVariables[] = [
      {
        rowTitle: 'Account Details',
        type: 'grid',
        props: {
          columns: 2,
          flexColumns: {
            xl: 2,
            lg: 2,
            md: 1,
          },
        },
        layout: 'base',
        children: [
          {
            fieldTitle: 'Username',
            type: 'input',
            props: {
              label: 'User Name',
              name: 'userName',
              space: {
                marginTop: 'md',
                marginBottom: 'lg',
              },
            },
            layout: 'base',
            columnIndex: 0,
          },
          {
            fieldTitle: 'Password',
            type: 'inputPassword',
            props: {
              label: 'Password',
              value: '',
              name: 'password',
              space: {
                marginTop: 'md',
              },
            },
            layout: 'base',
            columnIndex: 1,
          },
        ],
      },
    ];
    props.definition.props.definitions = definitions;
    const wrapper = mount(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Form
              form={props}
              btnSubmitClick={(formValues: IVariables) => {
                console.info('formValues', formValues);
              }}
              {...props}
            />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(wrapper.exists()).toBe(true);
    setTimeout(() => {
      const form = wrapper.find('form').first();
      form.simulate('submit');
    }, 500);
  });

  describe('isVisibleField', () => {
    it('should return true when field props is not passed', async () => {
      const field = {
        type: 'radio',
      };
      const formData = {
        name: 'value',
      };
      const customSharedProps = {};
      const result = await formTest.formActions.isVisibleField(
        field,
        formData,
        customSharedProps,
      );
      expect(result).toBe(true);
    });

    it('should return true when field props is not passed', async () => {
      const field = {
        type: 'radio',
        props: {
          name: 'name',
          type: 'radio',
          isVisibleFunc: undefined,
        },
      };
      const formData = {
        name: 'value',
      };
      const customSharedProps = {};
      const result = await formTest.formActions.isVisibleField(
        field,
        formData,
        customSharedProps,
      );
      expect(result).toBe(true);
    });

    it('should return true when field isVisibleFunc return true', async () => {
      const field = {
        props: {
          name: 'name',
          type: 'radio',
          isVisibleFunc: () => true,
        },
      };
      const formData = {
        name: 'value',
      };
      const customSharedProps = {};
      const result = await formTest.formActions.isVisibleField(
        field,
        formData,
        customSharedProps,
      );
      expect(result).toBe(true);
    });
    it('should return false when field isVisibleFunc return false', async () => {
      const field = {
        props: {
          name: 'name',
          type: 'radio',
          isVisibleFunc: () => false,
        },
      };
      const formData = {
        name: 'value',
      };
      const customSharedProps = {};
      const result = await formTest.formActions.isVisibleField(
        field,
        formData,
        customSharedProps,
      );
      expect(result).toBe(false);
    });
    it('should return true when field isVisibleFunc return true', async () => {
      const field = {
        props: {
          name: 'name',
          type: 'radio',
          isVisibleFunc: () => true,
        },
      };
      const formData = {
        name: 'value',
      };
      const customSharedProps = {};
      const result = await formTest.formActions.isVisibleField(
        field,
        formData,
        customSharedProps,
      );
      expect(result).toBe(true);
    });
  });

  describe('getVisibleFields', () => {
    it('should return 1  visible fields when field visible return true', async () => {
      const fields = [
        {
          props: {
            name: 'name',
            type: 'radio',
            isVisibleFunc: async () => true,
            children: [
              {
                props: {
                  name: 'name',
                  type: 'radio',
                  isVisibleFunc: async () => true,
                },
              },
            ],
          },
        },
        {
          props: {
            name: 'name',
            type: 'radio',
            isVisibleFunc: async () => false,
          },
          children: [
            {
              props: {
                name: 'name',
                type: 'radio',
                isVisibleFunc: async () => true,
              },
            },
          ],
        },
      ];
      const formData = {
        name: 'value',
      };
      const customSharedProps = {};
      const result = await formTest.formActions.getVisibleFields(
        fields,
        formData,
        customSharedProps,
      );
      expect(result.length).toEqual(1);
    });

    it('should return 2  visible fields when field visible return true and sub fields', async () => {
      const fields = [
        {
          fieldTitle: 'Username',
          type: 'input',
          props: {
            label: 'User Name',
            name: 'userName',
            space: {
              marginTop: 'md',
              marginBottom: 'lg',
            },
            isVisibleFunc: () => true,
          },
          layout: 'base',
          columnIndex: 0,
        },
        {
          fieldTitle: 'Password',
          type: 'inputPassword',
          props: {
            label: 'Password',
            value: '',
            name: 'password',
            space: {
              marginTop: 'md',
            },
            isVisibleFunc: () => true,
          },
          layout: 'base',
          columnIndex: 1,
        },
      ];
      const formData = {
        name: 'value',
      };
      const customSharedProps = {};
      const result = await formTest.formActions.getVisibleFields(
        fields,
        formData,
        customSharedProps,
      );
      expect(result.length).toEqual(2);
    });
  });

  describe('checkFieldRequiredErrors', () => {
    it('should return false if field props is not passed ', async () => {
      const field = {
        fieldTitle: 'Username',
        type: 'input',
      };
      const value = '';
      const formData = {};
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldValidationErrors(
        field,
        value,
        formData,
        customSharedProps,
      );
      expect(result).toEqual(false);
    });

    it('should return false if isRequiredFunc and isRequired condition is not present ', async () => {
      const field = {
        fieldTitle: 'Username',
        type: 'input',
        props: {
          label: 'User Name',
          name: 'userName',
        },
      };
      const value = '';
      const formData = {};
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldValidationErrors(
        field,
        value,
        formData,
        customSharedProps,
      );
      expect(result).toEqual(false);
    });

    it('should return array of object with error message  if value is not passed and isRequiredFunc not function', async () => {
      const field = {
        fieldTitle: 'Username',
        type: 'input',
        props: {
          label: 'User Name',
          name: 'userName',
          isRequiredFunc: '',
          isRequired: true,
        },
      };
      const value = '';
      const formData = {};
      const i18n = jest.fn(i => i);
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldValidationErrors(
        field,
        value,
        formData,
        customSharedProps,
        i18n,
      );
      expect(result).toEqual([{ message: 'form.error.required' }]);
    });

    it('should return array of object with error message  if value is not passed and isRequiredFunc is true', async () => {
      const field = {
        fieldTitle: 'Username',
        type: 'input',
        props: {
          label: 'User Name',
          name: 'userName',
          isRequiredFunc: () => true,
        },
      };
      const value = '';
      const formData = {};
      const i18n = jest.fn(i => i);
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldValidationErrors(
        field,
        value,
        formData,
        customSharedProps,
        i18n,
      );
      expect(result).toEqual([{ message: 'form.error.required' }]);
    });

    it('should return array of object with error message  if value is not passed and isRequired is true', async () => {
      const field = {
        fieldTitle: 'Username',
        type: 'input',
        props: {
          label: 'User Name',
          name: 'userName',
          isRequired: true,
        },
      };
      const value = '';
      const formData = {};
      const i18n = jest.fn(i => i);
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldValidationErrors(
        field,
        value,
        formData,
        customSharedProps,
        i18n,
      );
      expect(result).toEqual([{ message: 'form.error.required' }]);
    });

    it('should return false if isRequiredFunc is false', async () => {
      const field = {
        fieldTitle: 'Username',
        type: 'input',
        props: {
          label: 'User Name',
          name: 'userName',
          isRequiredFunc: () => false,
        },
      };
      const value = '';
      const formData = {};
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldValidationErrors(
        field,
        value,
        formData,
        customSharedProps,
      );
      expect(result).toEqual(false);
    });

    it('should return false if isRequired is false', async () => {
      const field = {
        fieldTitle: 'Username',
        type: 'input',
        props: {
          label: 'User Name',
          name: 'userName',
          isRequired: false,
        },
      };
      const value = '';
      const formData = {};
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldValidationErrors(
        field,
        value,
        formData,
        customSharedProps,
      );
      expect(result).toEqual(false);
    });

    it('should return false if valid value', async () => {
      const field = {
        type: 'inputTelephone',
        props: {
          label: 'Phone Number 1',
          name: 'phoneNumber1',
          isValidFunc: () => ['phone'],
        },
      };
      const value = '971558282854';
      const formData = {
        phoneNumber1: '971558282854',
      };
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldValidationErrors(
        field,
        value,
        formData,
        customSharedProps,
      );
      expect(result).toEqual(false);
    });
  });

  describe('checkFieldValidationErrors', () => {
    it('should return array of object with error message  if invalid value', async () => {
      const field = {
        type: 'inputTelephone',
        props: {
          label: 'Phone Number 1',
          name: 'phoneNumber1',
          isValidFunc: () => ['phone'],
        },
      };
      const value = 'asdf';
      const formData = {
        name: 'asdf',
      };
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldValidationErrors(
        field,
        value,
        formData,
        customSharedProps,
      );
      expect(result).toEqual([{ message: 'This should be phone' }]);
    });

    it('should return array of object with error message  if isValidFunc return false', async () => {
      const field = {
        props: {
          name: 'name',
          type: 'radio',
          isValidFunc: () => {
            return { valid: false, message: 'Field is not valid' };
          },
        },
      };
      const value = 'asdf';
      const formData = {
        name: 'asdf',
      };
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldValidationErrors(
        field,
        value,
        formData,
        customSharedProps,
      );
      expect(result).toEqual([{ valid: false, message: 'Field is not valid' }]);
    });

    it('should return array of object with error message  if isValid is false', async () => {
      const field = {
        props: {
          name: 'name',
          type: 'radio',
          isValid: false,
        },
      };
      const value = 'asdf';
      const formData = {
        name: 'asdf',
      };
      const i18n = jest.fn(i => i);
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldValidationErrors(
        field,
        value,
        formData,
        customSharedProps,
        i18n,
      );
      expect(result).toEqual([{ message: 'form.error.invalid' }]);
    });

    it('should return false if valid value', async () => {
      const field = {
        type: 'inputTelephone',
        props: {
          label: 'Phone Number 1',
          name: 'phoneNumber1',
          isValidFunc: () => ['phone'],
        },
      };
      const value = '971558282854';
      const formData = {
        name: '971558282854',
      };
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldValidationErrors(
        field,
        value,
        formData,
        customSharedProps,
      );
      expect(result).toEqual(false);
    });
  });

  describe('getFormSubmithandler', () => {
    beforeEach(() => {
      jest.resetModules();
    });
    it('should validate field -> if errors setErrors', async () => {
      const fields = [
        {
          type: 'inputTelephone',
          props: {
            label: 'Phone Number 1',
            name: 'phoneNumber1',
            isValidFunc: () => ['phone'],
          },
        },
      ];
      const formData = { phoneNumber1: 'abc' };
      const setFieldErrors = jest.fn(data => data);
      props = {
        btnSubmitClick: jest.fn(),
      };
      const event = {
        preventDefault: jest.fn(),
      };
      const customProps = {
        i18n: {},
        history: {},
      };
      const customSharedProps = {};
      await formTest.formActions.getFormSubmithandler(
        fields,
        formData,
        setFieldErrors,
        props.btnSubmitClick,
        customProps,
        customSharedProps,
      )(event);
      expect(setFieldErrors.mock.calls[0][0]()).toEqual({
        phoneNumber1: [{ message: 'This should be phone' }],
      });
    });
    it('should call event preventdefault', async () => {
      const fields = [
        {
          type: 'inputTelephone',
          props: {
            label: 'Phone Number 1',
            name: 'phoneNumber1',
            isValidFunc: () => ['phone'],
          },
        },
      ];
      const formData = { phoneNumber1: 'abc' };
      const setFieldErrors = jest.fn(data => data);
      props = {
        btnSubmitClick: jest.fn(),
      };
      const event = {
        preventDefault: jest.fn(),
      };
      const customProps = {
        i18n: {},
        history: {},
      };
      const customSharedProps = {};
      await formTest.formActions.getFormSubmithandler(
        fields,
        formData,
        setFieldErrors,
        props.btnSubmitClick,
        customProps,
        customSharedProps,
      )(event);
      expect(event.preventDefault).toBeCalled();
    });
    it('should call the button submit callback if no error', async () => {
      const fields = [
        {
          type: 'inputTelephone',
          props: {
            label: 'Phone Number 1',
            name: 'phoneNumber1',
            isValidFunc: () => ['phone'],
          },
        },
      ];
      const formData = { phoneNumber1: '971558282854' };
      const setFieldErrors = jest.fn(data => data);
      props = {
        btnSubmitClick: jest.fn(),
        history: {},
        i18n: {},
      };
      const event = {
        preventDefault: jest.fn(),
      };

      const customProps = {
        i18n: {},
        history: {},
      };
      const customSharedProps = {};
      await formTest.formActions.getFormSubmithandler(
        fields,
        formData,
        setFieldErrors,
        props.btnSubmitClick,
        customProps,
        customSharedProps,
      )(event, props);
      expect(props.btnSubmitClick.mock.calls[0][0]).toEqual({
        history: {},
        i18n: {},
      });
    });
  });

  describe('checkFieldsValidationErrors', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      jest.resetAllMocks();
      jest.restoreAllMocks();
    });
    it('should return array of object with error message  if invalid value', async () => {
      const fields = [
        {
          type: 'inputTelephone',
          props: {
            label: 'Phone Number 1',
            name: 'phoneNumber1',
            isValidFunc: () => ['phone'],
          },
        },
        {
          type: 'inputTelephone',
          props: {
            label: 'Phone Number 2',
            name: 'phoneNumber2',
            isValidFunc: () => ['phone'],
          },
        },
      ];
      const formData = {
        phoneNumber1: 'value',
        phoneNumber2: 'value',
      };
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldsValidationErrors(
        fields,
        formData,
        customSharedProps,
      );
      expect(result).toEqual({
        phoneNumber1: [{ message: 'This should be phone' }],
        phoneNumber2: [{ message: 'This should be phone' }],
      });
    });
    it('should return array of object with error message  if invalid value for children', async () => {
      const fields = [
        {
          type: 'inputTelephone',
          props: {
            label: 'Phone Number 1',
            name: 'phoneNumber1',
            isValidFunc: () => ['phone'],
            children: [
              {
                type: 'inputTelephone',
                props: {
                  label: 'Phone Number 2',
                  name: 'phoneNumber2',
                  isValidFunc: () => ['phone'],
                },
              },
            ],
          },
        },
      ];
      const formData = {
        phoneNumber1: 'value',
        phoneNumber2: 'value',
      };
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldsValidationErrors(
        fields,
        formData,
        customSharedProps,
      );
      expect(result).toEqual({
        phoneNumber1: [{ message: 'This should be phone' }],
        phoneNumber2: [{ message: 'This should be phone' }],
      });
    });
    it('should return false  if there is no error', async () => {
      const fields = [
        {
          type: 'inputTelephone',
          props: {
            label: 'Phone Number 1',
            name: 'phoneNumber1',
            isValidFunc: () => ['phone'],
          },
        },
        {
          type: 'inputTelephone',
          props: {
            label: 'Phone Number 2',
            name: 'phoneNumber2',
            isValidFunc: () => ['phone'],
          },
        },
      ];
      const formData = {
        phoneNumber1: '971558282854',
        phoneNumber2: '971558342854',
      };
      const customSharedProps = {};
      const result = await formTest.formActions.checkFieldsValidationErrors(
        fields,
        formData,
        customSharedProps,
      );
      expect(result).toEqual(false);
    });
  });

  describe('getInputChangeHandler', () => {
    let inputChangeHandler: any;
    let setFieldErrors: any;
    let field: any;

    beforeEach(() => {
      field = {
        name: 'field',
        type: 'input',
      };
      setFieldErrors = () => {};
      props = {
        // formValues: {},
      };
      inputChangeHandler = (event: any) =>
        formTest.formActions.getInputChangeHandler(
          setFieldErrors,
          props,
        )(field)(event);
    });

    it('should call form onChange with object values of input if field is  checkbox', () => {
      field = {
        type: 'checkbox',
        props: {
          onChange: jest.fn(),
        },
      };
      const event = {
        persist: () => {},
        target: {
          value: 'value2',
          checked: true,
        },
      };
      inputChangeHandler(event);
      expect(field.props.onChange).toBeCalledWith(true);
    });

    it('should call form onChange with value of input if field is  input', () => {
      field = {
        type: 'input',
        props: {
          onChange: jest.fn(),
        },
      };
      const event = {
        persist: () => {},
        target: {
          value: 'value2',
        },
      };
      inputChangeHandler(event);
      expect(field.props.onChange).toBeCalledWith('value2');
    });

    it('should call form onChange immediately with value of input if field is input', () => {
      field = {
        type: 'input',
        props: {
          // eslint-disable-next-line camelcase
          onChange: function call_onChange() {
            return jest.fn();
          },
        },
      };
      const event = {
        persist: () => {},
        target: {
          value: 'value2',
        },
      };
      inputChangeHandler(event);
      expect(field.props.onChange().mock.calls).toEqual([]);
    });
  });

  describe('handleCancelButton', () => {
    it('should call the cancel button', () => {
      const formData = { phoneNumber1: '971558282854' };
      const btnCancelClick = jest.fn();
      props = {
        btnCancelClick: jest.fn(),
        history: {},
        i18n: {},
      };
      formTest.formActions.cancelHandler(btnCancelClick, props, formData);
      expect(btnCancelClick.mock.calls).toEqual([]);
    });
  });
});
