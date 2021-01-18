import React from 'react';
import { render, cleanup } from '@testing-library/react';
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

describe('/templates/Search', () => {
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
      getTradeName: jest.fn(),
      onBack: jest.fn(),
      title: 'title',
      subTitle: 'subTitle',
      text: 'text',
      history: {
        push: jest.fn(),
      },
      actions: {
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
      currentStep: 'trade_name',
      currentSubStep: 'submit_licence',
      steps,
      stepsStatus: {},
      tradeName: {
        currentPage: 1,
        totalPages: 100,
        recInPage: 10,
        data: {
          data: {
            tradename: {
              tradename: [
                {
                  id: 'test-id',
                  status: 'test-status',
                  tnArabicName: 'test-ArName',
                  tnEnglishName: 'test-enName',
                  tradeNameType: 'test-tnType',
                  licenseNumber: 'test-licencseNumber',
                },
              ],
            },
          },
        },
      },
      displayErrorFlag: false,
      displaySpinner: false,
      displayTable: false,
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

    expect(getByText('tradeNameSearch.search.subTitle')).toBeInTheDocument();
  });

  test('renders with props when data is undefined', () => {
    props.tradeName.data.data = undefined;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(getByText('tradeNameSearch.search.subTitle')).toBeInTheDocument();
  });

  test('should render when tradeNamelist is not empty and locale == en', () => {
    props.displayTable = true;
    props.tradeName.data.data.tradename.tradename = {
      ...props.tradeName.data.data.tradename.tradename,
      constructor: {
        name: 'Object',
      },
    };

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('tradeNameSearch.table.title')).toBeInTheDocument();
  });

  test('should render when tradeNamelist is not empty and locale == ar', () => {
    props.displayTable = true;
    props.locale = 'ar';
    props.tradeName.data.data.tradename.tradename = {
      ...props.tradeName.data.data.tradename.tradename,
      constructor: {
        name: 'Object',
      },
    };

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('tradeNameSearch.table.title')).toBeInTheDocument();
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

    expect(getByText('tradeNameSearch.search.notFound')).toBeInTheDocument();
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
      getByText('tradeNameSearch.search.errorMessage'),
    ).toBeInTheDocument();
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

    expect(
      getByText('tradeNameSearch.search.fieldValidationMessage'),
    ).toBeInTheDocument();
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

    expect(getByText('tradeNameSearch.search.subTitle')).toBeInTheDocument();
  });

  // it('should handle button onClick', async () => {
  //   const { getByLabelText, getAllByTitle } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <Search {...props} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );

  //   fireEvent.change(getByLabelText('Search input'), {
  //     target: { value: 'value' },
  //   });
  //   expect(props.getValidation).toHaveBeenCalled();
  //   fireEvent.click(getAllByTitle('search')[0], {
  //     target: { value: 'value' },
  //   });
  //   expect(props.getTradeName).toHaveBeenCalled();

  //   fireEvent.click(getByLabelText('button'));
  //   expect(props.onBack).toHaveBeenCalled();
  // });

  test('should handler pagination button click', () => {
    props.displayTable = true;
    props.tradeName = {
      currentPage: 1,
      totalPages: 100,
      totalRecords: 2,
      recInPage: 1,
      data: {
        data: {
          tradename: {
            tradename: [
              {
                id: 'test-id',
                status: 'test-status',
                tnArabicName: 'test-ArName',
                tnEnglishName: 'test-enName',
                tradeNameType: 'test-tnType',
                licenseNumber: 'test-licencseNumber',
              },
              {
                id: 'test-id',
                status: 'test-status',
                tnArabicName: 'test-ArName',
                tnEnglishName: 'test-enName',
                tradeNameType: 'test-tnType',
                licenseNumber: 'test-licencseNumber',
              },
            ],
          },
        },
      },
    };

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Search {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // expect(container).toMatchSnapshot();
    // fireEvent.click(getByLabelText('Prev'), 1);
    // fireEvent.click(getByLabelText('Next'), 1);
  });
});
