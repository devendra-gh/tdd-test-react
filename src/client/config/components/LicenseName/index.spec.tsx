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
import LicenseName from './index';

jest.mock('client/config/hooks/useDebounce');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/components/LicenseName', () => {
  let props: any;
  beforeEach(() => {
    // mockUseDebounce = useDebounce;
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
      showAutoGenerate: true,
      validate: true,
      locale: 'en',
      currentCategory: {
        nameEn: 'food',
        nameAr: 'food',
      },
      disableEditing: true,
      showNameReservationPeriod: true,
      formState: {
        economicName: {
          tradeNameEn: 'test en',
          tradeNameAr: 'test ar',
        },
        licenceType: {
          licenceType: 'instant',
        },
        branch: 'branchAD',
        tradeNameEn: 'tradeNameEn',
        tradeNameAr: 'tradeNameAr',
        legalForm: 'establishment',
        activities: [{ label: 'activity' }],
      },
      i18n: jest.fn(i => i),
      autoGenerateTradeName: jest.fn(() => ({
        nameEn: 'test llc',
        nameAr: 'test llc',
      })),
      getTransliteration: jest.fn(() => ({
        nameEn: 'test llc',
        nameAr: 'test llc',
      })),
      onReserve: jest.fn(),
      onCheckTradeName: jest.fn(() => ({
        message: 'approved',
        status: 'success',
      })),
      onLoadSuggestions: jest.fn(() => [
        {
          serial: '1001',
          nameAr: 'test ar',
          nameEn: 'test en',
        },
      ]),
    };
  });

  afterEach(cleanup);

  test('renders with all props', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <LicenseName {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const element = await waitForElement(() => getByLabelText('Search'));
    fireEvent.click(element);

    setTimeout(() => {
      expect(getByLabelText('instant')).toBeInTheDocument();
    }, 5000);
  });

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

  test('renders with all props with edit', () => {
    props.locale = 'ar';
    props.disableEditing = false;
    props.formState.branch = 'branchUAE';
    props.formState.tradeNameEn = '';
    props.formState.tradeNameAr = '';
    props.formState.nameReservationPeriod = '';
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <LicenseName {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // setTimeout(() => {
    expect(getByText('economicName.likeParent')).toBeInTheDocument();
    // }, 500);
  });

  test('renders with all props with edit', () => {
    const props1 = {
      showAutoGenerate: true,
      validate: true,
      locale: 'en',
      currentCategory: {
        nameEn: 'food',
        nameAr: 'food',
      },
      disableEditing: true,
      showNameReservationPeriod: true,
      formState: {
        economicName: {
          tradeNameEn: '',
          tradeNameAr: '',
        },
        licenceType: {
          licenceType: 'instant',
        },
      },
      i18n: jest.fn(i => i),
      autoGenerateTradeName: jest.fn(() => ({
        nameEn: 'test llc',
        nameAr: 'test llc',
      })),
      getTransliteration: jest.fn(() => ({
        nameEn: 'test llc',
        nameAr: 'test llc',
      })),
      onReserve: jest.fn(),
      onCheckTradeName: jest.fn(() => ({
        message: 'approved',
        status: 'success',
      })),
      onLoadSuggestions: jest.fn(() => [
        {
          serial: '1001',
          nameAr: 'test ar',
          nameEn: 'test en',
        },
      ]),
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <LicenseName {...props1} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(getByText('licenceName.autoGenerate')).toBeInTheDocument();
  });

  test('renders with all props', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <LicenseName {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // const element = await waitForElement(() => getByLabelText('Search'));
    // fireEvent.click(element);

    setTimeout(() => {
      expect(getByLabelText('instant')).toBeInTheDocument();
    }, 5000);
  });

  test('should handle getsuggestions onClick', async () => {
    props.disableEditing = false;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <LicenseName {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const element = getByText('button.suggestion');
    fireEvent.click(element);

    expect(props.onLoadSuggestions).toBeCalled();
  });
});
