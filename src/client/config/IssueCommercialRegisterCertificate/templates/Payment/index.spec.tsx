import React from 'react';
import { shallow } from 'enzyme';
// import { fireEvent, render } from '@testing-library/react';
// import { MemoryRouter } from 'react-router';
// import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import PaymentSummary from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Summary Template', () => {
  let props: any;
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
      i18n: (value: string) => value,
      locale: 'en',
      selectedLicence: true,
      loadingLicences: false,
      handleCancelLink: jest.fn(),
      handleBackButton: jest.fn(),
      handleSelectLicence: jest.fn(),
      handleStartService: jest.fn(),
      breadcrumbs: [],
      title: 'Test title',
      submitting: false,
      process: {
        title: 'process title',
        steps: [
          {
            name: 'process step',
          },
        ],
      },
      stepStatus: { 'process step': 'finish' },
      actions: {
        breadcrumbs: {
          update: jest.fn(),
        },
      },
      recordId: 'LN-1234567',
      licenceList: [],
      status: 'success',
      handleTermsConditions: jest.fn(),
      subtitle: 'Test subtitle',
      description: 'Payment Template',
      termsAndConditionsValues: [true],
      termsAndConditions: [],
      totalSection: 200,
      businessKey: '123456',
      instanceId: '123456',
      showErrors: false,
      startingPayment: false,
      buttons: [
        {
          label: 'button',
          onClick: jest.fn(),
          uiType: 'primary',
          withArraow: false,
        },
      ],
      list: [
        {
          columns: [
            {
              id: 1,
              title: 'test column1',
            },
          ],
          items: [
            {
              id: 1,
            },
          ],
        },
      ],
    };
  });

  it('should successfully render the summary template', () => {
    const component = shallow(<PaymentSummary {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should successfully render the summary template with spinner when starting payment', () => {
    props.startingPayment = true;
    const component = shallow(<PaymentSummary {...props} />);
    expect(component).toMatchSnapshot();
  });

  // it('should successfully submit selected licence', () => {
  //   props.submitting = false;
  //   props.loadingLicences = false;
  //   props.licenceList = [
  //     {
  //       tradeLicenseNumber: 'LN-1234567',
  //       businessNameEng: 'test',
  //       businessNameArb: 'test',
  //     },
  //     {
  //       tradeLicenseNumber: 'LN-8908908',
  //       businessNameEng: 'rest',
  //       businessNameArb: 'rest',
  //     },
  //   ];
  //   props.locale = 'ar';

  //   const { container } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <PaymentSummary {...props} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );
  //   fireEvent.click(container.querySelectorAll('.ui-lib-button_primary')[0], {
  //     target: {
  //       value: '896',
  //     },
  //   });

  //   expect(container.firstChild).toMatchSnapshot();
  // });
});
