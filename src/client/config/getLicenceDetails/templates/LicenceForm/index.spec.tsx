/* eslint-disable no-sparse-arrays */
import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
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
      currentSubStep: 'link_name_2',
      stepsStatus: {},
      onSubmitLabel: 'Submit',
      subTitle: 'Enter trade licence number',
      description: 'Please enter a valid trade licence number to view details.',
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      onBack: jest.fn(),
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
      tradeLicence: {
        licenceNo: 'CN-1023919',
        isLoading: false,
        data: null,
        summaryList: [
          {
            columns: [
              {
                id: 'description',
                title: 'Description',
              },
            ],
            headerHidden: false,
            items: [],
          },
        ],
        activitiesList: [
          {
            columns: [
              {
                id: 'description',
                title: 'Description',
              },
            ],
            headerHidden: false,
            items: [],
          },
        ],
      },
    };
  });

  it('should render with all props', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText(props.subTitle)).toBeInTheDocument();
    // expect(container).toMatchSnapshot();
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
      getByLabelText('button-primary'),
      ,
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
      getByLabelText('button-primary'),
      ,
      { container },
    ]);
    fireEvent.change(input, { target: { value: 'CN-1023919' } });
    fireEvent.click(submitButton);
    expect(props.onSubmit.mock.calls.length).toBe(1);
  });

  it('should call Loading', async () => {
    props.tradeLicence.isLoading = true;
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
