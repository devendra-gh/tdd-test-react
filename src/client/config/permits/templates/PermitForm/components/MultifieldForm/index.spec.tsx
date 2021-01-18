import React from 'react';
import { shallow } from 'enzyme';
import MultiFieldForm from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Multifield Form', () => {
  let props: any;
  const isExtraField = false;
  const fieldValue = {};

  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      inputGroups: [
        {
          name: 'title.permitLocations',
          stateKey: 'permitLocations',
          customComponent: 'MultifieldForm',
          hasIncrementButton: false,
          incrementButtonLabel: 'Add Machines',
          fields: [
            {
              name: 'PermitLocation',
              label: 'Permit Location',
              isExtraField,
              value: fieldValue,
              subFields: [
                {
                  'aria-label': 'input number',
                  elementType: 'inputNumber',
                  label: 'paperAd.fieldPeriod',
                  name: 'period',
                  min: 1,
                  max: 12,
                  defaultValue: 1,
                },
                {
                  'aria-label': 'input number',
                  elementType: 'inputNumber',
                  label: 'paperAd.fieldQuantity',
                  name: 'quantity',
                  min: 1,
                  defaultValue: 1,
                },
                {
                  'aria-label': 'badge',
                  bgColor: '#FFF',
                  computedProps: [
                    {
                      name: 'label',
                      dependencies: ['period', 'quantity'],
                      compute: (period = 0, quantity = 0) =>
                        `Total: ${Number(period) * Number(quantity)}`,
                    },
                  ],
                  elementType: 'badge',
                  name: 'total',
                  labelColor: '#161138',
                  items: [
                    {
                      id: 'Autumn Sale',
                      label: 'seasonalPromotions.promotionType.autumnSale',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  });

  it('should successfully render', () => {
    const component = shallow(<MultiFieldForm {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should render fields with computed props', () => {
    props.inputGroups[0].fields[0].isExtraField = true;
    props.inputGroups[0].value = {
      period: '1',
      quantity: '3',
    };

    const component = shallow(<MultiFieldForm {...props} />);
    expect(component).toMatchSnapshot();
  });
});
