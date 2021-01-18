import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import {
  Viewport,
  ViewportProvider,
  // fireEvent,
} from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import ActivityGroup from './index';

describe('config/components/ActivityGroup', () => {
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
      showTabs: true,
      showCategories: true,
      disableCategories: false,
      locale: 'ar',
      activityCategory: '',
      activitySubCategory: '',
      actions: {
        currentCategory: {
          update: jest.fn(),
        },
      },
      categories: [
        {
          id: 1,
          value: 'tab1',
          label: 'Tab 1',
          nameEn: 'test',
          nameAr: 'test',
          activities: [
            {
              id: 1,
              label: 'Activity 1',
            },
          ],
        },
      ],
      activities: {
        searchLabel: 'activties search',
        totalItems: 3,
        items: [
          {
            activityCode: '1001',
            activityNameEn: 'food',
          },
          {
            activityCode: '1002',
            activityNameEn: 'food 2',
          },
        ],
      },
      selected: [
        {
          activityNameEn: 'food',
          activityCode: '1001',
        },
      ],
      i18n: jest.fn(i => i),
      onItemClick: jest.fn(),
      getActivities: jest.fn(),
      updateSearchData: jest.fn(),
    };
    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener() {},
          removeListener() {},
        };
      };
  });

  afterEach(cleanup);

  test('renders with all props', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ActivityGroup {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // setTimeout(() => {
    //   expect(getByText('activties search')).toBeInTheDocument();
    // }, 1000);
  });

  test('renders with activites isLoading', () => {
    props.activities.isLoading = true;
    props.locale = 'en';
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ActivityGroup {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // setTimeout(() => {
    //   fireEvent.click(getByText(/tab1/));
    //   expect(getByText('tab1')).toBeInTheDocument();
    // }, 1000);
  });

  test('renders without showTabs', () => {
    props.activities.isLoading = false;
    props.activities.items = [];
    props.activities.totalItems = 13;
    props.showTabs = false;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ActivityGroup {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText('activties search')).toBeInTheDocument();
    }, 500);
  });
});
