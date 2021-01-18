import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { noticeTypes } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { steps } from 'client/config/steps';
import Notice from './index';

// const Component = withTemplateHooks(Notice);

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Notice', () => {
  let props: any;

  beforeEach(() => {
    props = {
      documentCategory: [],
      additionalTextWithLink: 'additionalTextWithLink',
      uniqueId: 'economic-licence-approved',
      licenceType: 'allInOne',
      inputField: {
        title: 'docs',
      },
      businessLegalFormCode: '3',
      list: [],
      type: noticeTypes.SUCCESS,
      title: 'title',
      subTitle: 'subTitle',
      text: 'text',
      buttons: [
        {
          'aria-label': 'label1',
          variant: 'primary',
          link: 'link',
          label: 'Label 1',
        },
        {
          'aria-label': 'label2',
          variant: 'primary',
          label: 'Label 2',
          onClick: jest.fn(),
        },
      ],
      history: {
        push: jest.fn(),
      },
      actions: {
        title: {
          update: jest.fn(),
        },
        hero: {
          update: jest.fn(),
        },
        breadcrumbs: {
          update: jest.fn(),
        },
      },
      i18n: jest.fn(i => i),
      currentStep: 'trade_name',
      currentSubStep: 'submit_licence',
      steps,
      stepsStatus: {
        trade_name: 'trade_name',
        'trade_name.submit_licence': 'trade_name.submit_licence',
      },
      showUpload: true,
      videoSrc: true,
      // isSubmitLicenceNeeded: true,
      sectionTitle: 'sectiontitle',
      sectionDescription: 'description',
      sectionButtons: [
        {
          variant: 'primary',
          link: 'link',
          label: 'Label 1',
        },
      ],
      tags: [
        {
          label: 'notice.refNo',
          value: 'tnNumber',
        },
        {
          label: 'notice.submit',
          value: 'submitDate',
        },
      ],
      message: 'return message',
    };
  });

  afterEach(cleanup);

  it('should render with all props', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with INFO type', () => {
    props.type = noticeTypes.INFO;
    props.businessLegalFormCode = '34';

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with WARNING type', () => {
    props.type = noticeTypes.WARNING;
    props.licenceType = undefined;

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with default type', () => {
    props.type = '';

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  // it('should render button link', () => {
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <Component {...props} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );

  //   setTimeout(() => {
  //     fireEvent.click(getByText(/Label 1/));

  //     expect(getByText(/Label 1/)).toBeInTheDocument();
  //   }, 5000);
  // });

  // it('should handle button onClick', () => {
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <Notice {...props} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );

  //   setTimeout(() => {
  //     fireEvent.click(getByText(/Label 2/));

  //     expect(props.buttons[1].onClick).toHaveBeenCalled();
  //   }, 5000);
  // });

  it('should render with alert type', () => {
    props.type = 'alert';

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with information type', () => {
    props.type = 'information';

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with notFound type', () => {
    props.type = 'notFound';
    props.isSubmitLicenceNeeded = true;

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with all props', () => {
    props.currentStep = false;
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with all props', () => {
    props.moaTemporaryRedirect = true;
    props.categories = {
      categoryEn: {
        info: [
          {
            entities: [],
            details: [{ id: 1, title: 'detailsEn', text: 'text' }],
            stepTitle: 'stepTitle',
          },
        ],
      },
      categoryAr: {
        info: [
          {
            entities: ['entityAr'],
            details: [{ id: 1, title: 'detailsAr', text: 'text' }],
            stepTitle: 'stepTitle',
          },
        ],
      },
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with RETURNED type', () => {
    props.type = 'RETURNED';
    props.isSubmitLicenceNeeded = true;
    props.locale = 'ar';

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should cover moaTemporaryRedirect', async () => {
    props.moaTemporaryRedirect = true;
    const localStorageMock = (() => {
      let store: any = {
        publicUaePassUrl: 'true',
      };

      return {
        getItem: (key: string) => {
          return store[key] || null;
        },
        setItem: (key: string, value: string) => {
          store[key] = value.toString();
        },
        removeItem: () => true,
        clear() {
          store = {};
        },
      };
    })();
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true,
    });
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with RETURNED type', () => {
    props.type = 'RETURNED';
    props.isSubmitLicenceNeeded = true;

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Notice {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  // it('should render button link', async () => {
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <Notice {...props} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );

  //   const [buttons] = await waitForElement(() => getByText('Label 1'));

  //   buttons.forEach((item: any) => {
  //     fireEvent.change(item, { target: { value: 'CN' } });
  //   });

  // expect(container).toMatchSnapshot();

  // setTimeout(() => {
  //   fireEvent.click(getByText(/Label 1/));

  //   expect(getByText(/Label 1/)).toBeInTheDocument();
  // }, 500);
  // });

  // it('should handle button onClick', () => {
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <Notice {...props} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );

  //   setTimeout(() => {
  //     fireEvent.click(getByText(/Label 2/));

  //     expect(props.buttons[1].onClick).toHaveBeenCalled();
  //   }, 500);
  // });
});
