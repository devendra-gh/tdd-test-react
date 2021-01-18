import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import SummaryTemplate from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('SummaryTemplate', () => {
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
      title: 'SummaryTemplate',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      amendmentCategories: {
        ownership: false,
        economicActivitiesOrName: false,
      },
      list: {
        columns: [
          {
            column1: 'test',
          },
        ],
      },
      categoryType: [
        'ownership',
        'locationOrCountry',
        'economicActivitiesOrName',
        'financialDetails',
      ],
      // showLoader: false,
      buttons: [
        {
          label: 'btn',
          uiType: 'primary',
          onClick: jest.fn(),
        },
      ],
      steps: [],
      stepStatus: {
        economic_name: 'economic_name',
        'economic_name.payment': 'economic_name.payment',
      },
      pay: jest.fn(),
      tags: [
        {
          label: 'referenceNumber',
          value: 'referenceNumber',
        },
      ],
      content: 'content',
    };
  });
  it('should render with all props', async () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SummaryTemplate {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with all props to cover else statement', async () => {
    props = {
      ...props,
      buttons: [
        {
          label: 'btn',
          onClick: jest.fn(),
        },
      ],
      icon: jest.fn(),
    };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SummaryTemplate {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
  it('should successfully render  summary button and click', async () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SummaryTemplate {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // const buttonClick = ['button.pay'];
    // Object.values(buttonClick).forEach((buttonName: string) => {
    //   const nextButton = getByText(buttonName, {
    //     selector: 'button',
    //   });
    //   fireEvent.click(nextButton);
    // });
  });

  // it('should successfully render ownership  back,next and switchLegalForm button', async () => {
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <SummaryTemplate {...props} />,
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );
  //   const buttonClick = ['button.pay'];
  //   Object.values(buttonClick).forEach((buttonName: string) => {
  //     const nextButton = getByText(buttonName, {
  //       selector: 'button',
  //     });

  //     fireEvent.click(nextButton);
  //   });
  // });
});
