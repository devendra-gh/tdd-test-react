import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { IVariables } from '@tamm/app-composer';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import Moa from './index';

// jest.mock('@tamm/app-composer', () => ({
//   withTemplateHooks: (component: any) => component,
// }));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/MOA', () => {
  let props: IVariables;

  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      locale: 'en',
      currentStep: '',
      currentSubStep: '',
      steps: [],
      stepsStatus: 'test',
      title: 'test',
      subTitle: 'test',
      showMoa: jest.fn(),
      moa: {
        moaHTML: '<div />',
      },
      ownerMoaAgree: jest.fn(),
      ownerMoaDisAgree: jest.fn(),
    };
  });

  afterEach(cleanup);

  it('should render', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Moa {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with all props', () => {
    props.currentSubStep = 'moa_approval';
    props.currentStep = 'test';

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Moa {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render with all props', () => {
    props.currentSubStep = 'moa_generate';

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Moa {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
