import React from 'react';
import { shallow } from 'enzyme';
import { render, cleanup, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { hasFeatureFlag } from 'client/services/featureFlag';
import { FooterTemplate } from './index';

jest.mock('client/services/featureFlag');

jest.mock('client/utils/appData', () => ({
  getCMSData: () => ({
    journeyInfo: {
      en: {
        footerInfo: {
          copyrightMessage: 'copyrightMessage',
          emergencyNumbers: [
            {
              name: 'Police',
              number: '999',
            },
          ],
          viewAllEmergencyNumbers: 'viewAllEmergencyNumbers',
          translateLabel: 'translateLabel',
          fontSizeLabel: 'fontSizeLabel',
          colorLabel: 'colorLabel',
          logos: [
            {
              image: '/-/media/logo.png',
            },
          ],
          downloadApps: [
            {
              appImage: '/-/media/apple-store.png',
              appLink: 'http://www.google.com',
              appcaption: 'Apple Store',
            },
          ],
          copyrights: [
            {
              copyrightName: 'Privacy Policy',
              copyrightLink: '/en/privacy-statement',
            },
          ],
          socialLinks: [
            {
              socialSiteImage: '/-/media/social-media-twitter.svg',
              socialSiteLink: 'http://www.google.com',
              socialSiteCaption: 'Twitter',
            },
          ],
        },
      },
    },
  }),
}));

describe('client/templates/Footer', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {},
      location: {},
      locale: 'en',
      actions: {
        hero: {
          update: jest.fn(),
        },
        breadcrumbs: {
          update: jest.fn(),
        },
      },
    };
  });

  afterEach(cleanup);

  it('should render with props', async () => {
    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener() {},
          removeListener() {},
        };
      };

    await act(async () => {
      const { getByText } = render(
        <MemoryRouter>
          <ViewportProvider>
            <Viewport sm md lg xl>
              <FooterTemplate {...props} />
            </Viewport>
          </ViewportProvider>
        </MemoryRouter>,
      );

      getByText('copyrightMessage');
    });
  });

  it('should render with feature flag', async () => {
    (hasFeatureFlag as jest.Mock).mockReturnValue(true);
    const component = shallow(<FooterTemplate />);

    expect(component).toMatchSnapshot();
  });
});
