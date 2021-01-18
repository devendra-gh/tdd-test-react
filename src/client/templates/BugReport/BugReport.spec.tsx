import React from 'react';
import { mount } from 'enzyme';
import BugReportStatic from '@tamm/ui-lib-v2-bug-report';
import { BugReport } from './BugReport';

jest.mock('@tamm/ui-lib-v2-bug-report');

describe('BugReport', () => {
  it('should init bug report when component mounted', () => {
    mount(<BugReport />);
    expect(BugReportStatic.init).toHaveBeenCalled();
  });

  it('should destroy bug report when component unmounted', () => {
    const component = mount(<BugReport />);
    component.unmount();
    expect(BugReportStatic.destroy).toHaveBeenCalled();
  });
});
