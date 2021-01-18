import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import UploadFile from './ReturnPageContent';
// import { invalid } from 'moment';

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
      pageLoading: true,
      amendmentServerError: true,
      applicationReturnDocuments: [
        {
          file: 'file',
          status: 'success',
          uploaded: '123',
          loading: false,
          size: '',
        },
      ],
      submitDocuments: jest.fn(),
      onUploadDocuments: jest.fn(),
      onFileUpload: jest.fn(),
      onFileRemove: jest.fn(),
      actions: {
        applicationReturnDocuments: {
          update: jest.fn(),
        },
      },
    };
  });

  it('should render with all props', async () => {
    const { getByText, container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <UploadFile {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['button.submit'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      const nextButton = getByText(buttonName, {
        selector: 'button',
      });
      fireEvent.click(nextButton);
    });

    fireEvent.click(
      container.querySelectorAll('.ui-lib-file-upload-dropzone__input')[0],
    );
    // fireEvent.click(
    //   container.querySelectorAll(
    //     '.ui-lib-file-upload-preview__remove-button',
    //   )[0],
    // );
  });
  it('should render with all props', async () => {
    props = {
      ...props,
      applicationReturnDocuments: [
        {
          file: 'file',
          status: 'success',
          uploaded: '123',
          loading: true,
          size: '',
        },
      ],
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <UploadFile {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['button.submit'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      const nextButton = getByText(buttonName, {
        selector: 'button',
      });
      fireEvent.click(nextButton);
    });
  });

  it('should render with all props else statement', async () => {
    props = {
      ...props,
      applicationReturnDocuments: [],
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <UploadFile {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['button.submit'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      const nextButton = getByText(buttonName, {
        selector: 'button',
      });
      fireEvent.click(nextButton);
    });
  });
});
