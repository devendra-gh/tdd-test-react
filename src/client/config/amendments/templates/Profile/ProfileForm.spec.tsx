import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import ProfileForm from './ProfileForm';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('renew-licence/templates/Profile', () => {
  let props: any;

  beforeEach(() => {
    props = {
      legalForm: 'limitedLiabilityCompanyLLC',
      licenseType: 'economicLicense',
      representativeType: 'Partner',
      profileType: 'Individual',
      companyTypes: 'localCompany',
      formValues: {
        type: 'test',
      },
      licenceDetails: {
        partners: [
          {
            status: 'add',
          },
        ],
        managers: [],
        representatives: [],
        localAgents: [],
        heirs: [],
      },
      actions: {
        profile: {
          update: jest.fn(),
        },
      },
      i18n: jest.fn(),
      history: {
        push: jest.fn(),
      },
      validateOnSubmit: jest.fn(),
      changeProfileForm: jest.fn(),
      countryList: [{ date: 'test' }],
      profileValidatedResponse: {
        dateOfBirth: true,
        fullEnglishName: true,
        fullArabicName: true,
      },
    };
  });

  afterEach(cleanup);

  it('renders  ProfileForm', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ProfileForm {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('renders  ProfileForm else statement', () => {
    props.representativeType = '';
    props.profileType = '';

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ProfileForm {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('renders  ProfileForm else statement', () => {
    props.profileType = 'Company';

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ProfileForm {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
