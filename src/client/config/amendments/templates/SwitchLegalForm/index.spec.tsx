import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import SwitchLegalForm from './index';
// import { invalid } from 'moment';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('SwitchLegalForm', () => {
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
      match: {},
      location: {},
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

      categoryType: [
        'ownership',
        'locationOrCountry',
        'economicActivitiesOrName',
        'financialDetails',
      ],
      checkRules: jest.fn(() => {
        return [
          {
            message: 'condition.partners.mandatory',
            status: false,
            display: true,
            legalFormChange: false,
          },
          {
            message: 'condition.partners.moreThanOne',
            status: false,
            display: true,
            legalFormChange: ['establishment', 'soleProprietorshipLLC'],
          },
        ];
      }),
      getRuleList: jest.fn(() => {
        return ['condition.partners.mandatory'];
      }),
      steps: [],
      stepStatus: {
        economic_name: 'economic_name',
        'economic_name.payment': 'economic_name.payment',
      },
      licenseType: 'instantLicense',
      legalForm: 'establishment',
      prevLegalForm: 'limitedLiabilityCompanyLLC',
      actions: {
        legalForm: {
          update: jest.fn(),
        },
        amendmentCategories: {
          update: jest.fn(),
        },
      },
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should render with all props', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SwitchLegalForm {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['button.back', 'button.confirm'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      const nextButton = getByText(buttonName, {
        selector: 'button',
      });

      fireEvent.click(nextButton);
    });
  });

  it('should render with all props', async () => {
    props = {
      ...props,
      licenseType: 'instantLicense',
      legalForm: 'limitedLiabilityCompanyLLC',
      prevLegalForm: 'establishment',
      checkRules: jest.fn(),
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SwitchLegalForm {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
