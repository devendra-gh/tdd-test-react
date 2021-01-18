import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Financial from './index';
// import { invalid } from 'moment';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Financial', () => {
  let props: IVariables;
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
      i18n: (key: string) => key,
      title: 'Category',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      amendmentCategories: {
        ownership: false,
        economicActivitiesOrName: false,
      },
      licenceDetails: {
        paidUpCapital: {
          paidUpCapital: '123',
          amendedCapital: '123',
        },
      },
      categoryType: [
        'ownership',
        'locationOrCountry',
        'economicActivitiesOrName',
        'financialDetails',
      ],
      steps: [],
      stepStatus: {
        economic_name: 'economic_name',
        'economic_name.payment': 'economic_name.payment',
      },
      onBack: jest.fn(),
      onSubmitAmendment: jest.fn(),
      handleCapitalAmountChange: jest.fn(),
      amendmentServerError: 'server test',
      dedErrorMessage: '',
    };
  });

  it('should render with all props', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Financial {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText(props.subTitle)).toBeInTheDocument();
  });

  it('should successfully render ownership  back,next and switchLegalForm button', async () => {
    props = {
      ...props,
      amendmentServerError: '',
      dedErrorMessage: 'ded error',
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Financial {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['button.next', 'button.back'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      const nextButton = getByText(buttonName, {
        selector: 'button',
      });

      fireEvent.click(nextButton);
    });
  });

  it('should successfully render next button validation', async () => {
    props = {
      ...props,
      amendmentServerError: '',
      dedErrorMessage: 'ded error',
      licenceDetails: {
        paidUpCapital: {
          paidUpCapital: '123',
          amendedCapital: '',
        },
      },
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Financial {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['button.next'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      const nextButton = getByText(buttonName, {
        selector: 'button',
      });

      fireEvent.click(nextButton);
    });
  });
  it('should successfully render next button validation', async () => {
    props = {
      ...props,
      amendmentServerError: '',
      dedErrorMessage: 'ded error',
      licenceDetails: {
        paidUpCapital: {
          paidUpCapital: '123',
          amendedCapital: '123a',
        },
      },
    };
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Financial {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.change(getByLabelText('financial.capitalAmount'), {
      target: { value: '' },
    });
    fireEvent.change(getByLabelText('financial.capitalAmount'), {
      target: { value: '12a' },
    });
    const buttonClick = ['button.next'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      const nextButton = getByText(buttonName, {
        selector: 'button',
      });

      fireEvent.click(nextButton);
    });
  });

  it('should call the Pagination button is clicked', async () => {
    props = {
      ...props,
      dedErrorMessage: 'some error',
    };

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Financial {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
