import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import AccountUpgrade from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/templates/AccountUpgrade', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: (key: string) => key,
      match: {},
      location: {},
    };
  });

  it('should render default', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <AccountUpgrade {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
