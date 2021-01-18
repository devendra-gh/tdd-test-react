import cms from '@tamm/cms-integration';

jest.mock('@tamm/cms-integration');
jest.mock('server/services/ajaxClient', () => jest.fn());
jest.mock('server/utils/logger', () => ({
  getService: () => ({
    error: jest.fn(),
  }),
}));
jest.mock('config', () => ({
  cms: {
    host: 'host',
    baseCacheDir: 'baseCacheDir',
    translations: {
      endpoint: 'endpoint',
      directory: 'directory',
      key: 'key',
    },
    templates: {
      endpoint: 'endpoint',
      directory: 'directory',
    },
    journeyItems: {
      endpoint: 'endpoint',
      directory: 'directory',
      linkHost: 'linkHost',
    },
    journeyInfo: {
      endpoint: 'endpoint',
      directory: 'directory',
    },
  },
}));

describe('cms', () => {
  let initialApiJourneyId: any;
  let initialApiGatewayHeader: any;
  let initialApiGatewayKey: any;

  beforeEach(() => {
    initialApiJourneyId = process.env.API_JOURNEY_ID;
    initialApiGatewayHeader = process.env.API_GATEWAY_HEADER;
    initialApiGatewayKey = process.env.API_GATEWAY_KEY;
  });

  afterEach(() => {
    process.env.API_JOURNEY_ID = initialApiJourneyId;
    process.env.API_GATEWAY_HEADER = initialApiGatewayHeader;
    process.env.API_GATEWAY_KEY = initialApiGatewayKey;
  });

  it('should call cms() with correct params', () => {
    process.env.API_JOURNEY_ID = 'apiJourneyId';
    process.env.API_GATEWAY_HEADER = 'apiGatewayHeader';
    process.env.API_GATEWAY_KEY = 'apiGatewayKey';

    jest.isolateModules(() => {
      require('./cms'); // eslint-disable-line global-require
    });

    expect(cms).toHaveBeenCalledWith({
      journeyId: 'apiJourneyId',
      service: expect.any(Function),
      logger: {
        error: expect.any(Function),
      },
      gateway: {
        header: 'apiGatewayHeader',
        key: 'apiGatewayKey',
      },
      translations: {
        url: 'hostendpoint',
        path: 'baseCacheDir/directory',
        key: 'key',
        names: expect.any(Object),
      },
      templates: {
        url: 'hostendpoint',
        path: 'baseCacheDir/directory',
        journeyList: expect.any(Object),
        subJourneyList: expect.any(Object),
      },
      items: {
        url: 'hostendpoint',
        path: 'baseCacheDir/directory',
        meta: expect.any(Object),
        link: 'linkHost',
      },
      info: {
        meta: {
          lang: ['en', 'ar'],
        },
        path: 'baseCacheDir/directory',
        url: 'hostendpoint',
      },
    });
  });

  it('should call cms() with correct params if variables is undefined', () => {
    process.env.API_GATEWAY_HEADER = '';
    process.env.API_GATEWAY_KEY = '';

    jest.isolateModules(() => {
      require('./cms'); // eslint-disable-line global-require
    });

    expect(cms).toHaveBeenCalledWith(
      expect.objectContaining({
        gateway: {
          header: '',
          key: '',
        },
      }),
    );
  });
});
