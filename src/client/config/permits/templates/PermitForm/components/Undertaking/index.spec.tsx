import React from 'react';
import { shallow } from 'enzyme';
import Undertaking from './index';
// import { checkValidationField } from 'client/config/utils/checkValidation';

// jest.mock('client/config/utils/checkValidation', () => ({
//   checkValidationField: {
//     REQUIRED: 'REQUIRED'
//   }
// }));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Permit Type form', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      handleToggleCheckbox: jest.fn(),
      values: {
        undertakings: {
          approved: true,
        },
      },
      inputGroups: [
        {
          name: 'test1',
          title: 'test',
          groupKey: 'Gkey',
          stateKey: 'Skey',
          conditions: ['term1'],
          fields: [
            {
              validationConfig: {
                type: 'REQUIRED',
              },
              elementType: 'checkBox',
              name: 'approved',
              label: 'fieldLalel',
              // onChange: () => jest.fn(),
            },
          ],
        },
      ],
      handleChange: jest.fn(),
      startShowingErrors: true,
      name: 'undertakings',
    };
  });

  it('should successfully render when serviceType is provided', () => {
    const component = shallow(<Undertaking {...props} />);
    expect(component).toMatchSnapshot();
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  // describe('checkbox', () => {
  //   it('should handle checkbox change event with termsConditions.approved as false', () => {
  //     props.values.undertakings.approved = false;
  //     const component = shallow(<Undertaking {...props} />);

  //     const Checkbox = component.find('Memo(Checkbox)');
  //     const allProps: any = Checkbox.props();
  //     const { onChange } = allProps;
  //     onChange('approved');
  //     expect(props.handleToggleCheckbox).toBeTruthy();
  //   });
  // });
});
