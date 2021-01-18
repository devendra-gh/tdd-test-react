import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';
import Undetaking from './index';
import { PERMIT_DRAWS } from '../../utils/constants/permits';
import { PERMIT_CATEGORY_PROMOTIONAL_AD } from '../../utils/constants/permitCategories';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: FunctionComponent) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/templates/Undetaking', () => {
  let props: any;
  let e: any;
  const defaultUndertaking = {
    undertaking: {
      isApproved: false,
      showError: false,
    },
  };
  beforeEach(() => {
    props = {
      locale: {
        switch: jest.fn(),
      },
      i18n: jest.fn(),
      match: {},
      location: {},
      title: 'title',
      serviceType: PERMIT_DRAWS,
      permitType: PERMIT_CATEGORY_PROMOTIONAL_AD,
      handleToggleCheckbox: jest.fn(),
      onSubmit: jest.fn(),
      permitInfo: {
        [`${PERMIT_DRAWS}`]: {
          name: PERMIT_DRAWS,
          category: PERMIT_CATEGORY_PROMOTIONAL_AD,
          undertaking: {
            ...defaultUndertaking.undertaking,
          },
        },
      },
    };
  });

  it('should set Undertaking page', async () => {
    const component = shallow(<Undetaking {...props} />);
    expect(component).toMatchSnapshot();
  });
  // it('should set Undertaking page with error', async () => {
  //   props.permitInfo = {
  //     ...props.permitInfo,
  //     [`${PERMIT_DRAWS}`]: {
  //       ...props.permitInfo[`${PERMIT_DRAWS}`],
  //       undertaking: {
  //         ...props.permitInfo[`${PERMIT_DRAWS}`].undertaking,
  //         showError: true,
  //       },
  //     },
  //   };
  //   const component = shallow(<Undetaking {...props} />);
  //   const Checkbox = component.find('Memo(Checkbox)');
  //   const allProps: any = Checkbox.props();

  //   const { validateStatus } = allProps;
  //   expect(validateStatus).toContain('error');
  // });
  // it('should handle checkbox checkevent', () => {
  //   const component = shallow(<Undetaking {...props} />);
  //   const Checkbox = component.find('Memo(Checkbox)');
  //   const allProps: any = Checkbox.props();
  //   const { onChange } = allProps;
  //   onChange(e);
  //   expect(props.handleToggleCheckbox).toBeCalledWith(props);
  // });
  // it('should handle button click', () => {
  //   const component = shallow(<Undetaking {...props} />) as any;
  //   const Button = component.find('Button');
  //   const allProps: any = Button.props();
  //   const { onClick } = allProps;
  //   onClick(e);
  //   expect(props.onSubmit).toBeCalledWith(e, props);
  // });
});
