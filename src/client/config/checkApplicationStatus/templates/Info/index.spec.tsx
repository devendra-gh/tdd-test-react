import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import StatusInfo from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/CheckApplicationStatus/StatusInfo', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {},
      location: {},
      status: '',
      titlePrefix: jest.fn(), // 'checkApplicationStatus.infoPage.titlePrefix',
      init: jest.fn(),
      currentStep: 'checkApplicationStatus.step.2',
      getStatus: jest.fn(),
      content: 'checkApplicationStatus.infoPage.content',
      history: [],
      formApplicationNumber: {
        applicationNumber: '',
        isSubmitted: false,
      },
      loggedIn: true,
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

  test('Should call onDisplayStatus after rendering notice', () => {
    props.loggedIn = true;
    const newProps = {
      ...props,
      ...{
        applicationStatusResponse: { applicationStatus: 'Open' },
        statusRecieved: true,
      },
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <StatusInfo {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(props.init).toHaveBeenCalled();
  });

  test('Should call onClick when back button clicked', () => {
    props.loggedIn = true;
    const newProps = {
      ...props,
      ...{
        applicationStatusResponse: { applicationStatus: 'Open' },
        statusRecieved: true,
      },
    };
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <StatusInfo {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByLabelText('button-secondary'));
    expect(props.history).toContain('/application-status/enter-number');
  });
});
