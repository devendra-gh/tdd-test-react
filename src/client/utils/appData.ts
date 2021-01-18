import cookie from 'react-cookies';
import window from 'client/utils/window';
import { get } from 'lodash';

type DataValue = {
  smartpassData?: any;
  demoLogin?: any;
  cms?: any;
  meta?: any;
  featureFlags?: string;
};

export const getData = () => {
  let dataValue: DataValue = {};

  try {
    const staticData = document.querySelector('script#staticData[type=json]');
    if (window && staticData) {
      dataValue = JSON.parse(staticData.innerHTML);
    }
  } catch (e) {
    console.error('Error on fetching App data', e);
  }

  // TODO : Change
  const storedUserId = localStorage.getItem('userId') || null;
  const currentUserId = get(
    dataValue,
    'smartpassData.User Unique Identifier',
    null,
  );
  const forceRedirect = localStorage.getItem('forceRedirect') || '';
  if (currentUserId && storedUserId !== currentUserId) {
    localStorage.clear();
    localStorage.setItem('userId', currentUserId);
    if (forceRedirect) {
      localStorage.setItem('forceRedirect', forceRedirect);
    }
  }

  return dataValue;
};

const data = getData();

export const isLoggedIn = (): boolean =>
  !!data.smartpassData && Object.keys(data.smartpassData).length > 0;

export const getSmartpassData = (): any => data.smartpassData;

export const isDemoLoggedIn = (): boolean => data.demoLogin;

export const getCMSData = (): any => data.cms;

export const getMetaData = (): any => data.meta;

export const getLogUuid = (): string => cookie.load('logUuid') || '';

export default data;
