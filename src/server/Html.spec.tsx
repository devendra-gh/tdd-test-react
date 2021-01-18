import React from 'react';
import { mount } from 'enzyme';

import Html from 'server/Html';

const requireProps = {
  title: 'some title',
  description: 'some description',
  app: {},
  url: 'some url',
  styles: [],
  scripts: [],
  staticUrl: '',
  analyticsConfig: {
    key: '',
    host: '',
  },
};

describe('Html', () => {
  it('renders', () => {
    expect(mount(<Html {...requireProps} />)).toMatchSnapshot();
  });

  it('renders with scripts and styles', () => {
    const scripts = [
      'a.css?r=GIT_TAG',
      'b.css?r=GIT_TAG',
      'c.js?r=GIT_TAG',
      'd.js?r=GIT_TAG',
    ];
    const styles = [
      {
        id: 'x',
        cssText: 'x content',
      },
      {
        id: 'y',
        cssText: 'y content',
      },
    ];
    const mode = ['mode1'];

    expect(
      mount(
        <Html
          {...requireProps}
          scripts={scripts}
          styles={styles}
          mode={mode}
        />,
      ),
    ).toMatchSnapshot();
  });
});
