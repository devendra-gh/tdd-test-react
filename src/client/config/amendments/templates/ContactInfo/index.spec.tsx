import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { IVariables } from '@tamm/app-composer';
import ContactInfo from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Category', () => {
  let props: IVariables;
  beforeEach(() => {
    props = {
      i18n: (key: string) => key,
      showSidebar: true,
      currentStep: 'process.selectAmendmentType',
      stepsStatus: {
        'process.selectLicenceNumber': 'finish',
      },
      subTitle: 'category.subTitle',
      description: 'category.description',
      onNext: jest.fn(),
      onBack: jest.fn(),
      submit: jest.fn(),
      validation: jest.fn(() => true),
      legalForm: 'establishment',
      licenseType: 'tajer',
      actions: {
        amendmentCategories: {
          update: jest.fn(),
        },
      },
      amendmentCategories: {
        ownership: false,
        location: false,
        activities: false,
        tradename: false,
        financialDetails: false,
      },
      licenceDetails: {
        contactInfo: {
          name: 'test',
        },
      },
    };
  });

  it('should successfully props with click event', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ContactInfo {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const buttonClick = ['button.back', 'button.submit'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      fireEvent.click(
        getByText(buttonName, {
          selector: 'button',
        }),
      );
    });
  });

  it('should successfully props with click event', () => {
    props = {
      ...props,
      validation: jest.fn(() => false),
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ContactInfo {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
