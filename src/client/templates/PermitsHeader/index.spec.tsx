import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Header from './index';

jest.mock('client/utils/appData', () => ({
  getCMSData: jest.fn(() => {
    return {
      navigationItems: {
        en: [{ text: 'text', url: 'http://url' }],
        ar: [{ text: 'text', url: 'http://url' }],
      },
    };
  }),
}));

jest.mock('query-string', () => ({
  parse: () => ({
    language: 'ar',
  }),
}));

describe('license-poc/templates/Header', () => {
  let props: any;

  beforeEach(() => {
    props = {
      location: {
        pathname: '/economic-licence/submit',
      },
      locale: 'en',
      i18n: jest.fn(i => i),
      actions: {
        locale: {
          switch: jest.fn(),
        },
        hero: {
          update: jest.fn(),
        },
        breadcrumbs: {
          update: jest.fn(),
        },
      },
      breadcrumbs: [
        {
          label: 'label',
          link: 'http://example.com',
        },
      ],
      loggedIn: false,
      title: 'title',
    };
  });

  afterEach(cleanup);

  test('renders login', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Header {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  test('renders loggedIn', () => {
    props.loggedIn = true;
    props.locale = 'en';
    props.user = { 'First Name EN': 'User', 'Last Name EN': 'User2' };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Header {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
