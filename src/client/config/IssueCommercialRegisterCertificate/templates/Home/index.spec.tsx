import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

jest.mock(
  '@tamm/app-composer/client/templates/withTemplateHooks',
  () => (component: any) => component,
);

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Home Template', () => {
  let props: any;
  beforeEach(() => {
    props = {
      match: {},
      location: {},
      i18n: jest.fn(),
      locale: 'en',
      onStart: jest.fn(),
      breadcrumbs: [],
      actions: {
        breadcrumbs: {
          update: jest.fn(),
        },
      },
    };
  });
  it('should successfully render the home template', () => {
    const component = shallow(<Home {...props} />);
    expect(component).toMatchSnapshot();
  });
});
