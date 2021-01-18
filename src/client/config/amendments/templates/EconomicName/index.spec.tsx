import React from 'react';
import fetch from 'client/services/fetch';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import EconomicName from './index';

jest.mock('client/services/fetch');
jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('EconomicName', () => {
  let props: IVariables;
  let mockFetch: any;
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
      i18n: (key: string) => key,
      title: 'Category',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      pageLoading: false,
      noResponse: false,
      amendmentCategories: {
        ownership: false,
        economicActivitiesOrName: false,
      },
      licenceDetails: {
        tradeName: 'tradeName',
      },
      tradeName: {
        response: {
          transaction_No: 'TN-1234567',
          NameEn: 'test1',
          NameAr: 'test2',
        },
      },
      categoryType: [
        'ownership',
        'locationOrCountry',
        'economicActivitiesOrName',
        'financialDetails',
      ],
      steps: [],
      stepStatus: {
        economic_name: 'economic_name',
        'economic_name.payment': 'economic_name.payment',
      },
      tnNumber: 'TN-1234567',
      validate: '',
      error: '',
      onBack: jest.fn(),
      Submit: jest.fn(),
      reset: jest.fn(),
      onCheck: jest.fn(() => Promise.resolve('success')),
      onSubmitAmendment: jest.fn(),
      getTradeNameInfo: jest.fn(),
      onBlurTnNumber: jest.fn(),
      actions: {
        tradeName: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        licenceDetails: {
          update: jest.fn(),
        },
        pageLoading: {
          update: jest.fn(),
        },
      },
    };
    mockFetch = fetch;
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        message: 'Success',
        data: {
          code: '200',
          message: 'getRelatedRecords - Results',
          status: '200',
          traceId: 'rest-12245',
          result: {
            relatedRecoreds: [
              {
                type: 'Trade Name',
                transaction_No: 'TN-2074504',
                capId: '16TRD-00000-00569',
                exipryDate: '2016-04-07T00:00:00+04:00',
                NameAr: 'TN-2074504 تجريبي',
                NameEn: 'TN-2074504 TEST',
              },
            ],
          },
        },
        error: {},
      });
    });
  });

  it('should render with all props', async () => {
    props = {
      ...props,
      pageLoading: false,
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <EconomicName {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['button.back', 'button.next', 'check'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      fireEvent.click(
        getByText(buttonName, {
          selector: 'button',
        }),
      );
    });

    expect(getByText(props.subTitle)).toBeInTheDocument();
  });

  it('should render with all props pageLoading true', async () => {
    props = {
      ...props,
      pageLoading: true,
    };

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <EconomicName {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('call onBlur function', async () => {
    props = {
      ...props,
      pageLoading: true,
    };
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <EconomicName {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const input = container.querySelectorAll(
      '.ui-lib-input-wrapper__content-input',
    )[0];
    const eventObj = { target: { value: 'test' } };

    fireEvent.blur(input, eventObj);
  });
  it('call onBlur function with empty value', async () => {
    props = {
      ...props,
      pageLoading: true,
    };
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <EconomicName {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const input = container.querySelectorAll(
      '.ui-lib-input-wrapper__content-input',
    )[0];
    const eventObj = { target: { value: '' } };

    fireEvent.blur(input, eventObj);
  });
  it('call onChange function', async () => {
    props = {
      ...props,
      pageLoading: false,
    };
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <EconomicName {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const input = container.querySelectorAll(
      '.ui-lib-input-wrapper__content-input',
    )[0];

    const eventObj = { target: { value: 'test' } };

    fireEvent.change(input, eventObj);
  });

  it('should render with all props with tradename', async () => {
    props = {
      ...props,
      tradeName: {
        proposedName: {
          eng: true,
          arb: '',
        },
        response: '',
      },
    };

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <EconomicName {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with all props with licenceDetails', async () => {
    props = {
      ...props,
      licenceDetails: {
        tradeName: {
          amendment: {
            value: {
              TradeName: 'test',
            },
            type: 'number',
          },
        },
      },
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <EconomicName {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
  it('should render ded error message', async () => {
    props = {
      ...props,
      dedErrorMessage: true,
      pageLoading: false,
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <EconomicName {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
  it('should render unfortunate error message', async () => {
    props.noResponse = true;

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <EconomicName {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should call check button', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <EconomicName {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['check'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      fireEvent.click(
        getByText(buttonName, {
          selector: 'button',
        }),
      );
    });
  });

  it('should go to response else statemtnt', () => {
    mockFetch.mockImplementation(() => {
      return Promise.reject(new Error('something bad happened'));
    });
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <EconomicName {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(
      getByText('check', {
        selector: 'button',
      }),
    );
    expect(getByText(props.subTitle)).toBeInTheDocument();
  });

  it('should go to response recordlist else statemtnt', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        message: 'Success',
        data: {
          result: {
            relatedRecoreds: [],
          },
        },
        error: {},
      });
    });
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <EconomicName {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(
      getByText('check', {
        selector: 'button',
      }),
    );
    expect(getByText(props.subTitle)).toBeInTheDocument();
  });
  it('should call onSubmitAmendment on submit', () => {
    props.licenceDetails = {
      tradeName: {
        type: 'number',
        value: { TradeName: 'TN-2074504' },
      },
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <EconomicName {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(
      getByText('button.next', {
        selector: 'button',
      }),
    );
    expect(getByText(props.subTitle)).toBeInTheDocument();
  });
  it('should call onSubmitAmendment on check', () => {
    props.tradeName = {
      response: {},
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <EconomicName {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(
      getByText('button.next', {
        selector: 'button',
      }),
    );
    expect(getByText(props.subTitle)).toBeInTheDocument();
  });
  // it('should properly call handleBack', () => {
  //   mockFetch.mockImplementation(() => {
  //     return Promise.resolve({
  //       success: true,
  //       data: {
  //         result: {
  //           relatedRecoreds: [
  //             {
  //               type: 'Trade Name',
  //               transaction_No: 'TN-2971447',
  //               capId: '20TRD-00000-03939',
  //               exipryDate: '2020-05-18T00:00:00+04:00',
  //             },
  //             {
  //               type: 'License',
  //               transaction_No: 'CN-2971446',
  //               capId: '20LIC-00000-008FP',
  //               exipryDate: '2022-02-18T00:00:00+04:00',
  //             },
  //           ],
  //         },
  //       },
  //     });
  //   });
  //   functions.getTradeNameInfo('TN-2971447', props);
  // });

  // it('should properly call handleBack', () => {
  //   mockFetch.mockImplementation(() => {
  //     return Promise.resolve({
  //       success: true,
  //       data: {
  //         data: {
  //           relatedRecoreds: [
  //             {
  //               type: 'Trade Name',
  //               transaction_No: 'TN-2971447',
  //               capId: '20TRD-00000-03939',
  //               exipryDate: '2020-05-18T00:00:00+04:00',
  //             },
  //             {
  //               type: 'License',
  //               transaction_No: 'CN-2971446',
  //               capId: '20LIC-00000-008FP',
  //               exipryDate: '2022-02-18T00:00:00+04:00',
  //             },
  //           ],
  //         },
  //       },
  //     });
  //   });

  // });

  // it('should properly call handleBack', () => {
  //   mockFetch.mockImplementation(() => {
  //     Promise.resolve(new Error('some error'));
  //   });
  //   getTradeNameInfo('TN-2971447', props);
  // });
});
