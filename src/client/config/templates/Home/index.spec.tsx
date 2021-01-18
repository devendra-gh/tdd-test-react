import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import Home from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Home', () => {
  let props: any;

  beforeEach(() => {
    props = {
      locale: {
        switch: jest.fn(),
      },
      i18n: jest.fn(),
      actions: {
        locale: {
          switch: jest.fn(),
        },
        breadcrumbs: {
          update: jest.fn(),
        },
        title: {
          update: jest.fn(),
        },
        hero: {
          update: jest.fn(),
        },
      },
      loggedIn: false,
    };
  });

  afterEach(cleanup);

  test('renders a message', () => {
    render(
      <MemoryRouter>
        <Home {...props} />
      </MemoryRouter>,
    );

    // setTimeout(() => {
    //   expect(getByText('pleaseLogIn')).toBeInTheDocument();
    // }, 500);
  });

  test('renders loggedIn', () => {
    props.loggedIn = true;
    render(
      <MemoryRouter>
        <Home {...props} />
      </MemoryRouter>,
    );

    // setTimeout(() => {
    //   expect(getByText('getLicence')).toBeInTheDocument();
    // }, 500);
  });
});
