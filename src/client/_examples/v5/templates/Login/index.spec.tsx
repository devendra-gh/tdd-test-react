import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Login } from './index';

describe('config/v5/templates/Login', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {
        params: {},
      },
      history: {
        push: jest.fn(),
      },
      location: {},
      loggedIn: false,
      i18n: jest.fn(i => i),
    };
  });

  afterEach(cleanup);

  it('should render', async () => {
    await act(async () => {
      delete global.window.location;
      // @ts-ignore
      global.window.location = { href: 'http://localhost' };

      const { getByText } = render(
        <MemoryRouter>
          <Login {...props} />
        </MemoryRouter>,
      );
      getByText('pleaseLogIn');
    });
  });

  it('should render with smartpass login', async () => {
    await act(async () => {
      delete global.window.location;
      // @ts-ignore
      global.window.location = { href: 'http://stage' };

      const { getByText } = render(
        <MemoryRouter>
          <Login {...props} />
        </MemoryRouter>,
      );
      getByText('pleaseLogIn');
    });
  });

  it('should render loggedIn', async () => {
    await act(async () => {
      props.loggedIn = true;

      const { getByText } = render(
        <MemoryRouter>
          <Login {...props} />
        </MemoryRouter>,
      );
      getByText('getLicence');
    });
  });
});
