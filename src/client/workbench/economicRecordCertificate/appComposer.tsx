import React from 'react';
import AppComposer, { IVariables } from '@tamm/app-composer';
import baseUrl from 'client/utils/baseUrl';
import {
  getSmartpassData,
  getMetaData,
  getCMSData,
} from 'client/utils/appData';
import fetch from 'client/services/fetch';
import bpm, { BpmClient } from 'client/services/bpm';
import templates from 'client/_examples/v5/templates';
import formatJSConfig from 'client/utils/workbench/formatJSConfig';
import analytics from '@tamm/analytics';
import fetchState from '../fetchState';
import '@tamm/ui-lib-v2-styles/common.less';
import '@tamm/ui-lib-v2-styles/colors.less';
import exported from './index';
import { PROCESS_DEFINITION_ID } from '../constants';

const SERVER_SIDE_HANDLED = [
  '/404',
  '/api/smartpass/login',
  '/api/smartpass/logout',
  '/api/smartpass/demo-login',
  '/api/smartpass/demo-logout',
];

const FETCH_STATE_LONG_INTERVAL = 1000 * 5; // 1 minute

const Composer: React.FC = (props: IVariables) => {
  const { metaTags, metaPages, tammUrl, tammWorkbenchUrl } = getCMSData();

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
  } = formatJSConfig(exported, {
    appName: 'economicRecordCertificate',
    header: {
      template: 'header',
      breadcrumbs: [
        {
          label: 'home',
          link: '#',
        },
      ],
      props: {},
    },
    footer: {
      template: 'footer',
      state: {
        mapState: ['user'],
      },
    },
    camunda: {
      processDefinitionId: PROCESS_DEFINITION_ID.economicRecordCertificate,
    },
    getVariables: bpm.getVariables,
  });

  // console.log('PROPS COMPOSER', props);

  return (
    <AppComposer
      config={journeyConfig}
      baseUrl={`${baseUrl}${props.path || ''}`}
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
    />
  );
};

export default Composer;
