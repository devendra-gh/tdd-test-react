const { env } = process;

if (env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}
const hostname = require('os').hostname();

const smartpassPublicBase = env.SMARTPASS_PUBLIC_BASE || '';
const topLevelUrl = smartpassPublicBase
  .replace(/https?:\/\//, '')
  .split('/')
  .shift();

const topLevelDomain = topLevelUrl
  ? topLevelUrl.replace(/(.+?)\.(.+?)\.(.+)/, '.$2.$3')
  : '';

const protocol = env.PROTOCOL || 'http';

const isProduction = env.NODE_ENV === 'production';
if (!isProduction) {
  // add vars from .env to env
  const dotenv = require('dotenv').config(); // eslint-disable-line global-require
  if (dotenv.error) {
    require('dotenv').config({ path: '../../../.env' }); // eslint-disable-line global-require
  }
}

const smartpassTammUuidMaxAge = env.SMARTPASS_TAMM_UUID_MAX_AGE
  ? parseInt(env.SMARTPASS_TAMM_UUID_MAX_AGE, 10)
  : 2 * 60 * 60;

env.APP_PORT = env.APP_PORT || '3000';

if (env.APP_BEHIND_PROXY === undefined) {
  env.APP_BEHIND_PROXY = 'false';
}
if (env.APP_OVER_HTTPS === undefined) {
  env.APP_OVER_HTTPS = 'false';
}
if (env.APP_DEMO_LOGIN === undefined) {
  env.APP_DEMO_LOGIN = 'false';
}
env.COMPOSE_PROJECT_NAME = env.COMPOSE_PROJECT_NAME || 'COMPOSE_PROJECT_NAME';
env.APP_PORT = env.APP_PORT || '3000';
env.API_CLIENT_URL = env.API_CLIENT_URL || '';
env.API_SERVER_URL =
  env.API_SERVER_URL || `${protocol}://${hostname}:${env.APP_PORT}`;

module.exports = {
  env: env.NODE_ENV,
  // Node.js app
  projectName: env.COMPOSE_PROJECT_NAME,
  port: env.APP_PORT,
  behindProxy: !(env.APP_BEHIND_PROXY === 'false'),
  overHttps: !(env.APP_OVER_HTTPS === 'false'),
  demoLogin: !(env.APP_DEMO_LOGIN === 'false'),
  sesSecret: env.SESSION_SECRET || '',
  journeyId: env.JOURNEY_ID,
  targetDomain: env.TARGET_DOMAIN || topLevelDomain,
  // APID
  api: {
    // API URL to be used in the client-side code
    clientUrl: env.API_CLIENT_URL,
    // API URL to be used in the server-side code
    serverUrl: env.API_SERVER_URL,
    // Journey ID for S3 service
    apiJourneyId: env.API_JOURNEY_ID,
    fileReadFullPath:
      (env.FILE_READ_FULLPATH && env.FILE_READ_FULLPATH === 'true') || false, // only true when you are developing something in local machine
    // microservice url and append path
    microservice: {
      url: env.MICROSERVICE_API_URL,
      apiKeyHeader: env.API_HEADER,
      apiKey: env.API_KEY,
      apiGatewayHeader: env.API_GATEWAY_HEADER,
      apiGatewayKey: env.API_GATEWAY_KEY,
      s3: {
        s3AppendPath: env.S3_APPEND_PATH,
      },
      ded: {
        baseUrl: env.DED_API_BASE,
        endpoint: env.DED_APPEND_PATH,
        agency: env.DED_AGENCY,
        userId: env.DED_USERNAME,
        pass: env.DED_PASSWORD,
        authenticateUserSuffix: env.DED_AUTHENTICATE_USER,
        businessCertificateSuffix: env.DED_CERTIFICATE,
      },
      pdfConverterAppendPath: env.PDF_CONVERTER_APPEND_PATH,
    },
    isStagingEndPoint:
      (env.MICROSERVICE_API_STAGING &&
        env.MICROSERVICE_API_STAGING === 'true') ||
      false, // for api services and staging path name is different make true when on staging
  },
  // Bunyan Logger
  log: {
    level: env.LOG_LEVEL || 'error',
    directory: env.LOG_PATH || '.',
    types: env.LOG_TYPES ? env.LOG_TYPES.split(',') : ['console'],
  },

  eventTracker: {
    host: env.EVENT_TRACKER_HOST,
  },

  basePath: env.APP_NESTED_PATH || '',

  smartpass: {
    host: {
      public:
        env.SMARTPASS_PUBLIC_BASE ||
        'https://stage-api.tamm.abudhabi/gateway/TammJourneySmartpassClient/1.0',
      private:
        env.SMARTPASS_PRIVATE_BASE ||
        'https://stage-sgs.api.abudhabi.ae/gateway/TammJourneySession-store-mgmt/1.0',
    },
    endpoints: {
      generateTammUuid: env.SMARTPASS_GENERATE_TAMM_UUID_ENDPOINT,
    },
    authCookies: env.SMARTPASS_AUTH_COOKEIS,
    tammUuid: {
      maxAge: smartpassTammUuidMaxAge * 1000, // 2 hours in milliseconds
    },
  },

  cms: {
    host: env.CMS_HOST,
    baseCacheDir: env.CMS_BASE_CACHE_DIR || 'public/cms',
    translations: {
      endpoint: env.CMS_TRANSLATIONS_ENDPOINT,
      key: env.CMS_TRANSLATIONS_KEY,
      directory: env.CMS_TRANSLATIONS_CACHE_DIR || 'translations',
    },
    templates: {
      endpoint: env.CMS_TEMPLATES_ENDPOINT,
      directory: env.CMS_TEMPLATES_CACHE_DIR || 'templates',
    },
    journeyItems: {
      endpoint: env.CMS_JOURNEY_ITEMS_ENDPOINT,
      directory: env.CMS_JOURNEY_ITEMS_CACHE_DIR || 'journey-items',
      linkHost: env.CMS_JOURNEY_ITEMS_LINK_HOST,
    },
    journeyInfo: {
      endpoint: env.CMS_JOURNEY_INFO_ENDPOINT,
      directory: env.CMS_JOURNEY_INFO_CACHE_DIR || 'journey-info',
    },
    search: {
      globalSearchEndpoint: env.CMS_SEARCH_ENDPOINT,
      searchFiltersEndpoint: env.CMS_SEARCH_FILTERS_ENDPOINT,
      searchAutoSuggest: env.CMS_SEARCH_AUTO_SUGGEST_ENDPOINT,
      autoSuggest: env.CMS_SEARCH_AUTO_SUGGEST_ENDPOINT,
    },
    category: {
      categoryListEndpoint: env.CMS_CATEGORY_LIST_ENDPOINT,
      categoryInfoEndpoint: env.CMS_CATEGORY_INFO_ENDPOINT,
      categoryAutoSuggestEndpoint: env.CMS_CATEGORY_AUTO_SUGGEST_ENDPOINT,
      categorySearchEndpoint: env.CMS_CATEGORY_SEARCH_ENDPOINT,
    },
    tammUrl: env.TAMM_URL,
    tammWorkbenchUrl: env.TAMM_WORKBENCH_URL,
  },

  documentStore: {
    host: env.DOCUMENT_STORE_HOST,
    appId: env.DOCUMENT_STORE_APP_ID,
    userId: env.DOCUMENT_STORE_USER_ID,
    stage: env.DOCUMENT_STORE_UPLOAD_STAGE,
  },

  gsp: {
    host: env.GSP_HOST,
    baseCacheDir: env.GSP_BASE_CACHE_DIR || 'public/gsp',
    services: {
      endpoint: env.GSP_SERVICES_ENDPOINT,
    },
    servicesAll: {
      adgeList: env.GSP_ADGE_LIST_ENDPOINT,
      adgeServiceList: env.GSP_SERVICES_BY_ADGE_ENDPOINT,
      kioskLocations: env.GSP_KIOSK_ENDPOINT,
      serviceCenters: env.GSP_SERVICE_CENTERS_ENDPOINT,
      serviceByPath: env.GSP_SERVICE_BY_PATH_ENDPOINT,
      cacheDir: env.GSP_PATH_BASE_CACHE_DIR || 'public/gsp-path',
    },
  },

  sense: {
    key: env.SENSE_ANALYTICS_KEY,
  },

  adu: {
    host: env.ADU_MICROSERVICE_HOST,
  },
  serviceApiBaseUrl: env.SERVICE_API_BASE_URL,

  gateway: {
    header: process.env.API_GATEWAY_HEADER || '',
    key: process.env.API_GATEWAY_KEY || '',
    tammServiceApiGateway:
      process.env.SAS_ADU_DED_INDUSTRIAL_API_GATEWAY_KEY || '',
  },

  staticUrl: env.STATIC_URL || '',
  lookup: {
    host: env.LOOKUP_SERVICE_HOST,
  },
  analyticsAppKey: env.ANALYTICS_APP_KEY || '',
  analyticsHost: env.ANALYTICS_HOST || '',

  adFeedbackUrl: env.ADFEEDBACK_URL || '',
  ded: {
    password: env.DED_PASSWORD,
    userId: env.DED_USERNAME,
    agency: env.DED_AGENCY,
  },

  featureFlags: env.FEATURE_FLAGS,
};
