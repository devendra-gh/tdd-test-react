import React from 'react';
import { render, getByText, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import Login from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('renew-licence/templates/Login', () => {
  let props: any;
  const { location } = window;
  window.scrollTo = jest.fn();

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
      i18n: (key: string) => key,
      match: {},
      location: {},
    };
  });

  afterEach(cleanup);

  it('should render if loaddedIn is false', () => {
    props.loggedIn = false;
    const { container } = render(
      <MemoryRouter>
        <Login {...props} />
      </MemoryRouter>,
    );
    expect(
      getByText(
        container,
        'SmartPass is your digital credential to access UAE Government services',
      ),
    ).toBeInTheDocument();
  });

  it('should render if loaddedIn is false with tamm user', () => {
    props.loggedIn = false;
    const target = 'https://www.tamm.abudhabi/';
    window.location.href = target;

    const { container } = render(
      <MemoryRouter>
        <Login {...props} />
      </MemoryRouter>,
    );

    expect(window.location.href).toBe(target);
    expect(
      getByText(
        container,
        'SmartPass is your digital credential to access UAE Government services',
      ),
    ).toBeInTheDocument();
  });
});
