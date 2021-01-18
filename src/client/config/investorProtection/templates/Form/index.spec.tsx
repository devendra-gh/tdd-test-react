import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IVariables } from '@tamm/app-composer';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Form from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Templates/Form', () => {
  let props: any;

  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    props = {
      match: {},
      location: {},
      i18n: (key: string) => key,
      locale: 'en',
      currentStep: 'test',
      currentSubStep: 'test',
      steps: [],
      stepsStatus: 'test',
      form: {
        documents: {},
        name: 'Test',
        secondName: 'test',
        middleName: 'test',
        lastName: 'test',
        email: 'test@test.com',
        mobilePhone: '+971 522267839',
        caseType: '1',
        location: 'abuDhabi',
        'defendant.caseDescription': 'This is a test case description',
        'defendant.name': 'Amna',
        'establishment.name': 'TAMM',
        'establishment.phoneNumber': '+971 522267839',
        'establishment.location': 'Abu Dhabi',
        userType: '1',
      },
      startShowingError: true,
      subTitle: 'Select Service Type',
      description: 'test',
      getOthersFileGroups: jest.fn(),
      getFileGroups: jest.fn(),
      onSubmit: jest.fn(),
      onBack: jest.fn(),
      onChange: jest.fn(),
      validate: jest.fn(() => true),
      actions: {
        validation: {
          reset: jest.fn(),
        },
      },
      history: {
        push: jest.fn(),
      },
    };
  });

  afterEach(cleanup);

  const renderWithProps = (data: IVariables) => {
    return render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Form {...data} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  };

  test('Should call default render', () => {
    renderWithProps(props);
    // expect(renderWithProps(props)).toMatchSnapshot();
  });

  const renderWithPropsUserType2 = (data: IVariables) => {
    props = {
      ...props,
      form: {
        userType: 2,
      },
    };
    return render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Form {...data} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  };

  test('Should call default render', () => {
    renderWithPropsUserType2(props);
    // expect(renderWithPropsUserType2(props)).toMatchSnapshot();
  });

  it('should call onChange for Input Fields', async () => {
    props.form.userType = '2';
    const { getAllByLabelText } = renderWithProps(props);
    const input = await waitForElement(() => getAllByLabelText('input'));

    input.forEach((item: any) => {
      fireEvent.change(item, { target: { value: 'CN' } });
    });
  });

  it('should call onClick for Buttons with validate true', async () => {
    props.form.userType = '2';
    const { getAllByLabelText } = renderWithProps(props);
    const button = await waitForElement(() => getAllByLabelText('button'));

    button.forEach((item: any) => {
      fireEvent.click(item);
    });
  });

  it('should call onClick for Buttons with validate false and ! case for inputs', async () => {
    props.validate = jest.fn(() => false);
    props.form.name = '';
    props.form.lastName = '';
    props.form.email = '';

    props.form.mobilePhone = '';
    props.form.phoneNumber = '';
    props.form.location = '';
    props.form.caseType = '';
    props.form.userType = '2';
    props.form['establishment.name'] = '';
    props.form['establishment.phoneNumber'] = '';
    props.form['defendant.caseDescription'] = '';
    props.form['defendant.name'] = '';

    const { getAllByLabelText } = renderWithProps(props);
    const button = await waitForElement(() => getAllByLabelText('button'));

    button.forEach((item: any) => {
      fireEvent.click(item);
    });
  });

  it('should call onClick for Buttons with validate false and non empty inputs', async () => {
    props.validate = jest.fn(() => false);
    props.form.email = 'asdsadasd';
    props.form.mobilePhone = 'asdsadasd';
    props.form.phoneNumber = 'asdsadasd';
    props.form['establishment.name'] = 'asdasd';
    props.form['establishment.phoneNumber'] = 'asdas';
    props.form['defendant.caseDescription'] = 'This is test description';
    props.form['defendant.name'] = 'Amna';
    props.form['defendant.location'] = 'Abudhabi';
    props.form.caseType = '1';
    props.form.userType = '2';

    const { getAllByLabelText } = renderWithProps(props);
    const button = await waitForElement(() => getAllByLabelText('button'));

    button.forEach((item: any) => {
      fireEvent.click(item);
    });
  });

  it('should call onChange for Telephone Fields', async () => {
    props.form.userType = '2';
    const { getAllByLabelText } = renderWithProps(props);
    const inputTel = await waitForElement(() =>
      getAllByLabelText('Telephone input'),
    );

    inputTel.forEach((item: any) => {
      fireEvent.change(item, { target: { value: 'CN' } });
    });
  });

  it('should call onChange for Telephone Fields for complaint case', async () => {
    props.form.userType = '2';
    props.form.caseType = '1';
    const { getAllByLabelText } = renderWithProps(props);
    const inputTel = await waitForElement(() =>
      getAllByLabelText('Telephone input'),
    );

    inputTel.forEach((item: any) => {
      fireEvent.change(item, { target: { value: 'CN' } });
    });
  });

  it('should call onChange for Text Area', async () => {
    props.form.userType = '2';
    const { getAllByLabelText } = renderWithProps(props);
    const inputTel = await waitForElement(() => getAllByLabelText('Text area'));

    inputTel.forEach((item: any) => {
      fireEvent.change(item, { target: { value: 'CN' } });
    });
  });

  it('should call onClick for Select Fields', async () => {
    props.form.userType = '2';

    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Form {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    [...Array(8)].map((x: any, i: number) => {
      fireEvent.click(
        container.querySelectorAll('.ui-lib-select__options-item')[i],
      );
      return true;
    });
  });

  it('should call onClick for Checkbox', async () => {
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Form {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(container.querySelectorAll('.ui-lib-checkbox__input')[0]);
  });
});
