import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
// import steps from 'client/config/renew-licence/steps';
import EstimatedFees from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/templates/PermitForm/components', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      inputGroups: [
        {
          name: 'Table Title',
          columns: [{ title: 'Test', id: 'title' }],
          items: [{ title: 'Test', id: 'title' }],
          calculateBaseEstimatedPrice: jest.fn(),
          calculateEstimatedFees: jest.fn(),
          values: {},
        },
      ],
    };
  });

  it('should render with all props ', () => {
    const component = shallow(<EstimatedFees {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should render with all props perUnitFees defined ', () => {
    props.inputGroups[0] = {
      ...props.inputGroups[0],
      values: { perUnitFees: 10.0, baseFees: 200, baseFeesText: '' },
    };
    const component = shallow(<EstimatedFees {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should render with all props for else condition and null calculateBaseEstimatedPrice & calculateEstimatedFees', () => {
    props.currentStep = '';
    props.inputGroups[0] = {
      ...props.inputGroups[0],
      calculateBaseEstimatedPrice: () => {
        return null;
      },
      calculateEstimatedFees: () => {
        return null;
      },
    };
    const component = shallow(<EstimatedFees {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should render with all props for else condition and empty calculateBaseEstimatedPrice & calculateEstimatedFees', () => {
    props.currentStep = '';
    props.inputGroups[0] = {
      ...props.inputGroups[0],
      calculateBaseEstimatedPrice: () => {
        return [];
      },
    };
    const component = shallow(<EstimatedFees {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should render with all props for suffix', () => {
    props.currentStep = '';
    props.inputGroups[0] = {
      ...props.inputGroups[0],
      values: { perUnitFees: 10.0, baseFees: 200, baseFeesText: '' },
      calculateBaseEstimatedPrice: () => {
        return [{ title: 'Test Title', amount: 10, suffix: 'test' }];
      },
      calculateEstimatedFees: () => {
        return [{ title: 'Test Title', amount: 10, suffix: 'test' }];
      },
    };
    const component = shallow(<EstimatedFees {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should render with all props for prefix', () => {
    props.currentStep = '';
    props.inputGroups[0] = {
      ...props.inputGroups[0],
      values: { perUnitFees: 10.0, baseFees: 200, baseFeesText: '' },
      calculateBaseEstimatedPrice: () => {
        return [{ title: 'Test Title', amount: 10, prefix: 'test' }];
      },
      calculateEstimatedFees: () => {
        return [{ title: 'Test Title', amount: 10, prefix: 'test' }];
      },
    };
    const component = shallow(<EstimatedFees {...props} />);
    expect(component).toMatchSnapshot();
  });
});
