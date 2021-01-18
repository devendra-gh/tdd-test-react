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

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('commercialPromotions/templates/Search', () => {
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
      match: {},
      location: {},
      locale: 'en',
      changePage: jest.fn(),
      getValidation: jest.fn(),
      getCommercialPromotions: jest.fn(),
      onRadioSelect: jest.fn(),
      onBack: jest.fn(),
      title: 'title',
      subTitle: 'subTitle',
      text: 'text',
      history: {
        push: jest.fn(),
      },
      promotionType: {
        id: '0',
        value: '',
      },
      actions: {
        promotionType: {
          update: jest.fn(),
        },
        title: {
          update: jest.fn(),
        },
        hero: {
          update: jest.fn(),
        },
        breadcrumbs: {
          update: jest.fn(),
        },
      },
      i18n: jest.fn(i => i),
      steps,
      stepsStatus: {},
      commercialPromotions: {
        status: 'success',
        data: {
          commercialPromotions: [
            {
              licenseNum: 'test-licenseNo',
              address: 'test-addressAr',
              promotionStartDate: '2020-01-28T00:00:00.000Z',
              promotionEndDate: '2020-02-24T00:00:00.000Z',
              tradeNameAr: 'test-tradeNameAr',
              tradeNameEn: 'test-tradeNameEn',
              promotionTypeAr: 'test-promotionTypeAr',
              promotionTypeEng: 'test-promotionTypeEn',
              promotionDetailsAr: 'test-promotionDetailsAr',
              longitute: 54.72290838,
              latitude: 24.38721699,
            },
          ],
          totalPagesCount: 1,
          totalCount: 100,
          pageNumber: 1,
        },
        totalCount: 11,
      },
      displayErrorFlag: false,
      displaySpinner: false,
      displayAccordian: false,
      showErrorAlert: false,
      showNotFoundAlert: false,
    };
  });

  afterEach(cleanup);

  test('renders with props', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(getByText('subTitle')).toBeInTheDocument();
  });

  test('renders with props when data is undefined', () => {
    props.commercialPromotions.data.commercialPromotions = undefined;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(getByText('subTitle')).toBeInTheDocument();
  });

  test('renders with props when displaySpinner is true', () => {
    props.displaySpinner = true;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(getByText('subTitle')).toBeInTheDocument();
  });

  test('renders with props when props.displayErrorFlag is true', () => {
    props.displayErrorFlag = true;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(getByText('subTitle')).toBeInTheDocument();
    expect(
      getByText('commercialPromotions.search.validationErrorMessage'),
    ).toBeInTheDocument();
  });

  test('renders with props when props.showErrorAlert is true', () => {
    props.showErrorAlert = true;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(
      getByText('commercialPromotions.search.errorMessage'),
    ).toBeInTheDocument();
  });

  test('renders with props when props.showNotFoundAlert is true', () => {
    props.showNotFoundAlert = true;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(
      getByText('commercialPromotions.search.notFound'),
    ).toBeInTheDocument();
  });

  test('should render when commercialPromotionsList is not empty', () => {
    props.displayAccordian = true;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('test-tradeNameEn')).toBeInTheDocument();
  });

  test('should render when commercialPromotionsList is not empty in both locales', () => {
    props.displayAccordian = true;
    props.locale = 'ar';
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('test-tradeNameAr')).toBeInTheDocument();
  });

  test('should render when commercialPromotionsList is object', () => {
    props.displayAccordian = true;
    props.commercialPromotions.data.commercialPromotions = {
      licenseNum: 'test-licenseNo',
      address: 'test-addressAr',
      promotionStartDate: '2020-01-28T00:00:00.000Z',
      promotionEndDate: '2020-02-24T00:00:00.000Z',
      tradeNameAr: 'test-tradeNameAr',
      tradeNameEn: 'test-tradeNameEn',
      promotionTypeAr: 'test-promotionTypeAr',
      promotionTypeEng: 'test-promotionTypeEn',
      promotionDetailsAr: 'test-promotionDetailsAr',
      longitute: 54.72290838,
      latitude: 24.38721699,
    };

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>{' '}
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('subTitle')).toBeInTheDocument();
  });

  // it('should handle search onClick', async () => {
  //   const { getByLabelText, getAllByTitle } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <Search {...props} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );

  //   fireEvent.change(getByLabelText('search-input'), {
  //     target: { value: 'value' },
  //   });
  //   expect(props.getValidation).toHaveBeenCalled();
  //   fireEvent.click(getAllByTitle('search')[0], {
  //     target: { value: 'value' },
  //   });
  //   expect(props.getCommercialPromotions).toHaveBeenCalled();
  // });

  it('should call the back button is clicked', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByText('button.back'));
    expect(props.onBack).toHaveBeenCalled();
  });

  it('should update state when radio button is clicked', async () => {
    props.displayAccordian = true;
    const { getByDisplayValue } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(
      getByDisplayValue('commercialPromotions.filter.specialOffer'),
    );
    expect(props.onRadioSelect).toHaveBeenCalled();
  });

  it('should getCommercialPromotions when filter button is clicked', async () => {
    props.displayAccordian = true;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByText('filter'));
    expect(props.getCommercialPromotions).toHaveBeenCalled();
  });

  it('should reset filters when resetFilter button is clicked', async () => {
    props.displayAccordian = true;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByText('reset filters'));
    expect(props.onRadioSelect).toHaveBeenCalled();
  });

  // it('should change page when pagination button is clicked', async () => {
  //   props.displayAccordian = true;
  //   const { getByLabelText } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <Search {...props} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );
  //   fireEvent.click(getByLabelText('Prev'));
  //   expect(props.changePage).toHaveBeenCalled();
  // });
});
