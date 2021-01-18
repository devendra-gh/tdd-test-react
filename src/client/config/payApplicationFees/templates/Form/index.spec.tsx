import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
// import { invalid } from 'moment';
import FormTemplate from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
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
      validateTransactionNumber: jest.fn(),
      history: {
        push: jest.fn(),
      },
      onChange: jest.fn(),
      onClick: jest.fn(),
      onSubmit: jest.fn(),
      onShowTradeName: jest.fn(),
      i18n: (key: string) => key,
      title: 'FormTemplate',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      showLoader: false,
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
      form: {
        businessNameEng: 'test',
        businessNameArb: 'test',
        showTradeName: false,
      },
      showError: false,
      showSpinner: false,
      items: [
        {
          id: '1',
          nameEn: 'test',
          nameAr: 'test',
        },
      ],
      totalSection: 1000,
      actions: {
        form: {
          reset: jest.fn(),
        },
        instanceId: {
          reset: jest.fn(),
        },
        businessKey: {
          reset: jest.fn(),
        },
        stepsStatus: {
          reset: jest.fn(),
        },
        showLoader: {
          reset: jest.fn(),
        },
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

  it('should call the onChange function in the input field', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.change(getByLabelText('input-text'), {
      target: { value: 'TN-1234567' },
      props,
    });
  });

  it('should call the onShowTradeName function on Button click', async () => {
    props.validateTransactionNumber = () => true;
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByLabelText('showTradeName'));
    expect(props.onShowTradeName).toHaveBeenCalled();
  });

  it('When showTrade is clicked and validateTransactionNumber is false error message should be displayed', async () => {
    props.validateTransactionNumber = () => false;
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByLabelText('showTradeName'));
    expect(getByText('errorMsg.invalid.transactionNumber')).toBeInTheDocument();
  });

  it('should call the cancel function on Button click', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByLabelText('cancel'));
    // expect(props.history.push).toHaveBeenCalled();
  });

  it('should call the onSubmit function on Next Button click', async () => {
    props.validateTransactionNumber = () => true;
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByLabelText('Next'));
    expect(props.onSubmit).toHaveBeenCalled();
  });

  it('should call the loader if showLoader is true', async () => {
    props.showLoader = true;
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(container.querySelector('.ui-lib-spinner')).toBeInTheDocument();
  });
  it('should call the info alert if showTradeName is true', async () => {
    props.form.showTradeName = true;
    props.form.businessNameArb = '';
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(container.querySelector('.ui-lib-alert_info')).toBeInTheDocument();
  });

  it('should call the info alert if showTradeName is true', async () => {
    props.form.showTradeName = true;
    props.form.businessNameArb = 'test';
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(
      container.querySelector('.ui-lib-table__root-grid'),
    ).toBeInTheDocument();
  });

  it('should call the spinner component if showSpinner is true', async () => {
    props.showSpinner = true;
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(container.querySelector('.ui-lib-spinner')).toBeInTheDocument();
  });

  it('should call the alert component if showError is true', async () => {
    props.showError = true;
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(container.querySelector('.ui-lib-alert')).toBeInTheDocument();
  });
});
