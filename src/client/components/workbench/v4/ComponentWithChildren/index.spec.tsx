import React from 'react';
import { shallow } from 'enzyme';
import ComponentWithChildren from './index';

describe('client/components/workbench/v4/ComponentWithChildren', () => {
  let props: any;

  beforeEach(() => {
    props = {
      definition: {
        componentId: '12345678',
        type: 'text',
        props: {
          variant: 'h1',
          content: 'Sample Text',
          // eslint-disable-next-line no-template-curly-in-string
          text: '${_someText}',
          onChange: jest.fn(() => {
            console.info('---onChange---');
          }),
          call_OnStart: jest.fn(() => {
            console.info('---call me immediately---');
          }),
          image: {
            type: 'file/image',
            fileId: 'fileId',
          },
        },
        layout: 'base',
      },
      i18n: jest.fn(i => i),
      getSharedProps: jest.fn(i => i),
      children: [
        {
          id: 'id',
          title: 'title',
          type: 'tabsPanel',
          props: {
            children: [],
          },
        },
      ],
    };
  });

  it('renders', () => {
    const wrapper = shallow(<ComponentWithChildren {...props} />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
