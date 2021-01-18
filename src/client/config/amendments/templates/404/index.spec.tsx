import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
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

describe('amendments/templates/404', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {},
      location: {},
      i18n: (key: string) => key,
      backButtonLabel: 'button.backHome',
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should successfully render button and onClick', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Page404 {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = [props.backButtonLabel];
    Object.values(buttonClick).forEach((buttonName: string) => {
      const nextButton = getByText(buttonName, {
        selector: 'button',
      });
      fireEvent.click(nextButton);
    });
  });
});
