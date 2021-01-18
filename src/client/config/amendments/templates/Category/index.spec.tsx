import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { IVariables } from '@tamm/app-composer';
import Category from './index';

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
      match: {},
      location: {},
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
      getCategoryTypes: jest.fn(),
      toggleCategories: jest.fn(),
      legalForm: 'establishment',
      licenseType: 'tajer',
      actions: {
        amendmentCategories: {
          update: jest.fn(),
        },
        licenseType: {
          update: jest.fn(),
        },
      },
      amendmentCategories: {
        ownership: false,
        location: false,
        activities: false,
        tradename: false,
        financialDetails: false,
        category: ['test', 'test'],
      },
      amendmentServerError: 'server test',
      dedErrorMessage: '',
    };
  });

  it('should successfully props with click event', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Category {...props} />,
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
    // fireEvent.change(getByRole('ownership'));
  });

  it('should successfully props else statment', () => {
    props = {
      ...props,
      showSidebar: false,
      pageLoading: true,
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Category {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should click checkbox', async () => {
    props = {
      ...props,
      amendmentServerError: '',
      dedErrorMessage: 'some error',
    };

    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Category {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(container.querySelectorAll('.ui-lib-checkbox__input')[0]);
  });
  it('should click checkbox', async () => {
    props = {
      ...props,
      legalForm: 'adBranch',
      licenseType: 'branch',
      prevLicenseType: 'tajer',
    };

    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Category {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(container.querySelectorAll('.ui-lib-checkbox__input')[0]);
  });
});
