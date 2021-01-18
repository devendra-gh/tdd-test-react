import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import FormTemplate from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('LicenceForm', () => {
  let props: IVariables;

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
      currentStep: 'link_name_1',
      onSubmitLabel: 'Submit',
      subTitle: 'payfines.subTitle.checkLicenceFines',
      description:
        'Please enter a valid trade licence number to check for fines.',
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      title: 'LicenceForm',
      locale: 'en',
      i18n: (key: string) => key,
      buttons: [
        {
          label: 'btn',
          onClick: jest.fn(),
        },
      ],
      steps: [],
      stepStatus: {
        link_name_1: 'link_name_1',
        link_name_2: 'link_name_2',
      },
      formBusinessLicenceFine: {
        licenceNo: 'CN-2344343',
        isLoading: false,
      },
    };
  });

  it('should render with all props', async () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // expect(container).toMatchSnapshot();
    // expect(getByText(props.subTitle)).toBeInTheDocument();
  });

  it('should call onSubmit when submit button is pressed and cn number is invalid', async () => {
    const { getByLabelText, container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const [input, submitButton] = await waitForElement(() => [
      getByLabelText('input-text'),
      getByLabelText('button'),
      { container },
    ]);
    fireEvent.change(input, { target: { value: 'CN' } });
    fireEvent.click(submitButton);
    expect(props.onSubmit.mock.calls.length).toBe(0);
  });

  it('should call onSubmit when submit button is pressed and cn number is valid', async () => {
    const { getByLabelText, container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const [input, submitButton] = await waitForElement(() => [
      getByLabelText('input-text'),
      getByLabelText('button'),
      { container },
    ]);
    fireEvent.change(input, { target: { value: 'CN-8989898' } });
    fireEvent.click(submitButton);
    expect(props.onSubmit.mock.calls.length).toBe(1);
  });

  it('should call Loading', async () => {
    props.formBusinessLicenceFine.isLoading = true;
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // expect(container).toMatchSnapshot();
  });
});
