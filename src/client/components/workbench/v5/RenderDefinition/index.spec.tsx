import React from 'react';
import { render, cleanup, act, waitForElement } from '@testing-library/react';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import RenderDefinition from './index';

describe('client/components/workbench/v5/RenderDefinition', () => {
  let props: any;

  beforeEach(() => {
    props = {
      definition: {
        componentId: '12345678',
        type: 'text',
        props: {
          variant: 'h1',
          content: 'SampleText',
        },
      },
      getSharedProps: jest.fn(() => ({
        i18n: jest.fn(),
      })),
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

  // it('renders custom component', async () => {
  //   await act(async () => {
  //     const { getByText } = render(<RenderDefinition {...props} />);

  //     await waitForElement(() => getByText('SampleText'));
  //   });
  // });

  it('renders grid', async () => {
    await act(async () => {
      props.definition = {
        componentId: '12345678',
        type: 'grid',
        props: {
          columns: 2,
          space: {
            marginTop: 'xl',
          },
        },
        children: [
          {
            componentId: '11111111',
            type: 'text',
            props: {
              variant: 'h4',
              content: 'SampleText',
            },
            columnIndex: 1,
          },
        ],
      };

      const { getByText } = render(
        <ViewportProvider>
          <Viewport sm md lg xl>
            <RenderDefinition {...props} />
          </Viewport>
        </ViewportProvider>,
      );

      await waitForElement(() => getByText('SampleText'));
    });
  });

  it('renders flexbox', async () => {
    await act(async () => {
      props.definition = {
        componentId: '12345678',
        type: 'flexbox',
        props: {
          space: {
            marginTop: 'xl',
          },
        },
        children: [
          {
            componentId: '11111111',
            type: 'text',
            props: {
              variant: 'h4',
              content: 'SampleText',
            },
          },
        ],
      };

      const { getByText } = render(
        <ViewportProvider>
          <Viewport sm md lg xl>
            <RenderDefinition {...props} />
          </Viewport>
        </ViewportProvider>,
      );

      await waitForElement(() => getByText('SampleText'));
    });
  });

  it('renders symbol', async () => {
    await act(async () => {
      props.definition = {
        componentId: '12345678',
        type: 'symbol',
        props: {
          symbol: {
            definitions: [
              {
                componentId: '11111111',
                type: 'text',
                props: {
                  variant: 'h4',
                  content: 'SampleText',
                },
              },
            ],
          },
          space: {
            marginTop: 'xl',
          },
        },
      };

      const { getByText } = render(
        <ViewportProvider>
          <Viewport sm md lg xl>
            <RenderDefinition {...props} />
          </Viewport>
        </ViewportProvider>,
      );

      await waitForElement(() => getByText('SampleText'));
    });
  });

  it('renders iterator', async () => {
    await act(async () => {
      props.definition = {
        componentId: '12345678',
        type: 'iterator',
        props: {
          dlsComponent: 'text',
          items: [{ variant: 'h4', content: 'SampleText' }],
        },
      };

      const { getByText } = render(
        <ViewportProvider>
          <Viewport sm md lg xl>
            <RenderDefinition {...props} />
          </Viewport>
        </ViewportProvider>,
      );

      await waitForElement(() => getByText('SampleText'));
    });
  });

  it('renders iterator', async () => {
    props.getSharedProps = undefined;
    await act(async () => {
      props.definition = {
        componentId: '12345678',
        type: 'iterator',
        props: {
          dlsComponent: 'text',
          items: [{ variant: 'h4', content: 'SampleText' }],
        },
      };

      const { getByText } = render(
        <ViewportProvider>
          <Viewport sm md lg xl>
            <RenderDefinition {...props} />
          </Viewport>
        </ViewportProvider>,
      );

      await waitForElement(() => getByText('SampleText'));
    });
  });
});
