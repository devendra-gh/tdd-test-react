import React from 'react';
import { shallow } from 'enzyme';
import AppComposerPayApplicationFees from './appComposer';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
  LOCALE: { EN: 'EN' },
}));

jest.mock('client/utils/appData', () => ({
  getCMSData: jest.fn(() => {
    return {
      navigationItems: {
        en: [],
        ar: [],
      },
    };
  }),
  getSmartpassData: jest.fn(),
  getMetaData: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('<AppComposerPayApplicationFees />', () => {
  it('renders', () => {
    const wrapper = shallow(<AppComposerPayApplicationFees />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
