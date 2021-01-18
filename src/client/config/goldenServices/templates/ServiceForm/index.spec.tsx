import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Home from './index';
import routes from '../../pages/AddApplicationInformation/index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/ServiceForm', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {},
      location: {},
      ...routes[0],
      onCheckboxChange: jest.fn(),
      goldenService: {
        isLoading: false,
        paymentInProgress: false,
        form: {
          time: '',
          telephone: '',
          transactionType: '',
          city: '',
          name: '',
          email: '',
          licenceNo: '',
          date: '',
          address: '',
          termAndCondition: false,
        },
      },
      history: {
        push: jest.fn(),
      },
      locale: {
        switch: jest.fn(),
      },
      i18n: (key: string) => key,
      actions: {
        goldenService: {
          update: jest.fn(),
        },
        stepsStatus: {
          update: jest.fn(),
        },
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
      ...routes[0].props,
    };
  });

  afterEach(cleanup);

  test('renders page', async () => {
    props.loggedIn = true;
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Home {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // expect(container).toMatchSnapshot();
    // fireEvent.click(getByLabelText('input-tel-header-toggler'));
    // const event = { target: { checked: true } };
    // fireEvent.click(getByText('check'), event);
  });

  test('renders page isLoading false', async () => {
    props.goldenService.isLoading = true;

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Home {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
