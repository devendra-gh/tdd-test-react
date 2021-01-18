import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
// import { invalid } from 'moment';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import NoticeTemplate from './index';

const mockStore = configureMockStore();
const store = mockStore({});

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('NoticeTemplate', () => {
  let props: IVariables;
  beforeEach(() => {
    props = {
      i18n: (key: string) => key,
      title: 'NoticeTemplate',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      buttons: [
        {
          label: 'test_button',
          uiType: 'primary',
          withArrow: true,
          alignIcon: 'end',
          onClick: jest.fn(),
          link: '/',
        },
      ],
      steps: [],
      stepStatus: {
        economic_name: 'economic_name',
        'economic_name.payment': 'economic_name.payment',
      },
      value: 'test',
      content: 'test',
      tags: [
        {
          label: 'test',
          value: 'test',
        },
      ],
      currentPage: 'applicationApproved',
      showUpload: true,
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should render with all props', async () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Provider store={store}>
              <NoticeTemplate {...props} />,
            </Provider>
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // expect(getByText(container, props.subTitle)).toBeInTheDocument();
  });

  it('should render AlertCircleFilled alert', async () => {
    props.currentPage = 'applicationReturned';
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Provider store={store}>
              <NoticeTemplate {...props} />,
            </Provider>
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // expect(getByText(container, props.subTitle)).toBeInTheDocument();
  });

  it('should render Notice template', async () => {
    props = {
      ...props,
      additionalTextWithLink: true,
      link: 'qwe',
      text1: 'qwe',
      text2: 'qwe',
      text3: 'qwe',
      buttons: [
        {
          label: 'test_button',
          withArrow: false,
        },
      ],
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Provider store={store}>
              <NoticeTemplate {...props} />,
            </Provider>
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // expect(getByText(container, props.subTitle)).toBeInTheDocument();
  });

  it('should render button link', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Provider store={store}>
              <NoticeTemplate {...props} />,
            </Provider>
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // expect(getByText(container, 'test_button')).toBeInTheDocument();
  });

  it('should render button link else statement', () => {
    props = {
      ...props,
      buttons: [
        {
          label: 'test_button',
          withArrow: false,
          link: '',
          onClick: jest.fn(),
        },
      ],
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Provider store={store}>
              <NoticeTemplate {...props} />,
            </Provider>
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // fireEvent.click(getByText(container, 'test_button'));

    // expect(getByText(container, 'test_button')).toBeInTheDocument();
  });

  it('should successfully render  summary button and click', async () => {
    props = {
      ...props,
      currentPage: 'applicationError',
      dedErrorMessage: 'error',
      onReviewApplication: jest.fn(),
      upload: jest.fn(),
      applicationReturnDocuments: [],
    };

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Provider store={store}>
              <NoticeTemplate {...props} />,
            </Provider>
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['button.reviewApplication'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      const nextButton = getByText(buttonName, {
        selector: 'button',
      });
      fireEvent.click(nextButton);
    });
  });

  it('should successfully render  summary button and click', async () => {
    props = {
      ...props,
      currentPage: 'applicationApproved',
      onReviewApplication: jest.fn(),
      startOver: jest.fn(),
      downloadLicences: jest.fn(),
    };

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Provider store={store}>
              <NoticeTemplate {...props} />,
            </Provider>
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['button.downloadLicence', 'button.goToDashBoard'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      const nextButton = getByText(buttonName, {
        selector: 'button',
      });
      fireEvent.click(nextButton);
    });
  });
});
