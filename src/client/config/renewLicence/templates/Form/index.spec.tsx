import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import FormTemplate from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
  noticeTypes: {
    INFO: 'INFO',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
  },
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('FormTemplate', () => {
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
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      i18n: (key: string) => key,
      title: 'FormTemplate',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      buttons: [
        {
          label: 'btn',
          onClick: jest.fn(),
        },
      ],
      steps: [],
      stepStatus: {
        economic_name: 'economic_name',
        'economic_name.payment': 'economic_name.payment',
      },
      list: {
        labelHeading: 'label',
        valueHeading: 'value',
        listDetails: {
          label: 'label',
          value: 'value',
        },
      },
      totalSection: 1000,
      history: {
        push: jest.fn(),
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
    // expect(container.firstChild).toMatchSnapshot();
  });

  it('should call all events', async () => {
    const { getByText, getByLabelText, container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const [input, submitButton, cancelLink] = await waitForElement(() => [
      getByLabelText('licence number input area'),
      getByLabelText('button'),
      getByText('Cancel'),
      { container },
    ]);
    fireEvent.change(input, { target: { value: 'CN-8989898' } });
    fireEvent.click(submitButton);
    fireEvent.click(cancelLink);

    expect(props.onSubmit.mock.calls.length).toBe(1);
    expect(
      props.onSubmit(
        'LN-1234567',
        { setLoading: () => true, setNetworkError: () => true },
        props,
      ),
    ).toBeUndefined();
  });
});
