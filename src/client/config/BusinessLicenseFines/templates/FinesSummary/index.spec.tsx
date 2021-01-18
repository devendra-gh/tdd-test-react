import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
// import { steps } from 'client/config/steps';
import Summary from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Summary', () => {
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
      locale: 'en',
      i18n: jest.fn(),
      title: 'payfines.title',
      subTitle: 'subTitle',
      description: 'desc',
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      steps: [],
      feeData: [
        {
          FINE_DESC_EN: 'test',
          FINE_DESC_AR: 'test',
          FINE_AMT: '100',
        },
      ],
      stepStatus: {
        economic_name: 'economic_name',
        'economic_name.payment': 'economic_name.payment',
      },
      formBusinessLicenceFine: {
        isLoading: false,
      },
      buttons: [
        {
          label: 'button.back',
          onClick: jest.fn(),
          uiType: 'secondary',
          withArrow: true,
          alignIcon: 'start',
        },
        {
          label: 'button.pay',
          onClick: jest.fn(),
          uiType: 'primary',
          withArrow: true,
          alignIcon: 'end',
        },
      ],
    };
  });

  afterEach(cleanup);

  it('should render with all props', async () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Summary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with all props fallback', async () => {
    props.currentStep = false;
    props.locale = 'ar';

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Summary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render loading', () => {
    props.formBusinessLicenceFine.isLoading = true;
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Summary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
