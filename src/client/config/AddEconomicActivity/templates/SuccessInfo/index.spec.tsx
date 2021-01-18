import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { IVariables } from '@tamm/app-composer';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import SuccessInfoTemplate from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('StatusInfo', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {},
      location: {},
      i18n: jest.fn(),
      type: 'success',
      title: 'test',
      subTitle: 'test',
      text: 'test',
      tags: [{ label: 'test', value: 'test' }],
      links: [
        {
          id: '1',
          label: 'label',
          link: '/services/business/add-economic-activity',
        },
      ],
    };
  });

  afterEach(cleanup);

  const renderWithProps = (data: IVariables) => {
    return render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SuccessInfoTemplate {...data} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  };

  test('Should call render', () => {
    renderWithProps(props);
  });
});
