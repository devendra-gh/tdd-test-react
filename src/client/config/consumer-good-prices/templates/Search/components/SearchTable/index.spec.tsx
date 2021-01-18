import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { steps } from 'client/config/steps';
import SearchTable, { noRefCheck } from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('consumer-good-prices/templates/Search', () => {
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
      handleGoodsRadioChange: jest.fn(),
      handlePageChange: jest.fn(),
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
        },
        showSpinner: {
          update: jest.fn(),
        },
        currentChecked: {
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
        batchDate: '2020-02-09T06:23:37.803Z',
        selectedGood: 'selectedGood',
        showTable: true,
        currentPage: 1,
        totalCount: 100,
        recInPage: 10,
        data: [
          {
            id: '123',
            enName: 'goods',
            value: 1,
            arName: 'goods',
          },
          {
            id: null,
            enName: 'goods',
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
          label: 'button.next1',
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

  test('renders with props', () => {
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SearchTable {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('clicking actions should call corret functions', () => {
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SearchTable {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    noRefCheck();
    // fireEvent.click(getByLabelText('Prev'));
    fireEvent.click(container.querySelectorAll('.ui-lib-radio__input')[0]);
    expect(props.handleGoodsRadioChange).toBeCalled();
    expect(props.handlePageChange).not.toBeCalled();
  });
});
