import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { steps } from 'client/config/steps';
import Service from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('commercialPromotions/templates/Service', () => {
  let props: any;
  beforeEach(() => {
    props = {
      title: 'title',
      subTitle: 'subTitle',
      text: 'text',
      history: {
        push: jest.fn(),
      },
      match: {},
      location: {},
      actions: {
        title: {
          update: jest.fn(),
        },
        hero: {
          update: jest.fn(),
        },
        breadcrumbs: {
          update: jest.fn(),
        },
      },
      onSubmit: jest.fn(),
      i18n: jest.fn(i => i),
      steps,
      stepsStatus: {},
      showRelatedJourneyCard: true,
      description: 'title',
      startLogin: { description: 'description' },
      processSteps: [
        {
          id: 'test',
          description: 'test1',
        },
      ],
    };
  });

  afterEach(cleanup);

  test('renders with props', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Service {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should handle button onClick', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Service {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByText('button.start'));
    expect(props.onSubmit).toHaveBeenCalled();
  });
});
