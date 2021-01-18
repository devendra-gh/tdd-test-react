import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import LEGAL_FORMS from 'client/config/amendments/constants/legalForms';
import fetch from 'client/services/fetch';
import getTawtheeqInfo from 'client/config/amendments/services/getTawtheeqInfo';
import Location from './index';
// import { invalid } from 'moment';
jest.mock('client/services/fetch');
jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Location', () => {
  let props: IVariables;
  let mockFetch: any;
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    props = {
      onChange: jest.fn(),
      onClick: jest.fn(),
      onCheck: jest.fn(),
      onBack: jest.fn(),
      onBlur: jest.fn(),
      onSubmitAmendment: jest.fn(),
      validateOnLocation: jest.fn(),
      onBlurTawtheeq: jest.fn(),
      // onLocation: jest.fn(),
      // onShowTradeName: jest.fn(),
      i18n: (key: string) => key,
      loading: false,
      title: 'Location',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      amendmentCategories: {
        ownership: false,
        economicActivitiesOrName: false,
      },
      branchDescription: 'branch',
      legalForm: LEGAL_FORMS.FOREIGN_BRANCH,
      categoryType: [
        'ownership',
        'locationOrCountry',
        'economicActivitiesOrName',
        'financialDetails',
      ],
      countryList: ['test1', 'test2'],
      steps: [],
      stepStatus: {
        economic_name: 'economic_name',
        'economic_name.payment': 'economic_name.payment',
      },
      tawtheeqDetails: '11111',
      licenceDetails: {
        location: {
          tawtheeqCurrentNumber: 'test',
        },
        isbranch: 'Y',
      },
      actions: {
        licenceDetails: {
          update: jest.fn(),
        },
        tawtheeqDetails: {
          reset: jest.fn(),
          update: jest.fn(),
        },
        amendmentCategories: {
          reset: jest.fn(),
          update: jest.fn(),
        },
      },
    };
    mockFetch = fetch;
  });

  it('should render with all props', async () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Location {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // expect(getByText(props.subTitle)).toBeInTheDocument();
  });
  it('should render with all props with steps empty', async () => {
    props.steps = null;
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Location {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // expect(getByText(props.subTitle)).toBeInTheDocument();
  });
  it('should call the if block of onCheck function when onclick', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Location {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const fakePayload = {
      success: true,
      data: {
        contractDetails: {
          contractNo: 10086,
          contractRegistrationDate: '2017-03-10T12:06:08.000+04:00',
        },
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });
    fireEvent.click(getByLabelText('button-secondary'));
    const contractNo: string = '12345';
    await getTawtheeqInfo(contractNo);
  });
  it('should call the else block of onCheck function when onclick', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Location {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const fakePayload = {
      success: true,
      data: {},
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(fakePayload);
    });
    fireEvent.click(getByLabelText('button-secondary'));
    const contractNo: string = '12345';
    await getTawtheeqInfo(contractNo);
  });

  it('should call the onBlurTawtheeq function when onblur', async () => {
    props.tawtheeqDetails = 'abcde';
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Location {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.blur(getByLabelText('location.tawtheeqCurrentNumber'));
  });
  it('should call the onBlurTawtheeq function else part when onblur', async () => {
    props.tawtheeqDetails = '';
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Location {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.blur(getByLabelText('location.tawtheeqCurrentNumber'));
  });
  it('should call the reset function when onChange', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Location {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.change(getByLabelText('location.tawtheeqCurrentNumber'), {
      target: { value: 'abvde' },
    });
  });
  it('should successfully props else statment', () => {
    props.licenceDetails.isbranch = 'N';
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Location {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['button.back', 'button.next'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      fireEvent.click(
        getByText(buttonName, {
          selector: 'button',
        }),
      );
    });
  });
  it('should called submit else statment', () => {
    props.tawtheeqDetails = null;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Location {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['button.next'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      fireEvent.click(
        getByText(buttonName, {
          selector: 'button',
        }),
      );
    });
  });
  it('should successfully props with click event', () => {
    props.licenceDetails.location.tawtheeqCurrentNumber = undefined;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Location {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const buttonClick = ['button.back', 'button.next'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      fireEvent.click(
        getByText(buttonName, {
          selector: 'button',
        }),
      );
    });
  });
  it('should render ded error message', async () => {
    props = {
      ...props,
      dedErrorMessage: true,
      loading: false,
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Location {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
  it('should render else of forieng branch description', async () => {
    props = {
      ...props,
      legalForm: 'mobdea',
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Location {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
  it('should render invalid message', async () => {
    props = {
      ...props,
      invalid: true,
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Location {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
  it('should render valid message', async () => {
    props = {
      ...props,
      validate: true,
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Location {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
