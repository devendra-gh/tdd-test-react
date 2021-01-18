import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  // waitForElement,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import StatusLanding from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/CheckApplicationStatus/StatusLanding', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {},
      location: {},
      title: 'checkApplicationStatus.landingPage.title',
      description: 'checkApplicationStatus.landingPage.description',
      startLogin: {
        title: '',
        description:
          'checkApplicationStatus.landingPage.startLogin.description',
        onClick: jest.fn(),
        buttonLabel: 'checkApplicationStatus.button.start',
      },
      process: {
        title: 'checkApplicationStatus.landingPage.process.title',
        steps: [
          {
            label: 'checkApplicationStatus.step.1',
            description:
              'checkApplicationStatus.landingPage.process.step.1.description',
          },
          {
            label: 'checkApplicationStatus.step.2',
            description:
              'checkApplicationStatus.landingPage.process.step.2.description',
          },
        ],
      },
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
    };
  });

  afterEach(cleanup);

  test('Should call onClick when start button clicked', () => {
    props.loggedIn = true;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <StatusLanding {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByText('checkApplicationStatus.button.start'));
    expect(props.startLogin.onClick).toHaveBeenCalled();
  });
});
