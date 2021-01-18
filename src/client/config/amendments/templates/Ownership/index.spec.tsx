import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { IVariables } from '@tamm/app-composer';
import Ownership from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Ownership', () => {
  let props: IVariables;
  beforeEach(() => {
    props = {
      i18n: (key: string) => key,
      getAmendmentTypes: jest.fn(() => ({
        partners: {
          rules: [],
          actions: {
            add: true,
            edit: true,
            delete: true,
          },
          noDisplay: false,
        },
        managers: {
          rules: [{}],
          actions: {
            add: true,
            edit: true,
            delete: true,
          },
          noDisplay: false,
        },
      })),
      legalForm: 'establishment',
      licenseType: 'tajer',
      currentCategory: 'ownership',
      checkRules: jest.fn(() => {
        return [
          {
            condition: 'mustHaveAtLeastOne',
            message: 'condition.partners.mandatory',
            noDisplay: false,
            onlyIf: jest.fn(),
          },
        ];
      }),
      licenceDetails: {
        partners: [
          {
            type: 'Citizen',
            status: 'add',
          },
        ],
        managers: [],
        representatives: [],
        localAgents: [],
        heirs: [],
      },
      getActionType: jest.fn(),
      history: {
        push: jest.fn(),
      },
      onBack: () => {},
      onNext: () => {},
      onConfirmReset: () => {},
      showDeleteModal: () => {},
      actions: {
        legalForm: {
          update: jest.fn(),
        },
        licenseType: {
          update: jest.fn(),
        },
        licenceDetails: {
          update: jest.fn(),
        },
        amendmentCategories: {
          update: jest.fn(),
        },
      },
    };
  });

  it('should successfully render ownership', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Ownership {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByText('button.addNewProfile'));
    fireEvent.click(getByText('button.addNew'));
  });
  it('should successfully render ownership ConfirmationPopup', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Ownership {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const deletePopup = [
      'button.delete',
      'button.no',
      'button.delete',
      'button.yes',
    ];
    Object.values(deletePopup).forEach((buttonName: string) => {
      fireEvent.click(getByText(buttonName));
    });

    const resetPopup = [
      'button.resetChanges',
      'button.reset',
      'button.resetChanges',
      'button.cancel',
    ];
    Object.values(resetPopup).forEach((buttonName: string) => {
      const button = getByText(buttonName, {
        selector: 'button',
      });

      fireEvent.click(button);
    });
  });
  it('should successfully render ownership  back,next and switchLegalForm button', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Ownership {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = [
      'button.next',
      'button.back',
      'button.switchLegalForm',
    ];
    Object.values(buttonClick).forEach((buttonName: string) => {
      const nextButton = getByText(buttonName, {
        selector: 'button',
      });

      fireEvent.click(nextButton);
    });
  });

  it('should successfully render ownership else statement to cover', () => {
    props = {
      ...props,
      licenceDetails: {
        partners: [
          {
            type: 'Citizen',
            status: '',
          },
        ],
      },
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport>
            <Ownership {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
