import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Home from './index';
import { constants } from '../../helper';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Home Template', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      history: {
        push: jest.fn(),
      },
      locale: 'en',
      title: 'service.title',
      descriptionTitle: 'service.description.title',
      description: 'service.description',
      showRelatedJourneyCard: true,
      actions: {
        locale: {
          switch: jest.fn(),
        },
        breadcrumbs: {
          update: jest.fn(),
        },
      },
      startLogin: {
        title: '',
        description: 'service.startLogin.description',
        onClick: jest.fn(),
        buttonLabel: 'service.button.startService',
        redirectPath: '',
      },
      processSteps: {
        title: 'service.steps.title',
        steps: [
          {
            label: 'findLicence',
            description: 'service.steps.description.findLicence',
          },
          {
            label: 'uploadDocument',
            description: 'service.steps.description.uploadDocument',
          },
          {
            label: 'getDEDApproval',
            description: 'service.steps.description.getDEDApproval',
          },
        ],
      },
      breadcrumbs: constants.BREADCRUMBS,
      requiredDocumentList: {
        columns: [
          {
            id: 'document',
            title: 'requiredDocument.document',
          },
          {
            align: 'end',
            id: 'description',
            title: 'requiredDocument.description',
          },
        ],
        items: [
          {
            document: 'requiredDocument.letter',
            description: 'requiredDocument.letter.description',
            id: '0',
          },
        ],
        title: 'requiredDocument.title',
      },
    };
  });

  afterEach(cleanup);

  test('renders a home template', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Home {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // expect(container.firstChild).toMatchSnapshot();
  });
  test('Should call props.history.push when start button clicked', async () => {
    props.loggedIn = true;
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Home {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const button = await waitForElement(() => getByLabelText('button-primary'));
    fireEvent.click(button);
  });
});
