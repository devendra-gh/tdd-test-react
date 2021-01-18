import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Welcome from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Welcome', () => {
  window.scrollTo = jest.fn();
  let props: IVariables;

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
      match: {},
      location: {},
      locale: {
        switch: jest.fn(),
      },
      i18n: jest.fn(),
      title: 'title',
      buttons: [
        {
          label: 'test_button',
          uiType: 'primary',
          withArrow: true,
          onClick: jest.fn(),
        },
      ],
      applications: [],
      history: {
        push: jest.fn(),
      },
    };
  });

  afterEach(cleanup);

  const renderWithProps = (data: IVariables) => {
    return render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Welcome {...data} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  };

  test('renders with no props', async () => {
    renderWithProps(props);
  });

  // test('renders with all props 1', async () => {
  //   props.applications = [
  //     {
  //       tradeNameEn: 'test',
  //       tradeNameAr: 'test',
  //       extraInfo: 'test',
  //       commercialLicenseStatus: 'test',
  //     },
  //   ];
  //   const { getByLabelText, container } = renderWithProps(props);

  //   expect(container).toMatchSnapshot();

  //   fireEvent.click(getByLabelText('test_button'));
  //   fireEvent.change(getByLabelText('search_input'), {
  //     target: { value: 'test' },
  //   });
  //   fireEvent.click(getByLabelText('action-button'));
  //   fireEvent.click(
  //     container.querySelectorAll('.ui-lib-select__options-item')[0],
  //   );
  // });

  // test('renders with all props 2', async () => {
  //   props.applications = [
  //     {
  //       tradeNameEn: 'test',
  //       tradeNameAr: 'test',
  //       extraInfo: 'test',
  //       commercialLicenseStatus: 'Issued',
  //     },
  //   ];
  //   const { getByLabelText } = renderWithProps(props);

  //   fireEvent.change(getByLabelText('search_input'), {
  //     target: { value: 'Issued' },
  //   });
  // });
});
