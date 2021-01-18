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
  templates,
  skipFetchState,
  translations,
  fetchState,
} from './index';

const { metaTags } = getCMSData();

const SERVER_SIDE_HANDLED = [
  '/api/smartpass/login',
  '/api/smartpass/logout',
  '/api/smartpass/demo-login',
  '/api/smartpass/demo-logout',
];

const FETCH_STATE_LONG_INTERVAL = 1000 * 5; // 1 minute

// Once you start developing your own project please use config folder
// import { config, fetchState, templates } from './config';

const App: React.SFC = () => {
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

export default App;
