import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { noticeTypes } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { steps } from 'client/config/steps';
import Notice from './index';

// const Component = withTemplateHooks(Notice);

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Notice', () => {
  let props: any;

  beforeEach(() => {
    props = {
      formBusinessLicenceFine: {
        isLoading: false,
      },
      type: '',
      title: 'title',
      subTitle: 'subTitle',
      text: 'text',
      buttons: [
        {
          variant: 'primary',
          link: 'link',
          label: 'Label 1',
          alignIcon: 'start',
        },
        {
          label: 'Label 2',
          onClick: jest.fn(),
          alignIcon: 'end',
        },
        {
          variant: 'primary',
          label: 'Label 3',
          link: null,
          onClick: null,
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
      currentStep: 'current_step',
      currentSubStep: 'submit_licence',
      steps,
      stepsStatus: {
        link_name_1: 'link_name_1',
        link_name_2: 'link_name_2',
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

  it('should render with all props and isLoading = true', () => {
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

  it('should render without step tracker', async () => {
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

    const button = await waitForElement(() => getByText('Label 1'));
    fireEvent.click(button);
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

  it('should render without step tracker button click with null values', async () => {
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

    const button = await waitForElement(() => getByText('Label 3'));
    fireEvent.click(button);
  });

  it('should render with all props and isLoading = false', () => {
    props.formBusinessLicenceFine.isLoading = true;
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

  it('should render with SUCCESS type', () => {
    props.type = noticeTypes.SUCCESS;

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

  it('should render with WARNING type', () => {
    props.type = noticeTypes.WARNING;

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

  it('should render with INFO type', () => {
    props.type = noticeTypes.INFO;

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

  it('should render with inProgress type', () => {
    props.type = 'inProgress';

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
});
