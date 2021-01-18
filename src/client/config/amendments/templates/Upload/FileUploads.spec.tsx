import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import FileUploads from './index';
// import { invalid } from 'moment';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('FileUploads', () => {
  let props: IVariables;
  // let documents: 'test'
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
      i18n: (key: string) => key,
      getRequiredDocuments: jest.fn(() => [
        {
          name: 'general',
          sections: [
            {
              userEn: 'en',
              name: 'common',
              user: 'common',
              action: 'add',
              fields: [
                {
                  name: 'moa',
                  description: 'uploadFieldLabel.moa',
                  required: true,
                },
                {
                  name: 'icaApproval',
                  description: 'uploadFieldLabel.icaApproval',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'ownership',
          description: 'uploads.groupDescription.ownership',
          sections: [
            {
              name: 'partners',
              user: 'Amr Said',
              action: 'add',
              fields: [
                {
                  name: 'partnershipContract',
                  description: 'uploadFieldLabel.partnershipContract',
                  required: true,
                },
                {
                  name: 'newspaperArticle',
                },
              ],
            },
            {
              name: 'representatives',
              user: 'Samir Ali',
              action: 'delete',
              fields: [
                {
                  name: 'powerOfAttorney',
                  description: 'uploadFieldLabel.powerOfAttorney',
                },
              ],
            },
          ],
        },
      ]),
      // locale: 'en',
      documents: [
        {
          fieldName: 'general.moa',
          loading: true,
          size: '1',
        },
        {
          fieldName: 'general.icaApproval',
          loading: false,
        },
      ],
    };
  });

  it('should render with all props', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FileUploads {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByText('uploadFieldLabel.moa *'));
  });

  it('should render with all props else statement', async () => {
    props = {
      ...props,
      getRequiredDocuments: jest.fn(),
      validation: jest.fn(() => {
        return true;
      }),
      onSubmitFiles: jest.fn(),
      onBack: jest.fn(),
      amendmentServerError: true,
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FileUploads {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(
      getByText('button.back', {
        selector: 'button',
      }),
    );
    fireEvent.click(
      getByText('button.next', {
        selector: 'button',
      }),
    );
  });
  it('should render with all props else statement with validation false', async () => {
    props = {
      ...props,
      getRequiredDocuments: jest.fn(),
      validation: jest.fn(() => {
        return false;
      }),
      onSubmitFiles: jest.fn(),
      onBack: jest.fn(),
      amendmentServerError: true,
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FileUploads {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(
      getByText('button.next', {
        selector: 'button',
      }),
    );
  });
});
