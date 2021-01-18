import React, { useCallback, useState } from 'react';
import { Store } from 'redux';
import AppComposer from '@tamm/app-composer';
import baseName from 'client/utils/baseName';
import {
  getSmartpassData,
  getMetaData,
  getCMSData,
} from 'client/utils/appData';
import fetch from 'client/services/fetch';
import { BpmClient } from 'client/services/bpm';
import formatJSConfig from 'client/utils/workbench/formatJSConfig';
import analytics from '@tamm/analytics';
import { config, fetchState, templates, translations } from './index';
import { StoreContext } from 'client/services/context';

const SERVER_SIDE_HANDLED = [
  '/api/smartpass/login',
  '/api/smartpass/logout',
  '/api/smartpass/demo-login',
  '/api/smartpass/demo-logout',
];

const FETCH_STATE_LONG_INTERVAL = 1000 * 5; // 1 minute

const Composer: React.FC = () => {
  const { metaTags, metaPages, tammUrl, tammWorkbenchUrl } = getCMSData();
  const [store, setStore] = useState<Store | null>(null);

  const meta = {
    meta: getMetaData(),
    ...(metaTags || {}),
    ...(metaPages ? { pages: metaPages } : {}),
    en: {},
    ar: {},
  };

  const {
    config: journeyConfig,
    translations: journeyTranslations,
  } = formatJSConfig((window as any).config, config, translations);

  const onInit = useCallback(
    (value: Store) => {
      setStore(value);
    },
    [setStore],
  );

  return (
    <StoreContext.Provider value={store}>
      <AppComposer
        config={journeyConfig}
        baseUrl={baseName}
        user={getSmartpassData()}
        meta={meta}
        translations={journeyTranslations}
        serverHandled={SERVER_SIDE_HANDLED}
        fetchState={fetchState}
        fetchStateInterval={FETCH_STATE_LONG_INTERVAL}
        skipFetchState={[...(journeyConfig.skipFetchState || []), '/login']}
        customTemplates={templates}
        services={{
          tammWorkbenchUrl,
          tammUrl,
          fetch,
          BpmClient,
          analytics,
        }}
        onInit={onInit}
      />
    </StoreContext.Provider>
  );
};

export default Composer;
