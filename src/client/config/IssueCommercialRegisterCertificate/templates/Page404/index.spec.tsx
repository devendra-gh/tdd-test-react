import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Page404 from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/Page404', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {},
      location: {},
      i18n: jest.fn(),
      label: 'home',
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should handle button onClick', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Page404 {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const button = await waitForElement(() => getByLabelText('button'));
    fireEvent.click(button);
  });
});
