import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Home from './index';

const mockStore = configureMockStore();
const store = mockStore({});

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/amendments/templates/Start', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      locale: 'en',
      onStart: jest.fn(),
    };
    window.matchMedia = jest.fn().mockImplementation(query => {
      return {
        matches: query === '(min-width: 992px)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });
  });

  it('should render if loggedIn is', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Provider store={store}>
              <Home {...props} />,
            </Provider>
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render if loggedIn is', () => {
    props = {
      ...props,
      locale: 'ar',
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Provider store={store}>
              <Home {...props} />,
            </Provider>
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should successfully render ', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Provider store={store}>
              <Home {...props} />,
            </Provider>
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['start'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      const nextButton = getByText(buttonName, {
        selector: 'button',
      });

      fireEvent.click(nextButton);
    });
  });
});
