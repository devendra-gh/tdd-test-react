import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Container from './index';

describe('client/containers', () => {
  let props: any;

  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    props = {
      locale: 'en',
      sidebar: null,
    };
  });

  afterEach(cleanup);

  test('renders', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Container {...props}>Content</Container>
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(getByText('Content')).toBeInTheDocument();
  });

  test('render with en sidebar', () => {
    props.sidebar = <div>Sidebar</div>;

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Container {...props}>Content</Container>
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(getByText('Sidebar')).toBeInTheDocument();
    expect(getByText('Content')).toBeInTheDocument();
  });

  test('render with ar sidebar', () => {
    props.locale = 'ar';
    props.sidebar = <div>Sidebar</div>;

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Container {...props}>Content</Container>
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(getByText('Sidebar')).toBeInTheDocument();
    expect(getByText('Content')).toBeInTheDocument();
  });
});
