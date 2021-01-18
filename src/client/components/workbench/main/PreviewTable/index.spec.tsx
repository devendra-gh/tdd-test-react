import React from 'react';
import { shallow } from 'enzyme';
import PreviewTable from './index';

describe('client/components/workbench/PreviewTable', () => {
  it('renders', () => {
    const wrapper = shallow(
      <PreviewTable
        selectedItems={['1']}
        columns={[
          {
            name: 'column1',
            label: 'Column 1',
          },
        ]}
        items={[
          {
            _id: 1,
            column1: 'Item 1',
          },
        ]}
        symbolActions={[
          {
            name: 'column3',
            label: 'Column 4',
            position: 'start',
            renderType: 'symbol',
            symbolId: 'symbolId',
          },
          {
            name: 'column4',
            label: 'Column 4',
            position: 'end',
          },
        ]}
        filterable
      />,
    );
    expect(wrapper.exists()).toBeTruthy();
  });
});
