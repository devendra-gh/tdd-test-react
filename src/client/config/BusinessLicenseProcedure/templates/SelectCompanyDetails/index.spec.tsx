import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Result from './index';

jest.mock('client/templates/Sidebar', () => () => '');
jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Result', () => {
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
      actions: {
        formCompanyDetails: {
          update: jest.fn(),
        },
      },
      formCompanyDetails: {
        location: 'locationEn',
        legalForm: '',
        legalFormAr: '',
        loading: 'loading',
        showError: 'showError',
        locations: [{ locationEn: 'locationEn', locationAr: 'locationAr' }],
        legalForms: [
          { legalFormEn: 'legalFormEn', legalFormAr: 'legalFormAr' },
        ],
      },
      history: {
        push: jest.fn(),
      },
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      i18n: (key: string) => key,
      title: 'Result',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      steps: [],
      stepStatus: {},
      formSelectActivity: {
        activities: [
          {
            activityCode: 1,
            activity: 'activity',
            activityAr: 'activityAr',
          },
        ],
        activity: 1,
      },
      getInitialState: jest.fn(),
    };
  });

  const renderWithProps = () =>
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Result {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

  it('should display Loading component when loading is true', async () => {
    const { getByText, container } = renderWithProps();
    expect(container.querySelector('.spinner-wrapper')).toBeInTheDocument();
    expect(getByText(props.subTitle)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display Alert when showError is true', async () => {
    props.formCompanyDetails.showError = true;
    props.formCompanyDetails.loading = false;
    const { getByText, container } = renderWithProps();
    expect(
      container.querySelector('.ui-lib-alert__message'),
    ).toBeInTheDocument();
    expect(getByText(props.subTitle)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show validate error for legalform not selected', async () => {
    props.formCompanyDetails.legalForms = undefined;
    props.formCompanyDetails.locations = undefined;
    props.formCompanyDetails.showError = false;
    props.formCompanyDetails.loading = false;
    const { getByText, getByLabelText, container } = renderWithProps();
    fireEvent.click(getByText('button.next'));
    expect(getByText('validationMessage.required')).toBeInTheDocument();
    const usernameElement = await waitForElement(
      () => getByText('validationMessage.required'),
      {
        container,
      },
    );
    expect(usernameElement.innerHTML).toBe('validationMessage.required');
  });

  it('should call props.onSubmit when next button is clicked', async () => {
    props.formCompanyDetails.showError = false;
    props.formCompanyDetails.loading = false;
    props.formCompanyDetails.location = 'location';
    props.formCompanyDetails.legalForm = 'legalForm';

    const { getByText } = renderWithProps();
    fireEvent.click(getByText('button.next'));
    expect(props.onSubmit).toBeCalled();
  });

  it('should render cancel link', async () => {
    props.formCompanyDetails.showError = false;
    props.formCompanyDetails.loading = false;
    props.locale = 'ar';
    const { getByText } = renderWithProps();
    fireEvent.click(getByText('Cancel'));
  });

  it('should call props.onChange when select changes', async () => {
    props.formCompanyDetails.showError = false;
    props.formCompanyDetails.loading = false;
    const { getByText } = renderWithProps();
    fireEvent.click(getByText('legalFormEn'));
    expect(props.actions.formCompanyDetails.update).toHaveBeenCalled();
  });
});
