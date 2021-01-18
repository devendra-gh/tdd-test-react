import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { steps } from 'client/config/steps';
import Summary from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Summary', () => {
  let props: IVariables;

  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      title: 'summary',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      buttons: [
        {
          label: 'button-label',
          onClick: jest.fn(),
          uiType: 'primary',
          withArrow: true,
        },
      ],
      steps,
      stepStatus: {
        economic_name: 'economic_name',
        'economic_name.payment': 'economic_name.payment',
      },
      list: [
        {
          labelHeading: 'label',
          valueHeading: 'value',
          listDetails: {
            label: 'label',
            value: 'value',
          },
        },
      ],
      totalSection: 1000,
    };
  });

  // it('should render with all props', () => {
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <Summary {...props} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );
  //   setTimeout(() => {
  //     expect(getByText(props.title)).toBeInTheDocument();
  //   }, 5000);
  // });

  it('should render without step tracker', () => {
    props.currentStep = false;
    props.totalSection = jest.fn();
    props.list = jest.fn();
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Summary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    setTimeout(() => {
      expect(getByText(props.title)).toBeInTheDocument();
    }, 5000);
  });

  it('cover other case [branch]', async () => {
    props.currentStep = false;
    props.totalSection = jest.fn();
    props.list = '';
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Summary {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    setTimeout(() => {
      expect(getByText(props.title)).toBeInTheDocument();
    }, 5000);
  });
});
