import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { noticeTypes, IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { steps } from 'client/config/steps';
import Notice from './index';

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
      image: {
        src: '',
      },
      type: noticeTypes.SUCCESS,
      title: 'title',
      subTitle: 'subTitle',
      tags: [
        {
          label: 'label',
          value: 'value',
        },
      ],
      text: 'text',
      buttons: [
        {
          variant: 'primary',
          link: 'link',
          label: 'Label 1',
          onClick: jest.fn(),
        },
        {
          variant: 'secondary',
          label: 'Label 2',
          onClick: jest.fn(),
        },
        {
          variant: 'teritiary',
          label: 'Label 2',
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
      i18n: (i: string) => i,
      currentStep: 'trade_name',
      currentSubStep: 'submit_licence',
      steps,
      content: 'content',
      stepsStatus: {
        trade_name: 'trade_name',
        'trade_name.submit_licence': 'trade_name.submit_licence',
      },
      msgCode: undefined,
      // downloadLicenceBtnConfig: undefined,
      // dropDownConfig: undefined,
      // finishDownloadBtnConfig: undefined,
    };
  });

  afterEach(cleanup);

  const renderWithProps = (propsUpdated: IVariables) => {
    return render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...propsUpdated} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  };
  it('should render with all props', async () => {
    const prop1 = { ...props };
    const { getByText, container } = renderWithProps(prop1);

    const titleElement = await waitForElement(() => getByText(props.title), {
      container,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it('should render with msgCode is checkRenewalEligibility107', async () => {
    props.msgCode = 'checkRenewalEligibility107';
    props.downloadLicenceBtnConfig = jest.fn().mockReturnValueOnce({
      label: 'label',
      icon: '<div>icon</div>',
    });
    props.dropDownConfig = jest.fn().mockReturnValueOnce({
      uiType: 'primary',
      size: 'default',
      label: 'test',
      disabled: false,
      items: [
        {
          id: 'string',
          label: 'string',
        },
      ],
      onChange: jest.fn(),
      name: undefined,
      popupAlign: '',
      popupWidth: null,
    });
    props.finishDownloadBtnConfig = jest.fn().mockReturnValueOnce({
      label: 'label',
      icon: '<div>icon</div>',
    });

    const { getByText, container } = renderWithProps(props);
    const titleElement = await waitForElement(() => getByText(props.title), {
      container,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it('should render with msgCode is success', async () => {
    props.msgCode = 'success';
    const { getByText, container } = renderWithProps(props);

    const titleElement = await waitForElement(() => getByText(props.title), {
      container,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it('should render with INFO type', async () => {
    props.content = '';
    props.type = noticeTypes.INFO;
    const { getByText, container } = renderWithProps(props);

    const titleElement = await waitForElement(() => getByText(props.title), {
      container,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it('should render with WARNING type', async () => {
    props.type = noticeTypes.WARNING;
    const { getByText, container } = renderWithProps(props);
    const titleElement = await waitForElement(() => getByText(props.title), {
      container,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it('should render with information type', async () => {
    props.type = 'information';
    const { getByText, container } = renderWithProps(props);
    const titleElement = await waitForElement(() => getByText(props.title), {
      container,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it('should render with alert type', async () => {
    props.type = 'alert';
    const { getByText, container } = renderWithProps(props);
    const titleElement = await waitForElement(() => getByText(props.title), {
      container,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it('should render with notFound type', async () => {
    props.type = 'notFound';
    props.currentStep = false;

    const { getByText, container } = renderWithProps(props);
    const titleElement = await waitForElement(() => getByText(props.title), {
      container,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it('should render with default type', async () => {
    props.type = '';
    props.waitingMsg = 'waiting message';
    props.daysPendingForLicenceExpiry = 21;
    const { container } = renderWithProps(props);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should handle button onClick', () => {
    props.content = 'content';
    props.licenceNumber = 'licenceNumber';

    const { getByLabelText } = renderWithProps(props);
    fireEvent.click(getByLabelText('button-primary'));
    fireEvent.click(getByLabelText('button-secondary'));
    fireEvent.click(getByLabelText('button-teritiary'));

    expect(props.buttons[1].onClick).toHaveBeenCalled();
    expect(props.history.push).toHaveBeenCalled();
  });
});
