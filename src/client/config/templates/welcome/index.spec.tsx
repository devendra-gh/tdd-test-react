import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import { IVariables } from '@tamm/app-composer';
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
  let props: any;

  beforeEach(() => {
    props = {
      history: {
        push: jest.fn(),
      },
      locale: {
        switch: jest.fn(),
      },
      i18n: jest.fn(),
      title: 'test_button',
      buttons: [
        {
          label: 'test_button',
          uiType: 'primary',
          withArrow: true,
          onClick: jest.fn(),
        },
      ],
      applications: [],
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

  test('renders with all props', async () => {
    renderWithProps(props);
  });

  // test('renders with all props with applications', async () => {
  //   props = {
  //     ...props,
  //     applications: [
  //       {
  //         tradeNameEn: 'test',
  //         tradeNameAr: 'test',
  //         extraInfo: 'test',
  //         commercialLicenseStatus: 'test',
  //       },
  //     ],
  //   };

  //   const { getByLabelText, container } = renderWithProps(props);
  //   expect(container).toMatchSnapshot();
  //   fireEvent.click(getByLabelText('test_button'));
  //   fireEvent.change(getByLabelText('search_input'), {
  //     target: { value: 'test' },
  //   });
  //   fireEvent.click(
  //     container.querySelectorAll('.ui-lib-select__options-item')[0],
  //   );
  //   // fireEvent.click(getByLabelText('action-button'));
  // });

  // test('renders with all props with applications', async () => {
  //   props = {
  //     ...props,
  //     applications: [
  //       {
  //         tradeNameEn: 'test',
  //         tradeNameAr: 'test',
  //         extraInfo: 'test',
  //         commercialLicenseStatus: 'Issued',
  //       },
  //     ],
  //   };

  //   renderWithProps(props);
  // });
});
