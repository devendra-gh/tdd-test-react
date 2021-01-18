import React from 'react';
import {
  render,
  cleanup,
  // fireEvent,
  // waitForElement,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import SubmitLicence from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/components/SubmitLicence', () => {
  let props: any;

  beforeEach(() => {
    props = {
      subTitle: 'submit license',
      showMultipleDocumentUpload: true,
      files: [],
      activities: [
        {
          activityCode: '1001',
        },
      ],
      licenceButton: {
        label: 'submit',
        onClick: jest.fn(i => i),
        uiType: 'primary',
        key: '1',
      },
      locale: 'en',
      termsAndConditionsChecked: true,
      inputField: 'title',
      validateStatus: 'success',
      termsAndConditions: {
        title: 'terms',
        label: 'terms and conditions',
      },
      conditions: [
        {
          labelAr: 'arabic',
          labelEn: 'English',
        },
      ],
      actions: {},
      i18n: jest.fn(i => i),
      onFileUpload: jest.fn(() => jest.fn()),
      onRemoveFile: jest.fn(() => jest.fn()),
      fetchAttachments: jest.fn(() => [
        {
          AuthorityEn: 'test authority',
          RequirementDescEn: 'file',
        },
      ]),
    };
  });

  afterEach(cleanup);

  test('renders with all props', async () => {
    props.locale = 'en';
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SubmitLicence {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // setTimeout(() => {
    //   expect(getByText('submit')).toBeInTheDocument();
    //   fireEvent.click(getByText('submit'));
    // }, 500);
  });

  test('renders with all props with Ar locale', async () => {
    props.locale = 'ar';
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SubmitLicence {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // const submit = await waitForElement(() => getByText('check'));
    // fireEvent.click(submit);
    // setTimeout(() => {
    //   expect(getByText('submit')).toBeInTheDocument();
    // }, 500);
  });

  test('renders without conditions', async () => {
    props.conditions = [];
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SubmitLicence {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText('submit')).toBeInTheDocument();
    }, 500);
  });
});
