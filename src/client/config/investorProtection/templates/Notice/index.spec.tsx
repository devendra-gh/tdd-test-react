import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { noticeTypes } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import NoticeTemplate from './index';

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

describe('config/templates/Notice', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {},
      location: {},
      type: noticeTypes.SUCCESS,
      title: 'title',
      subTitle: 'subTitle',
      text: 'text',
      buttons: [
        {
          label: 'Label 1',
          onClick: jest.fn(),
        },
      ],
      history: {
        push: jest.fn(),
      },
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
      steps: [],
      i18n: jest.fn(i => i),
      tags: [
        {
          label: 'notice.refNo',
          value: 'tnNumber',
        },
        {
          label: 'notice.submit',
          value: 'submitDate',
        },
      ],
    };
  });

  afterEach(cleanup);

  it('should render with all props', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <NoticeTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText(props.title)).toBeInTheDocument();
  });

  it('should render with WARNING type', () => {
    props.type = noticeTypes.WARNING;

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <NoticeTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText(props.title)).toBeInTheDocument();
  });

  it('should render with SUCCESS type', () => {
    props.type = noticeTypes.SUCCESS;

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <NoticeTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText(props.title)).toBeInTheDocument();
  });

  it('should render with default type', () => {
    props.type = '';

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <NoticeTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText(props.title)).toBeInTheDocument();
  });

  it('should handle button onClick', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <NoticeTemplate {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByText(/Label 1/));
    expect(props.buttons[0].onClick).toHaveBeenCalled();
  });
});
