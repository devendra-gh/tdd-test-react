import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { IStep } from 'client/config/permits/steps';
import Sidebar from './Sidebar.component';

const steps: IStep[] = [
  { name: 'trade_name', subSteps: ['submit_name', 'waiting_approval'] },
  {
    name: 'trade_licence',
    subSteps: ['submit_licence', 'waiting_approval', 'result'],
  },
];

describe('client/templates/Sidebar', () => {
  let props: any;

  beforeEach(() => {
    props = {
      locale: 'en',
      i18n: jest.fn(i => i),
      currentStep: 'trade_name',
      currentSubStep: 'submit_licence',
      stepsStatus: {
        trade_name: 'trade_name',
        'trade_name.submit_licence': 'trade_name.submit_licence',
      },
      steps,
    };
  });

  afterEach(cleanup);

  test('renders', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Sidebar {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(getByText('trade_name')).toBeInTheDocument(); // TODO: Check
  });
});
