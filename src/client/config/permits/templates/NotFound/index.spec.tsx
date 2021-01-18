import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';
import Page404 from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: FunctionComponent) => component,
}));
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('renew-licence/templates/Login', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {},
      location: {},
      // i18n: (key: string) => key,
      onClick: jest.fn(),
      history: {
        push: jest.fn(),
      },
      i18n: jest.fn(),
    };
  });

  // afterEach(cleanup);

  it('should render successfully', () => {
    const component = shallow(<Page404 {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should cover i18n property', () => {
    const component = shallow(<Page404 {...props} />);
    const template = component.find('LocalizedComponent(PageNotFoundTemplate)');
    const allProps: any = template.props();
    const { i18n } = allProps;
    expect(i18n()).toBeFalsy();
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('BackButton', () => {
    it('should handle button click', () => {
      const component = shallow(<Page404 {...props} />);
      const template = component.find(
        'LocalizedComponent(PageNotFoundTemplate)',
      );
      const allProps: any = template.props();
      const { backButton } = allProps;
      backButton.onClick();
      expect(props.history.push).toBeCalled();
    });
  });
});
