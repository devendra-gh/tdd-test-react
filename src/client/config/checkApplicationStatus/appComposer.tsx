import React from 'react';
import AppComposer from '@tamm/app-composer';
import baseUrl from 'client/utils/baseUrl';

import {
  getSmartpassData,
  getMetaData,
  getCMSData,
} from 'client/utils/appData';
import {
  config,
  fetchState,
  templates,
  skipFetchState,
  translations,
} from './index';

const { metaTags } = getCMSData();

const SERVER_SIDE_HANDLED = [
  '/api/smartpass/login',
  '/api/smartpass/logout',
  '/api/smartpass/demo-login',
  '/api/smartpass/demo-logout',
];

const FETCH_STATE_LONG_INTERVAL = 1000 * 5; // 1 minute

const AppComposerCheckApplicationStatus: React.SFC = () => {
  return (
    <AppComposer
      config={config}
      baseUrl={baseUrl}
      user={getSmartpassData()}
      meta={{
        meta: getMetaData(),
        ...metaTags,
      }}
      translations={translations}
      serverHandled={SERVER_SIDE_HANDLED}
      fetchState={fetchState}
      fetchStateInterval={FETCH_STATE_LONG_INTERVAL}
      skipFetchState={skipFetchState}
      customTemplates={templates}
    />
  );
};

export default AppComposerCheckApplicationStatus;
