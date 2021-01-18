import React from 'react';
import { shallow } from 'enzyme';
import ConditionalFieldComponent from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Conditional Fields Component', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      inputGroups: [
        {
          name: 'title.permitLocations',
          stateKey: 'permitLocations',
          rootcustomComponent: 'MultifieldForm',
          hasIncrementButton: false,
          incrementButtonLabel: 'Add Machines',
          fields: [
            {
              'aria-label': 'file upload',
              elementType: 'fileUpload',
              name: 'testName',
              accept: ['application/pdf'],
              label: 'test field',
              maxSize: 2e6,
              help: 'test help',
              conditionalBehaviour: () => true,
            },
          ],
        },
      ],
    };
  });

  it('should successfully render', () => {
    const component = shallow(<ConditionalFieldComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
