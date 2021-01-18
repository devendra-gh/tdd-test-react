import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import OwnershipTable from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/components/OwnershipTable', () => {
  let props: any;

  beforeEach(() => {});

  afterEach(cleanup);

  test('renders with all props', () => {
    props = {
      ownership: {
        owner: [
          {
            nationality: 'India',
          },
        ],
      },
      items: [
        {
          contactType: 'company',
          licenseNumber: '123',
          type: 'visitor',
          uid: 'uid-1',
          emiratesId: '123456789',
        },
      ],
      type: 'owner',
      optional: 'optional',
      disableActions: false,
      locale: 'en',
      validate: true,
      legalForm: 'establishment',
      licenceType: 'branchForeign',
      branchDetails: {
        branch: 'branchGCC',
        isGCC: {
          isGCC: true,
        },
      },
      countries: [],
      group: {
        representatives: [
          {
            visible: true,
            owner: {
              min: 49,
              max: 51,
            },
          },
        ],
      },
      files: {
        economicName: {
          tradeNameEn: 'test',
          tradeNameAr: 'test',
        },
        licenceType: {
          licenceType: 'instant',
        },
      },
      i18n: jest.fn(),
      onEdit: jest.fn(),
      onToggleModal: jest.fn(),
      onDelete: jest.fn(),
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <OwnershipTable {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  // /////////////////////

  test('renders with all props licenceType branch', () => {
    props = {
      ownership: {
        owner: [
          {
            nationality: 'India',
          },
        ],
      },
      items: [
        {
          contactType: 'company',
          licenseNumber: '123',
          type: 'visitor',
          uid: 'uid-1',
          emiratesId: '123456789',
        },
      ],
      type: 'owner',
      optional: 'optional',
      disableActions: false,
      locale: 'en',
      validate: true,
      legalForm: 'establishment',
      licenceType: 'branch',
      branchDetails: {
        branch: 'branchUAE',
        isGCC: {
          isGCC: true,
        },
      },
      countries: [],
      group: {
        representatives: [
          {
            visible: true,
            owner: {
              min: 49,
              max: 51,
            },
          },
        ],
      },
      files: {
        economicName: {
          tradeNameEn: 'test',
          tradeNameAr: 'test',
        },
        licenceType: {
          licenceType: 'instant',
        },
      },
      i18n: jest.fn(),
      onEdit: jest.fn(),
      onToggleModal: jest.fn(),
      onDelete: jest.fn(),
    };

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <OwnershipTable {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  test('renders with all props', () => {
    props = {
      ownership: {
        owner: [
          {
            nationality: 'India',
          },
        ],
      },
      items: [{ contactType: 'company', type: 'visitor' }],
      type: 'partner',
      optional: 'optional',
      disableActions: false,
      locale: 'ar',
      validate: true,
      legalForm: 'PJSCPublic',
      licenceType: 'branch',
      branchDetails: {
        branch: 'branchGCC',
        isGCC: {
          isGCC: true,
        },
      },
      countries: [],
      group: {
        representatives: [
          {
            visible: true,
            owner: {
              min: 49,
              max: 51,
            },
          },
        ],
      },
      files: {
        economicName: {
          tradeNameEn: 'test',
          tradeNameAr: 'test',
        },
        licenceType: {
          licenceType: 'instant',
        },
      },
      i18n: jest.fn(),
      onEdit: jest.fn(),
      onToggleModal: jest.fn(),
      onDelete: jest.fn(),
    };
    props.locale = 'ar';
    props.type = 'localAgent';
    props.items = false;
    props.legalForm = 'PJSCPublic';

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <OwnershipTable {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  test('renders with all props', () => {
    props = {
      ownership: {
        owner: [
          {
            nationality: 'India',
          },
        ],
      },
      items: [],
      type: 'manager',
      optional: 'optional',
      disableActions: false,
      locale: 'en',
      validate: true,
      legalForm: 'PJSCPublic',
      licenceType: 'branch',
      branchDetails: {
        branch: 'branchGCC',
        isGCC: {
          isGCC: true,
        },
      },
      countries: [],
      group: {
        representatives: [
          {
            visible: true,
            owner: {
              min: 49,
              max: 51,
            },
          },
        ],
      },
      files: {
        economicName: {
          tradeNameEn: 'test',
          tradeNameAr: 'test',
        },
        licenceType: {
          licenceType: 'instant',
        },
      },
      i18n: jest.fn(),
      onEdit: jest.fn(),
      onToggleModal: jest.fn(),
      onDelete: jest.fn(),
    };

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <OwnershipTable {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  test('renders with all props', () => {
    props = {
      ownership: {
        owner: [
          {
            nationality: 'India',
          },
        ],
      },
      items: [],
      type: 'localAgent',
      optional: 'optional',
      disableActions: false,
      locale: 'en',
      validate: true,
      legalForm: 'PJSCPublic',
      licenceType: 'branchForeign',
      branchDetails: {
        branch: 'branchGCC',
        isGCC: {
          isGCC: true,
        },
      },
      countries: [],
      group: {
        representatives: [
          {
            visible: true,
            owner: {
              min: 49,
              max: 51,
            },
          },
        ],
      },
      files: {
        economicName: {
          tradeNameEn: 'test',
          tradeNameAr: 'test',
        },
        licenceType: {
          licenceType: 'instant',
        },
      },
      i18n: jest.fn(),
      onEdit: jest.fn(),
      onToggleModal: jest.fn(),
      onDelete: jest.fn(),
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <OwnershipTable {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // setTimeout(() => {
    //   expect(getByText('establishment')).toBeInTheDocument();
    // }, 500);
  });

  test('renders with all props', () => {
    props = {
      ownership: {
        owner: [
          {
            nationality: 'India',
          },
        ],
      },
      items: [],
      type: 'partner',
      optional: 'optional',
      disableActions: false,
      locale: 'en',
      validate: true,
      legalForm: 'PJSCPublic',
      licenceType: 'branchForeign',
      branchDetails: {
        branch: 'branchGCC',
        isGCC: {
          isGCC: true,
        },
      },
      countries: [],
      group: {
        representatives: [
          {
            visible: true,
            owner: {
              min: 49,
              max: 51,
            },
          },
        ],
      },
      files: {
        economicName: {
          tradeNameEn: 'test',
          tradeNameAr: 'test',
        },
        licenceType: {
          licenceType: 'instant',
        },
      },
      i18n: jest.fn(),
      onEdit: jest.fn(),
      onToggleModal: jest.fn(),
      onDelete: jest.fn(),
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <OwnershipTable {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText('establishment')).toBeInTheDocument();
    }, 500);
  });
});
