import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { steps } from 'client/config/steps';
import UploadDocuments from './index';

export interface IButtonProps {
  label: string;
  onClick: Function;
}

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

jest.mock('./components/NocForm', () => () => '');
jest.mock('../FileUploads', () => () => '');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/renewLicence/templates/UploadDocuments', () => {
  let props: any;

  beforeEach(() => {
    props = {
      description: 'description',
      onFileChange: jest.fn(),
      onSubmit: jest.fn(),
      isNOCRequired: true,
      licenceActivities: `[{"test":"test"}]`,
      title: 'title',
      subTitle: 'subTitle',
      text: 'text',
      history: {
        push: jest.fn(),
      },
      validate: () => true,
      actions: {
        fileUploadData: {
          update: jest.fn(),
        },
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
      content: 'content',
      stepsStatus: {
        trade_name: 'trade_name',
        'trade_name.submit_licence': 'trade_name.submit_licence',
      },
    };
  });

  afterEach(cleanup);

  it('should render with all props', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <UploadDocuments {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render without currentStep', () => {
    props.currentStep = undefined;
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <UploadDocuments {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render licenceSubmitPage with step 2', () => {
    props.licenceSubmitPage = 'step2.title';
    props.onBack = jest.fn();
    props.onNext = jest.fn();

    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <UploadDocuments {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByLabelText('back1'));
    expect(props.onBack).toBeCalled();

    fireEvent.click(getByLabelText('next'));
    expect(props.onNext).toBeCalled();
  });

  it('should render licenceSubmitPage with step 3', () => {
    props.licenceSubmitPage = 'step3.title';
    props.isTawtheeqRequired = true;
    props.onPrevious = jest.fn();

    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <UploadDocuments {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByLabelText('back2'));
    expect(props.onPrevious).toBeCalled();

    fireEvent.click(getByLabelText('submit'));
  });

  it('should render licenceSubmitPage with step 3', () => {
    props.licenceSubmitPage = 'step3.title';
    props.isTawtheeqRequired = true;
    props.validate = () => false;

    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <UploadDocuments {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByLabelText('submit'));
  });
});
