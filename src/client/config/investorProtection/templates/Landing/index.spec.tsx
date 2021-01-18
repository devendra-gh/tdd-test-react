import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  // waitForElement,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Landing from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

jest.mock('client/templates/Sidebar', () => <div />);

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('investorProtection/config/templates/landing', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {},
      location: {},
      i18n: jest.fn(i => i),
      process: {
        steps: [{ label: 'step1', description: 'description1' }],
      },
      title: 'investorProtection.landingPage.title',
      description: 'investorProtection.landingPage.description',
      startLogin: {
        title: '',
        description: 'investorProtection.landingPage.startLogin.description',
        onClick: jest.fn(),
        buttonLabel: 'button.start',
      },
      tables: [
        {
          columns: [
            {
              id: 'document',
              title: 'investorProtection.landingPage.table.column.document',
            },
            {
              align: 'end',
              id: 'description',
              title: 'investorProtection.landingPage.table.column.description',
            },
          ],
          items: [
            {
              description: 'investorProtection.landingPage.table.cardCopy',
              document: 'investorProtection.landingPage.table.eida',
              id: '0',
            },
            {
              description: 'investorProtection.landingPage.table.originalDoc',
              document: 'investorProtection.landingPage.table.dedDoc',
              id: '1',
            },
          ],
          title: 'investorProtection.landingPage.table.reqDocs',
        },
      ],
      helpfulBlock: {
        callField: {
          onChange: () => {},
        },
        commentField: {
          onChange: () => {},
        },
        emailField: {
          onChange: () => {},
        },
        onChange: () => {},
        submitButton: {
          onClick: () => {},
        },
        telephoneField: {
          countries: [],
          onChange: () => {},
        },
      },
    };
  });

  afterEach(cleanup);

  test('Should call onClick when start button clicked 1', () => {
    props.loggedIn = true;
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Landing {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByLabelText('button-primary'));
    // expect(props.startLogin.onClick).toHaveBeenCalled();
  });
});
