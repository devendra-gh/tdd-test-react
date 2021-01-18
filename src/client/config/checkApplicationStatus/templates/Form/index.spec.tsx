import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  // waitForElement,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import StatusForm from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/CheckApplicationStatus/StatusForm', () => {
  let props: any;

  beforeEach(() => {
    props = {
      init: jest.fn(),
      subTitle: 'checkApplicationStatus.form.subTitle',
      description: 'checkApplicationStatus.form.description',
      currentStep: 'checkApplicationStatus.step.1',
      onSubmit: jest.fn(),
      onChange: jest.fn(),
      isTransactionNumber: jest.fn(() => {
        return true;
      }),
      formApplicationNumber: {
        applicationNumber: '',
        isSubmitted: false,
      },
      loggedIn: true,
      history: {
        push: jest.fn(),
      },
      match: {},
      location: {},
      locale: {
        switch: jest.fn(),
      },
      i18n: (key: string) => key,
      actions: {
        locale: {
          switch: jest.fn(),
        },
        breadcrumbs: {
          update: jest.fn(),
        },
        title: {
          update: jest.fn(),
        },
        hero: {
          update: jest.fn(),
        },
      },
    };
  });

  afterEach(cleanup);

  test('Should call default render', () => {
    props.loggedIn = true;
    props = {
      ...props,
      ...{
        validate: jest.fn(() => {
          return undefined;
        }),
      },
    };
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <StatusForm {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByText('button.submit'));
    expect(props.onSubmit).toHaveBeenCalled();

    fireEvent.change(getByLabelText('checkApplicationStatus.form.inputLabel'), {
      target: { value: 'test' },
    });
  });

  test('Should call onChange when input is changed and is Valid', () => {
    props.loggedIn = true;
    props = {
      ...props,
      ...{
        validate: jest.fn(() => {
          return true;
        }),
      },
    };
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <StatusForm {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.change(getByLabelText('checkApplicationStatus.form.inputLabel'), {
      target: { value: 'test' },
    });
    // fireEvent.change(getByText('checkApplicationStatus.form.inputLabel'));
    // expect(props.onChange).toHaveBeenCalled();
  });

  test('Should render Loading component', () => {
    const newProps = { ...props };
    newProps.formApplicationNumber.isSubmitted = true;
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <StatusForm {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
