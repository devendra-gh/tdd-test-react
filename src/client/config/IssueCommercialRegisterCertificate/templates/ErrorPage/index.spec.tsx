import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import ErrorPage from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Notice', () => {
  let props: any;

  beforeEach(() => {
    props = {
      location: {},
      match: {},
      i18n: jest.fn(i => i),
      locale: 'en',
      handleBackButton: jest.fn(i => i),
      breadcrumbs: [
        {
          label: 'home',
          link: '/',
        },
      ],
      actions: {
        breadcrumbs: {
          update: jest.fn(),
        },
      },
    };
  });

  afterEach(cleanup);

  it('should render with all props', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ErrorPage {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByLabelText('selectLicence.empty.button'));
  });
});
