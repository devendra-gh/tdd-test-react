import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
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

describe('config/templates/Welcome', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {},
      location: {},
      locale: {
        switch: jest.fn(),
      },
      i18n: jest.fn(),
      title: 'title',
      buttons: [
        {
          label: 'test_button',
          uiType: 'primary',
          withArrow: true,
          onClick: jest.fn(),
        },
      ],
    };
  });

  it('should render if loaddedIn is false', () => {
    props.loggedIn = false;
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Home {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
