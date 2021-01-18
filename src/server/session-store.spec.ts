import httpMocks from 'node-mocks-http';

import SessionStoreService from 'server/services/sessionStore';

import SessionStore from 'server/session-store';

jest.mock('server/services/sessionStore');
jest.mock('config/sessionStoreConfig', () => ({
  ttl: 'ttl',
}));
jest.mock('config/authConfig', () => ({
  esb: {
    header: 'header',
    key: 'key',
  },
  apiGateway: {
    header: 'header',
    key: 'key',
  },
}));

describe('session-store', () => {
  let req: any;

  it('should call SessionStore() with correct params', () => {
    req = httpMocks.createRequest();

    SessionStore(req);

    expect(SessionStoreService).toHaveBeenCalledWith({
      ttl: 'ttl',
      authHeaders: {
        esb: {
          header: 'header',
          key: 'key',
        },
        apiGateway: {
          header: 'header',
          key: 'key',
        },
      },
      req,
    });
  });
});
