import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { has } from 'lodash';
import ReturnedDocuments from './index';

jest.mock('lodash');
jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ReturnedDocuments', () => {
  let props: IVariables;
  let mockLodash: any;

  beforeEach(() => {
    mockLodash = has;
    mockLodash.mockImplementation(() => {
      return Promise.resolve({ data: 'some-data' });
    });
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
      onSubmit: jest.fn(),
      i18n: (key: string) => key,
      title: 'ReturnedDocuments',
      content: 'content',
      locale: 'en',
      currentStep: 'economic_licence',
      steps: [],
      stepStatus: {
        economic_name: 'economic_name',
        'economic_name.payment': 'economic_name.payment',
      },
      tags: [{ label: 'test', value: 'test' }],
      isTawtheeqRequired: false,
      commentsParsed: ['test', 'test'],
      action: {
        fileUploadData: {
          update: jest.fn(),
        },
      },
    };
  });

  const renderWithProps = (newProps: IVariables) => {
    return render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ReturnedDocuments {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  };

  it('should render with all props', async () => {
    const { getByLabelText } = renderWithProps(props);
    const element = await waitForElement(() => getByLabelText('next'));
    fireEvent.click(element);
  });

  it('should render with all props fallback', async () => {
    props.currentStep = false;
    renderWithProps(props);
  });
});
