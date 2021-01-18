import fetch from 'client/services/fetch';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { steps } from 'client/config/steps';
import Summary from './index';

jest.mock('client/services/fetch');

export interface IFileUploadProps {
  label: string;
  onChange: Function;
  onRemove: Function;
}

jest.mock(
  '@tamm/ui-lib-v2-file-upload',
  () => ({ onChange, label, onRemove }: IFileUploadProps) => {
    const onChangeFile = (e: IVariables) => {
      if (e.target.files.length) onChange(e.target.files);
      else onRemove(e.target.files);
    };

    return (
      <>
        <label htmlFor="test-upload">{label}</label>
        <input
          data-testid="file-upload-input"
          name="test-upload"
          id="test-upload"
          type="file"
          onChange={onChangeFile}
        />
      </>
    );
  },
);

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Summary', () => {
  let props: IVariables;
  let mockFetch: any;
  beforeEach(() => {
    mockFetch = fetch;
    props = {
      fileUploadData: {
        documents: {
          thawtheeq: [{}],
          noc: [{ loading: true }],
        },
      },
      inputGroups: [
        {
          name: 'thawtheeq',
          twoColumns: true,
          stateKey: 'documents',
          fields: [
            {
              'aria-label': 'file upload',
              elementType: 'fileUpload',
              name: 'thawtheeq',
              accept: ['application/pdf'],
              label: 'field.supportingDocuments',
              maxSize: 5e6,
              help: 'validationMessage.required',
            },
            {
              'aria-label': 'file upload',
              elementType: 'fileUpload',
              name: 'noc',
              accept: ['application/pdf'],
              label: 'field.supportingDocuments',
              maxSize: 5e6,
              help: 'validationMessage.required',
            },
          ],
        },
      ],
      submitLicence: {
        data: {
          thawtheeq: [{}],
        },
      },
      i18n: jest.fn(),
      title: 'summary',
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
      steps,
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
      isTawtheeqRequired: true,
      isNOCRequired: true,
      handleChange: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render with all props', () => {
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Summary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with all props, when file loading', () => {
    props.fileUploadData = {
      documents: {
        thawtheeq: [{ loading: true }],
      },
    };

    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Summary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with all props, when file undefined', () => {
    props.fileUploadData = {
      documents: {},
    };

    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Summary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with all props, when startShowingErrors true', () => {
    props.startShowingErrors = true;
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Summary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call onFileUpload when onChange triggered', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        data: {
          uploadedFileDetails: { s3FilePath: 's3', nameOfFile: 'name' },
        },
      });
    });
    const { getAllByTestId } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Summary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const fileUpload = getAllByTestId('file-upload-input')[0];
    const file = new File(['(⌐□_□)'], 'chucknorris.png', {
      type: 'image/png',
    });
    fireEvent.change(fileUpload);
    // fireEvent.click(, undefined);
    expect(props.handleChange).toHaveBeenCalled();

    Object.defineProperty(fileUpload, 'files', {
      value: [file],
    });
    fireEvent.change(fileUpload);
    expect(props.handleChange).toHaveBeenCalled();
  });

  it('should call onFileUpload when onChange triggered, and api fails ', () => {
    mockFetch.mockImplementation(() => {
      return Promise.reject(new Error());
    });

    const { getAllByTestId } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Summary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const fileUpload = getAllByTestId('file-upload-input')[0];
    const file = new File(['(⌐□_□)'], 'chucknorris.png', {
      type: 'image/png',
    });
    fireEvent.change(fileUpload);
    expect(props.handleChange).toHaveBeenCalled();

    Object.defineProperty(fileUpload, 'files', {
      value: [file],
    });
    fireEvent.change(fileUpload);
    expect(props.handleChange).toHaveBeenCalled();
  });
});
