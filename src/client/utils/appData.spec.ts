import { strictEqual } from 'assert';
import cookie from 'react-cookies';

import * as appData from './appData';

jest.mock('react-cookies');

describe('appData', () => {
  let data: any;

  let dataSmartpassData: any;
  let dataDemoLogin: any;
  let dataCMS: any;
  let dataMeta: any;

  let mockCookie: any;

  beforeAll(() => {
    mockCookie = cookie;
  });

  beforeEach(() => {
    data = appData.default;

    dataSmartpassData = data.smartpassData;
    dataDemoLogin = data.demoLogin;
    dataCMS = data.cms;
    dataMeta = data.meta;
  });

  afterEach(() => {
    appData.default.smartpassData = dataSmartpassData;
    appData.default.demoLogin = dataDemoLogin;
    appData.default.cms = dataCMS;
    appData.default.meta = dataMeta;
  });

  it('returns false if no smartpassData provided', () => {
    delete data.smartpassData;
    strictEqual(appData.isLoggedIn(), false);
  });

  it('returns false if smartpassData is empty', () => {
    data.smartpassData = {};
    strictEqual(appData.isLoggedIn(), false);
  });

  it('returns true if smartpassData is non-empty', () => {
    data.smartpassData = { name: 'Bob' };
    strictEqual(appData.isLoggedIn(), true);
  });

  it('returns false if no demoLogin provided', () => {
    data.demoLogin = false;
    strictEqual(appData.isDemoLoggedIn(), false);
  });

  it('returns true if demoLogin is true', () => {
    data.demoLogin = true;
    strictEqual(appData.isDemoLoggedIn(), true);
  });

  it('returns stored cms data', () => {
    const mockCMSData = {
      item: {
        en: [],
        ar: [],
      },
    };

    data.cms = mockCMSData;
    strictEqual(appData.getCMSData(), mockCMSData);
  });

  it('returns stored meta data', () => {
    const mockMetaData = {
      favicon: 'favicon',
    };

    data.meta = mockMetaData;
    strictEqual(appData.getMetaData(), mockMetaData);
  });

  it('getLogUuid returns string from cookies', () => {
    const value = 'xyz';
    mockCookie.load.mockReturnValue(value);
    expect(appData.getLogUuid()).toBe(value);
  });

  it('getLogUuid returns empty string if no cookies', () => {
    mockCookie.load.mockReturnValue(null);
    expect(appData.getLogUuid()).toBe('');
  });
});
