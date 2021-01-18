import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import AttachmentsGroup from './index';

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
      activities: [
        {
          activityCode: '1001',
        },
      ],
      licenceType: 'tajer',
      legalType: '34',
      files: [],
    };
  });

  afterEach(cleanup);

  test('renders component with visible', async () => {
    render(
      <MemoryRouter>
        <AttachmentsGroup {...props} />
      </MemoryRouter>,
    );

    // setTimeout(() => {
    //   expect(getByText(props.title)).toBeInTheDocument();
    // }, 500);
  });

  test('renders component with visible', () => {
    props.activities = [];
    const { getByText } = render(
      <MemoryRouter>
        <AttachmentsGroup {...props} />
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText(props.title)).toBeInTheDocument();
    }, 500);
  });

  test('renders component with visible', () => {
    props.licenceType = null;
    const { getByText } = render(
      <MemoryRouter>
        <AttachmentsGroup {...props} />
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText(props.title)).toBeInTheDocument();
    }, 500);
  });
});
