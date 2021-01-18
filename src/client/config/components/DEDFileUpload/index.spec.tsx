import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import DEDFileUpload from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/components/DEDFileUpload', () => {
  let props: any;

  beforeEach(() => {
    props = {
      documentCategory: [],
      i18n: jest.fn(),
      documentCategoryChange: jest.fn(i => i),
      onFileUpload: jest.fn(i => i),
      handleDocumentDelete: jest.fn(i => i),
      disableDocumentCategorySelection: false,
      selectedDocumentCategory: false,
      uploadDocs: [
        {
          uploadedFileName: 'upload_file_name',
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

  test('should render', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <DEDFileUpload {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  test('renders component with visible', () => {
    props.documentCategory = [
      {
        id: '1',
        name: 'document 1',
        label: 'test',
        labelAr: 'test',
      },
    ];

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <DEDFileUpload {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
