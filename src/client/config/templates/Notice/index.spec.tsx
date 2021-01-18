import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { withTemplateHooks, noticeTypes } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { steps } from 'client/config/steps';
import Notice from './index';

const Component = withTemplateHooks(Notice);

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Notice', () => {
  let props: any;

  beforeEach(() => {
    props = {
      additionalTextWithLink: 'additionalTextWithLink',
      uniqueId: 'economic-licence-approved',
      licenceType: 'allInOne',
      businessLegalFormCode: '3',
      inputField: { title: '' },
      list: [],
      type: noticeTypes.SUCCESS,
      title: 'title',
      subTitle: 'subTitle',
      text: 'text',
      buttons: [
        {
          variant: 'primary',
          link: 'link',
          label: 'Label 1',
        },
        {
          link: 'link',
          label: 'Label 2',
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
      i18n: jest.fn(i => i),
      currentStep: 'trade_name',
      currentSubStep: 'submit_licence',
      steps,
      stepsStatus: {
        trade_name: 'trade_name',
        'trade_name.submit_licence': 'trade_name.submit_licence',
      },
      showUpload: true,
      videoSrc: true,
      // isSubmitLicenceNeeded: true,
      sectionTitle: 'sectiontitle',
      sectionDescription: 'description',
      sectionButtons: [
        {
          variant: 'primary',
          link: 'link',
          label: 'Label 1',
        },
      ],
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
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // setTimeout(() => {
    //   expect(getByText(props.title)).toBeInTheDocument();
    // }, 5000);
  });

  it('should render with INFO type', () => {
    props.type = noticeTypes.INFO;
    props.businessLegalFormCode = '34';

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // setTimeout(() => {
    //   expect(getByText(props.title)).toBeInTheDocument();
    // }, 5000);
  });

  it('should render with WARNING type', () => {
    props.type = noticeTypes.WARNING;
    props.licenceType = undefined;

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText(props.title)).toBeInTheDocument();
    }, 5000);
  });

  it('should render with default type', () => {
    props.type = '';

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText(props.title)).toBeInTheDocument();
    }, 5000);
  });

  it('should render button link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Component {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      fireEvent.click(getByText(/Label 1/));

      expect(getByText(/Label 1/)).toBeInTheDocument();
    }, 5000);
  });

  it('should handle button onClick', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      fireEvent.click(getByText(/Label 2/));

      expect(props.buttons[1].onClick).toHaveBeenCalled();
    }, 5000);
  });

  it('should render with alert type', () => {
    props.type = 'alert';

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText(props.title)).toBeInTheDocument();
    }, 5000);
  });

  it('should render with information type', () => {
    props.type = 'information';

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText(props.title)).toBeInTheDocument();
    }, 5000);
  });

  it('should render with notFound type', () => {
    props.type = 'notFound';
    props.isSubmitLicenceNeeded = true;

    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText(props.title)).toBeInTheDocument();
    }, 5000);
  });

  it('should render without step tracker button click', async () => {
    props.currentStep = false;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const button = await waitForElement(() => getByText('Label 2'));
    fireEvent.click(button);
  });

  it('should render without step tracker button click', async () => {
    props.buttons = [
      {
        label: 'Label 2',
        onClick: jest.fn(),
      },
    ];
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const button = await waitForElement(() => getByText('Label 2'));
    fireEvent.click(button);
  });
});
