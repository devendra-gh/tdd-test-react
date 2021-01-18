import React from 'react';
import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import useMedia from 'use-media';
import { includes } from 'lodash';
import LicenseName from './index';

jest.mock('client/config/hooks/useDebounce');
jest.mock('use-media');
jest.mock('lodash');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/components/LicenseName', () => {
  let props: any;
  let mediaMock: any;
  let mockLodash: any;

  beforeEach(() => {
    // mockUseDebounce = useDebounce;
    mediaMock = useMedia;
    mockLodash = includes;

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
      i18n: jest.fn(i => i),
      onReserve: jest.fn(),
      locale: 'en',
      disableEditing: true,
      showNameReservationPeriod: true,
      validate: true,
      showAutoGenerate: true,
      formState: {
        tradeNameEn: '',
        tradeNameAr: '',
        nameReservationPeriod: '',
        branch: '',
      },
      autoGenerateTradeName: jest.fn(),
      onLoadSuggestions: jest.fn(() => [
        {
          serial: '1001',
          nameAr: 'test ar',
          nameEn: 'test en',
        },
      ]),
      //   showAutoGenerate: true,
      //   validate: true,
      //   locale: 'en',
      //   currentCategory: {
      //     nameEn: 'food',
      //     nameAr: 'food',
      //   },
      //   disableEditing: false,
      //   showNameReservationPeriod: true,
      //   formState: {
      //     tradeNameEn: 'test en',
      //     tradeNameAr: 'test ar',
      //     activities: [{ test: 'test' }, { test: 'test' }],
      //     economicName: {
      //       tradeNameEn: 'test en',
      //       tradeNameAr: 'test ar',
      //     },
      //     licenceType: {
      //       licenceType: 'instant',
      //     },
      //     branch: 'branchAD',
      //   },
      //   i18n: jest.fn(i => i),
      //   autoGenerateTradeName: jest.fn(() => ({
      //     nameEn: 'test llc',
      //     nameAr: 'test llc',
      //   })),
      //   getTransliteration: jest.fn(() => ({
      //     nameEn: 'test llc',
      //     nameAr: 'test llc',
      //   })),
      //   onReserve: jest.fn(),
      //   onCheckTradeName: jest.fn(() => ({
      //     message: 'approved',
      //     status: 'success',
      //   })),
      //   onLoadSuggestions: jest.fn(() => [
      //     {
      //       serial: '1001',
      //       nameAr: 'test ar',
      //       nameEn: 'test en',
      //     },
      //   ]),
    };
  });

  afterEach(cleanup);

  test('renders with all props', async () => {
    mediaMock.mockReturnValueOnce(false);

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <LicenseName {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  test('renders with all props ar', async () => {
    mediaMock.mockReturnValueOnce(false);
    props = {
      ...props,
      locale: 'ar',
    };

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <LicenseName {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  test('renders with all props with en', async () => {
    mockLodash.mockImplementation(() => {
      return Promise.resolve({ data: 'some-data' });
    });

    props = {
      ...props,
      locale: 'en',
      formState: {
        tradeNameEn: 'test en',
        tradeNameAr: 'test ar',
        activities: 'branchAD',
        branch: ['branchUAE'],
        nameReservationPeriod: 'test',
      },
    };

    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <LicenseName {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const element = await waitForElement(() => getByLabelText('trade-name-en'));

    expect(element).toBeInTheDocument();
    fireEvent.change(element, {
      target: { value: 'test' },
    });
    fireEvent.blur(element);

    // const elementCheck = await waitForElement(() => getByText('check'));
    // fireEvent.click(elementCheck);

    const elementSearch = await waitForElement(() => getByLabelText('Search'));
    fireEvent.click(elementSearch);
  });

  test('renders with all props with ar', async () => {
    mockLodash.mockImplementation(() => {
      return Promise.resolve({ data: 'some-data' });
    });

    props = {
      ...props,
      locale: 'ar',
      formState: {
        tradeNameEn: 'test en',
        tradeNameAr: 'test ar',
        activities: 'branchAD',
        branch: ['branchUAE'],
        nameReservationPeriod: 'test',
      },
    };

    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <LicenseName {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const element = await waitForElement(() => getByLabelText('trade-name-ar'));
    expect(element).toBeInTheDocument();
    fireEvent.change(element, {
      target: { value: 'test' },
    });
    fireEvent.blur(element);
  });

  test('renders with all props with fallbacks', async () => {
    mediaMock.mockReturnValueOnce(true);

    props = {
      ...props,
      disableEditing: false,
      showAutoGenerate: false,
      formState: {
        tradeNameEn: 'test',
      },
    };

    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <LicenseName {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const element = await waitForElement(() =>
      getByLabelText('get-suggestions'),
    );
    expect(element).toBeInTheDocument();
    fireEvent.click(element, {
      target: { value: 'test' },
    });
    // expect(props.onLoadSuggestions).toBeCalled();
  });

  // test('renders with all props', async () => {
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <LicenseName {...props} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );
  //   const element = await waitForElement(() => getByText('Search'));
  //   fireEvent.click(element);

  //   setTimeout(() => {
  //     expect(getByText('instant')).toBeInTheDocument();
  //   }, 5000);
  // });

  // test('renders with all props', async () => {
  //   mockUseDebounce.mockImplementation(() => ({}));

  //   let shallowComponent = shallow(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <LicenseName />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );

  //   console.log(
  //     shallowComponent.find('LicenseName').props(),
  //     '*******************',
  //   );
  // });

  // test('renders with all props with edit', () => {
  //   props.locale = 'ar';
  //   props.disableEditing = false;
  //   props.formState.branch = 'branchUAE';
  //   props.formState.tradeNameEn = '';
  //   props.formState.tradeNameAr = '';
  //   props.formState.nameReservationPeriod = '';
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <LicenseName {...props} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );

  //   setTimeout(() => {
  //     expect(getByText('success')).toBeInTheDocument();
  //   }, 500);
  // });

  // test('renders with all props with edit', () => {
  //   const props1 = {
  //     showAutoGenerate: true,
  //     validate: true,
  //     locale: 'en',
  //     currentCategory: {
  //       nameEn: 'food',
  //       nameAr: 'food',
  //     },
  //     disableEditing: true,
  //     showNameReservationPeriod: true,
  //     formState: {
  //       economicName: {
  //         tradeNameEn: '',
  //         tradeNameAr: '',
  //       },
  //       licenceType: {
  //         licenceType: 'instant',
  //       },
  //     },
  //     i18n: jest.fn(i => i),
  //     autoGenerateTradeName: jest.fn(() => ({
  //       nameEn: 'test llc',
  //       nameAr: 'test llc',
  //     })),
  //     getTransliteration: jest.fn(() => ({
  //       nameEn: 'test llc',
  //       nameAr: 'test llc',
  //     })),
  //     onReserve: jest.fn(),
  //     onCheckTradeName: jest.fn(() => ({
  //       message: 'approved',
  //       status: 'success',
  //     })),
  //     onLoadSuggestions: jest.fn(() => [
  //       {
  //         serial: '1001',
  //         nameAr: 'test ar',
  //         nameEn: 'test en',
  //       },
  //     ]),
  //   };
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <LicenseName {...props1} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );

  //   setTimeout(() => {
  //     expect(getByText('success')).toBeInTheDocument();
  //     fireEvent.change(getByText('check'));
  //   }, 500);
  // });
});
