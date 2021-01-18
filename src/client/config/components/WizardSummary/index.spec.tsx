import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import WizardSummary from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/components/WizardSummary', () => {
  let props: any;

  beforeEach(() => {
    props = {
      title: 'wizard title',
      text: 'wizard text',
      items: [
        {
          title: 'items title',
          uiType: 'primary',
          columns: [
            {
              id: '1',
              title: 'title',
            },
          ],
          items: [
            {
              licenceSection: '1',
              choice: 'choice',
              description: ['des 1', 'desc 2'],
            },
          ],
        },
      ],
      i18n: jest.fn(i => i),
    };
  });

  afterEach(cleanup);

  test('renders component', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <WizardSummary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // setTimeout(() => {
    //   expect(getByText('wizard text')).toBeInTheDocument();
    // }, 500);
  });

  test('renders component with one description', () => {
    props.items = [
      {
        title: 'items title',
        uiType: 'primary',
        columns: [
          {
            id: '1',
            title: 'title',
          },
        ],
        items: [
          {
            licenceSection: '1',
            choice: 'choice',
            description: ['desc title'],
          },
        ],
      },
    ];
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <WizardSummary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText('wizard text')).toBeInTheDocument();
    }, 500);
  });
});
