import React from 'react';
import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import ErrorPage from './index';

import { constants, functions } from '../../helper';
import { PATH_FIND_LICENCE } from '../../routes';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Notice', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      actions: {
        locale: {
          switch: jest.fn(),
        },
        breadcrumbs: {
          update: jest.fn(),
        },
      },
      history: { push: jest.fn() },
      locale: 'en',
      handleBackButton: jest.fn(i => i),
      currentStep: 'findLicence',
      content: 'errorPage.text',
      title: 'errorPage.title',
      status: 'failure',
      breadcrumbs: constants.BREADCRUMBS,
      button: {
        label: 'button.back',
        withArrow: true,
        uiType: 'secondary',
        alignIcon: 'start',
        onClick: () => functions.handleRedirectLink(props, PATH_FIND_LICENCE),
      },
    };
  });

  afterEach(cleanup);

  it('should render with all props', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ErrorPage {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText(props.title)).toBeInTheDocument();
    }, 5000);
  });
  it('should render when the back button is pressed', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ErrorPage {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const button = await waitForElement(() => getByLabelText('button'));
    fireEvent.click(button);
    expect(props.history.push).toBeCalledWith(PATH_FIND_LICENCE);
  });
  it('should render when the back button is pressed', async () => {
    delete props.button.uiType;
    delete props.button.alignIcon;
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ErrorPage {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const button = await waitForElement(() => getByLabelText('button'));
    fireEvent.click(button);
    expect(props.history.push).toBeCalledWith(PATH_FIND_LICENCE);
  });
});
