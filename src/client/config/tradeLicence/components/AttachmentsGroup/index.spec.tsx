import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { IVariables } from '@tamm/app-composer';
import AttachmentsGroup from './index';

jest.mock('client/config/utils/lookup', () => ({
  getLegalFormFromCode: jest.fn(() => {
    return true;
  }),
}));

jest.mock(
  'client/config/pages/EconomicLicence/functions/getLegalForms',
  () => ({
    isMoaRequired: jest.fn(() => {
      return true;
    }),
  }),
);

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/components/AttachmentsGroup', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      onFileUpload: jest.fn(i => i),
      onRemoveFile: jest.fn(i => i),
      fetchAttachments: jest.fn(() => [
        {
          AuthorityEn: 'test authority',
          RequirementDescEn: 'file',
        },
      ]),
      activities: [],
      legalType: 'establishment',
      files: [
        {
          fieldName: 'test',
          size: '10mb',
        },
      ],
      licenceType: '',
    };
  });

  afterEach(cleanup);

  const renderWithProps = (data: IVariables) => {
    return render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <AttachmentsGroup {...data} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  };

  test('renders component without props', async () => {
    renderWithProps(props);
  });

  test('renders component with props 1', async () => {
    props = {
      ...props,
      legalType: '',
      licenceType: '',
      activities: [
        {
          activityCode: '1001',
        },
      ],
      fetchAttachments: jest.fn(() => []),
    };

    renderWithProps(props);
  });

  test('renders component with props 2', async () => {
    props = {
      ...props,
      licenceType: 'test',
      activities: [
        {
          activityCode: '1001',
        },
      ],
    };

    renderWithProps(props);
  });
});
