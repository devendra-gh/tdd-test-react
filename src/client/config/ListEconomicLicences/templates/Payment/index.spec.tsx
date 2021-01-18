import React from 'react';
import { shallow } from 'enzyme';
import PaymentSummary from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Summary Template', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      locale: 'en',
      title: 'Notice',
      status: 'success',
      handleTermsConditions: jest.fn(),
      subtitle: 'Test subtitle',
      description: 'Payment Template',
      termsAndConditionsValues: [true],
      termsAndConditions: {},
      breadcrumbs: [],
      totalSection: 200,
      businessKey: '123456',
      instanceId: '123456',
      showErrors: false,
      startingPayment: false,
      process: {
        title: 'process title',
        steps: [
          {
            name: 'process step',
          },
        ],
      },
      stepStatus: { 'process step': 'finish' },
      buttons: [
        {
          label: 'button',
          onClick: jest.fn(),
          uiType: 'primary',
          withArraow: false,
        },
      ],
      list: [
        {
          labelHeading: 'test label heading',
          valueHeading: 'test value heading',
          listDetails: {
            label: 'test label',
            value: 'test value',
          },
        },
      ],
    };
  });

  it('should successfully render the summary template', () => {
    const component = shallow(<PaymentSummary {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should successfully render the summary template with spinner when starting payment', () => {
    props.startingPayment = true;
    const component = shallow(<PaymentSummary {...props} />);
    expect(component).toMatchSnapshot();
  });
});
