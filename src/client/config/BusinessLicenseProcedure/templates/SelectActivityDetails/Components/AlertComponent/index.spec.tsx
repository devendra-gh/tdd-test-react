import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import AlertComponent from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('AlertComponent', () => {
  let props: IVariables;

  beforeEach(() => {
    props = {
      history: {
        push: jest.fn(),
      },
      actions: {
        stepsStatus: {
          update: jest.fn(),
        },
        formSelectActivity: {
          update: jest.fn(),
        },
      },
      getInitialState: jest.fn(),
      formSelectActivity: {
        activities: [
          {
            activityCode: 'activityCode',
            activity: 'businessActivity.activity',
            activityAr: 'businessActivity.activityAr',
          },
        ],
        showTable: true,
        category: 'category',
        subCategory: 'subCategory',
        inputType: 'CATEGORY',
        loading: true,
        showError: true,
        alertText: 'alertText',
        alertStatus: 'info',
      },
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
    };
  });

  it('should render listOfActivities when showTable true - english', async () => {
    const { getByText, container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <AlertComponent {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('alertText')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render listOfActivities when showTable true - english with error', async () => {
    props.formSelectActivity.alertStatus = 'error';
    const { getByText, container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <AlertComponent {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('alertText')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render listOfActivities when showTable true - english', async () => {
    const { getByText, container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <AlertComponent {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('alertText')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render listOfActivities when showTable true - english', async () => {
    props.formSelectActivity.alertText = 'errorMessage.noData';
    const { getByText, container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <AlertComponent {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('errorMessage.noData.category')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
