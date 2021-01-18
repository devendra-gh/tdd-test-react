import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import FormTemplate from './index';

jest.mock('./Components/CategoryInput/index', () => () => 'CategoryInput');
jest.mock('./Components/ActivityTable/index', () => () => 'ActivityTable');
jest.mock('./Components/SearchInput/index', () => () => 'SearchInput');
jest.mock('./Components/AlertComponent/index', () => () => 'AlertComponent');
jest.mock('./Components/PaginationActivity/index', () => () =>
  'PaginationActivity',
);

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
  noticeTypes: {
    INFO: 'INFO',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
  },
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('FormTemplate', () => {
  let props: IVariables;
  window.scrollTo = jest.fn();

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
      history: {
        push: jest.fn(),
      },
      actions: {
        stepsStatus: {
          update: jest.fn(),
        },
        formSelectActivity: {
          update: jest.fn(),
        },
      },
      getInitialState: jest.fn(),
      formSelectActivity: {
        category: 'category',
        subCategory: 'subCategory',
        inputType: 'CATEGORY',
        loading: true,
      },
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      i18n: (key: string) => key,
      title: 'FormTemplate',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      buttons: [
        {
          label: 'btn',
          onClick: jest.fn(),
        },
      ],
      steps: [],
      stepStatus: {
        economic_name: 'economic_name',
        'economic_name.payment': 'economic_name.payment',
      },
      list: {
        labelHeading: 'label',
        valueHeading: 'value',
        listDetails: {
          label: 'label',
          value: 'value',
        },
      },
      totalSection: 1000,
    };
  });

  it('should render with all props', async () => {
    const { getByText, container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    expect(getByText(props.subTitle)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('submit button click, alert shown', async () => {
    const { getAllByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getAllByLabelText('button')[1]);
    expect(
      props.actions.formSelectActivity.update.mock.calls[0][0].showError,
    ).toBe(true);
  });

  it('submit button click, props.onSubmit called', async () => {
    props.formSelectActivity.activity = 'activity';
    const { getAllByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getAllByLabelText('button')[1]);
    expect(props.onSubmit).toBeCalled();
  });

  it('back button click, redirect', async () => {
    props.formSelectActivity.activity = 'activity';
    const { getAllByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getAllByLabelText('button')[0]);
    expect(props.history.push).toBeCalled();
    // expect(props.actions.stepsStatus.update).toBeCalled();
  });

  it('radio change, onchange fired', async () => {
    props.formSelectActivity.activity = 'activity';
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <FormTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(container.querySelectorAll('.ui-lib-radio__input')[1]);
    expect(props.onChange).toBeCalled();
  });
});
