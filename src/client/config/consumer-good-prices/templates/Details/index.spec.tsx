import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Details from './index';
import fetchGoodsDetail from '../../services/getItem';

jest.mock('../../services/getItem');

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
  noticeTypes: {
    INFO: 'INFO',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
  },
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Details', () => {
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
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      resetFilter: jest.fn(),
      filterData: jest.fn(),
      sorting: jest.fn(),
      getDetails: fetchGoodsDetail,
      currentGoods: [1, 2, 3, 4, 5, 6, 7].map(i => ({
        id: i,
        itemNameEn: "Kellogg's Corn Flakes 500 gm / Germany",
        itemNameAr: 'كورن فليكس / 500 جرام / ألمانيا',
        storeEn: 'KM Trading',
        storeAr: 'ك. ام للتجارة',
        barCode: '4003994111901',
        barCodeType: 'INTL',
        storeItemJobId: '2019-10-29-1572342275675',
        locationEn: 'ALAIN',
        locationAr: 'العين',
        price: i * 10000,
        collectionDate: '2019-10-27T20:00:00.000Z',
        mainCategoryEn: 'Food and Beverages',
        mainCategoryAr: 'الاغذية والمشروبات ',
        subCategoryEn: 'Food',
        subCategoryAr: 'الاغذية',
        detailedCategoryEn: 'Bread and Cereals',
        detailedCategoryAr: 'الخبز والحبوب',
        storeItemJob: {
          id: '2019-10-29-1572342275675',
          startDate: '2019-10-29T09:44:35.675Z',
          endDate: null,
          active: true,
          status: 1,
          collectionDate: '2019-10-27',
        },
      })),
      handlePagination: jest.fn(),
      i18n: (key: string) => key,
      title: 'Details',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
      location: {
        search:
          '?retailer=KM%20TRADING,LULU,SPAR&locations=Al%20Ain,Abu%20Dhabi',
      },
      fetched: true,
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      buttons: [
        {
          label: 'back-button',
          onClick: jest.fn(),
        },
      ],
      steps: [],
      stepStatus: {
        economic_name: 'economic_name',
        'economic_name.payment': 'economic_name.payment',
      },
      list: {
        labelHeading: 'label',
        valueHeading: 'value',
        listDetails: {
          label: 'label',
          value: 'value',
        },
      },
      sortByItems: [
        {
          id: 'None',
          label: 'None',
        },
        {
          id: 'asc',
          label: 'Low to High',
        },
        {
          id: 'desc',
          label: 'High to Low',
        },
      ],
    };
  });

  it('should render with all props', async () => {
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Details {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with all props, ar', async () => {
    props.locale = 'ar';
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Details {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render without response.length', async () => {
    props.currentGoods = [];
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Details {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('pressing back button action', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Details {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByLabelText('back-button'));
    expect(props.buttons[0].onClick).toBeCalled();
  });

  it('sort change', async () => {
    Object.assign(window, { innerWidth: 2000 });
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Details {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // expect(queryByText('70000')).not.toBeInTheDocument();
    // fireEvent.click(
    //   container.querySelectorAll('.ui-lib-dropdown__content-item')[2],
    // );
    // expect(queryByText('70000')).toBeInTheDocument();
  });

  it('location filter', async () => {
    Object.assign(window, { innerWidth: 2000 });
    props.currentGoods = [
      {
        id: '1',
        itemNameEn: "Kellogg's Corn Flakes 500 gm / Germany",
        itemNameAr: 'كورن فليكس / 500 جرام / ألمانيا',
        storeEn: 'KM Trading',
        storeAr: 'ك. ام للتجارة',
        barCode: '4003994111901',
        barCodeType: 'INTL',
        storeItemJobId: '2019-10-29-1572342275675',
        locationEn: 'ALAIN',
        locationAr: 'العين',
        price: 10000,
        collectionDate: '2019-10-27T20:00:00.000Z',
        mainCategoryEn: 'Food and Beverages',
        mainCategoryAr: 'الاغذية والمشروبات ',
        subCategoryEn: 'Food',
        subCategoryAr: 'الاغذية',
        detailedCategoryEn: 'Bread and Cereals',
        detailedCategoryAr: 'الخبز والحبوب',
        storeItemJob: {
          id: '2019-10-29-1572342275675',
          startDate: '2019-10-29T09:44:35.675Z',
          endDate: null,
          active: true,
          status: 1,
          collectionDate: '2019-10-27',
        },
      },
      {
        id: '2',
        itemNameEn: "Kellogg's ABUDHABI Corn Flakes 500 gm / Germany",
        itemNameAr: 'كورن فليكس / 500 جرام / ألمانيا',
        storeEn: 'KM Trading',
        storeAr: 'ك. ام للتجارة',
        barCode: '4003994111901',
        barCodeType: 'INTL',
        storeItemJobId: '2019-10-29-1572342275675',
        locationEn: 'ABUDHABI',
        locationAr: 'العين',
        price: 20000,
        collectionDate: '2019-10-27T20:00:00.000Z',
        mainCategoryEn: 'Food and Beverages',
        mainCategoryAr: 'الاغذية والمشروبات ',
        subCategoryEn: 'Food',
        subCategoryAr: 'الاغذية',
        detailedCategoryEn: 'Bread and Cereals',
        detailedCategoryAr: 'الخبز والحبوب',
        storeItemJob: {
          id: '2019-10-29-1572342275675',
          startDate: '2019-10-29T09:44:35.675Z',
          endDate: null,
          active: true,
          status: 1,
          collectionDate: '2019-10-27',
        },
      },
    ];
    const { container, queryByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Details {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(queryByText('10000')).toBeInTheDocument();
    fireEvent.click(container.querySelectorAll('.ui-lib-checkbox__input')[2]);
    fireEvent.click(
      container.querySelectorAll('.ui-lib-filter__controls')[0].children[0],
    );
    expect(queryByText('10000')).not.toBeInTheDocument();
  });

  it('retailer filter change', async () => {
    Object.assign(window, { innerWidth: 2000 });
    props.currentGoods = [
      {
        id: '1',
        itemNameEn: "Kellogg's Corn Flakes 500 gm / Germany",
        itemNameAr: 'كورن فليكس / 500 جرام / ألمانيا',
        storeEn: 'retailer 1',
        storeAr: 'ك. ام للتجارة',
        barCode: '4003994111901',
        barCodeType: 'INTL',
        storeItemJobId: '2019-10-29-1572342275675',
        locationEn: 'ALAIN',
        locationAr: 'العين',
        price: 10000,
        collectionDate: '2019-10-27T20:00:00.000Z',
        mainCategoryEn: 'Food and Beverages',
        mainCategoryAr: 'الاغذية والمشروبات ',
        subCategoryEn: 'Food',
        subCategoryAr: 'الاغذية',
        detailedCategoryEn: 'Bread and Cereals',
        detailedCategoryAr: 'الخبز والحبوب',
        storeItemJob: {
          id: '2019-10-29-1572342275675',
          startDate: '2019-10-29T09:44:35.675Z',
          endDate: null,
          active: true,
          status: 1,
          collectionDate: '2019-10-27',
        },
      },
      {
        id: '2',
        itemNameEn: "Kellogg's ABUDHABI Corn Flakes 500 gm / Germany",
        itemNameAr: 'كورن فليكس / 500 جرام / ألمانيا',
        storeEn: 'KM Trading',
        storeAr: 'ك. ام للتجارة',
        barCode: '4003994111901',
        barCodeType: 'INTL',
        storeItemJobId: '2019-10-29-1572342275675',
        locationEn: 'retailer 2',
        locationAr: 'العين',
        price: 20000,
        collectionDate: '2019-10-27T20:00:00.000Z',
        mainCategoryEn: 'Food and Beverages',
        mainCategoryAr: 'الاغذية والمشروبات ',
        subCategoryEn: 'Food',
        subCategoryAr: 'الاغذية',
        detailedCategoryEn: 'Bread and Cereals',
        detailedCategoryAr: 'الخبز والحبوب',
        storeItemJob: {
          id: '2019-10-29-1572342275675',
          startDate: '2019-10-29T09:44:35.675Z',
          endDate: null,
          active: true,
          status: 1,
          collectionDate: '2019-10-27',
        },
      },
      {
        id: '3',
        itemNameEn: "Kellogg's Corn Flakes 500 gm / Germany",
        itemNameAr: 'كورن فليكس / 500 جرام / ألمانيا',
        storeEn: 'retailer 1',
        storeAr: 'ك. ام للتجارة',
        barCode: '4003994111901',
        barCodeType: 'INTL',
        storeItemJobId: '2019-10-29-1572342275675',
        locationEn: 'ALAIN',
        locationAr: 'العين',
        price: 10000,
        collectionDate: '2019-10-27T20:00:00.000Z',
        mainCategoryEn: 'Food and Beverages',
        mainCategoryAr: 'الاغذية والمشروبات ',
        subCategoryEn: 'Food',
        subCategoryAr: 'الاغذية',
        detailedCategoryEn: 'Bread and Cereals',
        detailedCategoryAr: 'الخبز والحبوب',
        storeItemJob: {
          id: '2019-10-29-1572342275675',
          startDate: '2019-10-29T09:44:35.675Z',
          endDate: null,
          active: true,
          status: 1,
          collectionDate: '2019-10-27',
        },
      },
      {
        id: '4',
        itemNameEn: "Kellogg's ABUDHABI Corn Flakes 500 gm / Germany",
        itemNameAr: 'كورن فليكس / 500 جرام / ألمانيا',
        storeEn: 'KM Trading',
        storeAr: 'ك. ام للتجارة',
        barCode: '4003994111901',
        barCodeType: 'INTL',
        storeItemJobId: '2019-10-29-1572342275675',
        locationEn: 'retailer 2',
        locationAr: 'العين',
        price: 20000,
        collectionDate: '2019-10-27T20:00:00.000Z',
        mainCategoryEn: 'Food and Beverages',
        mainCategoryAr: 'الاغذية والمشروبات ',
        subCategoryEn: 'Food',
        subCategoryAr: 'الاغذية',
        detailedCategoryEn: 'Bread and Cereals',
        detailedCategoryAr: 'الخبز والحبوب',
        storeItemJob: {
          id: '2019-10-29-1572342275675',
          startDate: '2019-10-29T09:44:35.675Z',
          endDate: null,
          active: true,
          status: 1,
          collectionDate: '2019-10-27',
        },
      },
      {
        id: '5',
        itemNameEn: "Kellogg's Corn Flakes 500 gm / Germany",
        itemNameAr: 'كورن فليكس / 500 جرام / ألمانيا',
        storeEn: 'retailer 1',
        storeAr: 'ك. ام للتجارة',
        barCode: '4003994111901',
        barCodeType: 'INTL',
        storeItemJobId: '2019-10-29-1572342275675',
        locationEn: 'ALAIN',
        locationAr: 'العين',
        price: 10000,
        collectionDate: '2019-10-27T20:00:00.000Z',
        mainCategoryEn: 'Food and Beverages',
        mainCategoryAr: 'الاغذية والمشروبات ',
        subCategoryEn: 'Food',
        subCategoryAr: 'الاغذية',
        detailedCategoryEn: 'Bread and Cereals',
        detailedCategoryAr: 'الخبز والحبوب',
        storeItemJob: {
          id: '2019-10-29-1572342275675',
          startDate: '2019-10-29T09:44:35.675Z',
          endDate: null,
          active: true,
          status: 1,
          collectionDate: '2019-10-27',
        },
      },
      {
        id: '6',
        itemNameEn: "Kellogg's ABUDHABI Corn Flakes 500 gm / Germany",
        itemNameAr: 'كورن فليكس / 500 جرام / ألمانيا',
        storeEn: 'KM Trading',
        storeAr: 'ك. ام للتجارة',
        barCode: '4003994111901',
        barCodeType: 'INTL',
        storeItemJobId: '2019-10-29-1572342275675',
        locationEn: 'retailer 2',
        locationAr: 'العين',
        price: 20000,
        collectionDate: '2019-10-27T20:00:00.000Z',
        mainCategoryEn: 'Food and Beverages',
        mainCategoryAr: 'الاغذية والمشروبات ',
        subCategoryEn: 'Food',
        subCategoryAr: 'الاغذية',
        detailedCategoryEn: 'Bread and Cereals',
        detailedCategoryAr: 'الخبز والحبوب',
        storeItemJob: {
          id: '2019-10-29-1572342275675',
          startDate: '2019-10-29T09:44:35.675Z',
          endDate: null,
          active: true,
          status: 1,
          collectionDate: '2019-10-27',
        },
      },
      {
        id: '7',
        itemNameEn: "Kellogg's Corn Flakes 500 gm / Germany",
        itemNameAr: 'كورن فليكس / 500 جرام / ألمانيا',
        storeEn: 'retailer 1',
        storeAr: 'ك. ام للتجارة',
        barCode: '4003994111901',
        barCodeType: 'INTL',
        storeItemJobId: '2019-10-29-1572342275675',
        locationEn: 'ALAIN',
        locationAr: 'العين',
        price: 10000,
        collectionDate: '2019-10-27T20:00:00.000Z',
        mainCategoryEn: 'Food and Beverages',
        mainCategoryAr: 'الاغذية والمشروبات ',
        subCategoryEn: 'Food',
        subCategoryAr: 'الاغذية',
        detailedCategoryEn: 'Bread and Cereals',
        detailedCategoryAr: 'الخبز والحبوب',
        storeItemJob: {
          id: '2019-10-29-1572342275675',
          startDate: '2019-10-29T09:44:35.675Z',
          endDate: null,
          active: true,
          status: 1,
          collectionDate: '2019-10-27',
        },
      },
      {
        id: '8',
        itemNameEn: "Kellogg's ABUDHABI Corn Flakes 500 gm / Germany",
        itemNameAr: 'كورن فليكس / 500 جرام / ألمانيا',
        storeEn: 'KM Trading',
        storeAr: 'ك. ام للتجارة',
        barCode: '4003994111901',
        barCodeType: 'INTL',
        storeItemJobId: '2019-10-29-1572342275675',
        locationEn: 'retailer 2',
        locationAr: 'العين',
        price: 20000,
        collectionDate: '2019-10-27T20:00:00.000Z',
        mainCategoryEn: 'Food and Beverages',
        mainCategoryAr: 'الاغذية والمشروبات ',
        subCategoryEn: 'Food',
        subCategoryAr: 'الاغذية',
        detailedCategoryEn: 'Bread and Cereals',
        detailedCategoryAr: 'الخبز والحبوب',
        storeItemJob: {
          id: '2019-10-29-1572342275675',
          startDate: '2019-10-29T09:44:35.675Z',
          endDate: null,
          active: true,
          status: 1,
          collectionDate: '2019-10-27',
        },
      },
      {
        id: '9',
        itemNameEn: "Kellogg's Corn Flakes 500 gm / Germany",
        itemNameAr: 'كورن فليكس / 500 جرام / ألمانيا',
        storeEn: 'retailer 1',
        storeAr: 'ك. ام للتجارة',
        barCode: '4003994111901',
        barCodeType: 'INTL',
        storeItemJobId: '2019-10-29-1572342275675',
        locationEn: 'ALAIN',
        locationAr: 'العين',
        price: 10000,
        collectionDate: '2019-10-27T20:00:00.000Z',
        mainCategoryEn: 'Food and Beverages',
        mainCategoryAr: 'الاغذية والمشروبات ',
        subCategoryEn: 'Food',
        subCategoryAr: 'الاغذية',
        detailedCategoryEn: 'Bread and Cereals',
        detailedCategoryAr: 'الخبز والحبوب',
        storeItemJob: {
          id: '2019-10-29-1572342275675',
          startDate: '2019-10-29T09:44:35.675Z',
          endDate: null,
          active: true,
          status: 1,
          collectionDate: '2019-10-27',
        },
      },
      {
        id: '10',
        itemNameEn: "Kellogg's ABUDHABI Corn Flakes 500 gm / Germany",
        itemNameAr: 'كورن فليكس / 500 جرام / ألمانيا',
        storeEn: 'KM Trading',
        storeAr: 'ك. ام للتجارة',
        barCode: '4003994111901',
        barCodeType: 'INTL',
        storeItemJobId: '2019-10-29-1572342275675',
        locationEn: 'retailer 2',
        locationAr: 'العين',
        price: 20000,
        collectionDate: '2019-10-27T20:00:00.000Z',
        mainCategoryEn: 'Food and Beverages',
        mainCategoryAr: 'الاغذية والمشروبات ',
        subCategoryEn: 'Food',
        subCategoryAr: 'الاغذية',
        detailedCategoryEn: 'Bread and Cereals',
        detailedCategoryAr: 'الخبز والحبوب',
        storeItemJob: {
          id: '2019-10-29-1572342275675',
          startDate: '2019-10-29T09:44:35.675Z',
          endDate: null,
          active: true,
          status: 1,
          collectionDate: '2019-10-27',
        },
      },
      {
        id: '11',
        itemNameEn: "Kellogg's Corn Flakes 500 gm / Germany",
        itemNameAr: 'كورن فليكس / 500 جرام / ألمانيا',
        storeEn: 'retailer 1',
        storeAr: 'ك. ام للتجارة',
        barCode: '4003994111901',
        barCodeType: 'INTL',
        storeItemJobId: '2019-10-29-1572342275675',
        locationEn: 'ALAIN',
        locationAr: 'العين',
        price: 10000,
        collectionDate: '2019-10-27T20:00:00.000Z',
        mainCategoryEn: 'Food and Beverages',
        mainCategoryAr: 'الاغذية والمشروبات ',
        subCategoryEn: 'Food',
        subCategoryAr: 'الاغذية',
        detailedCategoryEn: 'Bread and Cereals',
        detailedCategoryAr: 'الخبز والحبوب',
        storeItemJob: {
          id: '2019-10-29-1572342275675',
          startDate: '2019-10-29T09:44:35.675Z',
          endDate: null,
          active: true,
          status: 1,
          collectionDate: '2019-10-27',
        },
      },
    ];
    const { container, queryByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Details {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(container.querySelectorAll('.ui-lib-checkbox__input')[0]);

    fireEvent.click(
      container.querySelectorAll('.ui-lib-filter__controls')[0].children[0],
    );
    expect(queryByText('20000')).not.toBeInTheDocument();
    fireEvent.click(
      container.querySelectorAll('.ui-lib-filter__controls')[0].children[1],
    );
    // @ts-ignore
    // fireEvent.click(getByLabelText('Prev'));
    expect(props.handlePagination).not.toBeCalled();
  });
});
