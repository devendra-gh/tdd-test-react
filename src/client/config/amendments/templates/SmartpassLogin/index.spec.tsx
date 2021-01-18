import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Login from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/SmartpassLogin', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      description: 'smartpass login',
      smartpassText: 'test',
      uaepassText: 'test',
      smartpassLink: 'test link',
      uaepassLink: 'test link',
      smartpassOnClick: jest.fn(),
      uaepassOnClick: jest.fn(),
    };
  });
  afterEach(cleanup);

  it('should render with all props', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Login {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // setTimeout(() => {
    //   expect(getByText(props.description)).toBeInTheDocument();
    // }, 500);
  });
});
