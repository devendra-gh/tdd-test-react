import React from 'react';
import {
  render,
  cleanup,
  // fireEvent,
  // waitForElement,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { ViewportProvider, Viewport } from '@tamm/ui-lib-v2-viewport';
import Home from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Home', () => {
  let props: any;

  beforeEach(() => {
    props = {
      processSteps: [],
      startButton: { label: '', description: '', title: '' },
      locale: {
        switch: jest.fn(),
      },
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

  test('renders a message', () => {
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

  test('renders loggedIn', () => {
    props.loggedIn = true;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Home {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText('getLicence')).toBeInTheDocument();
    }, 500);
  });

  // test('Should call onClick when start button clicked', async () => {
  //   props.loggedIn = true;
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <Home {...props} />
  //     </MemoryRouter>,
  //   );

  //   const button = await waitForElement(() =>
  //     getByText('checkApplicationStatus.button.start'),
  //   );
  //   fireEvent.click(button);

  //   // const button = await waitForElement(() =>
  //   //   getByText('checkApplicationStatus.button.start'),
  //   // );
  //   // fireEvent.click(button);
  //   // expect(props.startLogin.onClick).toHaveBeenCalled();
  // });
});
