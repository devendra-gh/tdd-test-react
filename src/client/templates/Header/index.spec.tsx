import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import {
  HeaderTemplate as Header,
  // onLanguageChange,
  // getSearchUrl,
  onSearch,
} from './index';

jest.mock('client/utils/appData', () => ({
  getCMSData: jest.fn(() => {
    return {
      journeyInfo: {
        en: {
          headerInfo: {
            logo: {
              desktopLogoPath: 'desktopLogoPath',
              mobileLogoPath: 'mobileLogoPath',
            },
            burgerMenuLinks: [
              {
                sectionName: 'sectionName',
                links: [
                  {
                    title: 'Title',
                    link: '/link',
                  },
                ],
              },
            ],
            profileMenuLinks: null,
            registerLink: {
              label: 'label',
              link: '/link',
            },
            loggedOutUserIconPath: '/loggedOutUserIconPath',
            logoutLabel: '',
            welcomeMessage: 'welcomeMessage',
            uaePassImage: 'uaePassImage',
            smartPassImage: 'smartPassImage',
          },
        },
      },
    };
  }),
}));

jest.mock('query-string', () => ({
  parse: () => ({
    language: 'ar',
  }),
  stringify: jest.fn(),
}));

describe('client/templates/Header', () => {
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
      location: {
        pathname: '/en/aspects-of-life/category',
      },
      match: {},
      loggedIn: false,
      title: 'title',
    };
  });

  afterEach(cleanup);

  test('renders login', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Header {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(getByText('Register')).toBeInTheDocument();
  });

  test('renders login without hero', () => {
    props.hero = false;
    const location: any = new URL('https://www.example.com');
    location.assign = jest.fn();
    location.replace = jest.fn();
    location.reload = jest.fn();
    location.search = '?ket=value';

    delete window.location;
    window.location = location;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Header {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(getByText('Register')).toBeInTheDocument();
  });

  test('renders loggedIn', () => {
    props.loggedIn = true;
    props.user = {
      'First Name EN': 'User',
      'Last Name EN': 'User2',
      Photo: 'photo-link',
    };
    props.location.pathname = '/ar-AE/aspects-of-life/category';
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Header {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(getByText('User User2')).toBeInTheDocument();
  });

  // describe('getSearchUrl', () => {
  //   test('should return en url', () => {
  //     expect(
  //       getSearchUrl({
  //         locale: 'en',
  //       }),
  //     ).toEqual(expect.stringContaining('lang=en'));
  //   });

  //   test('should return ar url', () => {
  //     expect(
  //       getSearchUrl({
  //         locale: 'ar',
  //       }),
  //     ).toEqual(expect.stringContaining('lang=ar-AE'));
  //   });
  // });

  describe('onSearch', () => {
    test('should return en url', () => {
      delete window.location;
      window.location = {
        assign: jest.fn(),
      } as any;

      onSearch('test');
      expect(window.location.assign).toHaveBeenCalled();
    });
  });
});
