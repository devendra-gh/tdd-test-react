import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { mount } from 'enzyme';
import CustomComponent from './index';

describe('config/v5/templates/CustomComponent', () => {
  const props: any = {
    definitions: [
      {
        componentId: 1,
      },
    ],
  };

  it('should render with all props', async () => {
    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener() {},
          removeListener() {},
        };
      };
    const wrapper = mount(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <CustomComponent {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should render with all props with sidebar', async () => {
    const propsWithSidebar = {
      ...props,
      currentStep: 'start',
      currentSubStep: 'start',
      stepsState: {},
      actions: {
        stepsStatus: {
          update: jest.fn(),
        },
      },
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
    const wrapper = mount(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <CustomComponent {...propsWithSidebar} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(wrapper.exists()).toBe(true);
  });
});
