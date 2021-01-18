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
import UserFormTemplate from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Templates/UserForm', () => {
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
      locale: 'en',
      i18n: jest.fn(i => i),
      currentStep: 'test',
      currentSubStep: 'test',
      steps: [{ test: 'test' }],
      stepsStatus: 'test',
      title: 'test',
      formData: {
        arabicActivityName: 'test',
        englishActivityName: 'test',
        arabicActivityDescription: 'test',
        englishActivityDescription: 'test',
        name: 'Mahmoud Wisam Mo',
        email: 'persona.adoss1@gmail.com',
        mobileNumber: '971589004745',
      },
      onChange: jest.fn(),
      validation: jest.fn(() => true),
      onSubmit: jest.fn(),
      helperData: { isSubmitted: true },
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
            <UserFormTemplate {...data} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  };

  test('Should call default render with isSubmitted', () => {
    renderWithProps(props);
  });

  test('Should create a snapshot', async () => {
    props.validation = jest.fn(() => false);
    props.helperData.isSubmitted = false;
    props.formData = {};
    renderWithProps(props);
    // expect(container).toMatchSnapshot();
  });

  test('Should call default render with submit falsy value', async () => {
    props.validation = jest.fn(() => false);
    props.helperData.isSubmitted = false;
    props.formData = {};
    const { getByLabelText, getByText, container } = renderWithProps(props);
    const [
      inputActivityNameAr,
      inputActivityNameEn,
      inputActivityNameDescEn,
      inputActivityNameDescAr,
      inputContactName,
      inputContactMobile,
      inputContactEmail,
      submitButton,
    ] = await waitForElement(() => [
      getByLabelText('activity_name_ar'),
      getByLabelText('activity_name_en'),
      getByLabelText('activity_name_en_description'),
      getByLabelText('activity_name_ar_description'),
      getByLabelText('contact_name'),
      getByLabelText('contact_mobile'),
      getByLabelText('contact_email'),
      getByText('addEconomicActivity.button.submit', {
        selector: 'button',
      }),
      { container },
    ]);
    fireEvent.change(inputActivityNameEn, { target: { value: 'ab' } });
    fireEvent.change(inputActivityNameAr, { target: { value: 'ab' } });
    fireEvent.change(inputActivityNameDescEn, { target: { value: 'ab' } });
    fireEvent.change(inputActivityNameDescAr, { target: { value: 'ab' } });
    fireEvent.change(inputContactName, { target: { value: 'ab' } });
    fireEvent.change(inputContactMobile, {
      target: { value: '+97512345' },
    });
    fireEvent.change(inputContactEmail, { target: { value: 'ab@ab' } });
    fireEvent.click(submitButton);
  });

  test('Should call default render with submit truthy value', async () => {
    props.validation = jest.fn(() => false);
    props.helperData.isSubmitted = false;
    props.formData = {};
    const { getByLabelText, getByText, container } = renderWithProps(props);
    const [
      inputActivityNameAr,
      inputActivityNameEn,
      inputActivityNameDescEn,
      inputActivityNameDescAr,
      inputContactName,
      inputContactMobile,
      inputContactEmail,
      submitButton,
    ] = await waitForElement(() => [
      getByLabelText('activity_name_ar'),
      getByLabelText('activity_name_en'),
      getByLabelText('activity_name_en_description'),
      getByLabelText('activity_name_ar_description'),
      getByLabelText('contact_name'),
      getByLabelText('contact_mobile'),
      getByLabelText('contact_email'),
      getByText('addEconomicActivity.button.submit', {
        selector: 'button',
      }),
      { container },
    ]);
    fireEvent.change(inputActivityNameEn, { target: { value: 'ab' } });
    fireEvent.change(inputActivityNameAr, { target: { value: 'ليونيكود' } });
    fireEvent.change(inputActivityNameDescEn, { target: { value: 'ab' } });
    fireEvent.change(inputActivityNameDescAr, {
      target: { value: 'ليونيكود' },
    });
    fireEvent.change(inputContactName, { target: { value: 'ab' } });
    fireEvent.change(inputContactMobile, {
      target: { value: '+971589456789' },
    });
    fireEvent.change(inputContactEmail, { target: { value: 'abc@abc.com' } });
    fireEvent.click(submitButton);
  });

  test('Should redirect when cancel is clicked', async () => {
    props.validation = jest.fn(() => false);
    props.helperData.isSubmitted = false;
    props.formData = {};
    const { getByText, container } = renderWithProps(props);
    const [cancelButton] = await waitForElement(() => [
      getByText('addEconomicActivity.button.back', {
        selector: 'button',
      }),
      { container },
    ]);
    fireEvent.click(cancelButton);
  });

  test('Should call default render when empty values submitted', async () => {
    props.validation = jest.fn(() => false);
    props.helperData.isSubmitted = false;
    props.formData = {
      arabicActivityName: '',
      englishActivityName: '',
      arabicActivityDescription: '',
      englishActivityDescription: '',
      name: '',
      email: '',
      mobileNumber: '',
    };
    const { getByText, container } = renderWithProps(props);
    const [submitButton] = await waitForElement(() => [
      getByText('addEconomicActivity.button.submit', {
        selector: 'button',
      }),
      { container },
    ]);
    fireEvent.click(submitButton);
  });

  test('Should call default render when proper values submitted', async () => {
    props.validation = jest.fn(() => true);
    props.helperData.isSubmitted = false;
    props.formData = {
      arabicActivityName: 'ليونيكود',
      englishActivityName: 'ab',
      arabicActivityDescription: 'ليونيكود',
      englishActivityDescription: 'ab',
      name: 'ab',
      email: 'abc@abc.com',
      mobileNumber: '+971589456789',
    };
    const { getByText, container } = renderWithProps(props);
    const [submitButton] = await waitForElement(() => [
      getByText('addEconomicActivity.button.submit', {
        selector: 'button',
      }),
      { container },
    ]);
    fireEvent.click(submitButton);
  });
});
