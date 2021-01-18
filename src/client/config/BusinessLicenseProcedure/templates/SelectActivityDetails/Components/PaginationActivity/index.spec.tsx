import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import PaginationActivity from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('PaginationActivity', () => {
  let props: IVariables;

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
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
        activitiesCurrentPage: 1,
        activitiesRecInPage: 1,
        activitiesTotalCount: 2,
        showTable: true,
      },
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

  it('should show pagination', async () => {
    const { getByText, container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <PaginationActivity {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
    fireEvent.click(getByText('1'));
  });
});
