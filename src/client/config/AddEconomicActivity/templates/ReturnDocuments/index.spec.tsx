import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import ReturnedDocuments from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/ReturnDocuments', () => {
  let props: IVariables;

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
      i18n: jest.fn(),
      content: 'test',
      commentsParsed: ['test'],
      fileUploadData: {
        documents: {
          activitySupportingDoc: null,
        },
      },
      actions: {
        fileUploadData: {
          update: jest.fn(),
        },
      },
      title: 'title',
      tags: [],
      buttonLabel: 'test',
      onSubmit: jest.fn(),
      steps: [],
    };
  });

  afterEach(cleanup);

  it('should render', async () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ReturnedDocuments {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with all props', async () => {
    props.currentStep = 'test';

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ReturnedDocuments {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with onClick', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ReturnedDocuments {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByLabelText('next'));
  });

  it('should render with onClick null values', async () => {
    props.fileUploadData = {
      documents: {
        activitySupportingDoc: ['test'],
        loading: true,
      },
    };

    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ReturnedDocuments {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByLabelText('next'));
  });
});
