import React from 'react';
import { shallow } from 'enzyme';

import CategoryQuestion from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Category Question', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      handleChange: jest.fn(),
    };
  });

  it('should render the category question successfully', () => {
    const component = shallow(<CategoryQuestion {...props} />);
    expect(component).toMatchSnapshot();
  });
});
