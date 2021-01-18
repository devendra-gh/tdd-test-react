import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Profile from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('renew-licence/templates/Profile', () => {
  let props: IVariables;

  beforeEach(() => {
    props = {
      actions: {
        profile: {
          update: jest.fn(),
        },
      },
      i18n: jest.fn(i => i),
      history: {
        push: jest.fn(),
      },
      getPossibleRepTypes: jest.fn(() => {
        return [
          {
            id: 'partners',
            label: 'Owner',
          },
        ];
      }),
      onSubmit: jest.fn(() => {
        return {
          message: 'Success',
          data: {
            value: 'test',
          },
        };
      }),
      legalForm: 'establishment',
      // licenseType: 'tajer',
      licenseType: 'economicLicense',
      amendmentCategories: {
        category: {
          ownership: true,
          activities: false,
          tradeName: false,
          location: false,
          financialDetails: false,
        },
        ownership: {
          ownership: false,
          activities: false,
          tradeName: false,
          location: false,
          financialDetails: false,
        },
        isUploadStep: false,
      },
      licenceDetails: {
        partners: [],
        managers: [],
        representatives: [],
        localAgents: [],
        heirs: [],
      },
      profile: {
        representativeType: 'partners',
        profileType: 'Individual',
        action: 'update',
        index: -1,
        formValues: {
          type: 'Visitor',
          firstNameEn: 'asd',
          lastNameEn: 'asd',
          firstNameAr: 'asd',
          lastNameAr: 'asd',
          moiID: '123',
          bDate: '1993-04-27T20:00:00.000Z',
          nationality: 'Algeria',
          phoneNumber: '+971555555555',
          status: 'add',
        },
      },

      countryList: [
        {
          id: 'Afghanistan',
          label: 'Afghanistan',
        },
      ],
      pageLoading: true,
      validateProfileFailure: true,
    };
  });

  afterEach(cleanup);

  it('should renders all props', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Profile {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should renders all props', () => {
    props = {
      ...props,
      licenseType: 'instantLicense',
      profile: {
        ...props.profile,
        action: 'add',
      },
      // locale: 'ar',
    };
    const { container, getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Profile {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(container.querySelectorAll('.ui-lib-radio__input')[1]);
    const button = getByText('button.add', {
      selector: 'button',
    });

    fireEvent.click(button);
  });

  it('should renders submit failure', () => {
    props = {
      ...props,
      licenseType: 'instantLicense',
      profile: {
        ...props.profile,
        action: 'add',
      },
      onSubmit: jest.fn(() => {
        return {
          success: false,
          message: 'failed',
        };
      }),
    };

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Profile {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const button = getByText('button.add', {
      selector: 'button',
    });

    fireEvent.click(button);
  });

  it('should renders submit failure', () => {
    props = {
      ...props,
      licenseType: 'instantLicense',
      profile: {
        ...props.profile,
        action: 'add',
        formValues: {},
      },
    };

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Profile {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const button = getByText('button.add', {
      selector: 'button',
    });

    fireEvent.click(button);
  });

  it('renders a back button', () => {
    props.profile.action = 'add';
    props.profile.representativeType = '';
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Profile {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const button = getByText('button.back', {
      selector: 'button',
    });

    fireEvent.click(button);
  });
});
