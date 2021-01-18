import smartpass from '@tamm/smartpass';
import getSessionStore from 'server/session-store';
import demoUsers from './demoUsers';

jest.mock('@tamm/smartpass');
jest.mock('@tamm/request');
jest.mock('server/session-store');
jest.mock('config', () => ({
  projectName: 'projectName',
  basePath: 'basePath',
  smartpass: {
    host: {
      public: 'public',
      private: 'private',
    },
    endpoints: {
      generateTammUuid: 'generateTammUuid',
    },
  },
}));
jest.mock('server/utils/logger', () => ({
  getService: () => ({
    error: jest.fn(),
    info: jest.fn(),
  }),
}));

describe('smartpass', () => {
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

  it('should call smartpass() with correct params', () => {
    process.env.API_GATEWAY_HEADER = 'apiGatewayHeader';
    process.env.API_GATEWAY_KEY = 'apiGatewayKey';

    jest.isolateModules(() => {
      require('./smartpass'); // eslint-disable-line global-require
    });

    expect(smartpass).toHaveBeenCalledWith({
      sessionStore: getSessionStore({ no: 'request here' } as any),
      projectName: expect.any(String),
      appNestedPath: expect.any(String),
      apiGateway: {
        header: 'apiGatewayHeader',
        key: 'apiGatewayKey',
      },
      host: {
        public: 'public',
        private: 'private',
      },
      endpoints: {
        generateTammUuid: 'generateTammUuid',
      },
      demoUsers,
    });
  });

  it('should call smartpass() with correct params if variables is undefined', () => {
    process.env.API_GATEWAY_HEADER = '';
    process.env.API_GATEWAY_KEY = '';

    jest.isolateModules(() => {
      require('./smartpass'); // eslint-disable-line global-require
    });

    expect(smartpass).toHaveBeenCalledWith(
      expect.objectContaining({
        apiGateway: {
          header: '',
          key: '',
        },
      }),
    );
  });
});
