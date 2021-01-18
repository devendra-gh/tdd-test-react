import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import Profile from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('renew-licence/templates/Profile', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      user: {
        Photo: 'Photo',
        IDN: '1111111111',
        'First Name EN': 'John',
        'Last Name EN': 'Doe',
        Gender: 'Male',
        'Nationality EN': 'UAE',
      },
      actions: {
        title: {
          update: jest.fn(),
        },
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

  test('renders a message', () => {
    render(
      <MemoryRouter>
        <Profile {...props} />
      </MemoryRouter>,
    );

    // expect(getByText('profile')).toBeInTheDocument();
  });
});
