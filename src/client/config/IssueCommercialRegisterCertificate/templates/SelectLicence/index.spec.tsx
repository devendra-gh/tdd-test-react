import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import SelectLicence from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Select Licence template', () => {
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
      selectedLicence: true,
      loadingLicences: false,
      handleCancelLink: jest.fn(),
      handleBackButton: jest.fn(),
      handleSelectLicence: jest.fn(),
      handleStartService: jest.fn(),
      breadcrumbs: [],
      title: 'Test title',
      submitting: false,
      process: {
        title: 'process title',
        steps: [
          {
            name: 'process step',
          },
        ],
      },
      stepStatus: { 'process step': 'finish' },
      actions: {
        breadcrumbs: {
          update: jest.fn(),
        },
      },
      recordId: 'LN-1234567',
      licenceList: [],
    };
  });

  it('should successfully render', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should successfully render when submitting', () => {
    props.submitting = true;
    props.loadingLicences = true;
    props.licenceList = [];
    props.locale = 'ar';

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should successfully render the select licence list', () => {
    props.loadingLicences = true;
    props.licenceList = [
      {
        tradeLicenseNumber: 'LN-1234567',
        businessNameEng: 'test',
        businessNameArb: 'test',
      },
    ];

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should successfully search for licences matching the search parameter', () => {
    props.submitting = false;
    props.loadingLicences = false;
    props.licenceList = [
      {
        tradeLicenseNumber: 'LN-1234567',
        businessNameEng: 'test',
        businessNameArb: 'test',
      },
      {
        tradeLicenseNumber: 'LN-8908908',
        businessNameEng: 'rest',
        businessNameArb: 'rest',
      },
    ];
    props.locale = 'ar';

    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.change(
      container.querySelectorAll('.ui-lib-input-wrapper__content-input')[0],
      {
        target: {
          value: '896',
        },
      },
    );

    // expect(container.firstChild).toMatchSnapshot();
  });

  it('should successfully submit selected licence', () => {
    props.submitting = false;
    props.loadingLicences = false;
    props.licenceList = [
      {
        tradeLicenseNumber: 'LN-1234567',
        businessNameEng: 'test',
        businessNameArb: 'test',
      },
      {
        tradeLicenseNumber: 'LN-8908908',
        businessNameEng: 'rest',
        businessNameArb: 'rest',
      },
    ];
    props.locale = 'ar';

    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(container.querySelectorAll('.ui-lib-button_primary')[0], {
      target: {
        value: '896',
      },
    });

    // expect(container.firstChild).toMatchSnapshot();
  });
});
