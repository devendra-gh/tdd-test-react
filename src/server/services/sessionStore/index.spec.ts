import httpMocks from 'node-mocks-http';

import ajaxClient from 'server/services/ajaxClient';
import SessionStore from 'server/services/sessionStore';

jest.mock('server/services/ajaxClient');
jest.mock('express-session');

const ONE_DAY = 86400;
const sessionId = 'journey:sometestingsessionkey';

describe('SessionStore', () => {
  let config: any;
  let sessionStore: any;
  let session: any;

  let mockFn: any;
  let mockAjaxClient: any;

  beforeEach(() => {
    mockFn = jest.fn();
    mockAjaxClient = ajaxClient;

    config = {
      host: 'localhost',
      prefix: 'sess',
      ttl: ONE_DAY * 2,
      endpoints: {
        get: '/getSession',
        set: '/setSession',
        destroy: '/destroySession',
        touch: '/touchSession',
      },
      req: httpMocks.createRequest(),
    };

    sessionStore = new SessionStore(config);

    session = { cookie: { maxAge: ONE_DAY * 1000 } };
  });

  describe('method get', () => {
    it('should do get request on /getSession', async () => {
      const { host, prefix, endpoints, req } = config;
      const sid = `${prefix}:${sessionId}`;

      await sessionStore.get(sessionId, mockFn);

      expect(ajaxClient).toHaveBeenCalledWith(
        {
          url: `${host}${endpoints.get}`,
          method: 'get',
          params: { sid },
        },
        req,
      );
    });

    it('should do get request on /getSession', async () => {
      const { host, prefix, endpoints, req } = config;
      const sid = `${prefix}:${sessionId}`;

      await sessionStore.get(sessionId, mockFn);

      expect(ajaxClient).toHaveBeenCalledWith(
        {
          url: `${host}${endpoints.get}`,
          method: 'get',
          params: { sid },
        },
        req,
      );
    });

    it('should run properly with one param', async () => {
      const response = { data: { data: { session: JSON.stringify(session) } } };

      mockAjaxClient.mockResolvedValue(response);

      await sessionStore.get(sessionId);

      expect(mockFn).not.toBeCalled();
    });

    it('should run callback function with error as first param', async () => {
      const error = new Error('Some error');

      mockAjaxClient.mockRejectedValue(error);

      await sessionStore.get(sessionId, mockFn);

      expect(mockFn).toHaveBeenCalledWith(error);
    });
  });

  describe('set', () => {
    it('should do get request on /setSession with ttl', async () => {
      const { host, prefix, endpoints, ttl, req } = config;

      await sessionStore.set(sessionId, session, mockFn);

      expect(ajaxClient).toHaveBeenCalledWith(
        {
          url: `${host}${endpoints.set}`,
          method: 'post',
          headers: undefined,
          data: {
            ttl,
            sid: `${prefix}:${sessionId}`,
            session: JSON.stringify(session),
          },
        },
        req,
      );
    });

    it('should run properly with one param', async () => {
      const response = { data: { data: { session: JSON.stringify(session) } } };

      mockAjaxClient.mockResolvedValue(response);

      await sessionStore.set(sessionId);

      expect(mockFn).not.toBeCalled();
    });

    it('should do get request on /setSession without ttl', async () => {
      const { host, prefix, endpoints, req } = config;

      config.disableTTL = true;
      sessionStore = new SessionStore(config);

      await sessionStore.set(sessionId, session, mockFn);

      expect(ajaxClient).toHaveBeenCalledWith(
        {
          url: `${host}${endpoints.set}`,
          method: 'post',
          headers: undefined,
          data: {
            sid: `${prefix}:${sessionId}`,
            session: JSON.stringify(session),
          },
        },
        req,
      );
    });

    it('should run callback function with message as second param', async () => {
      const message = 'Ok';
      const response = { data: { data: { message } } };

      mockAjaxClient.mockResolvedValue(response);

      await sessionStore.set(sessionId, session, mockFn);

      expect(mockFn).toHaveBeenCalledWith(null, message);
    });

    it('should run callback function with error as first param', async () => {
      const error = new Error('Some error');

      mockAjaxClient.mockRejectedValue(error);

      await sessionStore.set(sessionId, session, mockFn);

      expect(mockFn).toHaveBeenCalledWith(null, null);
    });
  });

  describe('destroy', () => {
    it('should do get request on /destroySession', async () => {
      const { host, prefix, endpoints, req } = config;

      await sessionStore.destroy(sessionId, mockFn);

      expect(ajaxClient).toHaveBeenCalledWith(
        {
          url: `${host}${endpoints.destroy}`,
          method: 'delete',
          headers: undefined,
          data: { sid: `${prefix}:${sessionId}` },
        },
        req,
      );
    });

    it('should run properly with one param', async () => {
      const response = { data: { data: { session: JSON.stringify(session) } } };

      mockAjaxClient.mockResolvedValue(response);

      await sessionStore.destroy(sessionId);

      expect(mockFn).not.toBeCalled();
    });

    it('should run callback function with amount of deleted items as second param', async () => {
      const amount = 1;
      const response = { data: { data: { amount } } };

      mockAjaxClient.mockResolvedValue(response);

      await sessionStore.destroy(sessionId, mockFn);

      expect(mockFn).toHaveBeenCalledWith(null, amount);
    });

    it('should run callback function with error as first param', async () => {
      const error = new Error('Some error');

      mockAjaxClient.mockRejectedValue(error);

      await sessionStore.destroy(sessionId, mockFn);

      expect(mockFn).toHaveBeenCalledWith(null, null);
    });
  });

  describe('touch', () => {
    it('should do get request on /touchSession', async () => {
      const { host, prefix, endpoints, ttl, req } = config;

      await sessionStore.touch(sessionId, session, mockFn);

      expect(ajaxClient).toHaveBeenCalledWith(
        {
          url: `${host}${endpoints.touch}`,
          method: 'patch',
          headers: undefined,
          data: {
            ttl,
            sid: `${prefix}:${sessionId}`,
          },
        },
        req,
      );
    });

    it('should run properly with one param', async () => {
      const response = { data: { data: { session: JSON.stringify(session) } } };

      mockAjaxClient.mockResolvedValue(response);

      await sessionStore.touch(sessionId);

      expect(mockFn).not.toBeCalled();
    });

    it('should do get request on /setSession with ttl value from maxAge', async () => {
      const { host, prefix, endpoints, req } = config;

      config.ttl = undefined;
      sessionStore = new SessionStore(config);

      await sessionStore.touch(sessionId, session, mockFn);

      expect(ajaxClient).toHaveBeenCalledWith(
        {
          url: `${host}${endpoints.touch}`,
          method: 'patch',
          headers: undefined,
          data: {
            ttl: session.cookie.maxAge / 1000,
            sid: `${prefix}:${sessionId}`,
          },
        },
        req,
      );
    });

    it('should do get request on /setSession with ttl value from function', async () => {
      const { host, prefix, endpoints, req } = config;

      config.ttl = () => ONE_DAY * 3;
      sessionStore = new SessionStore(config);

      await sessionStore.touch(sessionId, session, mockFn);

      expect(ajaxClient).toHaveBeenCalledWith(
        {
          url: `${host}${endpoints.touch}`,
          method: 'patch',
          headers: undefined,
          data: {
            ttl: ONE_DAY * 3,
            sid: `${prefix}:${sessionId}`,
          },
        },
        req,
      );
    });

    it('should run callback function with no params', async () => {
      config.disableTTL = true;
      sessionStore = new SessionStore(config);

      await sessionStore.touch(sessionId, session, mockFn);

      expect(mockFn).toHaveBeenCalledWith();
    });

    it('should run callback function with touched as second param', async () => {
      const touched = 1;
      const response = { data: { data: { touched } } };

      mockAjaxClient.mockResolvedValue(response);

      await sessionStore.touch(sessionId, session, mockFn);

      expect(mockFn).toHaveBeenCalledWith(null, touched);
    });

    it('should run callback function with error as first param', async () => {
      const error = new Error('Some error');

      mockAjaxClient.mockRejectedValue(error);

      await sessionStore.touch(sessionId, session, mockFn);

      expect(mockFn).toHaveBeenCalledWith(error);
    });
  });
});
