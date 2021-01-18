import { IVariables } from '@tamm/app-composer';
import { shallow } from 'enzyme';
import React, { FunctionComponent } from 'react';
import EntityApprovalDocs from './index';
import { PERMIT_MOBILE_CAR } from '../../utils/constants/permits';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: FunctionComponent) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/templates/EntityApprovalDocs', () => {
  let props: IVariables;
  let e: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      currentStep: 'test',
      serviceType: PERMIT_MOBILE_CAR,
      onBackClick: jest.fn(),
      onSubmit: jest.fn(),
      handleToggleCheckbox: jest.fn(),
      validation: jest.fn(x => true),
      permitInfo: {
        [PERMIT_MOBILE_CAR]: {
          entityApproval: {
            isApproved: true,
            documents: {
              test: { name: 'dummy.pdf' },
            },
            showError: false,
          },
        },
      },
      actions: {
        permitInfo: {
          update: jest.fn(),
        },
      },
    };
  });
  it('should render with all props', () => {
    const component = shallow(<EntityApprovalDocs {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should render with all props with empty currentStep', () => {
    props.currentStep = '';
    const component = shallow(<EntityApprovalDocs {...props} />);
    expect(component).toMatchSnapshot();
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('FileUpload', () => {
    it('should handle change event', () => {
      const component = shallow(<EntityApprovalDocs {...props} />);
      const FileUploads = component.find('FileUploads');
      const allProps: any = FileUploads.props();
      const { handleChange } = allProps;
      handleChange(props);
      expect(props.actions.permitInfo.update).toBeCalled();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  // describe('checkbox', () => {
  //   it('should handle checkbox change event', () => {
  //     const component = shallow(<EntityApprovalDocs {...props} />);
  //     const Checkbox = component.find('Memo(Checkbox)');
  //     const allProps: any = Checkbox.props();
  //     const { onChange } = allProps;
  //     onChange(e);
  //     expect(props.handleToggleCheckbox).toBeCalledWith(props);
  //   });
  // });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('BackButton', () => {
    it('should handle button click', () => {
      const component = shallow(<EntityApprovalDocs {...props} />);
      const Form = component.find('LocalizedComponent(Form)');
      const allProps: any = Form.props();
      const { backButton } = allProps;
      backButton.onClick();
      expect(props.onBackClick).toBeCalled();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('SubmitButton', () => {
    it('should handle button click validation success', () => {
      const component = shallow(<EntityApprovalDocs {...props} />);
      const Form = component.find('LocalizedComponent(Form)');
      const allProps: any = Form.props();
      const { submitButton } = allProps;
      submitButton.onClick();
      expect(props.onSubmit).toBeCalled();
    });
    it('should handle button click validation fail', () => {
      props.permitInfo[PERMIT_MOBILE_CAR].entityApproval.isApproved = false;
      props.permitInfo[PERMIT_MOBILE_CAR].entityApproval.showError = true;
      props.validation = jest.fn(x => false);
      const component = shallow(<EntityApprovalDocs {...props} />);
      const Form = component.find('LocalizedComponent(Form)');
      const allProps: any = Form.props();
      const { submitButton } = allProps;
      expect(submitButton.onClick()).toBeFalsy();
    });
  });
});
