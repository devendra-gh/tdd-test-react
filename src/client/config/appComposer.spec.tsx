import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import AppComposerEconomicLicense from './appComposer';

jest.mock('./index', () => ({
  config: {},
}));

jest.mock('@tamm/app-composer', () => (i: any) => '');

jest.mock('client/utils/appData', () => ({
  getCMSData: () => () => ({ metaTags: { a: 'a' } }),
  getSmartpassData: () => () => ({ metaTags: { a: 'a' } }),
  getMetaData: () => () => ({ metaTags: { a: 'a' } }),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('', () => {
  let props: any;

  beforeEach(() => {
    props = {};
  });

  afterEach(cleanup);

  test('renders with props', () => {
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <AppComposerEconomicLicense {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
