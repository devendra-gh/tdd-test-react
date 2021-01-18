import gsp from '@tamm/gsp';

jest.mock('@tamm/gsp');
jest.mock('server/services/ajaxClient', () => jest.fn());
jest.mock('server/utils/logger', () => ({
  getService: () => ({
    error: jest.fn(),
  }),
}));
jest.mock('config', () => ({
  gsp: {
    host: 'host',
    baseCacheDir: 'baseCacheDir',
    services: {
      endpoint: 'endpoint',
    },
  },
}));

describe('gsp', () => {
  let initialApiGatewayHeader: any;
  let initialApiGatewayKey: any;

  beforeEach(() => {
    initialApiGatewayHeader = process.env.API_GATEWAY_HEADER;
    initialApiGatewayKey = process.env.API_GATEWAY_KEY;
  });

  afterEach(() => {
    process.env.API_GATEWAY_HEADER = initialApiGatewayHeader;
    process.env.API_GATEWAY_KEY = initialApiGatewayKey;
  });

  it('should call gsp() with correct params', () => {
    process.env.API_GATEWAY_HEADER = 'apiGatewayHeader';
    process.env.API_GATEWAY_KEY = 'apiGatewayKey';

    jest.isolateModules(() => {
      require('./gsp'); // eslint-disable-line global-require
    });

    expect(gsp).toHaveBeenCalledWith({
      service: expect.any(Function),
      logger: {
        error: expect.any(Function),
      },
      gateway: {
        header: 'apiGatewayHeader',
        key: 'apiGatewayKey',
      },
      services: {
        url: 'hostendpoint',
        path: 'baseCacheDir',
        config: expect.any(Object),
      },
    });
  });

  it('should call gsp() with correct params if variables is undefined', () => {
    process.env.API_GATEWAY_HEADER = '';
    process.env.API_GATEWAY_KEY = '';

    jest.isolateModules(() => {
      require('./gsp'); // eslint-disable-line global-require
    });

    expect(gsp).toHaveBeenCalledWith(
      expect.objectContaining({
        gateway: {
          header: '',
          key: '',
        },
      }),
    );
  });
});
