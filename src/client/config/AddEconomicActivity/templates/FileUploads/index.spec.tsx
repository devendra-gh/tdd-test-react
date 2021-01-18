import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import FileUploads from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/FileUploads', () => {
  let props: any;

  beforeEach(() => {
    props = {
      inputGroups: [
        {
          name: 'test',
          fields: [
            {
              name: '',
              label: 'test',
              help: 'test',
              message: 'test',
            },
          ],
        },
      ],
      handleChange: jest.fn(),
      fileUploadData: {
        documents: {},
      },
      i18n: jest.fn(),
      startShowingErrors: 'error',
    };
  });

  afterEach(cleanup);

  test('Should render', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FileUploads {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  test('Should render with all props', () => {
    props.inputGroups[0].fields[0].name = 'activitySupportingDoc';
    props.fileUploadData = {
      documents: {
        fieldName: [
          {
            loading: 'true',
          },
        ],
      },
    };

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FileUploads {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
