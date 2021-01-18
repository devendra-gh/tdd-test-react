import React from 'react';
// import { shallow } from 'enzyme';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import ServiceType from './index';

// jest.mock('@tamm/app-composer', () => ({
//   withTemplateHooks: (component: any) => component,
// }));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ServiceType', () => {
  let props: any;

  beforeEach(() => {
    props = {
      locale: 'en',
      subTitle: 'sub title',
      description: 'description',
      i18n: jest.fn(i => i),
      getFormGroups: jest.fn(i => []),
      steps: [],
      currentStep: '',
      cancelLink: '/',
      stepsStatus: '',
      form: {
        userType: 'test',
      },
      location: 'test',
    };
  });

  afterEach(cleanup);

  it('renders with all props', async () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <ServiceType {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // await waitForElement(() => getByText('button.submit'));
    // expect(container).toMatchSnapshot();
    // fireEvent.change(item, { target: { value: 'CN' } });
  });
});
