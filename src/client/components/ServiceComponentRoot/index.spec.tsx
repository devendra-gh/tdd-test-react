import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import ServiceComponentRoot from './index';

jest.mock('client/services/fetch');
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
            profileMenuLinks: [
              {
                iconPath: 'iconPath',
                hoverIconPath: 'hoverIconPath',
                link: '/link',
                label: 'Label',
              },
            ],
            registerLink: {
              label: 'label',
              link: '/link',
            },
            loggedOutUserIconPath: '/loggedOutUserIconPath',
            logoutLabel: 'logoutLabel',
            welcomeMessage: 'welcomeMessage',
            uaePassImage: 'uaePassImage',
            smartPassImage: 'smartPassImage',
          },
        },
      },
    };
  }),
  getSmartpassData: jest.fn(),
  getMetaData: jest.fn(() => {
    return {
      favicon: '/favicon.ico',
    };
  }),
}));

describe('client/components/ServiceComponentRoot', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {
        params: {
          serviceId: '659',
        },
      },
      history: {
        push: jest.fn(),
      },
      location: {
        search: '?lang=en',
      },
    };
  });

  afterEach(cleanup);

  it('should render', async () => {
    await act(async () => {
      const { getByText } = render(
        <MemoryRouter>
          <ViewportProvider>
            <Viewport sm md lg xl>
              <ServiceComponentRoot {...props} />
            </Viewport>
          </ViewportProvider>
        </MemoryRouter>,
      );

      getByText('Register');
    });
  });
});
