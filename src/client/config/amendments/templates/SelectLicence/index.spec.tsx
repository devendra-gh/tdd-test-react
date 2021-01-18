import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import SelectLicence from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Start', () => {
  let props: IVariables;
  beforeEach(() => {
    props = {
      locale: {
        switch: jest.fn(),
      },
      i18n: (key: string) => key,
      title: 'title',
      filterSearchTradeLicenseList: jest.fn(() => {
        return {
          data: {
            status: 'Start',
            tradeLicenseNumber: 'CN-2972448',
            ioDetails: '0',
          },
        };
      }),
      handlePagination: jest.fn(),
      tradeLicenceList: {
        data: [
          {
            status: 'Start',
            tradeLicenseNumber: 'CN-2972448',
            ioDetails: '0',
          },
          {
            status: 'Continue',
            tradeLicenseNumber: 'CN-2972449',
            ioDetails: '0',
          },
        ],
      },
      buttons: [
        {
          label: 'test_button',
          uiType: 'primary',
          withArrow: true,
          onClick: jest.fn(),
        },
      ],
      pageLoading: true,
      amendmentServerError: true,
      commundaError: true,
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should render with all props', async () => {
    const { getByText, container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // const input = await waitForElement(
    //   () =>
    //     container.querySelectorAll(
    //       '.ui-lib-pagination__item ui-lib-pagination__item_page',
    //     )[0],
    // );
    // fireEvent.click(input);

    fireEvent.click(
      container.querySelectorAll('.ui-lib-select__options-item')[0],
    );

    fireEvent.change(
      container.querySelectorAll('.ui-lib-input-wrapper__content-input')[0],
      {
        target: {
          value: 'CN-2972448',
        },
      },
    );
    // fireEvent.click(
    //   container.querySelectorAll('.ui-lib-search-input__button')[0],
    //   {
    //     target: {
    //       value: '',
    //     },
    //   },
    // );
    // fireEvent.click(
    //   container.querySelectorAll('.ui-lib-search-input__button')[0],
    //   {
    //     target: {
    //       value: 'CN-2972448',
    //     },
    //   },
    // );

    const button = getByText('button.back', {
      selector: 'button',
    });

    fireEvent.click(button);
  });
  it('should render tradeLicenceList with empty', async () => {
    props = {
      ...props,
      tradeLicenceList: {
        data: [],
      },
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
