import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import ErrorTemplate from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error template', () => {
  let props: any;

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
      match: {},
      location: {},
      i18n: jest.fn(),
      locale: 'en',
      handleBackButton: jest.fn(),
      breadcrumbs: [],
      link: '/',
      process: {
        title: 'process title',
        steps: [
          {
            name: 'process step',
          },
        ],
      },
      stepStatus: { 'process step': 'finish' },
      title: 'Notice',
      status: 'success',
      buttons: [],
      actions: {
        breadcrumbs: {
          update: jest.fn(),
        },
      },
    };
  });

  afterEach(cleanup);

  test('renders with props', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ErrorTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  test('renders with props 2', () => {
    props.showSidebar = true;
    props.buttons = [
      {
        'arial-label': 'button',
        label: 'button',
        withArrow: true,
        uiType: 'secondary',
        alignIcon: 'start',
        onClick: jest.fn(),
      },
    ];

    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ErrorTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByLabelText('button'));
  });
});
