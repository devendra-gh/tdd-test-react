import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import FakeSubmit from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Summary', () => {
  let props: IVariables;

  beforeEach(() => {
    props = {
      onSubmit: jest.fn(),
      i18n: jest.fn(),
      locale: 'en',
      loggedIn: false,
    };
  });

  it('should render with all props', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FakeSubmit {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with all props', async () => {
    props = {
      ...props,
      loggedIn: true,
    };

    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FakeSubmit {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const button2 = await waitForElement(() =>
      getByLabelText('button-primary2'),
    );
    fireEvent.click(button2);
  });

  it('should render with all props', async () => {
    props = {
      ...props,
      loggedIn: true,
    };
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FakeSubmit {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const button3 = await waitForElement(() =>
      getByLabelText('button-primary3'),
    );
    fireEvent.click(button3);
  });

  it('should render with all props', async () => {
    props = {
      ...props,
      loggedIn: true,
    };
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FakeSubmit {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const button4 = await waitForElement(() =>
      getByLabelText('button-primary4'),
    );
    fireEvent.click(button4);
  });

  it('should render with all props', async () => {
    props = {
      ...props,
      loggedIn: true,
    };
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FakeSubmit {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const button5 = await waitForElement(() =>
      getByLabelText('button-primary5'),
    );
    fireEvent.click(button5);
  });

  it('should render with all props', async () => {
    props = {
      ...props,
      loggedIn: true,
    };
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FakeSubmit {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const button6 = await waitForElement(() =>
      getByLabelText('button-primary6'),
    );
    fireEvent.click(button6);
  });

  it('should render with all props', async () => {
    props = {
      ...props,
      loggedIn: true,
    };
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FakeSubmit {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const button7 = await waitForElement(() =>
      getByLabelText('button-primary7'),
    );
    fireEvent.click(button7);
  });
});
