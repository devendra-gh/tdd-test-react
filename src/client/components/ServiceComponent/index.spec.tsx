import React from 'react';
import {
  render,
  cleanup,
  act,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import fetch from 'client/services/fetch';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import ServiceComponent from './index';

jest.mock('client/services/fetch');
jest.mock('client/utils/appData', () => ({
  getCMSData: jest.fn(() => {
    const links = {
      en: [
        {
          label: 'Link',
          link: '/link',
        },
      ],
      ar: [
        {
          label: 'Link Ar',
          link: '/link',
        },
      ],
    };
    return {
      navigationItems: {
        en: [],
        ar: [],
      },
      emergencyNumbers: {
        en: {
          items: links.en,
          emergencyHeading: 'Emergency Heading',
        },
        ar: {
          items: links.ar,
          emergencyHeading: 'Emergency Heading Ar',
        },
      },
      usefulLinks: links,
      supportLinks: links,
      socialLinks: links,
      poweredByLinks: links,
      rightsLinks: links,
      allRightsReserved: {
        en: {
          label: 'All Rights Reserved',
        },
        ar: {
          label: 'All Rights Reserved',
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
const serviceData = {
  serviceid: '671',
  serviceCodeData: {
    ProcessSteps: { Collection: [] },
    Documents: {
      Collection: [
        {
          Name: 'Building Permit',
          SpecialConsideration: '',
        },
      ],
    },
    FeesGroups: {
      Collection: [
        {
          groupName: 'All Fees',
          feesItems: [
            {
              feesTitle:
                'Application for Temporary Water Connection (by measurements) ',
              feesValue: '0',
              feesCurrency: 'AED',
            },
          ],
        },
      ],
    },
    ServicesEntities: {
      ServiceEntity: {
        Url: 'https://example.com',
        Name: 'Service Entity Name',
        Address: 'Service Entity Address ',
        Phone: '+971 1 111 1111',
        Email: 'mail@example.com',
        OfficeHours: 'Sunday - Thursday: 07:00 AM - 03:00 PM',
        ServiceHours: 'Sunday - Thursday: 07:00 AM - 03:00 PM',
        Logo: '<image mediaid="{700fa90b-33da-4a54-9514-aae41fa82bb8}" />',
      },
    },
    Name: 'Service Name',
    Description: 'Service Description',
    Mainservice: 'Service Main Service',
  },
};
describe('client/components/ServiceComponent', () => {
  let props: any;
  let mockFetch: any;
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
    const fakePayload = {
      success: true,
      data: {
        en: serviceData,
        ar: serviceData,
      },
    };
    mockFetch = fetch;
    mockFetch.mockImplementation(() => Promise.resolve(fakePayload));

    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener() {},
          removeListener() {},
        };
      };
  });
  afterEach(cleanup);
  it('displays text "Loading..." while fetching service', async () => {
    await act(async () => {
      const { getByText } = render(
        <ViewportProvider>
          <Viewport sm md lg xl>
            <MemoryRouter>
              <ServiceComponent {...props} />
            </MemoryRouter>
          </Viewport>
        </ViewportProvider>,
      );
      getByText('Loading...');
    });
  });
  it('redirect "/" after failing to fetch', async () => {
    await act(async () => {
      const error = new Error('Failed to fetch');
      mockFetch.mockImplementation(() => Promise.reject(error));
      const { getByText } = render(
        <ViewportProvider>
          <Viewport sm md lg xl>
            <MemoryRouter>
              <ServiceComponent {...props} />
            </MemoryRouter>
          </Viewport>
        </ViewportProvider>,
      );
      getByText('Loading...');
    });
  });
  it('removes text "Loading..." after displaying service', async () => {
    await act(async () => {
      const { getByText } = render(
        <ViewportProvider>
          <Viewport sm md lg xl>
            <MemoryRouter>
              <ServiceComponent {...props} />
            </MemoryRouter>
          </Viewport>
        </ViewportProvider>,
      );
      await waitForElementToBeRemoved(() => getByText('Loading...'));
    });
  });
  it('displays service card received from Internal API', async () => {
    await act(async () => {
      render(
        <ViewportProvider>
          <Viewport sm md lg xl>
            <MemoryRouter>
              <ServiceComponent {...props} />
            </MemoryRouter>
          </Viewport>
        </ViewportProvider>,
      );
      // await waitForElement(() => getByText('Required Documents'));
    });
  });
  it('displays service card received from Internal API with hero', async () => {
    await act(async () => {
      props.match.params.serviceId = '671';
      render(
        <ViewportProvider>
          <Viewport sm md lg xl>
            <MemoryRouter>
              <ServiceComponent {...props} />
            </MemoryRouter>
          </Viewport>
        </ViewportProvider>,
      );
      // await waitForElement(() => getByText('Required Documents'));
    });
  });
  it('should get language from localStorage', async () => {
    await act(async () => {
      props.location.search = '';
      render(
        <ViewportProvider>
          <Viewport sm md lg xl>
            <MemoryRouter>
              <ServiceComponent {...props} />
            </MemoryRouter>
          </Viewport>
        </ViewportProvider>,
      );
      // await waitForElement(() => getByText('Required Documents'));
    });
  });
  it('should apply "en" as default language', async () => {
    await act(async () => {
      props.location.search = '';
      localStorage.removeItem('lang');
      render(
        <ViewportProvider>
          <Viewport sm md lg xl>
            <MemoryRouter>
              <ServiceComponent {...props} />
            </MemoryRouter>
          </Viewport>
        </ViewportProvider>,
      );
      // await waitForElement(() => getByText('Required Documents'));
    });
  });
});
