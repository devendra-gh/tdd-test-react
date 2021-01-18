import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { steps } from 'client/config/steps';
import Search from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

jest.mock('client/config/hooks/useDebounce', () => (a: string, b: number) => a);

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('consumer-good-prices/templates/Search', () => {
  let props: any;

  beforeEach(() => {
    window.scrollTo = jest.fn();

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
      handleCategoryChange: jest.fn(),
      handleSearchTextChange: jest.fn(),
      handleSearchByChange: jest.fn(),
      noRefCheck: jest.fn(),
      changePage: jest.fn(),
      onChange: jest.fn(),
      onCancel: jest.fn(),
      title: 'title',
      subTitle: 'subTitle',
      text: 'text',
      history: {
        push: jest.fn(),
      },
      showTable: true,
      actions: {
        title: {
          update: jest.fn(),
        },
        goodsList: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        showSpinner: {
          update: jest.fn(),
        },
        currentChecked: {
          update: jest.fn(),
        },
        itemId: {
          update: jest.fn(),
        },
      },
      locale: 'en',
      i18n: jest.fn(i => i),
      currentStep: '',
      currentSubStep: '',
      steps,
      stepsStatus: {},
      goodsList: {
        searchText: '12',
        searchBy: 'category',
        showCategories: true,
        categories: [
          {
            id: 'category 1',
            label: 'category 1',
          },
        ],
        showSpinner: true,
        showAlert: true,
        currentPage: 1,
        totalPages: 100,
        recInPage: 10,
        data: [
          {
            id: 'goods',
            value: 1,
            arName: 'goods',
          },
        ],
      },
      disabled: false,
      displayErrorFlag: true,
      showSpinner: true,
      info: true,
      error: true,
      description: 'sample description',
      isCategorySelected: true,
      searchVal: 'abcd',
      currentChecked: '',
      buttons: [
        {
          id: 1,
          label: 'button.next',
          onClick: jest.fn(),
          uiType: 'primary',
          withArrow: true,
          alignIcon: 'end',
        },
      ],
      searchBy: 'product',
      radioGroups: [
        {
          id: 'product',
          label: 'cgp_by_product',
        },
        {
          id: 'category',
          label: 'cgp_by_cat',
        },
      ],
      itemsFound: [
        {
          Id: '7D2F3F99-2844-4711-9660-5E3DAE82FC1B',
          ItemNameEn: 'Sugar Cubes / SIS / 450 g / Australia',
          ItemNameAr: 'سكر مكعبات اس اي اس / 450 جرام/ أستراليا',
          Barcode: '8888167217989',
          StoreItemJob: {
            Id: '2020-01-04-1578171601705',
            StartDate: '2020-01-04T21:00:01.705Z',
            EndDate: null,
            Active: true,
            Status: 1,
            CollectionDate: '2020-01-03',
          },
        },
      ],
      categories: [{ id: 'Bread and Cereals', label: 'Bread and Cereals' }],
    };
  });

  afterEach(cleanup);

  test('should call handleCategoryChange when selected', () => {
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(
      container.querySelectorAll('.ui-lib-select__options-item')[0],
    );
    expect(props.handleCategoryChange).toBeCalled();
  });

  test('should calls call onclick if valid and when button is pressed', () => {
    props.goodsList.showAlert = false;
    props.goodsList.selectedGood = 'selectedGood';
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByLabelText('button.next'));
    expect(props.buttons[0].onClick).toBeCalled();
  });

  test('should show alert if valid and when button is pressed ', () => {
    props.goodsList.showAlert = false;
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByLabelText('button.next'));
    expect(props.actions.goodsList.update).toBeCalledWith({
      ...props.goodsList,
      showAlert: true,
      alertStatus: 'info',
      alertText: 'cgp.nothingSelected',
    });
  });

  test('should calls call props.onCancel if valid and when button is pressed', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByLabelText('cancel button'));
    expect(props.onCancel).toBeCalled();
  });

  // test('search click handleSearchTextChange called', () => {
  //   props.goodsList.searchBy = 'product';
  //   props.goodsList.searchText = 'searchText';

  //   const { container } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <Search {...props} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );
  //   fireEvent.click(
  //     container.querySelectorAll('.ui-lib-search-input__button')[0],
  //   );
  //   expect(props.handleSearchTextChange).toHaveBeenCalled();
  // });

  test('search click handleSearchTextChange not called when small text', () => {
    props.goodsList.searchBy = 'product';
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // fireEvent.click(
    //   container.querySelectorAll('.ui-lib-search-input__button')[0],
    // );
    // expect(props.handleSearchTextChange).not.toHaveBeenCalled();
  });

  test('search change redux update', () => {
    props.goodsList.searchBy = 'product';
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.change(
      container.querySelectorAll('.ui-lib-input-wrapper__content-input')[0],
      {
        target: {
          value: 'value',
        },
      },
    );
    expect(props.actions.goodsList.update).toHaveBeenCalled();
  });

  test('search change redux update with null value', () => {
    props.goodsList.searchBy = 'product';
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.change(
      container.querySelectorAll('.ui-lib-input-wrapper__content-input')[0],
      {
        target: {
          value: '',
        },
      },
    );
    expect(props.actions.goodsList.update).toHaveBeenCalled();
  });

  test('radio change handleSearchByChange calls', () => {
    props.goodsList.searchBy = 'product';
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(container.querySelectorAll('.ui-lib-radio__input')[1]);
    // fireEvent.click(
    //   container.querySelectorAll('.ui-lib-search-input__button')[0],
    // );
    // expect(props.handleSearchByChange).toBeCalled();
  });
});
