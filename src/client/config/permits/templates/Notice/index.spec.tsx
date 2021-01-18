import { shallow } from 'enzyme';
import React, { FunctionComponent } from 'react';
import { IVariables } from '@tamm/app-composer';
import Notice from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: FunctionComponent) => component,
}));
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/templates/Notice/index', () => {
  let props: IVariables;
  beforeEach(() => {
    props = {
      currentStep: '',
      subTitle: 'test',
      content: 'test',
      showUpload: true,
      serviceType: 'test',
      match: {},
      history: {
        push: jest.fn(),
      },
      location: {},
      title: 'test',
      message: 'test',
      status: 'custom',
      image: { src: 'test' },
      permitSubmitting: true,
      permitServerError: true,
      tags: [{ label: 'test', value: 'test' }],
      finishButton: true,
      text1: 'test',
      text2: 'test',
      text3: 'test',
      link: true,
      additionalTextWithLink: true,
      comments: true,
      commentMessage: true,
      buttons: [
        {
          uiType: 'secondary',
        },
        {
          link: 'test',
        },
        {
          uiType: 'secondary',
          onClick: jest.fn(),
        },
      ],
      i18n: jest.fn(),
      onNextClick: jest.fn(),
      onFinish: jest.fn(),
      reUpload: jest.fn(),
      icon: jest.fn(),
      validation: jest.fn(x => true),
      entityApproval: {},
      actions: {
        returnPage: {
          update: jest.fn(),
        },
      },
    };
  });
  it('should set Notice Template', async () => {
    const component = shallow(<Notice {...props} />);
    expect(component).toMatchSnapshot();
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('Notice Template', () => {
    it('should call button onClick event', () => {
      const component = shallow(<Notice {...props} />);
      const template = component.find('Notice');
      const allProps: Record<string, any> = template.props();
      const { buttons } = allProps;
      buttons.forEach((button: IVariables, index: number) => {
        if (button.link) {
          button.simulate('click');
          expect(props.history.push).toBeCalled();
        } else if (button.onClick) {
          button.onClick();
          button.onClick(props);
        }
      });
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('Buttons', () => {
    it('should call button click events', async () => {
      const component = shallow(<Notice {...props} />);
      const buttons = component.find('Button');
      buttons.forEach(button => {
        button.simulate('click');
        expect(props.onFinish || props.reUpload).toBeCalled();
      });
    });
    it('should call button click events for false validation', async () => {
      props.validation = jest.fn(x => false);
      const component = shallow(<Notice {...props} />);
      const buttons = component.find('Button');
      buttons.forEach(button => {
        button.simulate('click');
        expect(props.onFinish || props.reUpload).toBeCalled();
      });
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('FileUploads', () => {
    it('should call handleChange event', () => {
      const component = shallow(<Notice {...props} />);
      const fileUpload = component.find('FileUploads');
      const allProps: Record<string, any> = fileUpload.props();
      const { handleChange } = allProps;
      handleChange({ returnPage: {} });
      expect(props.actions.returnPage.update).toBeCalled();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('Table', () => {
    it('should call onClick event', () => {
      const component = shallow(<Notice {...props} />);
      const tables = component.find('Table');
      tables.forEach(table => {
        const allProps: Record<string, any> = table.props();
        const { onClick } = allProps;
        expect(onClick()).toBeFalsy();
      });
    });
  });
});
