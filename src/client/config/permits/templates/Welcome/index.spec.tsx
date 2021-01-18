import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';
import Home from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: FunctionComponent) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Welcome', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {},
      location: {},
      locale: {
        switch: jest.fn(),
      },
      i18n: jest.fn(),
      title: 'title',
      buttons: [
        {
          label: 'test_button',
          uiType: 'primary',
          withArrow: true,
          onClick: jest.fn(),
        },
      ],
    };
  });

  it('should set welcome page', async () => {
    const component = shallow(<Home {...props} />);
    // const buttonClick = component.find('Button');
    // buttonClick.simulate()
    expect(component).toMatchSnapshot();
  });
});
