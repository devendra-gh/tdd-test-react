import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import Login from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Login', () => {
  let props: any;
  const { location } = window;

  beforeAll((): void => {
    delete window.location;
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    window.location = {
      href: 'http://localhost',
    };
  });

  afterAll((): void => {
    window.location = location;
  });

  beforeEach(() => {
    props = {
      actions: {
        loggedIn: {
          update: jest.fn(),
        },
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
      history: {
        push: jest.fn(),
      },
      loggedIn: true,
    };
  });

  afterEach(cleanup);

  it('should render', () => {
    render(
      <MemoryRouter>
        <Login {...props} />
      </MemoryRouter>,
    );

    // setTimeout(() => {
    //   expect(getByText('getLicence')).toBeInTheDocument();
    // }, 500);
  });

  it('should render when not loggedIn', () => {
    props.loggedIn = false;
    render(
      <MemoryRouter>
        <Login {...props} />
      </MemoryRouter>,
    );

    // setTimeout(() => {
    //   expect(getByText('getLicence')).toBeInTheDocument();
    // }, 500);
  });

  it('should render when not loggedIn', () => {
    props.loggedIn = false;
    const target = 'https://www.tamm.abudhabi/';
    window.location.href = target;

    const { getByText } = render(
      <MemoryRouter>
        <Login {...props} />
      </MemoryRouter>,
    );

    expect(window.location.href).toBe(target);
    setTimeout(() => {
      expect(getByText('getLicence')).toBeInTheDocument();
    }, 500);
  });
});
