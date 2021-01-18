import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import InvestmentCompass from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('components/investmentCompass', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      categories: [{ link: 'link', icon: 'icon', title: 'title' }],
    };
  });

  afterEach(cleanup);

  it('should render the component properly', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <InvestmentCompass {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText('title')).toBeInTheDocument();
    }, 500);
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('Prod user', () => {
    const { location } = window;

    beforeAll((): void => {
      delete window.location;
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      window.location = null;
    });

    afterAll((): void => {
      window.location = location;
    });

    it('should render the component properly with prod user', async () => {
      const { getByText } = render(
        <MemoryRouter>
          <ViewportProvider>
            <Viewport sm md lg xl>
              <InvestmentCompass {...props} />
            </Viewport>
          </ViewportProvider>
        </MemoryRouter>,
      );

      expect(window.location).toBe(null);
      setTimeout(() => {
        expect(getByText('title')).toBeInTheDocument();
      }, 500);
    });
  });
});
