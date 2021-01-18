import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Home from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('consumer-good-prices/templates/Home', () => {
  let props: any;
  beforeEach(() => {
    props = {
      title: 'title',
      subTitle: 'subTitle',
      text: 'text',
      history: {
        push: jest.fn(),
      },
      onStart: jest.fn(),
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
      currentStep: '',
      currentSubStep: '',
      steps: [],
      stepsStatus: {},
      isDisplayFlag: true,
      isDisplayFlagCard: true,
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
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Home {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('cgp_home_desc')).toBeInTheDocument();
  });

  it('should handle button onClick', async () => {
    props.loggedIn = true;

    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Home {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByLabelText('button-primary'), {
      target: { value: 'value' },
    });

    // fireEvent.click(getAllByTitle('search')[0], {
    //   target: { value: 'value' },
    // });
  });
});
