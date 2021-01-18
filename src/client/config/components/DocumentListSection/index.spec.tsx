import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import DocumentListSection from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/components/Field', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      title: 'Document',
      description: 'list of documents',
      list: [
        {
          columns: [
            {
              id: '1',
              title: 'column 1',
            },
          ],
          items: [
            {
              requirement: 'test',
              type: 'test type',
            },
          ],
          headerHidden: false,
        },
      ],
      buttons: [
        {
          label: 'document 1',
          onClick: jest.fn(),
          uiType: 'primary',
        },
      ],
    };
  });

  afterEach(cleanup);

  test('renders component with visible', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <DocumentListSection {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText(props.title)).toBeInTheDocument();
    }, 500);
  });
});
