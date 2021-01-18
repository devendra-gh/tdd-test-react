import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import Home from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('BusinessSetupGuide/Home', () => {
  let props: any;

  beforeEach(() => {
    props = {
      categoriesEn: [{ icon: 'test', title: 'test' }],
      categoriesAr: [{ icon: 'test', title: 'test' }],
      locale: 'en',
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

  test('should render', () => {
    render(
      <MemoryRouter>
        <Home {...props} />
      </MemoryRouter>,
    );
  });

  test('should render with ar', () => {
    props.locale = 'ar';
    render(
      <MemoryRouter>
        <Home {...props} />
      </MemoryRouter>,
    );
  });
});
