import React from 'react';
import { shallow } from 'enzyme';
import { act, cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Component from './index';

describe('client/components/workbench/StickySidebar', () => {
  let props: any;

  beforeEach(() => {
    props = {
      locale: 'en',
      i18n: jest.fn(i => i),
      selected: {
        group: {
          'Item 2': true,
        },
      },
      navigationProps: {
        items: [
          {
            id: 'item1',
            title: 'Item 1',
          },
        ],
      },
      filterProps: {
        filterGroups: [
          {
            type: 'search',
            label: 'Search',
            key: 'search',
          },
          {
            type: 'checkbox',
            label: 'Group',
            key: 'group',
            items: [
              {
                name: 'Item 1',
                count: 2,
              },
              {
                name: 'Item 2',
                count: 3,
              },
            ],
          },
        ],
      },
      onItemSelect: jest.fn(),
    };
  });

  afterEach(cleanup);

  it('should render with all props', async () => {
    await act(async () => {
      const { getByText } = render(
        <MemoryRouter>
          <ViewportProvider>
            <Viewport sm md lg xl>
              <Component {...props} />
            </Viewport>
          </ViewportProvider>
        </MemoryRouter>,
      );

      getByText('all');
    });
  });

  it('should render when filterProps is missing', async () => {
    props.filterProps = null;
    props.navigationProps = null;

    const wrapper = shallow(<Component {...props} />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
