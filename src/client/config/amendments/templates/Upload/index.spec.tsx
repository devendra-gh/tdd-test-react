import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Upload from './index';
// import { invalid } from 'moment';
jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Upload', () => {
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
      i18n: (key: string) => key,
      getRequiredDocuments: jest.fn(() => [
        {
          name: 'general',
          sections: [
            {
              name: 'common',
              user: 'common',
              action: 'add',
              fields: [
                {
                  name: 'moa',
                  description: 'uploadFieldLabel.moa',
                  required: false,
                },
                {
                  name: 'icaApproval',
                  description: 'uploadFieldLabel.icaApproval',
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
      onBack: jest.fn(),
      onNext: jest.fn(),
      validation: jest.fn(() => true),
      onSubmitFiles: jest.fn(),
      actions: {
        documents: {
          update: jest.fn(),
        },
      },
    };
  });
  it('should successfully render Upload', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Upload {...props} />,
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
  it('should successfully render Upload submit validation else part', async () => {
    props = {
      ...props,
      validation: jest.fn(() => false),
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Upload {...props} />,
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
