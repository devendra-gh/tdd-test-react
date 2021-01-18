import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Summary from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Summary', () => {
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
      title: 'summary',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      buttons: [
        {
          label: 'button.pay',
          onClick: jest.fn(),
          uiType: 'primary',
          withArrow: true,
        },
      ],
      steps: [],
      stepStatus: {},
      list: [
        {
          uiType: 'default',
          title: 'notice.paymentSummary.title',
          items: [
            {
              document: 'global.renewFees',
              price: 100,
            },
          ],
          columns: [
            {
              id: 'document',
              title: 'global.fees',
            },
            {
              id: 'price',
              title: 'global.price',
              align: 'end',
            },
          ],
        },
      ],
      totalSection: 1000,
    };
  });

  it('should render with all props', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Summary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText(props.subTitle)).toBeInTheDocument();
  });

  it('should render without currentStep', async () => {
    props.currentStep = null;
    const { container, getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Summary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const buttonPay = await waitForElement(() => getByLabelText('button.pay'), {
      container,
    });
    fireEvent.click(buttonPay);
  });
});
