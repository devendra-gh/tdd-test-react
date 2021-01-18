import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import SummaryTemplate from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('SummaryTemplate', () => {
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
      match: {},
      location: {},
      currentStep: 'link_name_1',
      getOnUpdateHandler: jest.fn(),
      onClick: jest.fn(),
      title: 'FormTemplate',
      locale: 'en',
      summaryList: [
        {
          columns: [
            {
              id: 'description',
              title: 'Description',
            },
          ],
          headerHidden: false,
          items: [],
        },
      ],
      activitiesList: [
        {
          columns: [
            {
              id: 'description',
              title: 'Description',
            },
          ],
          headerHidden: false,
          items: [],
        },
      ],
      i18n: (key: string) => key,
      buttons: [
        {
          label: 'btn',
          onClick: jest.fn(),
        },
      ],
      steps: [],
      stepStatus: {
        link_name_1: 'link_name_1',
        link_name_2: 'link_name_2',
      },
    };
  });

  it('should render with all props', async () => {
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SummaryTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should call onClick when View Another button is pressed', async () => {
    const { getByLabelText, container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SummaryTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const [onClick] = await waitForElement(() => [
      getByLabelText('button-primary'),
      { container },
    ]);
    fireEvent.click(onClick);
  });
});
