import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
// import steps from 'client/config/renew-licence/steps';
import SummaryTemplate from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/templates/Summary', () => {
  let props: any;

  beforeEach(() => {
    props = {
      permitType: 'Aerial',
      permitInfo: 'test info',
      priceItems: 'test tiem',
      companyDetails: 'Dummy details',
      title: 'title',
      buttons: [{ label: 'test', onClick: jest.fn(), withArrow: false }],
      history: {
        push: jest.fn(),
      },
      actions: {
        title: {
          update: jest.fn(),
        },
        hero: {
          update: jest.fn(),
        },
        breadcrumbs: {
          update: jest.fn(),
        },
      },
      i18n: jest.fn(i => i),
      currentStep: 'DED',
      tableColumns: [
        {
          title: 'testTitle',
        },
      ],
      tableRows: [
        {
          doc: 'testDoc',
        },
      ],
      subTitle: 'test',
      description: 'descriptiontest',
      list: ['test'],
      totalSection: 123,
      onClick: jest.fn(),
    };
  });

  it('should render with all props ', () => {
    const component = shallow(<SummaryTemplate {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with all props for else condition', () => {
    props.currentStep = '';
    const component = shallow(<SummaryTemplate {...props} />);
    expect(component).toMatchSnapshot();
  });

  // it('should handle button click', () => {
  //   const component = shallow(<SummaryTemplate {...props} />);
  //   const Button = component.find('Button');
  //   const allProps: any = Button.props();
  //   const { onClick } = allProps;
  //   onClick();
  //   expect(props.buttons[0].onClick).toBeCalled();
  // });
});
