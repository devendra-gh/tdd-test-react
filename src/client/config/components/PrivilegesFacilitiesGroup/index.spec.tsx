import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import PrivilegesFacilitiesGroup from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/components/PrivilegesFacilitiesGroup', () => {
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
      locale: 'en',
      value: 'abu-dhabi-free-zones',
      businessLocation: '',
      i18n: jest.fn(i => i),
      authorizedOperations: jest.fn(() => [
        {
          Authorization: 'a',
          Operations: [],
        },
        {
          Authorization: 'l',
          Operations: [],
        },
      ]),
      getLocationActivities: jest.fn(() => [
        {
          id: 'a',
          nameEn: 'India',
          nameAr: 'India',
        },
      ]),
    };
  });

  afterEach(cleanup);

  test('renders component', () => {
    props.businessLocation = 'Al Ain';
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <PrivilegesFacilitiesGroup {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // setTimeout(() => {
    //   expect(getByText('Al Ain')).toBeInTheDocument();
    // }, 500);
  });

  // test('renders component with locale ar', () => {
  //   props.businessLocation = 'Al Ain';
  //   props.locale = 'ar';
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <PrivilegesFacilitiesGroup {...props} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );

  //   setTimeout(() => {
  //     expect(getByText('Al Ain')).toBeInTheDocument();
  //   }, 500);
  // });

  test('renders component without businessLocation', () => {
    props.businessLocation = false;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <PrivilegesFacilitiesGroup {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText('a')).toBeInTheDocument();
    }, 500);
  });
});
