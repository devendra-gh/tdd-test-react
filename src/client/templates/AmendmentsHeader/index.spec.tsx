import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Header, { onLanguageChange } from './index';

jest.mock('client/utils/appData', () => ({
  getCMSData: jest.fn(() => {
    return {
      navigationItems: {
        en: [],
        ar: [],
      },
    };
  }),
}));

describe('license-poc/templates/Header', () => {
  let props: any;

  beforeEach(() => {
    props = {
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
      history: {
        push: jest.fn(),
      },
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

    // setTimeout(() => {
    //   expect(getByText('Register')).toBeInTheDocument();
    // }, 500);
  });

  test('locale switch', () => {
    onLanguageChange(jest.fn());
    onLanguageChange(() => false);

    const fs = {
      pushState: jest.fn(),
      switchLocale: jest.fn(),
    };
    const spyPush = jest.spyOn(fs, 'pushState');
    const spyLocale = jest.spyOn(fs, 'pushState');

    // onLanguageChange(fs.pushState, fs.switchLocale);
    onLanguageChange(fs.switchLocale);
    expect(spyPush).not.toHaveBeenCalled();
    expect(spyLocale).not.toHaveBeenCalled();
  });

  test('renders loggedIn', () => {
    props.loggedIn = true;
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

    // setTimeout(() => {
    //   expect(getByText('User User2')).toBeInTheDocument();
    // }, 500);
  });
});
