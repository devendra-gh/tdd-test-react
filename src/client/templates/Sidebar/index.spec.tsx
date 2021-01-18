import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { steps } from 'client/config/steps';
import Sidebar from './index';

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

    setTimeout(() => {
      expect(getByText('trade_licence')).toBeInTheDocument(); // TODO: Check
    }, 500);
  });

  test('renders', () => {
    props = {
      ...props,
      showRelatedJourneyCard: true,
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Sidebar {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText('trade_licence')).toBeInTheDocument(); // TODO: Check
    }, 500);
  });
});
