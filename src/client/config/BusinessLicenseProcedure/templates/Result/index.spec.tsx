import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
      history: {
        push: jest.fn(),
      },
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      i18n: (key: string, object: IVariables) => {
        return object && object.amount ? key + object.amount : key;
      },
      title: 'Result',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
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
      resultState: {
        selectedActivity: {
          activityCode: 1,
          activity: 'activity',
          activityAr: 'activityAr',
        },
        requirements: [
          {
            RequirementDescEn: 'RequirementDescEn',
            RequirementDescAr: 'RequirementDescAr',
            requirementTypeEn: 'requirementTypeEn',
            AuthorityEn: 'AuthorityEn',
            AuthorityAr: 'AuthorityAr',
          },
        ],
        fees: [],
        loading: true,
        showError: false,
      },
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

  it('should display Table component when locale en', async () => {
    props.resultState.showError = false;
    props.resultState.loading = false;
    const { getByText } = renderWithProps();
    expect(getByText('table.heading.licenceSummary')).toBeInTheDocument();
    expect(getByText('activity')).toBeInTheDocument();
  });

  it('should display Table component when locale ar', async () => {
    props.resultState.showError = false;
    props.resultState.loading = false;
    props.locale = 'ar';
    const { getByText } = renderWithProps();
    expect(getByText('table.heading.licenceSummary')).toBeInTheDocument();
    expect(getByText('activityAr')).toBeInTheDocument();
  });

  it('should work when formSelectActivity has bad data', async () => {
    props.resultState.showError = false;
    props.resultState.loading = false;
    props.locale = 'ar';
    props.resultState.selectedActivity = {
      activityCode: 1,
    };
    const { getByText } = renderWithProps();
    expect(getByText('table.heading.licenceSummary')).toBeInTheDocument();
  });

  it('Fee addition must be correct', async () => {
    props.resultState.showError = false;
    props.resultState.loading = false;
    props.locale = 'en';
    props.resultState.fees = [
      { feeAmount: 400, feeDescEn: 'FeeDescEn1', feeDescAr: 'feeDescAr1' },
      { feeAmount: 515, feeDescEn: 'FeeDescEn2', feeDescAr: 'feeDescAr2' },
    ];
    const { getByText } = renderWithProps();
    expect(getByText('global.aed915')).toBeInTheDocument();
  });

  it('Fee addition must be correct ar', async () => {
    props.resultState.showError = false;
    props.resultState.loading = false;
    props.locale = 'ar';
    props.resultState.fees = [
      { feeAmount: 400, feeDescEn: 'FeeDescEn1', feeDescAr: 'feeDescAr1' },
      { feeAmount: 515, feeDescEn: 'FeeDescEn2', feeDescAr: 'feeDescAr2' },
    ];
    const { getByText } = renderWithProps();
    expect(getByText('global.aed915')).toBeInTheDocument();
  });

  it('Clicking back button shound call history.push', async () => {
    const { getByLabelText } = renderWithProps();
    fireEvent.click(getByLabelText('button'));
    expect(props.history.push).toHaveBeenCalled();
  });
});
