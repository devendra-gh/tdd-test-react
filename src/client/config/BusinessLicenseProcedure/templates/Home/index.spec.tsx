import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Home from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Home', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {},
      location: {},
      onStart: jest.fn(),
      history: {
        push: jest.fn(),
      },
      locale: {
        switch: jest.fn(),
      },
      i18n: (key: string) => key,
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
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Home {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // (getByText('pleaseLogIn')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders loggedIn', async () => {
    props.loggedIn = true;
    const { getByText, container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Home {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('label.process')).toBeInTheDocument();
  });

  test('Should call props.history.push when start button clicked', () => {
    props.loggedIn = true;
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Home {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByLabelText('button-primary'));
    expect(props.onStart).toHaveBeenCalled();
  });
});
