import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Index from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('LeaseSummary', () => {
  let props: any;

  beforeEach(() => {
    window.scrollTo = jest.fn();

    props = {
      i18n: (key: string) => key,
      locale: 'en',
      leaseInfo: undefined,
    };
  });

  afterEach(cleanup);

  test('renders', async () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Index {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  test('renders', async () => {
    const leaseInfo = {
      tenantDetails: {
        city: {
          en: 'en',
          ar: 'ar',
        },
        name: {
          en: 'en',
          ar: 'ar',
        },
      },
      isLand: true,
      secondaryArea: 'test',
      plotOwnerName: 'test',
      propertyDetails: {
        unitDetails: {
          registrationNumber: '123',
        },
        zone: {
          en: 'en',
          ar: 'ar',
        },
        sector: {
          en: 'en',
          ar: 'ar',
        },
      },
      specificLocation: 'test',
      landLocation: 'test',
      landArea: 'test',
    };

    props.leaseInfo = JSON.stringify(leaseInfo);

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Index {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
