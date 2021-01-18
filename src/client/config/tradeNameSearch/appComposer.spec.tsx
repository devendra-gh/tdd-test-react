import React from 'react';
import { shallow } from 'enzyme';
import AppComposerTradeNameSearch from './appComposer';

jest.mock('client/templates/Header', () => '');
jest.mock('client/templates/Footer', () => '');

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

describe('<AppComposerTradeNameSearch />', () => {
  it('renders', () => {
    const wrapper = shallow(<AppComposerTradeNameSearch />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
