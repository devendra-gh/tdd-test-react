import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Sidebar from './index';

describe('client/templates/Sidebar', () => {
  let props: any;

  beforeEach(() => {
    props = {
      locale: 'en',
      i18n: jest.fn(i => i),
      // currentStep: 'process.selectAmendmentType',
      currentStep: 'process.makeAmendment',
      currentSubStep: 'process.uploadDocuments',
      stepsStatus: {
        'process.selectLicenceNumber': 'finish',
      },
      steps: [
        {
          name: 'process.selectLicenceNumber',
        },
        {
          name: 'process.selectAmendmentType',
        },
        {
          id: 'amendments',
          name: 'process.makeAmendment',
          subSteps: ['subStep.uploadDocuments', 'subStep.contactInfo'],
        },
        {
          name: 'process.getDEDApproval',
        },
        {
          name: 'process.makePayment',
        },
        {
          name: 'process.downloadLicence',
        },
      ],
      showSidebar: true,
    };
  });

  it('should render the slider successfully', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Sidebar {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render substep else statements', () => {
    props = {
      ...props,
      currentStep: 'process.selectAmendmentType',
      stepsStatus: '',
    };

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Sidebar {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
